<?php

namespace App\Exports;

use App\User_order;
use Illuminate\Support\Facades\Session;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
Use \Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use Picqer;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithEvents;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class StoreSubmitCartInvoice implements FromCollection, WithDrawings, WithEvents
{
    /**
     * @return \Illuminate\Support\Collection
     */
    //protected $ORDERS;

    protected $Id;
    protected $Type;

    public function __construct($Id,$Type)
    {
        $this->Id = $Id;
        $this->Type = $Type;
        $this->Orders = User_order::where('user_id',$this->Id)->where('account_type',($this->Type == 'users') ? 2 : 3)->where('in_cart',1)->get();
    }

    public function drawings()
    {
        $c = 7;
        $Fi = [];

        //List
        Session::put('key', 3);
        Session::put('Logo', 2);

        $Orders = $this->Orders;

        foreach($Orders as $key => $Order) {

            //LOGO
            $Logo = new Drawing();
            $Logo->setName('Logo');
            $Logo->setDescription($Order->track_code);
            $Logo->setPath('images/hodhod_cover.png');
            $Logo->setHeight(80);
            $Logo->setCoordinates('A' . Session::get('Logo'));
            Session::put('Logo', Session::get('Logo')+3);

            $Fi[] = $Logo;

            //BARCODE
            $generator = new Picqer\Barcode\BarcodeGeneratorPNG();
            file_put_contents('images/BarCodes/' . $Order->track_code . '.png', $generator->getBarcode($Order->track_code, $generator::TYPE_CODE_128));

            $drawing = new Drawing();
            $drawing->setName('BarCode');
            $drawing->setDescription($Order->track_code);
            $drawing->setPath('images/BarCodes/' . $Order->track_code . '.png');
            $drawing->setHeight(40);
            $drawing->setCoordinates('H' . Session::get('key'));
            Session::put('key', Session::get('key')+3);

            $Fi[] = $drawing;
        }
        return $Fi;

    }

    public function collection()
    {
        $Result = [];

        $Orders = $this->Orders;

        array_push($Result,['']);

        foreach($Orders as $Order) {
            array_push($Result,['','اسم المستلم ', 'اسم البريد', 'تاريخ الانشاء','رمز التتبع', 'قيمة البريد مع التوصيل','المكان المرسل اليه', 'Barcode' ]);

            if ($Order['recieved_price'] == 0) { $Order['recieved_price'] = '0';}
            if ($Order['payment_method'] == 'SENDER') { $Order['payment_method'] = 'عبر المرسل';}
            if ($Order['payment_method'] == 'RECIEVER') { $Order['payment_method'] = 'عبر المستلم';}

            array_push($Result, [
                '',
                $Order->receiver_full_name,
                $Order->product_name,
                $Order->created_at,
                $Order->track_code,
                $Order->recieved_price + $Order->Deliver_Fee,
                $Order->location_to_state." | ".$Order->location_to_region,
            ]);

            array_push($Result,['']);
        }

        return $Result;
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function(AfterSheet $event) {

                //DEFAULT ROW HEIGHT AND WIDTH
                $event->sheet->getDelegate()->getDefaultRowDimension()->setRowHeight(30);
                $event->sheet->getDelegate()->getDefaultColumnDimension()->setWidth(20);

                //TEXT MIDDLE
                $event->sheet->getDelegate()->getParent()->getDefaultStyle()->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
                $event->sheet->getDelegate()->getParent()->getDefaultStyle()->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);

                //ROWS WIDTH
                $event->sheet->getDelegate()->getColumnDimension('B')->setWidth(25);
                $event->sheet->getDelegate()->getColumnDimension('A')->setWidth(25);
                $event->sheet->getDelegate()->getColumnDimension('H')->setWidth(34);
                $event->sheet->getDelegate()->getColumnDimension('G')->setWidth(34);
                $event->sheet->getDelegate()->getColumnDimension('C')->setWidth(25);
            },
        ];
    }
}

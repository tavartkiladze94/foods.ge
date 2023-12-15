<?php


namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Deliver;
use App\User_order;
Use \Carbon\Carbon;
class DelayaOrderDelay extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'Notify:OrderDelay';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Notify delivers for orders delays for pending/waiting status';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //event(new RTNotify('TEST'));

        $pending =  User_order::Where('status', 'pending')->whereNotNull('handeled_by_id')
            ->where('updated_at', '<', Carbon::now()->subHours(48))
            ->get();
            
            EventingPublic(0,0,$pending->count().' orders still pending','/ordersget');
            
        foreach ($pending as $get){
            
            Notification([Deliver::find($get->handeled_by_id)->firebase_token],
                "تنبيه تأخر البريد"."(".$get->track_code.")",
                " لم يتم تسليم البريد"."(".$get->track_code.")"."الى الزبون منذ 48 ساعة");
        }

        //Waiting Orders 4 hours Delay
        $waiting =  User_order::Where('status', 'waiting')->whereNotNull('handeled_by_id')
            ->where('updated_at', '<=', Carbon::now()->subHours(4))->get();
            
            EventingPublic(0,0,$waiting->count().' orders still waiting','/ordersget');
            
        foreach ($waiting as $get){
            Notification([Deliver::find($get->handeled_by_id)->firebase_token],
                "تنبيه تأخر البريد"."(".$get->track_code.")",
                "مرت 4 ساعات على البريد المقبول"."(".$get->product_name.")"."يرجى المباشرة بعملية توصيل البريد ووضعه في قيد المعالجة");
        }
    }
}

<?php if ($this->session->has_userdata('message')): ?>
    <div id="message" style="position: absolute; top: 80px;right:50px; border: 1px solid #55b536; height:40px; text-align:center; background:#55b536; padding: 10px 10px;"> 
        <h6 style="color:white!important; font-size:16px;"><i class="fa fa-check" style="font-size:18px; color:white;"></i> <?=$this->lang->line('record deleted');?></h6>
    </div>
<script>
const myTimeout = setTimeout(msg, 5000);

function msg() {
  document.getElementById("message").style.display = "none";
}
</script>
<?php $this->session->unset_userdata('message');?>
 <?php endif ?>
 <div class="app-content content ">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-9 col-12 mb-2">
            <div class="row breadcrumbs-top">
              <div class="col-12">
                <h2 class="content-header-title float-left mb-0"><?=$this->lang->line('Booking');?></h2>
                <div class="breadcrumb-wrapper">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?=base_url('admin/index');?>"><?=$this->lang->line('Home');?></a>
                    </li>
                    <li class="breadcrumb-item"><a href="<?=base_url('admin/apartments_bookings_all');?>"><?=$this->lang->line('Booking');?></a>
                    </li>
                    <li class="breadcrumb-item active"><?=$this->lang->line('All');?>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <div class="content-body">
            <div class="row">
  </div>
  </div>
  </div>


<section id="basic-datatable">
   <br>
   <br>
 
      <h2><?=$this->lang->line('Quantity');?> - <?php echo $rooms_bookings_all_length; ?></h2>
      <div class="card" style="overflow-x:scroll;">
        <table class="datatables-basic table">
          <thead>
            <tr>
              <th>ID</th>
              <th><?=$this->lang->line('Room type');?></th>
              <th><?=$this->lang->line('Quantity');?></th>
              <th><?=$this->lang->line('Status');?></th>
              <th><?=$this->lang->line('Day');?></th>
              <th><?=$this->lang->line('Price');?></th>
              <th><?=$this->lang->line('Start date');?></th>
              <th><?=$this->lang->line('End date');?></th>
              <th><?=$this->lang->line('Name');?></th>
              <th><?=$this->lang->line('Adult');?></th>
              <th><?=$this->lang->line('Child');?></th>
              <th><?=$this->lang->line('Telephone');?></th>
              <th><?=$this->lang->line('Email');?></th>
              <th><?=$this->lang->line('Date');?></th>
              <th><?=$this->lang->line('Action');?></th>

            </tr>
          </thead>
          <tbody>
             <?php $r=1;?>
			<?php if (!empty($rooms_bookings_all)) foreach ($rooms_bookings_all as $booking_item): ?>
			<tr role="row" class="odd">
                <td style="color: #007bff!important;font-weight:bold;"> <?php echo $r;?></td>
				<td style="color: #007bff!important;font-weight:bold;"><?php echo $this->lang->line($booking_item['room_type']); ?></td>
				<td style="color: #007bff!important;font-weight:bold;"><?php echo $booking_item['room_number']; ?></td>
				<td><a href="#" <?php if($booking_item['status']=="Canceled") echo "style='background-color:#FFE633;'"; if($booking_item['status']=="Finished") echo "style='color:#ff0000;'"; if($booking_item['status']=="Active") echo "style='color:green;'";?>><?php echo $this->lang->line($booking_item['status']); ?></a></td>
				<td style="color: #007bff!important;font-weight:bold;"><?php echo $booking_item['day']; ?></td>
				<td style="color: #007bff!important;font-weight:bold;"><?php echo $booking_item['price']; ?></td>
				<td style="color: #007bff!important;font-weight:bold;"><?php echo $booking_item['start_date']; ?></td>
				<td style="color: #007bff!important;font-weight:bold;"><?php echo $booking_item['end_date']; ?></td>
				<td style="color: #007bff!important;font-weight:bold;"><?php echo $booking_item['name']; ?> <?php echo $booking_item['surname']; ?></td>
				<td style="color: #007bff!important;font-weight:bold;"><?php echo $booking_item['adult']; ?></td>
				<td style="color: #007bff!important;font-weight:bold;"><?php echo $booking_item['child']; ?></td>
				<td style="color: #007bff!important;font-weight:bold;"><?php echo $booking_item['telephone']; ?></td>
				<td style="color: #007bff!important;font-weight:bold;"><?php echo $booking_item['email']; ?></td>
				<td><?php echo $booking_item['date']; ?></td>
				<td><a href="<?=base_url('admin/rooms_booking_delete/');?><?php echo $booking_item['code']; ?>" style="color:red;">
				    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 font-small-4 mr-50" style="color:red;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
				    <?php echo $this->lang->line('Delete'); ?></a></td>

			</tr>
			<?php $r++;?>
			<?php endforeach; ?>
			</tbody>
        </table>
        
      </div>
      <div class="d-flex justify-content-between mx-0 row" style="margin-top:20px;">
                <div class="col-sm-12 col-md-6">
                    <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
            <ul class="pagination">
             <?php echo $links; ?>
                </ul>
                </div>
                </div>
                </div>
        
</section>
</div>
<br>
<br>
<br>
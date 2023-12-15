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
                <h2 class="content-header-title float-left mb-0"><?=$this->lang->line('Apartments');?></h2>
                <div class="breadcrumb-wrapper">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?=base_url('admin/index');?>"><?=$this->lang->line('Home');?></a>
                    </li>
                    <li class="breadcrumb-item"><a href="<?=base_url('admin/apartments_all');?>"><?=$this->lang->line('Apartments');?></a>
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
<!-- Basic table -->
<div class="content-body">
<section id="basic-input">
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
           <h4 class="card-title"><?=$this->lang->line('Filter');?></h4>
        </div>
        <div class="card-body">
        <form class="text-center" action="<?=base_url('admin/apartments_all_search')?>" method="POST">
          <div class="row"> 
          <div class="col-xl-4 col-md-6 col-12 ">
              <div class="form-group">
                <label for="region"><?=$this->lang->line('Region');?></label>
               <select class="form-control" id="region" name="region">
													<option value="0"><?=$this->lang->line('Region');?></option>
												    <option value="Adjara"><?=$this->lang->line('Adjara');?></option>
												    <option value="Guria"><?=$this->lang->line('Guria');?></option>
												    <option value="Imereti"><?=$this->lang->line('Imereti');?></option>
												    <option value="Samegrelo"><?=$this->lang->line('Samegrelo');?></option>
												    <option value="Svaneti"><?=$this->lang->line('Svaneti');?></option>
												    <option value="Racha_Lechkhumi"><?=$this->lang->line('Racha_Lechkhumi');?></option>
												    <option value="Samtskhe_Javakheti"><?=$this->lang->line('Samtskhe_Javakheti');?></option>
												    <option value="Kvemo_Kartli"><?=$this->lang->line('Kvemo_Kartli');?></option>
												    <option value="Mtskheta_Mtianeti"><?=$this->lang->line('Mtskheta_Mtianeti');?></option>
												    <option value="Kakheti"><?=$this->lang->line('Kakheti');?></option>
												    <option value="Various"><?=$this->lang->line('Various');?></option>
												</select>
              </div>
            </div>
          <div class="col-xl-4 col-md-6 col-12 ">
              <div class="form-group">
               <label for="municipality" class=""><?=$this->lang->line('Municipality');?>:</label>
               <select class="form-control" id="municipality" name="municipality">
                   <option value="0"><?=$this->lang->line('Municipality');?></option>
					<?php if (!empty($city)) foreach ($city as $city_item): ?>
						 <option value="<?php echo $city_item['city_en'];?>"><?php echo $city_item['city_'.$this->lang->line('lan')];?></option>
												    
					<?php endforeach; ?>
				</select>
              </div>
            </div>
                  <div class="col-lg-4 col-md-6 col-12">
                    <label>ID :</label>
                    <input type="text" class="form-control dt-input"  id="code" name="code" placeholder="ID..." >
                  </div>
                 <div class="col-xl-4 col-md-6 col-12">
                     <div class="form-group">
                        <label for="category"><?=$this->lang->line('Type');?> :</label>
                        <select class="form-control"  id="type" name="type">
							<option value="0"><?=$this->lang->line('Type');?></option>
                            <option value="Apartment"><?=$this->lang->line('Apartment');?></option>
                            <option  value="Black_frame"><?=$this->lang->line('Black_frame');?></option>
                            <option  value="New_building_apartment"><?=$this->lang->line('New_building_apartment');?></option>
							<option value="Old_building_apartment"><?=$this->lang->line('Old_building_apartment');?></option>	
							<option value="House" ><?=$this->lang->line('House');?></option>
							<option value="Hotel"><?=$this->lang->line('Hotel');?></option>
                            <option value="Guest_hotel"><?=$this->lang->line('Guest_hotel');?></option>
							<option value="Villa"><?=$this->lang->line('Villa');?></option>
							<option value="Cottage"><?=$this->lang->line('Cottage');?></option>
										
                         </select>
              </div>
            </div>
           <div class="col-xl-4 col-md-6 col-12">
                     <div class="form-group">
                <label for="category"><?=$this->lang->line('Category');?> :</label>
                 <select class="form-control" id="category" name="category">
                        <option value="0"><?=$this->lang->line('Category');?></option> 
						<option value="for_sale"><?=$this->lang->line('for_sale');?></option>
						<option value="for_rent"><?=$this->lang->line('for_rent');?></option>
						<option value="Pledge"><?=$this->lang->line('Pledge');?></option>
						<option value="for_daily_rent"><?=$this->lang->line('for_daily_rent');?></option>
				</select>
              </div>
            </div>
           <div class="col-xl-4 col-md-6 col-12">
                  <div class="form-group">
                     <label for="category"><?=$this->lang->line('Status');?> :</label>
                     <select class="form-control" id="status" name="status">
                         <option value="0"><?=$this->lang->line('Status');?></option>
						 <option value="Active"><?=$this->lang->line('Active');?></option>
						 <option value="Expired"><?=$this->lang->line('Expired');?></option>
						 <option value="Canceled"><?=$this->lang->line('Canceled');?></option> 
												</select>
              </div>
            </div>
            <button class="dt-button create-new btn btn-primary waves-effect waves-float waves-light" style="height:40px; margin-top:25px; margin-left:20px;width:120px;" type="submit"><?=$this->lang->line('Search');?></span></button>
          </div>
        </form>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

<section id="basic-datatable">
    <div class="card-datatable table-responsive pt-0" style="background-color:white;">
        <div class="dt-buttons btn-group flex-wrap"><button class="btn add-new btn-primary mt-50" tabindex="0" aria-controls="DataTables_Table_0" type="button" data-toggle="modal" data-target="#modals-slide-in"><span> <a href="<?=base_url('admin/apartment_create');?>" style="color:white;"><?=$this->lang->line('Add new');?></a></span></button> 
        </div>
        <br>
        <br>
    </div>
 
        <h2><?=$this->lang->line('Quantity');?> - <?php echo $count_user_apartments_all; ?></h2>
      <div class="card" style="overflow-x:scroll;">
        <table class="datatables-basic table">
          <thead>
            <tr>
              <th>ID</th>
              <th><?=$this->lang->line('Photo');?></th>
              <th><?=$this->lang->line('Category');?></th>
              <th><?=$this->lang->line('type');?></th>
              <th><?=$this->lang->line('Municipality');?></th>
              <th><?=$this->lang->line('City');?></th>
              <th><?=$this->lang->line('Address');?></th>
              <th><?=$this->lang->line('Telephone');?></th>
              <th><?=$this->lang->line('Code');?></th>
              <th><?=$this->lang->line('Status');?></th>
               <th><?=$this->lang->line('Date');?></th>
              <th><?=$this->lang->line('Price');?></th>
              <th><?=$this->lang->line('View');?></th>
              <th><?=$this->lang->line('Action');?></th>

            </tr>
          </thead>
          <tbody>
              <?php $r=1;?>
										<?php if (!empty($user_apartments_list)) foreach ($user_apartments_list as $apartment_item): ?>
										
									<tr role="row" class="odd">
									    <td> <?php echo $r;?></td>
											<td class="sorting_1"><img src="<?=base_url('assets/images/apartments/');?><?php echo $apartment_item['file_name']; ?>" alt="<?=$this->lang->line('Photo');?>" class="img-fluid rounded-circle" width="40px" style="max-height:30px;"></td>
											<td><a href="<?=base_url('admin/apartment_edit/');?><?php echo $apartment_item['code']; ?>" style="color: #007bff;"><?php echo $this->lang->line($apartment_item['category']); ?></a></td>
											<td><a href="<?=base_url('admin/apartment_edit/');?><?php echo $apartment_item['code']; ?>" style="color:#007bff;"><?php echo $this->lang->line($apartment_item['type']); ?></a></td>
										
											<td><?php echo $this->lang->line($apartment_item['municipality']); ?></td>
											<td><?php echo $apartment_item['city']; ?></td>
											<td><?php echo $apartment_item['address']; ?></td>
											<td><?php echo $apartment_item['telephone']; ?></td>
											<td><?php echo $apartment_item['code']; ?></td>
											<td><a href="#" <?php if($apartment_item['status']=="Canceled") echo "style='background-color:#FFE633;'"; if($apartment_item['status']=="Expired") echo "style='color:#ff0000;'"; if($apartment_item['status']=="Active") echo "style='color:green;'";?>><?php echo $this->lang->line($apartment_item['status']); ?></a></td>
											<td><?php echo $apartment_item['date']; ?></td>
											<td><?php echo $apartment_item['price']." ".$apartment_item['currency']; ?></td>
											
											<td><?php echo $apartment_item['view']; ?></td>
											<td><a href="<?=base_url('admin/user_apartment_delete/');?><?php echo $apartment_item['code']; ?>" style="color:red;">
											    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 font-small-4 mr-50" style="color:red;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
											    <?php echo $this->lang->line('Delete'); ?></a></td>

											
										</tr>
										<?php $r++;?>
									<?php endforeach; ?>
								</tbody>
        </table>
        <div class="d-flex justify-content-between mx-0 row" style="margin-top:20px;">
                <div class="col-sm-12 col-md-6">
                    <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
            <ul class="pagination">
             <?php echo $links; ?>
                </ul>
                </div>
                </div>
                </div>
      </div>
        
</section>
</div>
<br>
<br>
<br>
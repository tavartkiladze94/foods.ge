
<div class="app-content content ">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-9 col-12 mb-2">
            <div class="row breadcrumbs-top">
              <div class="col-12">
                <h2 class="content-header-title float-left mb-0"><?=$this->lang->line('Apartment');?></h2>
                <div class="breadcrumb-wrapper">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?=base_url('admin/index')?>"><?=$this->lang->line('Home');?></a>
                    </li>
                    <li class="breadcrumb-item"><a href="<?=base_url('admin/apartments_all')?>"><?=$this->lang->line('Apartments');?></a>
                    </li>
                    <li class="breadcrumb-item active"><?=$this->lang->line('Create');?>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          
        </div>
<div class="content-body"><!-- Basic Inputs start -->
<section id="basic-input" >
    <form class="text-center" action="<?=base_url('admin/apartment_create')?>" method="POST">
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title"><?=$this->lang->line('Create');?></h4>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="name" class=""> <?php echo $this->lang->line('Name');?> : GE </label>
				<input type="text" class="form-control"  name="name_ge" id="name_ge" placeholder="<?=$this->lang->line('Name').': GE';?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="name" class=""> <?php echo $this->lang->line('Name');?> : EN </label>
				<input type="text" class="form-control"  name="name_en" id="name_en" placeholder="<?=$this->lang->line('Name').': EN';?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="name" class=""> <?php echo $this->lang->line('Name');?> : RU </label>
				<input type="text" class="form-control"  name="name_ru" id="name_ru" placeholder="<?=$this->lang->line('Name').': RU';?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12 mb-1">
             <div class="form-group">
              <label for="type"><?=$this->lang->line('Type');?></label>
              <select class="form-control" id="type" name="type" >
                    <option value="Apartment" ><?=$this->lang->line('Apartment');?> </option>	
					<option  value="Black_frame"><?=$this->lang->line('Black_frame');?></option>
					<option  value="New_building_apartment" ><?=$this->lang->line('New_building_apartment');?></option>
					<option value="Old_building_apartment" ><?=$this->lang->line('Old_building_apartment');?></option>
					<option value="House" ><?=$this->lang->line('House');?></option>
					<option value="Hotel"><?=$this->lang->line('Hotel');?></option>
                    <option value="Guest_hotel"><?=$this->lang->line('Guest_hotel');?></option>
					<option value="Villa" id="house"><?=$this->lang->line('Villa');?></option>
					<option value="Cottage" id="house"><?=$this->lang->line('Cottage');?></option>
											
												
											
            </select>
          </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12 mb-1">
              <div class="form-group">
                <label for="category"><?=$this->lang->line('Category');?></label>
               <select class="form-control" id="category" name="category">
					<option value="for_sale"><?=$this->lang->line('for_sale');?></option>
					<option value="for_rent"><?=$this->lang->line('for_rent');?></option>
					<option value="Pledge"><?=$this->lang->line('Pledge');?></option> 
					<option value="for_daily_rent"><?=$this->lang->line('for_daily_rent');?></option>
				</select>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12 mb-1">
              <div class="form-group">
                <label for="currency"><?=$this->lang->line('Price');?></label>
                <select name="currency">
											    <option value="GEL" selected="selected">GEL</option>
											    <option value="USD">USD</option>
											    <option value="EUR">EUR</option>
											</select>
					<input type="text" id="price" name="price"  class="form-control" placeholder="<?=$this->lang->line('Price');?>" required>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="owner_name" class=""><?=$this->lang->line('Owner');?>: <?php echo $this->lang->line('Name').' '.$this->lang->line('Surname');?></label>
				<input type="text" class="form-control" required name="owner_name" id="owner_name" placeholder="<?=$this->lang->line('Name');?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="telephone" class=""><?=$this->lang->line('Telephone');?>:</label>
				<input type="text" class="form-control"  name="telephone" id="telephone" value="+995 " placeholder="<?=$this->lang->line('Telephone');?>" required>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12 mb-1">
              <div class="form-group">
                <label for="country"><?=$this->lang->line('Country');?></label>
               <select class="form-control" id="country" name="country">
												 <option value="Georgia"><?=$this->lang->line('Georgia');?></option>
				</select>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12 ">
              <div class="form-group">
                <label for="region"><?=$this->lang->line('Region');?></label>
               <select class="form-control" id="region" name="region">
													
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
													
													<?php if (!empty($city)) foreach ($city as $city_item): ?>
												    <option value="<?php echo $city_item['city_en'];?>"><?php echo $city_item['city_'.$this->lang->line('lan')];?></option>
												    
												    <?php endforeach; ?>
												</select>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="city" class=""><?=$this->lang->line('City');?>/<?=$this->lang->line('Village');?>:</label>
                <input type="text" class="form-control"  name="city" id="city" placeholder="<?=$this->lang->line('City');?>/<?=$this->lang->line('Village');?>" pattern="[a-zA-Z\s\.\-_]+" required>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="address" class=""><?=$this->lang->line('Address');?>:</label>
                <input type="text" class="form-control"  name="address" id="address" placeholder="<?=$this->lang->line('Address');?>" pattern="[a-zA-Z\s\.\-_]+" required>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="post_code" class=""><?=$this->lang->line('Post_code');?>:</label>
                <input type="text" class="form-control"  name="post_code" id="post_code" placeholder="<?=$this->lang->line('Post_code');?>" required>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="floor" class=""><?=$this->lang->line('Floor');?>:</label>
				<input type="number" class="touchspin-min-max form-control" min="1" id="floor" name="floor" placeholder="<?=$this->lang->line('Floor');?>" value="1">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="area" class=""><?=$this->lang->line('Area');?> - <?=$this->lang->line('M');?> <sup>2</sup>:</label>
				<input type="number" class="form-control" name="area" required id="area" placeholder="<?=$this->lang->line('Area');?>">
              </div>
            </div>

            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="room" class=""><?=$this->lang->line('Room');?>:</label>
				<input type="number" min="0" class="form-control" value="1" min="1" required name="room" id="room" placeholder="<?=$this->lang->line('Room');?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="bedroom" class=""><?=$this->lang->line('Bedroom');?>:</label>
				<input type="number" class="form-control" name="bedroom" value="1" min="1" required id="bedroom" placeholder="<?=$this->lang->line('Bedroom');?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="bathroom" class=""><?=$this->lang->line('Bathroom');?>:</label>
				<input type="number" min="0" class="form-control" value="1" min="1" required name="bathroom" id="bathroom" placeholder="<?=$this->lang->line('Bathroom');?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="heating"><?=$this->lang->line('Heating');?>:</label>
               <select class="form-control" id="heating" name="heating">
												    <option value="No"><?=$this->lang->line('No');?></option>
												 <option value="Central_heating"><?=$this->lang->line('Central_heating');?></option>
												<option value="Gas"><?=$this->lang->line('Gas');?></option>
												</select>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="to_sea" class="" ><?=$this->lang->line('Distance from the sea');?> <?=$this->lang->line('M');?>: </label>
				<input type="number" class="form-control" min="0"  name="to_sea" id="to_sea" placeholder="<?=$this->lang->line('Distance from the sea');?>">
              </div>
            </div>
          </div>
        
          	<div class="divv">
                                     <div class="div_table" > 
	                                    <table cellspacing="0" cellpadding="0">
	                                    	   <tr>
                                	                <td ><?=$this->lang->line('Secure');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="secure" name="secure" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Wheelchair access');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="wheelchair" name="wheelchair" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	             </tr>
                                	              
                                	             <tr>
                                	                <td ><?=$this->lang->line('TV');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="tv" name="tv" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Wifi');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="wifi" name="wifi" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Furniture');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="furniture" name="furniture" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Wardrobe or closet');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="closet" name="closet" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Air conditioner');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="air_conditioner" name="air_conditioner" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Refrigerator');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="refrigerator" name="refrigerator" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Washing machine');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="washing_machine" name="washing_machine" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr> 
                                	         
                                	              <tr>
                                	                <td><?=$this->lang->line('Bar');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="bar" name="bar" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Kitchen');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="kitchen" name="kitchen" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Dining table');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="dining_table" name="dining_table" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Balcony');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="balcony" name="balcony" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Parking');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="parking" name="parking" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Elevator');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="elevator" name="elevator" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Yard');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="yard" name="yard" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            
	                                         
                                        </table>
                                    </div>
                                    <div class="div_table" > 
	                                    <table cellspacing="0" cellpadding="0">
	                                            
	                                            
                                	            <tr>
                                	                <td ><?=$this->lang->line('Garden');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="garden" name="garden" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Playground');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="playground" name="playground" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line("Children's environment");?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="childrens_environment" name="childrens_environment" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Swimming pool');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="pool" name="pool" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Near to city');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="to_city" name="to_city" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Near to central way');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="to_way" name="to_way" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            
                                	            <tr>
                                	                <td ><?=$this->lang->line('Near to river');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="to_river" name="to_river" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            
                                	            <tr>
                                	                <td ><?=$this->lang->line('Near to mount');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="to_mount" name="to_mount" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Near to hospital');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="to_hospital" name="to_hospital" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Near to airport');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="to_airport" name="to_airport" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Sea view');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="sea_view" name="sea_view" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Mountain view');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="mountain_view" name="mountain_view" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            
                                	            <tr>
                                	                <td ><?=$this->lang->line('Payment by cash');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="payment_cash" name="payment_cash" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Payment by card');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="payment_card" name="payment_card" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Pets allowed');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="pets" name="pets" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             
                                        </table>
                                    </div>
								</div>
        </div>
        
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="card">
       
        <div class="card-body">
          
          <div action="<?=base_url('admin/apartment_upload/')?><?php echo $code; ?>" class="dropzone dropzone-area clickable" id="dpz-multiple-files">
            <div class="dz-message"><?=$this->lang->line('Drop files here or click to upload.');?></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="btn btn-primary waves-effect waves-float waves-light" type="submit"><?=$this->lang->line('Save');?></button>
  </form>
  <br>
  <br>
  <br>
</section>

<!-- Dropzone section end -->

        </div>
      </div>
    </div>
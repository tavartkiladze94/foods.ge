
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
                    <li class="breadcrumb-item"><a href="<?=base_url('admin/apartments_list')?>"><?=$this->lang->line('Apartments');?></a>
                    </li>
                    <li class="breadcrumb-item active"><?php echo $this->lang->line($apartment_view['category'])." ". $this->lang->line($apartment_view['type']);?>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div class="content-body">

        </div>
<div class="content-body"><!-- Basic Inputs start -->
<section id="basic-input" >
    <div class="text-center">
                <div class="row">
                      <div class="col">
                                <div class="details-text">
                                    <h4><?=$this->lang->line('Status');?> -&#160<?php if($apartment_view['status'] == 'Active') echo "<font color='#4CAF50'>".$this->lang->line('Active')."</font>"; if($apartment_view['status'] == 'Expired') echo  "<font color='#f44336'>".$this->lang->line('Expired')."</font>"; if($apartment_view['status'] == 'Canceled') echo  "<font color='#FFE633'>".$this->lang->line('Canceled')."</font>";?></h4>
                                </div><!-- end details-text -->
                            </div><!-- End column -->
                 </div><!-- end row -->
                <div style="width: 100%; height:50px;">
					    <a class="button" style="color:white;" href="<?=base_url('admin/apartment_activate/');?><?php echo $apartment_view['code']; ?>"><?=$this->lang->line('Activate');?></a>
					    <a class="button" style="background-color:#f44336; color:white;" href="<?=base_url('admin/apartment_expired/');?><?php echo $apartment_view['code']; ?>"><?=$this->lang->line('Expire');?></a>
				    	</div>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        
        <div class="card-body">
          <div class="row">
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="name" class=""> 
                <?php echo $this->lang->line('Name');?> : GE </label>
				<input type="text" class="form-control"  name="name_ge" id="name_ge" placeholder="<?=$this->lang->line('Name').': GE';?>" value="<?php echo $apartment_view['name_ge'];?>" disabled="disabled">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="name" class=""> 
                <?php echo $this->lang->line('Name');?> : EN </label>
				<input type="text" class="form-control"  name="name_en" id="name_en" placeholder="<?=$this->lang->line('Name').': EN';?>" value="<?php echo $apartment_view['name_en'];?>" disabled="disabled">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="name" class=""> 
                <?php echo $this->lang->line('Name');?> : RU </label>
				<input type="text" class="form-control"  name="name_ru" id="name_ru" placeholder="<?=$this->lang->line('Name').': RU';?>" value="<?php echo $apartment_view['name_ru'];?>" disabled="disabled">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12 mb-1">
              <div class="form-group">
            <label for="type"><?=$this->lang->line('Type');?></label>
            <select disabled="disabled" class="form-control" id="type" name="type" >
                                               <option value="<?php echo $apartment_view['type'];?>"><?php echo $this->lang->line($apartment_view['type']); ?></option>
                                               <option value="Apartment" ><?=$this->lang->line('Apartment');?> </option>
                                               
											    <option  value="Black_frame"><?=$this->lang->line('Black_frame');?></option>
											    <option  value="Flat" id="apartment"><?=$this->lang->line('Flat');?></option>
											    <option  value="New_building_apartment" ><?=$this->lang->line('New_building_apartment');?></option>
												<option value="Old_building_apartment" id="apartment"><?=$this->lang->line('Old_building_apartment');?></option>
												<option value="Hotel"><?=$this->lang->line('Hotel');?></option>
                                                <option value="Guest_hotel"><?=$this->lang->line('Guest_hotel');?></option>
										        <option value="Villa" ><?=$this->lang->line('Villa');?></option>
												<option value="Cottage" ><?=$this->lang->line('Cottage');?></option>
											
            </select>
          </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12 mb-1">
              <div class="form-group">
                <label for="category"><?=$this->lang->line('Category');?></label>
               <select disabled="disabled" class="form-control" id="category" name="category">
                   <option value="<?php echo $apartment_view['category'];?>"><?php echo $this->lang->line($apartment_view['category']); ?></option>
				   <option value="for_sale"><?=$this->lang->line('for_sale');?></option>
				   <option value="for_rent"><?=$this->lang->line('for_rent');?></option>
				   <option value="Pledge"><?=$this->lang->line('Pledge');?></option> 
				   <option value="for_daily_rent"><?=$this->lang->line('for_daily_rent');?></option>
				</select>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12 mb-1">
              <div class="form-group">
                <label for="price"><?=$this->lang->line('Price');?></label>
                <select disabled="disabled" name="currency">
                    <option value="<?php echo $apartment_view['currency'];?>" selected="selected"><?php echo $apartment_view['currency'];?></option>
					<option value="GEL" >GEL</option>
					<option value="USD">USD</option>
					<option value="EUR">EUR</option>
											</select>
					<input disabled="disabled" type="text" id="price" name="price"  class="form-control" placeholder="<?=$this->lang->line('Price');?>" value="<?php echo $apartment_view['price'];?>" required>
              </div>
            </div>
             <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="owner_name" class=""><?=$this->lang->line('Owner');?>: <?=$this->lang->line('Name');?> <?=$this->lang->line('Surname');?></label>
				<input disabled="disabled" type="text" class="form-control" required name="owner_name" id="owner_name" placeholder="<?=$this->lang->line('Name');?> <?=$this->lang->line('Surname');?>" value="<?php echo $apartment_view['owner_name'];?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="telephone" class=""><?=$this->lang->line('Telephone');?>:</label>
				<input disabled="disabled" type="text" class="form-control"  name="telephone" id="telephone"  placeholder="<?=$this->lang->line('Telephone');?>" value="<?php echo $apartment_view['telephone']; ?>" required>
              </div>
            </div>
           <div class="col-xl-4 col-md-6 col-12 mb-1">
              <div class="form-group">
                <label for="country"><?=$this->lang->line('Country');?></label>
               <select disabled="disabled" class="form-control" id="country" name="country">
												 <option value="Georgia"><?=$this->lang->line('Georgia');?></option>
				</select>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12 ">
              <div class="form-group">
                <label for="region"><?=$this->lang->line('Region');?></label>
               <select disabled="disabled" class="form-control" id="region" name="region">
													<option value="<?php echo $apartment_view['region']; ?>"><?php echo $this->lang->line($apartment_view['region']); ?></option>
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
               <select disabled="disabled" class="form-control" id="municipality" name="municipality">
													<option value="<?php echo $apartment_view['city']; ?>"><?php echo $this->lang->line($apartment_view['municipality']); ?></option>
													<?php if (!empty($city)) foreach ($city as $city_item): ?>
												    <option value="<?php echo $city_item['city_en'];?>"><?php echo $city_item['city_'.$this->lang->line('lan')];?></option>
												    
												    <?php endforeach; ?>
												</select>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="city" class=""><?=$this->lang->line('City');?>/<?=$this->lang->line('Village');?>:</label>
                <input disabled="disabled" type="text" class="form-control"  name="city" id="city" placeholder="<?=$this->lang->line('City');?>/<?=$this->lang->line('Village');?>" value="<?php echo $apartment_view['city'];?>"  required  >
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="address" class=""><?=$this->lang->line('Address');?>:</label>
                <input  type="text" class="form-control"  name="address" id="address" placeholder="<?=$this->lang->line('Address');?>" value="<?php echo $apartment_view['address'];?>" required >
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="post_code" class=""><?=$this->lang->line('Post_code');?>:</label>
                <input disabled="disabled" type="text" class="form-control"  name="post_code" id="post_code" placeholder="<?=$this->lang->line('Post_code');?>" value="<?php echo $apartment_view['post_code'];?>" required>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="floor" class=""><?=$this->lang->line('Floor');?>:</label>
				<input disabled="disabled" type="number" class=" form-control" min="1" id="floor" name="floor" value="<?php echo $apartment_view['floor'];?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="area" class=""><?=$this->lang->line('Area');?> - <?=$this->lang->line('M');?> <sup>2</sup>:</label>
				<input disabled="disabled" type="number" class="form-control" name="area" min="0" required id="area" placeholder="<?=$this->lang->line('Area');?>" value="<?php echo $apartment_view['area'];?>">
              </div>
            </div>

            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="room" class=""><?=$this->lang->line('Room');?>:</label>
				<input disabled="disabled" type="number" min="0" class="form-control" min="1"  required name="room" id="room" [laceholder="<?=$this->lang->line('Room');?>" value="<?php echo $apartment_view['room'];?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="bedroom" class=""><?=$this->lang->line('Bedroom');?>:</label>
				<input disabled="disabled" type="number" class="form-control" name="bedroom" min="1" required id="bedroom" placeholder="<?=$this->lang->line('Bedroom');?>" value="<?php echo $apartment_view['bedroom'];?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="bathroom" class=""><?=$this->lang->line('Bathroom');?>:</label>
				<input disabled="disabled" type="number" min="0" class="form-control" min="1" required name="bathroom" id="bathroom" placeholder="<?=$this->lang->line('Bathroom');?>" value="<?php echo $apartment_view['bathroom'];?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="heating"><?=$this->lang->line('Heating');?>:</label>
               <select disabled="disabled" class="form-control" id="heating" name="heating">
                   <option value="<?php echo $apartment_view['heating'];?>"><?php echo $this->lang->line($apartment_view['heating']); ?></option>
					<option value="No"><?=$this->lang->line('No');?></option>
					 <option value="Central_heating"><?=$this->lang->line('Central_heating');?></option>
					<option value="Gas"><?=$this->lang->line('Gas');?></option>
												</select>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="to_sea" class="" ><?=$this->lang->line('Distance from the sea');?> <?=$this->lang->line('M');?>: </label>
				<input disabled="disabled" type="number" class="form-control"  name="to_sea" id="to_sea" placeholder="<?=$this->lang->line('Distance from the sea');?>" value="<?php echo $apartment_view['to_sea'];?>">
              </div>
            </div> 
          </div>
          	<div class="divv">
                                     <div class="div_table" > 
	                                    <table cellspacing="0" cellpadding="0">
	                                        
	                                    	   <tr>
                                	                <td ><?=$this->lang->line('Secure');?></td>
                                	                <td><label class="containeri">
                                                        <input id='secure' type='hidden'  name="secure" value="0">
                                                        <input  disabled="disabled" type="checkbox" id="secure" name="secure" value="1" <?php if($apartment_view['secure'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            
                                	            <tr>
                                	                <td ><?=$this->lang->line('Wheelchair access');?></td>
                                	                <td><label class="containeri">
                                                    <input id='wheelchair' type='hidden'  name="wheelchair" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="wheelchair" name="wheelchair" value="1" <?php if($apartment_view['wheelchair'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	             </tr>
                                	              
                                	             <tr>
                                	                <td ><?=$this->lang->line('TV');?></td>
                                	                <td><label class="containeri">
                                	                <input id='tv' type='hidden'  name="tv" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="tv" name="tv" value="1" <?php if($apartment_view['tv'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Wifi');?></td>
                                	                <td><label class="containeri">
                                	                <input id='wifi' type='hidden'  name="wifi" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="wifi" name="wifi" value="1" <?php if($apartment_view['wifi'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Furniture');?></td>
                                	                <td><label class="containeri">
                                	                <input id='furniture' type='hidden'  name="furniture" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="furniture" name="furniture" value="1" <?php if($apartment_view['furniture'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Wardrobe or closet');?></td>
                                	                <td><label class="containeri">
                                                        <input  disabled="disabled" type="checkbox" id="closet" name="closet" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Air conditioner');?></td>
                                	                <td><label class="containeri">
                                	                <input id='air_conditioner' type='hidden'  name="air_conditioner" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="air_conditioner" name="air_conditioner" value="1" <?php if($apartment_view['air_conditioner'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Refrigerator');?></td>
                                	                <td><label class="containeri">
                                	                <input id='refrigerator' type='hidden'  name="refrigerator" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="refrigerator" name="refrigerator" value="1" <?php if($apartment_view['refrigerator'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Washing machine');?></td>
                                	                <td><label class="containeri">
                                	                <input id='washing_machine' type='hidden'  name="washing_machine" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="washing_machine" name="washing_machine" value="1" <?php if($apartment_view['washing_machine'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	         
                                	              <tr>
                                	                <td><?=$this->lang->line('Bar');?></td>
                                	                <td><label class="containeri">
                                	                <input id='bar' type='hidden'  name="bar" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="bar" name="bar" value="1" <?php if($apartment_view['bar'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Kitchen');?></td>
                                	                <td><label class="containeri">
                                	                <input id='kitchen' type='hidden'  name="kitchen" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="kitchen" name="kitchen" value="1" <?php if($apartment_view['kitchen'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	                <td ><?=$this->lang->line('Dining table');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='dining_table' type='hidden'  name="dining_table" value="0">
                                                        <input  disabled="disabled" type="checkbox" id="dining_table" name="dining_table" value="1" <?php if($apartment_view['dining_table'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Balcony');?></td>
                                	                <td><label class="containeri">
                                	                <input id='balcony' type='hidden'  name="balcony" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="balcony" name="balcony" value="1" <?php if($apartment_view['balcony'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Parking');?></td>
                                	                <td><label class="containeri">
                                	                <input id='parking' type='hidden'  name="parking" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="parking" name="parking" value="1" <?php if($apartment_view['parking'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Elevator');?></td>
                                	                <td><label class="containeri">
                                	                 <input id='elevator' type='hidden'  name="elevator" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="elevator" name="elevator" value="1" <?php if($apartment_view['elevator'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Yard');?></td>
                                	                <td><label class="containeri">
                                	                <input id='yard' type='hidden'  name="yard" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="yard" name="yard" value="1" <?php if($apartment_view['yard'] == '1') { echo 'checked';}?>>
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
                                	                <input id='garden' type='hidden'  name="garden" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="garden" name="garden" value="1" <?php if($apartment_view['garden'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Playground');?></td>
                                	                <td><label class="containeri">
                                	                <input id='playground' type='hidden'  name="playground" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="playground" name="playground" value="1" <?php if($apartment_view['playground'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line("Children's environment");?></td>
                                	                <td><label class="containeri">
                                	                <input id='childrens_environment' type='hidden'  name="childrens_environment" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="childrens_environment" name="childrens_environment" value="1" <?php if($apartment_view['childrens_environment'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            
                                	            <tr>
                                	                <td ><?=$this->lang->line('Swimming pool');?></td>
                                	                <td><label class="containeri">
                                	                <input id='pool' type='hidden'  name="pool" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="pool" name="pool" value="1" <?php if($apartment_view['pool'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Near to city');?></td>
                                	                <td><label class="containeri">
                                	                <input id='to_city' type='hidden'  name="to_city" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="to_city" name="to_city" value="1" <?php if($apartment_view['to_city'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Near to central way');?></td>
                                	                <td><label class="containeri">
                                	                <input id='to_way' type='hidden'  name="to_way" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="to_way" name="to_way" value="1" <?php if($apartment_view['to_way'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            
                                	            <tr>
                                	                <td ><?=$this->lang->line('Near to sea');?></td>
                                	                <td><label class="containeri">
                                	                <input id='to_sea' type='hidden'  name="to_sea" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="to_sea" name="to_sea" value="1" <?php if($apartment_view['to_sea'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>

                                	            <tr>
                                	                <td ><?=$this->lang->line('Near to mount');?></td>
                                	                <td><label class="containeri">
                                	                <input id='to_mount' type='hidden'  name="to_mount" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="to_mount" name="to_mount" value="1" <?php if($apartment_view['to_mount'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Near to hospital');?></td>
                                	                <td><label class="containeri">
                                	                <input id='to_hospital' type='hidden'  name="to_hospital" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="to_hospital" name="to_hospital" value="1" <?php if($apartment_view['to_hospital'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Near to airport');?></td>
                                	                <td><label class="containeri">
                                	                <input id='to_airport' type='hidden'  name="to_airport" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="to_airport" name="to_airport" value="1" <?php if($apartment_view['to_airport'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Sea view');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='sea_view' type='hidden'  name="sea_view" value="0">
                                                        <input  disabled="disabled" type="checkbox" id="sea_view" name="sea_view" value="1" <?php if($apartment_view['sea_view'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Mountain view');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='mountain_view' type='hidden'  name="mountain_view" value="0">
                                                        <input  disabled="disabled" type="checkbox" id="mountain_view" name="mountain_view" value="1" <?php if($apartment_view['mountain_view'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            
                                	            <tr>
                                	                <td ><?=$this->lang->line('Payment by cash');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='payment_cash' type='hidden'  name="payment_cash" value="0">
                                                        <input  disabled="disabled" type="checkbox" id="payment_cash" name="payment_cash" value="1" <?php if($apartment_view['payment_cash'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Payment by card');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='payment_card' type='hidden'  name="payment_card" value="0">
                                                        <input  disabled="disabled" type="checkbox" id="payment_card" name="payment_card" value="1" <?php if($apartment_view['payment_card'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Pets allowed');?></td>
                                	                <td><label class="containeri">
                                	                <input id='pets' type='hidden'  name="pets" value="0">
                                                    <input  disabled="disabled" type="checkbox" id="pets" name="pets" value="1" <?php if($apartment_view['pets'] == '1') { echo 'checked';}?>>
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
 
  </div>
  <div class="container"  style="margin-top:50px; background:black;">
    <?php $raod=1; ?>
        <?php if (!empty($images)) foreach ($images as $images_item): ?>
  <div class="mySlides">
<div class="numbertext" >
        
    
 &#160 <?php if($apartment_view['file_name'] ==$images_item['file_name']) echo ' <i class="fa fa-check" style="font-size:40px; color:#1eef1e;"></i>';?>
    </div>

    <img class="slide_image" src="<?=base_url();?>assets/images/apartments/<?php echo $images_item['file_name']; ?>" >
  </div>
  <?php $raod++; ?>
<?php endforeach; ?>
   
  <a class="prev" onclick="plusSlides(-1)" style="color:white!important;">❮</a>
  <a class="next" onclick="plusSlides(1)" style="color:white!important;">❯</a>

  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <div class="row">
    <?php $raode=1; ?>
        <?php if (!empty($imagess)) foreach ($imagess as $imagess_item): ?>
    <div class="column">
      <img class="demo cursor" src="<?=base_url();?>assets/images/apartments/<?php echo $imagess_item['file_name']; ?>" style="height:100px;" onclick="currentSlide(<?php echo $raode; ?>)">
    </div>
   <?php $raode++; ?>
<?php endforeach; ?>
</div>
</div>
<div class="contaner" style="max-width:98%; margin:auto;">
    <div class="row">
   <div id="map" style="width:100%; height:350px;"></div>
                          
  </div>
</div>

</section>
<br>
<br>
<section id="basic-datatable" <?php if(($apartment_view['type'] == 'House') || ($apartment_view['type'] == 'Hotel') || ($apartment_view['type'] == 'Guest_hotel')  || ($apartment_view['type'] == 'Cottage')) echo 'style="display: block;"'; else { 
    echo 'style="display: none;"';}?>>
    <div class="card-datatable table-responsive pt-0" style="background-color:white;">
        <div class="dt-buttons btn-group flex-wrap"><button class="btn add-new btn-primary mt-50"  type="button" data-toggle="modal" ><span> <a href="<?=base_url('admin/apartment_room_type_create');?>/<?php echo $apartment_view['code'];?>" style="color:white;"><?=$this->lang->line('Add room type');?></a></span></button> 
        </div>
        <br>
        <br>
    </div>
 
        <h2><?=$this->lang->line('Quantity');?> - <?php echo $count_rooms; ?></h2>
      <div class="card" style="overflow-x:scroll;">
        <table class="datatables-basic table">
          <thead>
            <tr>
              <th>ID</th>
              <th><?=$this->lang->line('Room type');?></th>
              <th><?=$this->lang->line('Action');?></th>

            </tr>
          </thead>
          <tbody>
              <?php $r=1;?>
										<?php if (!empty($apartment_rooms)) foreach ($apartment_rooms as $apartment_item): ?>
										
									<tr role="row" class="odd">
									    <td> <?php echo $r;?></td>	
										<td><a href="<?=base_url('admin/apartment_room_type_view/');?><?php echo $apartment_item['code']; ?>" style="color: #007bff;"><?php echo $this->lang->line($apartment_item['room_type']); ?></a></td>
										<td><a href="<?=base_url('admin/apartment_room_type_delete/');?><?php echo $apartment_item['code']; ?>" style="color:red;">
										    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 font-small-4 mr-50" style="color:red;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
										    <?php echo $this->lang->line('Delete'); ?></a></td>

										</tr>
										<?php $r++;?>
									<?php endforeach; ?>
								</tbody>
        </table>
      </div>
        
</section>
<!-- Dropzone section end -->

        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    	<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
</script>
<script>

      // In the following example, markers appear when the user clicks on the map.
      // The markers are stored in an array.
      // The user can then click an option to hide, show or delete the markers.
      var map;
      var markers = [];
      var latt;
      var lngg;
      function initMap() {
        var coord = {lat: <?php echo $apartment_view['lat'];?>, lng: <?php echo $apartment_view['lng']; ?>};

        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: coord,
          mapTypeId: 'satellite'
        });
        addMarker(coord);

        // This event listener will call addMarker() when the map is clicked.
        map.addListener('click', function(event) {
          addMarker(event.latLng);
          latt = event.latLng.lat();
          lngg = event.latLng.lng();
        });

      }
      

      // Adds a marker to the map and push to the array.
      function addMarker(location) {
          deleteMarkers();
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
        markers.push(marker);
      }

      // Sets the map on all markers in the array.
      function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

      // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
      }

      // Shows any markers currently in the array.
      function showMarkers() {
        setMapOnAll(map);
      }

      // Deletes all markers in the array by removing references to them.
      function deleteMarkers() {
        clearMarkers();
        markers = [];
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyChtxgoyl0s3MVYyjC6I4s2kZ_3hzqUwWY&callback=initMap">
    </script>
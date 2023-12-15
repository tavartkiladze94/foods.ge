<script>
$(document).ready(function(){
$("input").on("keypress", function(event) {
        var englishAlphabetAndWhiteSpace = /^[-@./#&+\w\s]*$/;
            var key = String.fromCharCode(event.which);
            if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || englishAlphabetAndWhiteSpace.test(key)) {
                return true;
            }
            return false;
        });
        $('.latin_letters').on("paste", function(e) {
            e.preventDefault();
        });
});
</script>
<?php if ($this->session->has_userdata('message')): ?>
    <div id="message" style="position: absolute; top: 80px;right:50px; border: 1px solid #55b536; height:40px; text-align:center; background:#55b536; padding: 10px 10px;"> 
        <h6 style="color:white; font-size:16px;"><i class="fa fa-check" style="font-size:18px; color:white;"></i> <?=$this->lang->line('record successfully added');?></h6>
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
                <h2 class="content-header-title float-left mb-0"><?=$this->lang->line('Apartment');?></h2>
                <div class="breadcrumb-wrapper">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?=base_url('admin/index')?>"><?=$this->lang->line('Home');?></a>
                    </li>
                    <li class="breadcrumb-item"><a href="<?=base_url('admin/apartments_all')?>"><?=$this->lang->line('Apartments');?></a>
                    </li>
                    <li class="breadcrumb-item active"><?php echo $apartment_edit['title'];?>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div class="content-body">

        </div>
<div class="content-body">
<section id="basic-input" >
    <form class="text-center" action="<?=base_url('admin/apartment_update/')?><?php echo $apartment_edit['code'];?>" method="POST">
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title"><?php echo $this->lang->line($apartment_edit['type']); ?></h4>
        </div>
        <div class="card-body">
          <div class="row">
           <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="title" class=""> <?php echo $this->lang->line('Title');?> </label>
				<input type="text" class="form-control"  name="title" id="title" placeholder="<?=$this->lang->line('Title');?>" value="<?php echo $apartment_edit['title'];?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12 mb-1">
              <div class="form-group">
            <label for="type"><?=$this->lang->line('Type');?></label>
            <select class="form-control" id="type" name="type" >
                            <option value="<?php echo $apartment_edit['type'];?>"><?php echo $this->lang->line($apartment_edit['type']); ?></option>
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
                   <option value="<?php echo $apartment_edit['category'];?>"><?php echo $this->lang->line($apartment_edit['category']); ?></option>
						<option value="for_sale"><?=$this->lang->line('for_sale');?></option>
						<option value="for_rent"><?=$this->lang->line('for_rent');?></option>
						<option value="Pledge"><?=$this->lang->line('Pledge');?>
						</option> <option value="for_daily_rent"><?=$this->lang->line('for_daily_rent');?></option>
				</select>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12 mb-1">
              <div class="form-group">
                <label for="price"><?=$this->lang->line('Price');?></label>
                <select name="currency">
                    <option value="<?php echo $apartment_edit['currency'];?>" selected="selected"><?php echo $apartment_edit['currency'];?></option>
					<option value="GEL" >GEL</option>
					<option value="USD">USD</option>
					<option value="EUR">EUR</option>
											</select>
					<input type="text" id="price" name="price"  class="form-control" placeholder="<?=$this->lang->line('Price');?>" value="<?php echo $apartment_edit['price'];?>" required>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="owner_name" class=""><?=$this->lang->line('Owner');?>: <?=$this->lang->line('Name');?> <?=$this->lang->line('Surname');?></label>
				<input type="text" class="form-control" required name="owner_name" id="owner_name" placeholder="<?=$this->lang->line('Name');?> <?=$this->lang->line('Surname');?>" value="<?php echo $apartment_edit['owner_name'];?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="telephone" class=""><?=$this->lang->line('Telephone');?>:</label>
				<input type="text" class="form-control"  name="telephone" id="telephone"  placeholder="<?=$this->lang->line('Telephone');?>" value="<?php echo $apartment_edit['telephone']; ?>" required>
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
													<option value="<?php echo $apartment_edit['region']; ?>"><?php echo $this->lang->line($apartment_edit['region']); ?></option>
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
													<option value="<?php echo $apartment_edit['municipality']; ?>"><?php echo $this->lang->line($apartment_edit['municipality']); ?></option>
													<?php if (!empty($city)) foreach ($city as $city_item): ?>
												    <option value="<?php echo $city_item['city_en'];?>"><?php echo $this->lang->line($city_item['city_en']);?></option>
												    
												    <?php endforeach; ?>
												</select>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="city" class=""><?=$this->lang->line('City');?>/<?=$this->lang->line('Village');?>:</label>
                <input type="text" class="form-control"  name="city" id="city" placeholder="<?=$this->lang->line('City');?>/<?=$this->lang->line('Village');?>" value="<?php echo $apartment_edit['city'];?>" required >
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="address" class=""><?=$this->lang->line('Address');?>:</label>
                <input type="text" class="form-control"  name="address" id="address" placeholder="<?=$this->lang->line('Address');?>" value="<?php echo $apartment_edit['address'];?>" required >
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="post_code" class=""><?=$this->lang->line('Post_code');?>:</label>
                <input type="text" class="form-control"  name="post_code" id="post_code" placeholder="<?=$this->lang->line('Post_code');?>" value="<?php echo $apartment_edit['post_code'];?>" required>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="floor" class=""><?=$this->lang->line('Floor');?>:</label>
				<input type="number" class=" form-control" min="1" id="floor" name="floor" value="<?php echo $apartment_edit['floor'];?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="area" class=""><?=$this->lang->line('Area');?> - <?=$this->lang->line('M');?> <sup>2</sup>:</label>
				<input type="number" class="form-control" name="area" min="0" required id="area" placeholder="<?=$this->lang->line('Area');?>" value="<?php echo $apartment_edit['area'];?>">
              </div>
            </div>

            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="room" class=""><?=$this->lang->line('Room');?>:</label>
				<input type="number" min="0" class="form-control" min="1"  required name="room" id="room" [laceholder="<?=$this->lang->line('Room');?>" value="<?php echo $apartment_edit['room'];?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="bedroom" class=""><?=$this->lang->line('Bedroom');?>:</label>
				<input type="number" class="form-control" name="bedroom" min="1" required id="bedroom" placeholder="<?=$this->lang->line('Bedroom');?>" value="<?php echo $apartment_edit['bedroom'];?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="bathroom" class=""><?=$this->lang->line('Bathroom');?>:</label>
				<input type="number" min="0" class="form-control" min="1" required name="bathroom" id="bathroom" placeholder="<?=$this->lang->line('Bathroom');?>" value="<?php echo $apartment_edit['bathroom'];?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="heating"><?=$this->lang->line('Heating');?>:</label>
               <select class="form-control" id="heating" name="heating">
                   <option value="<?php echo $apartment_edit['heating'];?>"><?php echo $this->lang->line($apartment_edit['heating']); ?></option>
					<option value="No"><?=$this->lang->line('No');?></option>
					 <option value="Central_heating"><?=$this->lang->line('Central_heating');?></option>
					<option value="Gas"><?=$this->lang->line('Gas');?></option>
												</select>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="to_sea" class="" ><?=$this->lang->line('Distance from the sea');?> <?=$this->lang->line('M');?>: </label>
				<input type="number" class="form-control" name="to_sea" id="to_sea" placeholder="<?=$this->lang->line('Distance from the sea');?>" value="<?php echo $apartment_edit['to_sea'];?>">
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
                                                        <input type="checkbox" id="secure" name="secure" value="1" <?php if($apartment_edit['secure'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Free breakfast');?></td>
                                	                <td><label class="containeri">
                                                    <input id='breakfast' type='hidden'  name="breakfast" value="0">
                                                    <input type="checkbox" id="breakfast" name="breakfast" value="1" <?php if($apartment_edit['breakfast'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            
                                	            <tr>
                                	                <td ><?=$this->lang->line('Wheelchair access');?></td>
                                	                <td><label class="containeri">
                                                    <input id='wheelchair' type='hidden'  name="wheelchair" value="0">
                                                    <input type="checkbox" id="wheelchair" name="wheelchair" value="1" <?php if($apartment_edit['wheelchair'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	             </tr>
                                	              <tr>
                                	                <td ><?=$this->lang->line('Taxi available');?></td>
                                	                <td><label class="containeri">
                                	                <input id='taxi' type='hidden'  name="taxi" value="0">
                                                    <input type="checkbox" id="taxi" name="taxi" value="1" <?php if($apartment_edit['taxi'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	             </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('TV');?></td>
                                	                <td><label class="containeri">
                                	                <input id='tv' type='hidden'  name="tv" value="0">
                                                    <input type="checkbox" id="tv" name="tv" value="1" <?php if($apartment_edit['tv'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Wifi');?></td>
                                	                <td><label class="containeri">
                                	                <input id='wifi' type='hidden'  name="wifi" value="0">
                                                    <input type="checkbox" id="wifi" name="wifi" value="1" <?php if($apartment_edit['wifi'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Furniture');?></td>
                                	                <td><label class="containeri">
                                	                <input id='furniture' type='hidden'  name="furniture" value="0">
                                                    <input type="checkbox" id="furniture" name="furniture" value="1" <?php if($apartment_edit['furniture'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Air conditioner');?></td>
                                	                <td><label class="containeri">
                                	                <input id='air_conditioner' type='hidden'  name="air_conditioner" value="0">
                                                    <input type="checkbox" id="air_conditioner" name="air_conditioner" value="1" <?php if($apartment_edit['air_conditioner'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Iron');?></td>
                                	                <td><label class="containeri">
                                	                <input id='iron' type='hidden'  name="iron" value="0">
                                                    <input type="checkbox" id="iron" name="iron" value="1" <?php if($apartment_edit['iron'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Hair dryer');?></td>
                                	                <td><label class="containeri">
                                	                <input id='hair_dryer' type='hidden'  name="hair_dryer" value="0">
                                                    <input type="checkbox" id="hair_dryer" name="hair_dryer" value="1" <?php if($apartment_edit['hair_dryer'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Refrigerator');?></td>
                                	                <td><label class="containeri">
                                	                <input id='refrigerator' type='hidden'  name="refrigerator" value="0">
                                                    <input type="checkbox" id="refrigerator" name="refrigerator" value="1" <?php if($apartment_edit['refrigerator'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Washing machine');?></td>
                                	                <td><label class="containeri">
                                	                <input id='washing_machine' type='hidden'  name="washing_machine" value="0">
                                                    <input type="checkbox" id="washing_machine" name="washing_machine" value="1" <?php if($apartment_edit['washing_machine'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	         
                                	              <tr>
                                	                <td><?=$this->lang->line('Bar');?></td>
                                	                <td><label class="containeri">
                                	                <input id='bar' type='hidden'  name="bar" value="0">
                                                    <input type="checkbox" id="bar" name="bar" value="1" <?php if($apartment_edit['bar'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Kitchen');?></td>
                                	                <td><label class="containeri">
                                	                <input id='kitchen' type='hidden'  name="kitchen" value="0">
                                                    <input type="checkbox" id="kitchen" name="kitchen" value="1" <?php if($apartment_edit['kitchen'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Balcony');?></td>
                                	                <td><label class="containeri">
                                	                <input id='balcony' type='hidden'  name="balcony" value="0">
                                                    <input type="checkbox" id="balcony" name="balcony" value="1" <?php if($apartment_edit['balcony'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            
                                	             
                                        </table>
                                    </div>
                                    <div class="div_table" > 
	                                    <table cellspacing="0" cellpadding="0">

	                                    	    <tr>
                                	                <td ><?=$this->lang->line('Parking');?></td>
                                	                <td><label class="containeri">
                                	                <input id='parking' type='hidden'  name="parking" value="0">
                                                    <input type="checkbox" id="parking" name="parking" value="1" <?php if($apartment_edit['parking'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Elevator');?></td>
                                	                <td><label class="containeri">
                                	                 <input id='elevator' type='hidden'  name="elevator" value="0">
                                                    <input type="checkbox" id="elevator" name="elevator" value="1" <?php if($apartment_edit['elevator'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	           <tr>
                                	                <td ><?=$this->lang->line('Yard');?></td>
                                	                <td><label class="containeri">
                                	                <input id='yard' type='hidden'  name="yard" value="0">
                                                    <input type="checkbox" id="yard" name="yard" value="1" <?php if($apartment_edit['yard'] == '1') { echo 'checked';}?>>
                                                    <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Garden');?></td>
                                	                <td><label class="containeri">
                                	                <input id='garden' type='hidden'  name="garden" value="0">
                                                    <input type="checkbox" id="garden" name="garden" value="1" <?php if($apartment_edit['garden'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Playground');?></td>
                                	                <td><label class="containeri">
                                	                <input id='playground' type='hidden'  name="playground" value="0">
                                                    <input type="checkbox" id="playground" name="playground" value="1" <?php if($apartment_edit['playground'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line("Children's environment");?></td>
                                	                <td><label class="containeri">
                                	                <input id='childrens_environment' type='hidden'  name="childrens_environment" value="0">
                                                    <input type="checkbox" id="childrens_environment" name="childrens_environment" value="1" <?php if($apartment_edit['childrens_environment'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Restaurant_cafe');?></td>
                                	                <td><label class="containeri">
                                	                <input id='restaurant_cafe' type='hidden'  name="restaurant_cafe" value="0">
                                                    <input type="checkbox" id="restaurant_cafe" name="restaurant_cafe" value="1" <?php if($apartment_edit['restaurant_cafe'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Swimming pool');?></td>
                                	                <td><label class="containeri">
                                	                <input id='pool' type='hidden'  name="pool" value="0">
                                                    <input type="checkbox" id="pool" name="pool" value="1" <?php if($apartment_edit['pool'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Near to city');?></td>
                                	                <td><label class="containeri">
                                	                <input id='to_city' type='hidden'  name="to_city" value="0">
                                                    <input type="checkbox" id="to_city" name="to_city" value="1" <?php if($apartment_edit['to_city'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Near to central way');?></td>
                                	                <td><label class="containeri">
                                	                <input id='to_way' type='hidden'  name="to_way" value="0">
                                                    <input type="checkbox" id="to_way" name="to_way" value="1" <?php if($apartment_edit['to_way'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            
                                	            <tr>
                                	                <td ><?=$this->lang->line('Near to river');?></td>
                                	                <td><label class="containeri">
                                	                <input id='to_river' type='hidden'  name="to_river" value="0">
                                                    <input type="checkbox" id="to_river" name="to_river" value="1" <?php if($apartment_edit['to_river'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>

                                	            <tr>
                                	                <td ><?=$this->lang->line('Near to mount');?></td>
                                	                <td><label class="containeri">
                                	                <input id='to_mount' type='hidden'  name="to_mount" value="0">
                                                    <input type="checkbox" id="to_mount" name="to_mount" value="1" <?php if($apartment_edit['to_mount'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Near to hospital');?></td>
                                	                <td><label class="containeri">
                                	                <input id='to_hospital' type='hidden'  name="to_hospital" value="0">
                                                    <input type="checkbox" id="to_hospital" name="to_hospital" value="1" <?php if($apartment_edit['to_hospital'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Pets allowed');?></td>
                                	                <td><label class="containeri">
                                	                <input id='pets' type='hidden'  name="pets" value="0">
                                                    <input type="checkbox" id="pets" name="pets" value="1" <?php if($apartment_edit['pets'] == '1') { echo 'checked';}?>>
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
          
          <div action="<?=base_url('admin/update_apartment_gallery/')?><?php echo $apartment_edit['code'];?>" class="dropzone dropzone-area" id="dpz-multiple-files">
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
  <div class="container" style="border:1px solid black;background:black;">
    <?php $raod=1; ?>
        <?php if (!empty($images)) foreach ($images as $images_item): ?>
  <div class="mySlides">
    <div class="numbertext" >
        
      <div class="dropdown" >
  <p class="dropbtn" style="border: 1px solid #55b536;"><?=$this->lang->line('Settings');?></p>
  <div class="dropdown-content">
      <a href="<?=base_url('admin/set_as_apartment_main_image/')?><?php echo $images_item['file_name']; ?>/<?php echo $images_item['code']; ?>"><?=$this->lang->line('Set as main');?></a>
      <a href="<?=base_url('admin/delete_apartment_image/')?><?php echo $images_item['file_name']; ?>/<?php echo $images_item['code']; ?>"><?=$this->lang->line('Delete');?></a>
    
    
  </div>
</div>
 &#160 <?php if($apartment_edit['file_name'] ==$images_item['file_name']) echo ' <i class="fa fa-check" style="font-size:40px; color:#1eef1e;"></i>';?>
    </div>
   

    <img class="slide_image" src="<?=base_url();?>assets/images/apartments/<?php echo $images_item['file_name']; ?>"  >
  </div>
  <?php $raod++; ?>
<?php endforeach; ?>
   
  <a class="prev" onclick="plusSlides(-1)" style="color:white!important;">❮</a>
  <a class="next" onclick="plusSlides(1)" style="color:white!important;">❯</a>

  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <div class="row" style="margin: 0 1px;">
    <?php $raode=1; ?>
        <?php if (!empty($imagess)) foreach ($imagess as $imagess_item): ?>
    <div class="column">
      <img class="demo cursor" src="<?=base_url();?>assets/images/apartments/<?php echo $imagess_item['file_name']; ?>" style="width:100%;height:80px;" onclick="currentSlide(<?php echo $raode; ?>)">
    </div>
   <?php $raode++; ?>
<?php endforeach; ?>
</div>
<br> 
<hr>

</div>
<div class="contaner" style="max-width:100%; margin:auto;">
    <div class="row">
   <div id="map" style="width:100%; height:350px;"></div>
                           
  </div>
  <br>
  <button class="btn btn-primary waves-effect waves-float waves-light"  onclick="ganaxleba();"><?=$this->lang->line('Save');?></button>
</div>
</section>
<br>
<br>
<section id="basic-datatable">
    <div class="card-datatable table-responsive pt-0" style="background-color:white;">
        <div class="dt-buttons btn-group flex-wrap"><button class="btn add-new btn-primary mt-50"  type="button" data-toggle="modal" ><span> <a href="<?=base_url('admin/apartment_room_create');?>/<?php echo $apartment_edit['code'];?>" style="color:white;"><?=$this->lang->line('Add number');?></a></span></button> 
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
              <th><?=$this->lang->line('Number');?></th>
              <th><?=$this->lang->line('Floor');?></th>
              <th><?=$this->lang->line('Action');?></th>

            </tr>
          </thead>
          <tbody>
              <?php $r=1;?>
										<?php if (!empty($apartment_rooms)) foreach ($apartment_rooms as $apartment_item): ?>
										
									<tr role="row" class="odd">
									    <td> <?php echo $r;?></td>	
										<td><a href="<?=base_url('admin/apartment_room_edit/');?><?php echo $apartment_item['code']; ?>" style="color: #007bff;"><?php echo $apartment_item['number']; ?></a></td>
										<td><a href="<?=base_url('admin/apartment_room_edit/');?><?php echo $apartment_item['code']; ?>" style="color:#007bff;"><?php echo $apartment_item['floor']; ?></a></td>
										<td><a href="<?=base_url('admin/user_apartment_room_delete/');?><?php echo $apartment_item['code']; ?>" style="color:red;"><?php echo $this->lang->line('Delete'); ?></a></td>

											
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
        var coord = {lat: <?php echo $apartment_edit['lat'];?>, lng: <?php echo $apartment_edit['lng']; ?>};

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
      function ganaxleba()
      {
          location.href = "<?=base_url('admin/update_apartment_coords/');?><?php echo $apartment_edit['code'];?>"+"/"+latt+"/"+lngg;

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
    src="https://maps.googleapis.com/maps/api/js?language=en&key=AIzaSyChtxgoyl0s3MVYyjC6I4s2kZ_3hzqUwWY&callback=initMap">
    </script>

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
                    <li class="breadcrumb-item"><a href="<?=base_url('admin/apartment_view/')?><?php echo $apartment['code'];?>"><?php echo $this->lang->line($apartment['category']).' '.$this->lang->line($apartment['type']);?></a>
                    </li>
                    <li class="breadcrumb-item active"><?php echo $this->lang->line($room_type_view['room_type']); ?>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          
        </div>
<div class="content-body"><!-- Basic Inputs start -->
<section id="basic-input" >
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
                <label for="heating"><?=$this->lang->line('Room type');?>:</label>
               <select class="form-control" id="room_type" name="room_type" disabled="disabled">
                    <option value="<?php echo $room_type_view['room_type'];?>"><?php echo $this->lang->line($room_type_view['room_type']); ?></option>
					<option value="Double-room"><?=$this->lang->line('Double-room');?></option>
					<option value="Triple-room"><?=$this->lang->line('Triple-room');?></option>
					<option value="Quadruple-room"><?=$this->lang->line('Quadruple-room');?></option>
					<option value="Five-seater-room"><?=$this->lang->line('Five-seater-room');?></option>
				</select>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="single_bed" class=""><?=$this->lang->line('single bed');?>:</label>
				<input disabled="disabled" type="number" class="form-control" name="single_bed"  min="0" required id="single_bed" placeholder="<?=$this->lang->line('single bed');?>" value="<?php echo $room_type_view['single_bed'];?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="double_bed" class=""><?=$this->lang->line('double bed');?>:</label>
				<input disabled="disabled" type="number" class="form-control" name="double_bed"  min="0" required id="double_bed" placeholder="<?=$this->lang->line('double bed');?>" value="<?php echo $room_type_view['double_bed'];?>">
              </div>
            </div>
            
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="heating"><?=$this->lang->line('Heating');?>:</label>
               <select class="form-control" id="heating" name="heating" disabled="disabled">
                   <option value="<?php echo $room_type_view['heating'];?>" selected="selected"><?php echo $this->lang->line($room_type_view['heating']);?></option>
					<option value="No"><?=$this->lang->line('No');?></option>
					<option value="Central_heating"><?=$this->lang->line('Central_heating');?></option>
					<option value="Gas"><?=$this->lang->line('Gas');?></option>
				</select>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="area" class=""><?=$this->lang->line('Area');?> - <?=$this->lang->line('M');?> <sup>2</sup>:</label>
				<input disabled="disabled" type="number" class="form-control" name="area" required id="area" placeholder="<?=$this->lang->line('Area');?>" value="<?php echo $room_type_view['area'];?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12 mb-1">
              <div class="form-group">
                <label for="currency"><?=$this->lang->line('Price');?> <?=$this->lang->line('without breakfast');?></label>
                <select name="currency" disabled="disabled">
                    <option value="<?php echo $room_type_view['currency'];?>" selected="selected"><?php echo $room_type_view['currency'];?></option>
					<option value="GEL" selected="selected">GEL</option>
					<option value="USD">USD</option>
					<option value="EUR">EUR</option>
											</select>
					<input type="text" id="price" name="price"  class="form-control" placeholder="<?=$this->lang->line('Price');?>" required value="<?php echo $room_type_view['price'];?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12 mb-1">
              <div class="form-group">
                <label for="price_with_breakfast"><?=$this->lang->line('Price');?> <?=$this->lang->line('with breakfast');?></label>
                <input disabled="disabled" type="text" id="price_with_breakfast" name="price_with_breakfast"  class="form-control" placeholder="<?=$this->lang->line('Price');?> <?=$this->lang->line('with breakfast');?>" required value="<?php echo $room_type_view['price_with_breakfast'];?>">
              </div>
            </div>
          </div>
        
          	<div class="divv">
                                     <div class="div_table" > 
	                                    <table cellspacing="0" cellpadding="0">
	                                    	   <tr>
                                	                <td ><?=$this->lang->line('Room service');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='room_service' type='hidden'  name="room_service" value="0">
                                                        <input disabled="disabled" type="checkbox" id="rom_service" name="room_service" value="1" <?php if($room_type_view['room_service'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('TV');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='tv' type='hidden'  name="tv" value="0">
                                                        <input disabled="disabled" type="checkbox" id="tv" name="tv" value="1" <?php if($room_type_view['tv'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Wifi');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='wifi' type='hidden'  name="wifi" value="0">
                                                        <input disabled="disabled" type="checkbox" id="wifi" name="wifi" value="1" <?php if($room_type_view['wifi'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Furniture');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='furniture' type='hidden'  name="furniture" value="0">
                                                        <input disabled="disabled" type="checkbox" id="furniture" name="furniture" value="1" <?php if($room_type_view['furniture'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Wardrobe or closet');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='closet' type='hidden'  name="closet" value="0">
                                                        <input disabled="disabled" type="checkbox" id="closet" name="closet" value="1" <?php if($room_type_view['closet'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             <tr>
                                	                <td ><?=$this->lang->line('Air conditioner');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='air_conditioner' type='hidden'  name="air_conditioner" value="0">
                                                        <input disabled="disabled" type="checkbox" id="air_conditioner" name="air_conditioner" value="1" <?php if($room_type_view['air_conditioner'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Refrigerator');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='refrigerator' type='hidden'  name="refrigerator" value="0">
                                                        <input disabled="disabled" type="checkbox" id="refrigerator" name="refrigerator" value="1" <?php if($room_type_view['refrigerator'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Iron');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='iron' type='hidden'  name="iron" value="0" >
                                                        <input disabled="disabled" type="checkbox" id="iron" name="iron" value="1" <?php if($room_type_view['iron'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Hair dryer');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='separate_toilet' type='hidden'  name="separate_toilet" value="0">
                                                        <input disabled="disabled" type="checkbox" id="hair_dryer" name="hair_dryer" value="1" <?php if($room_type_view['iron'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	             
                                        </table>
                                    </div>
                                    <div class="div_table" > 
	                                    <table cellspacing="0" cellpadding="0">
	                                            <tr>
                                	                <td ><?=$this->lang->line('Washing machine');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='washing_machine' type='hidden'  name="washing_machine" value="0">
                                                        <input disabled="disabled" type="checkbox" id="washing_machine" name="washing_machine" value="1" <?php if($room_type_view['washing_machine'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td><?=$this->lang->line('Bar');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='bar' type='hidden'  name="bar" value="0">
                                                        <input disabled="disabled" type="checkbox" id="bar" name="bar" value="1" <?php if($room_type_view['bar'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Kitchen');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='kitchen' type='hidden'  name="kitchen" value="0">
                                                        <input disabled="disabled" type="checkbox" id="kitchen" name="kitchen" value="1" <?php if($room_type_view['kitchen'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Dining table');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='dining_table' type='hidden'  name="dining_table" value="0">
                                                        <input disabled="disabled" type="checkbox" id="dining_table" name="dining_table" value="1" <?php if($room_type_view['dining_table'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Balcony');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='balcony' type='hidden'  name="balcony" value="0">
                                                        <input disabled="disabled" type="checkbox" id="balcony" name="balcony" value="1" <?php if($room_type_view['balcony'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Sea view');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='sea_view' type='hidden'  name="sea_view" value="0">
                                                        <input disabled="disabled" type="checkbox" id="sea_view" name="sea_view" value="1" <?php if($room_type_view['sea_view'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Mountain view');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='mountain_view' type='hidden'  name="mountain_view" value="0">
                                                        <input disabled="disabled" type="checkbox" id="mountain_view" name="mountain_view" value="1" <?php if($room_type_view['mountain_view'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	       
                                	            <tr>
                                	                <td ><?=$this->lang->line('Separate bathroom');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='separate_bathroom' type='hidden'  name="separate_bathroom" value="0">
                                                        <input disabled="disabled" type="checkbox" id="separate_bathroom" name="separate_bathroom" value="1" <?php if($room_type_view['separate_bathroom'] == '1') { echo 'checked';}?>>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Separate toilet');?></td>
                                	                <td><label class="containeri">
                                	                    <input id='separate_toilet' type='hidden'  name="separate_toilet" value="0">
                                                        <input disabled="disabled" type="checkbox" id="separate_toilet" name="separate_toilet" value="1" <?php if($room_type_view['separate_toilet'] == '1') { echo 'checked';}?>>
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
  <br>
  <br>
  <div class="container" style="border:1px solid black;background:black;">
    <?php $raod=1; ?>
        <?php if (!empty($images)) foreach ($images as $images_item): ?>
  <div class="mySlides">
    
   

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
  <br>
</section>

<!-- Dropzone section end -->

        </div>
      </div>
    </div>
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
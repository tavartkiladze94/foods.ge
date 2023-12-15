
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
                    <li class="breadcrumb-item"><a href="<?=base_url('admin/apartment_edit/')?><?php echo $apartment['code'];?>"><?php echo $this->lang->line($apartment['category']).' '.$this->lang->line($apartment['type']);?></a>
                    </li>
                    <li class="breadcrumb-item active"><?=$this->lang->line('Add room');?>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          
        </div>
<div class="content-body"><!-- Basic Inputs start -->
<section id="basic-input" >
    <form class="text-center" action="<?=base_url('admin/apartment_room_type_create/')?><?php echo $apartment['code'];?>" method="POST">
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
                <label for="room_type"><?=$this->lang->line('Room type');?>:</label>
               <select class="form-control" id="room_type" name="room_type">
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
				<input type="number" class="form-control" name="single_bed" value="0" min="0" required id="single_bed" placeholder="<?=$this->lang->line('single bed');?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="form-group">
                <label for="double_bed" class=""><?=$this->lang->line('double bed');?>:</label>
				<input type="number" class="form-control" name="double_bed" value="0" min="0" required id="double_bed" placeholder="<?=$this->lang->line('double bed');?>">
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
                <label for="area" class=""><?=$this->lang->line('Area');?> - <?=$this->lang->line('M');?> <sup>2</sup>:</label>
				<input type="number" class="form-control" name="area" required id="area" placeholder="<?=$this->lang->line('Area');?>">
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12 mb-1">
              <div class="form-group">
                <label for="currency"><?=$this->lang->line('Price');?> <?=$this->lang->line('without breakfast');?></label>
                <select name="currency">
											    <option value="GEL" selected="selected">GEL</option>
											    <option value="USD">USD</option>
											    <option value="EUR">EUR</option>
											</select>
					<input type="number" id="price" name="price" min="0"  class="form-control" placeholder="<?=$this->lang->line('Price');?>" required>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12 mb-1">
              <div class="form-group">
                <label for="price_with_breakfast"><?=$this->lang->line('Price');?> <?=$this->lang->line('with breakfast');?></label>
                <input type="number" id="price_with_breakfast" name="price_with_breakfast"  class="form-control" placeholder="<?=$this->lang->line('Price');?> <?=$this->lang->line('with breakfast');?>" min="0" value="0" required>
              </div>
            </div>
          </div>
        
          	<div class="divv">
                                     <div class="div_table" > 
	                                    <table cellspacing="0" cellpadding="0">
	                                    	   <tr>
                                	                <td ><?=$this->lang->line('Room service');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="room_service" name="room_service" value="1">
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
                                	                <td ><?=$this->lang->line('Iron');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="iron" name="iron" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Hair dryer');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="hair_dryer" name="hair_dryer" value="1">
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
                                	                <td ><?=$this->lang->line('Separate bathroom');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="separate_bathroom" name="separate_bathroom" value="1">
                                                        <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                	            </tr>
                                	            <tr>
                                	                <td ><?=$this->lang->line('Separate toilet');?></td>
                                	                <td><label class="containeri">
                                                        <input type="checkbox" id="separate_toilet" name="separate_toilet" value="1">
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
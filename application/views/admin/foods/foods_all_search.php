<style>
     ul.pagination li a
     {
         color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
     }
 </style>
 <div class="app-content content ">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper">
        
       <div class="content-header row">
          <div class="content-header-left col-md-9 col-12 mb-2">
            <div class="row breadcrumbs-top">
              <div class="col-12">
                <h2 class="content-header-title float-left mb-0"><?=$this->lang->line('foods');?></h2>
                <div class="breadcrumb-wrapper">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?=base_url('admin/index');?>"><?=$this->lang->line('Home');?></a>
                    </li>
                    <li class="breadcrumb-item"><a href="<?=base_url('admin/foods_all');?>"><?=$this->lang->line('Foods');?></a>
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
           <section id="basic-input">
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
           <h4 class="card-title"><?=$this->lang->line('Filter');?></h4>
        </div>
        <div class="card-body">
        <form class="text-center" action="<?=base_url('admin/foods_all_search')?>" method="POST">
          <div class="row"> 
          
           <div class="col-lg-4 col-md-6 col-12">
                    <label>ID :</label>
                    <input type="text" class="form-control dt-input"  id="code" name="code" placeholder="ID..." >
            </div>
                 
           <div class="col-xl-4 col-md-6 col-12">
                     <div class="form-group">
                <label for="category"><?=$this->lang->line('Category');?> :</label>
                 <select class="form-control" id="category" name="category">
                     <option value="0"><?=$this->lang->line('Any');?></option>
					<?php if (!empty($foods_categories)) foreach ($foods_categories as $foods_category): ?>
                    <option value="<?php echo $foods_category['category_en'];?>"><?php echo $foods_category['category_'.$this->lang->line('lan')];?></option>
                    <?php endforeach; ?>
                    </select>
              </div>
            </div>
           <div class="col-xl-4 col-md-6 col-12">
                <div class="form-group">
                    <label for="category"><?=$this->lang->line('Status');?> :</label>
                    <select class="form-control" id="status" name="status">
                        <option value="0"><?=$this->lang->line('Any');?></option>
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
<section class="app-user-list">

  
  <div class="card" style="overflow-x:scroll;">
      
    <div class="card-datatable table-responsive pt-0">
        <div class="dt-buttons btn-group flex-wrap"><button class="btn add-new btn-primary mt-50" tabindex="0" aria-controls="DataTables_Table_0" type="button" data-toggle="modal" data-target="#modals-slide-in"><span> <a href="<?=base_url('admin/foods_create')?>" style="color:white;"><?=$this->lang->line('Add new');?></a></span></button> 
        </div>
        <br>
        <br>
        </div>
      <h2 style="color:black;"><?=$this->lang->line('Found');?>  - <?php echo $quantity; ?></h2>
      <table class="user-list-table table">
        <thead class="thead-light">
          <tr>
             <th>ID</th>
              <th><?=$this->lang->line('Title');?></th>
              <th><?=$this->lang->line('Category');?></th>
              <th><?=$this->lang->line('Code');?></th>
              <th><?=$this->lang->line('Status');?></th>
               <th><?=$this->lang->line('Date');?></th>
              <th><?=$this->lang->line('View');?></th>
              <th><?=$this->lang->line('Action');?></th>
          </tr>
        </thead>
        <tbody>
            <?php $r=1;?>
            	<?php if (!empty($foods_all)) foreach ($foods_all as $foods_item): ?>
					<tr>
						<td> <?php echo $r;?></td>
						<td><a href="<?=base_url('admin/foods_edit/');?><?php echo $foods_item['code']; ?>" style="color:#007bff;"><?php echo $foods_item[$this->lang->line('title_lang')];?></a></td>
						<td><a href="<?=base_url('admin/foods_edit/');?><?php echo $foods_item['code']; ?>"><?php echo $this->lang->line($foods_item['category']); ?></a></td>
						<td><a href="<?=base_url('admin/foods_edit/');?><?php echo $foods_item['code']; ?>"><?php echo $foods_item['code']; ?></a></td>
						<td><a href="#" <?php if($foods_item['status']=="Canceled") echo "style='color:#FFE633;'"; if($foods_item['status']=="Expired") echo "style='color:#ff0000;'"; if($foods_item['status']=="Active") echo "style='color:green;'";?>><?php echo $this->lang->line($foods_item['status']); ?></a></td>
						<td><?php echo $foods_item['date']; ?></td>
						<td><?php echo $foods_item['view']; ?></td>
						<td><a href="<?=base_url('admin/user_foods_delete/');?><?php echo $foods_item['code']; ?>" style="color:red;">
											    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 font-small-4 mr-50" style="color:red;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
											    <?php echo $this->lang->line('Delete'); ?></a></td>
                    </tr>
				<?php $r++;?>
				<?php endforeach; ?>
        </tbody>
           
      </table>
       <div class="d-flex justify-content-between mx-2 row mb-1">
            <div class="col-sm-12 col-md-6">
                <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                    <ul class="pagination">
                        <?php echo $links; ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal to add new user starts-->
    <!-- Modal to add new user Ends-->
  </div>
  <!-- list section end -->
</section>
<!-- users list ends -->

        </div>
      </div>
    </div>
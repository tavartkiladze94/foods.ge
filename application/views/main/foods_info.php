<section class="breadcrumb-section set-bg" data-setbg="<?=base_url();?>assets/img/product/juice-2.jpg" style="background-image: url('<?=base_url();?>assets/img/product/juice-2.jpg');">
<div class="row"style=" width: 100%;">
<div class="col-lg-12 text-center">
<div class="breadcrumb__text">
<h2 style="letter-spacing:3px;"><a href="<?=base_url('main/index');?>" style="color: white;">FOODS.ISHOVE.GE</a></h2>
<div class="breadcrumb__option">
<a href="<?=base_url('main/index');?>"><?=$this->lang->line('Home');?></a>
</div>
</div>
</div>
</div>
</div>
</section>

<section class="product-details spad">
<div class="container">
<div class="row">
<div class="col-lg-6 col-md-6">
<div class="product__details__pic">
<div class="product__details__pic__item">
<img class="product__details__pic__item--large" src="<?=base_url();?>assets/images/foods/<?php echo $foods_info['file_name'];?>" alt>
</div>

</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="product__details__text">
<h3><?php echo $foods_info['name_'.$this->lang->line('lan')];?></h3>
<div class="product__details__rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-half-o"></i>
<!-- <span>(<?php echo $foods_info['view'];?> <?=$this->lang->line('View');?>)</span> -->
</div>

<div class="product__details__price">
    <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.foods.ishove.ge/main/foods_info/<?php echo $foods_info['code'];?>" target="_blank">
     <img src="<?=base_url();?>assets/img/share.png" style="width:80px;height:25px;"/>
</a>
</div>
<div class="product__details__price"><?php echo $foods_info['category'];?></div>

<div class="product__details__quantity">
<br>
<h5> <b><?=$this->lang->line('Ingredients');?> : </b> 
 <?php if(!empty($foods_ings)) foreach ($foods_ings as $foods_ings_item): ?>
    <span class="ing_a" style="background-color: #7fad39; color:white;" ><?php echo $foods_ingredients[$foods_ings_item['ingredient_id']-1]['ingredient_'.$this->lang->line('lan')];?></span>
 <?php endforeach; ?>
</div>
</div>
</div>
<div class="col-lg-12">
<div class="product__details__tab">
<ul class="nav nav-tabs" role="tablist">
<li class="nav-item">
<a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true"><?=$this->lang->line('Description');?></a>
</li>
</ul>
<div class="tab-content">
<div class="tab-pane active" id="tabs-1" role="tabpanel">
<div class="product__details__tab__desc">
<?php echo $foods_info['description'];?>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<!DOCTYPE html>
<html lang="ge">
<head>

<meta charset="UTF-8">
<meta name="description" content="Ogani Template">
<meta name="keywords" content="Ogani, unica, creative, html">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>ონლაინ მაღაზია</title>
<meta property="og:url"           content="https://www.foods.ishove.ge/main/foods_info/<?php if(!empty($og_code)) echo $og_code;?>" />
<meta property="og:type"          content="website" />
<meta property="og:title"         content="<?php echo $og_title;?>" />
<meta property="og:description"   content="<?php echo $og_description;?>" />
<meta property="og:image"         content="<?=base_url();?>assets/images/foods/<?php echo $og_image;?>" />
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet">

<link rel="stylesheet" href="<?=base_url();?>assets/css/bootstrap.min.css" type="text/css">

<link rel="stylesheet" href="<?=base_url();?>assets/css/font-awesome.min.css" type="text/css">
<link rel="stylesheet" href="<?=base_url();?>assets/css/elegant-icons.css" type="text/css">
<link rel="stylesheet" href="<?=base_url();?>assets/css/nice-select.css" type="text/css">
<link rel="stylesheet" href="<?=base_url();?>assets/css/jquery-ui.min.css" type="text/css">
<link rel="stylesheet" href="<?=base_url();?>assets/css/owl.carousel.min.css" type="text/css">
<link rel="stylesheet" href="<?=base_url();?>assets/css/slicknav.min.css" type="text/css">
<link rel="stylesheet" href="<?=base_url();?>assets/css/style.css" type="text/css">
<style >

	.header__menu ul li a{

		letter-spacing: 1px;
  }
  
  .lang_ul li
  {
      float: left;
      margin-left: 10px;
      list-style-type: none;
  }
  .lang_ul li a
  {
      color: black!important;
  }
  .ing_a
  {
      font-size: 14px;
      display: inline-block;
      margin: 3px;
      padding: 4px;
      border-radius: 4px;
      background-color: silver;
      color: black;
      line-height: 20px;
      
      
  }
  .ing_a:hover
  {
      color: black;
      cursor: pointer;
  }
  .product__item__pic:hover
  {
      border: 2px solid #7fad39;
  }
  .product__item
  {
      border-bottom: 2px dashed #7fad39;
  }
  h6{
      text-align:center!important;
  }
  .product__item__text h6 a, .product__item__text h5 a
  {
      color: black!important;
  }
  .sidebar__item {
      max-height:700px;
  }
  ::-webkit-scrollbar {
     width: 10px;
  }
  ::-webkit-scrollbar-thumb {
  background: #7fad39; 
  }
  .search_result_form
  {

      width : 60%;
      min-height : 150px;
      max-height : 400px;
      position : absolute;
      z-index  : 999999;
      background : #fffffff0;
      overflow-y :  scroll;
      top: 60px;
      margin-bottom:30px;
  }
  .search_result_form:hover
  {
      cursor: pointer;
  }
  ._6b
  {
      font-size:20px!important;
      height: 25px;
  }
  @media (min-width: 992px)
  {
    .col-lg-4 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%!important;
    max-width:25%!important;
    }
  }
  @media (max-width:768px)
  {
  .sidebar__item {
    max-height:200px;
  }
}
</style>
</head>


<body>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6881340137399646"
     crossorigin="anonymous"></script>
     <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/<?=$this->lang->line('en_US');?>/sdk.js#xfbml=1&version=v18.0&appId=3407766569472627" nonce="f4vOivNL"></script>
 
<section class="hero">
<div class="container">
<div class="row">
<div class="col-lg-3">
<div class="hero__categories" >
<div class="hero__categories__all">
<i class="fa fa-bars"></i>
<span style="font-size: 15px;"><?php echo $this->lang->line('ALL CATEGORIES');?> </span>
</div>
<ul style="display:none; position: absolute!important; background: white; z-index: 999; max-height: 450px; overflow-y:scroll;">
    <?php if(!empty($foods_categories)) foreach ($foods_categories as $category_item): ?>
<li><a href="<?=base_url('main/index/');?><?php echo $category_item['id'];?>"><?php echo $category_item['category_'.$this->lang->line('lan')];?> </a></li>
<?php endforeach; ?>
</ul>
</div>
</div>
<div class="col-lg-9">
<div class="hero__search">
<div class="hero__search__form"  id="search_result">
<form action="#" >

<input type="text" id="foods_search" placeholder="<?php echo $this->lang->line('So, what are we looking for?');?>">
<button type="submit" class="site-btn"><?php echo $this->lang->line('Search');?></button>
</form>
</div>
<div style="float: right; margin-top:10px;">
<ul class="lang_ul">
    <li><a href="<?=base_url('main/setLanguage/ge/');?><?php echo $this->uri->segment(2); ?>/<?php if($this->uri->segment(3) !== FALSE) echo $this->uri->segment(3); ?>/<?php if($this->uri->segment(4) !== FALSE) echo $this->uri->segment(4); ?>/<?php if($this->uri->segment(5) !== FALSE) echo $this->uri->segment(5); ?>/<?php if($this->uri->segment(6) !== FALSE) echo $this->uri->segment(6); ?>/<?php if($this->uri->segment(7) !== FALSE) echo $this->uri->segment(7); ?>">GE </a> </li>
    <li><a href="<?=base_url('main/setLanguage/ru/');?><?php echo $this->uri->segment(2); ?>/<?php if($this->uri->segment(3) !== FALSE) echo $this->uri->segment(3); ?>/<?php if($this->uri->segment(4) !== FALSE) echo $this->uri->segment(4); ?>/<?php if($this->uri->segment(5) !== FALSE) echo $this->uri->segment(5); ?>/<?php if($this->uri->segment(6) !== FALSE) echo $this->uri->segment(6); ?>/<?php if($this->uri->segment(7) !== FALSE) echo $this->uri->segment(7); ?>" >RU</a></li>
    <li><a href="<?=base_url('main/setLanguage/en/');?><?php echo $this->uri->segment(2); ?>/<?php if($this->uri->segment(3) !== FALSE) echo $this->uri->segment(3); ?>/<?php if($this->uri->segment(4) !== FALSE) echo $this->uri->segment(4); ?>/<?php if($this->uri->segment(5) !== FALSE) echo $this->uri->segment(5); ?>/<?php if($this->uri->segment(6) !== FALSE) echo $this->uri->segment(6); ?>/<?php if($this->uri->segment(7) !== FALSE) echo $this->uri->segment(7); ?>" >EN</a></li>
     <li style="margin-left:20px;"> <a href="<?=base_url('admin/login');?>"> <?php if(($this->session->has_userdata('logged_in'))) echo $this->session->userdata('name').' ';?><?=$this->lang->line('Log in');?></a></li>    
</ul>
</div>
</div>

</div>
</div>
</div>
</section>


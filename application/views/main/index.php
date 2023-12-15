
<section class="breadcrumb-section set-bg" data-setbg="<?=base_url();?>assets/img/product/juice-2.jpg" style="background-image: url('<?=base_url();?>assets/img/product/juice-2.jpg');">
<div class="row"style=" width: 100%;">
<div class="col-lg-12 text-center">
<div class="breadcrumb__text">
<h2 style="letter-spacing:3px;"><a href="<?=base_url('main/index');?>" style="color: white;">FOODS.ISHOVE.GE</a></h2>
<div class="breadcrumb__option">
<a href="<?=base_url('main/index');?>">-<?=$this->lang->line('Home');?></a>
</div>
</div>
</div>
</div>
</div>
</section>


<section class="product spad">
<div class="container">
<div class="row">
<div class="col-lg-3 col-md-5">
<div class="sidebar">
<h4><?=$this->lang->line('Ingredients');?> </h4>
<div class="sidebar__item" style="overflow-y: scroll;">

    <?php if(!empty($foods_ingredients)) foreach ($foods_ingredients as $foods_ingredients_item): ?>
    		<span class="ing_a"  id="<?php echo $foods_ingredients_item['id'];?>" onclick="init(this.id)"><?php echo $foods_ingredients_item['ingredient_'.$this->lang->line('lan')];?></span>

	<?php endforeach; ?>

</div>



</div>
</div>
<div class="col-lg-9 col-md-7">

<div class="filter__item">
<div class="row">

<div class="col-lg-4 col-md-4">
<div class="filter__found">
<h1 style="color: black!important; font-size:30px;font-weight:700;"> <?=$this->lang->line('Result');?> : <span id="result_n"><?php echo $count_foods;?></span></h6>

</div>
</div>

</div>
</div>
<div class="row" id="foods_list">
<?php if (!empty($foods)) foreach ($foods as $foods_item): ?>
<div class="col-lg-4 col-md-6 col-sm-6">
                <div class="product__item">
                    <div class="product__item__pic" style="background-image: url('<?=base_url();?>assets/images/foods/<?php echo $foods_item['file_name'];?>'); background-size: 100% 100%;">
                        <ul class="product__item__pic__hover">
                           <li><a href="#"><i class="fa fa-heart"></i></a></li>
                           <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                           <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        
                       <h6><a href="https://foods.ishove.ge/main/foods_info/<?php echo $foods_item['code'];?>"><?php echo $foods_item['category'];?> </a></h6>
                       <?php if($foods_item['samarxvo'] == 1) echo '<h6> '.$this->lang->line('Fasting').' </h6> '; if($foods_item['dieturi'] == 1) echo ' <h6>'.$this->lang->line('Dietary').' </h6>'; else{echo '<br>';}?>
                       <h5><a href="https://foods.ishove.ge/main/foods_info/<?php echo $foods_item['code'];?>"><?php echo $foods_item['name_'.$this->lang->line('lan')];?></a></h5>
                    </div>
                    <br>
                </div>
              </div>
<?php endforeach; ?>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>

var  ingredients=[];
function init(objj)
{
    $("#result_n").empty();
    $("#foods_list").empty();
    var ins_ingr = [];
    var aa = document.getElementById(objj);
    if(ingredients.includes(objj))
    {
        var n = ingredients.indexOf(objj);
        ingredients.splice(n,1);
        aa.style.backgroundColor ="silver";
        aa.style.color = "black";
        
    }
    else
    { 
        ingredients.push(objj);
        aa.style.backgroundColor ="#7fad39";
        aa.style.color = "white";
        
    }

    var foods = [];
    <?php if (!empty($foods_all)) foreach ($foods_all as $foods_item): ?>
    var tmp = {'id':"<?php echo $foods_item['id'];?>", 'name':"<?php echo $foods_item['name_'.$this->lang->line('lan')];?>", 'file_name': "<?php echo $foods_item['file_name'];?>", 'category':"<?php echo $foods_item['category'];?>",'code':"<?php echo $foods_item['code'];?>"};
	foods.push(tmp);
    <?php endforeach; ?>
    if(ingredients.length != 0)
    {
    <?php if (!empty($foods_ings)) foreach ($foods_ings as $foods_ings_item): ?>
    var tmp1 = {'ingredient_id':"<?php echo $foods_ings_item['ingredient_id'];?>", 'foods_code': "<?php echo $foods_ings_item['foods_code'];?>"};
	ins_ingr.push(tmp1);
	<?php endforeach; ?>
	
	for(var j = 0; j < ingredients.length; j++)
    {
        var tmp_arr= [];
        for(var l = 0; l < ins_ingr.length; l++)
        {
            if(ingredients[j] ==  ins_ingr[l].ingredient_id)
            {
                tmp_arr.push(ins_ingr[l].foods_code);
            }
        }
        var tmp_arr1 = [];
        var r=0;
        for(var n=0; n< tmp_arr.length; n++)
        {
            for(var m=0; m< ins_ingr.length; m++)
            {
                if(tmp_arr[n] ==  ins_ingr[m].foods_code)
                {
                    let tt = {'ingredient_id' : ins_ingr[m].ingredient_id, 'foods_code' : ins_ingr[m].foods_code};
                    tmp_arr1.push(tt);
                }
                
            }
        }
        
        ins_ingr = tmp_arr1;
        
    }
    var rr = ins_ingr.map(item => item.foods_code)
    .filter((value, index, self) => self.indexOf(value) === index);
    $("#foods_list").empty();
    var n = 0;
    for(var t=0; t<rr.length; t++)
     {
        for(var i=0; i<foods.length; i++)
         {
            if(rr[t] == foods[i].code)
            { let tt ="";  let ttt= ""; 
              if(foods[i].samarxvo == 1) tt = foods[i].samarxvo;
              if(foods[i].dieturi == 1) ttt = foods[i].dieturi;
              $("#foods_list").append('<div class="col-lg-4 col-md-6 col-sm-6">'+
                '<div class="product__item">'+
                   '<div class="product__item__pic set-bg" style="background-image: url(<?=base_url();?>assets/images/foods/'+ foods[i].file_name+')">'+
                       '<ul class="product__item__pic__hover">'+
                          '<li><a href="#"><i class="fa fa-heart"></i></a></li>'+
                          '<li><a href="#"><i class="fa fa-retweet"></i></a></li>'+
                          '<li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>'+
                       '</ul>'+
                   '</div>'+
                   '<div class="product__item__text">'+
                       '<h6><a href="https://foods.ishove.ge/main/foods_info/'+foods[i].code+'">'+ foods[i].category+'</a></h6>'+
                       '<h6>'+ tt+ ' '+ ttt+ '</h6>'+
                       '<h5><a href="https://foods.ishove.ge/main/foods_info/'+foods[i].code+'">'+foods[i].name+'</a></h5>'+
                   '</div><br>'+
               '</div>'+
              '</div>');
              n++;
            }
        }
     }
     $("#result_n").append(n);
    }
    else if(ingredients.length ==0)
    {
        for(var i=0; i<foods.length; i++)
         {
             let tt = ttt= ""; 
              if(foods[i].samarxvo == 1) tt = foods[i].samarxvo;
              if(foods[i].dieturi == 1) ttt = foods[i].dieturi;
             $("#foods_list").append('<div class="col-lg-4 col-md-6 col-sm-6">'+
                '<div class="product__item">'+
                   '<div class="product__item__pic set-bg" style="background-image: url(<?=base_url();?>assets/images/foods/'+ foods[i].file_name+')">'+
                       '<ul class="product__item__pic__hover">'+
                          '<li><a href="#"><i class="fa fa-heart"></i></a></li>'+
                          '<li><a href="#"><i class="fa fa-retweet"></i></a></li>'+
                          '<li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>'+
                       '</ul>'+
                   '</div>'+
                   '<div class="product__item__text">'+
                       '<h6><a href="https://foods.ishove.ge/main/foods_info/'+foods[i].code+'">'+ foods[i].category+'</a></h6>'+
                       '<h6>'+ tt+ ' '+ ttt+ '</h6>'+
                       '<h5><a href="https://foods.ishove.ge/main/foods_info/'+foods[i].code+'">'+foods[i].name+'</a></h5>'+
                   '</div><br>'+
               '</div>'+
              '</div>');
        }
        $("#result_n").append(foods.length);
    }
    
}
</script>
<div class="product__pagination">
<?php echo $links; ?>
</div>
</div>
</div>
</div>
</section>

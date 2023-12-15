<style>
    .ing
  {
      font-size: 18px;
      display: inline-block;
      margin: 5px;
      padding: 10px;
      border-radius: 4px;
      background-color: silver;
      color: black;
      line-height: 20px;
      
      
  }
</style>
    <!-- BEGIN: Content-->
    <div class="app-content content ">
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-9 col-12 mb-2">
            <div class="row breadcrumbs-top">
              <div class="col-12">
                <h2 class="content-header-title float-left mb-0"><?=$this->lang->line('Home');?></h2>
                <div class="breadcrumb-wrapper">
                  <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="<?=base_url('admin/index')?>"><?=$this->lang->line('Home');?></a>
                    </li>
                    <li class="breadcrumb-item"><a href="<?=base_url('admin/foods_all');?>"><?=$this->lang->line('Foods');?></a>
                    </li>
                  
                    
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
<div class="content-body"><!-- Blog Edit -->
<div class="blog-edit-wrapper">
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-start">
            
            <div class="author-info">
              <h2 class="mb-25"><?=$this->lang->line('Create');?></h2>
            </div>
            <br>
            <br>
            <br>
          </div>
          <!-- Form -->
          <?php echo form_open_multipart('admin/foods_create');?>
            <div class="row">
              <div class="col-md-6 col-12">
                <div class="mb-2">
                  <label class="form-label" for="name_ge"><?=$this->lang->line('Name');?> GE: </label>
                  <input required type="text" id="name_ge" name="name_ge"  class="form-control" placeholder="<?=$this->lang->line('Name');?> GE" />
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="mb-2">
                  <label class="form-label" for="name_ge"><?=$this->lang->line('Name');?> EN:</label>
                  <input required type="text" id="name_en" name="name_en"  class="form-control" placeholder="<?=$this->lang->line('Name');?> EN" />
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="mb-2">
                  <label class="form-label" for="name_ge"><?=$this->lang->line('Name');?> RU:</label>
                  <input required type="text" id="name_ru" name="name_ru"  class="form-control" placeholder="<?=$this->lang->line('Name');?> RU" />
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="mb-2">
                  <label class="form-label" for="category"><?=$this->lang->line('Category');?></label>
                  <select  class="form-control" name="category" id="category" >
                    <?php if (!empty($foods_categories)) foreach ($foods_categories as $foods_category): ?>
                    <option value="<?php echo $foods_category['category_ge'];?>"><?php echo $foods_category['category_'.$this->lang->line('lan')];?></option>
                    <?php endforeach; ?>
                  </select>
                </div>
              </div>
              <div class="col-md-6 col-12">
               <div class="ing">სამარხვო
                      <label class="containeri">
                        <input type="checkbox"  name="samarxvo" value="1">
                        <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="ing">დიეტური
                      <label class="containeri">
                        <input  type="checkbox"  name="dieturi" value="1">
                        <span class="checkmark"></span>
                        </label>
                    </div>
                     <div class="ing">ვეგეტარიანული
                      <label class="containeri">
                        <input type="checkbox"  name="vegetarianuli" value="1">
                        <span class="checkmark"></span>
                        </label>
                    </div>
              </div>
             <div class="col-md-6 col-12">
                <div class="mb-2">
                  <label class="form-label" for="duration">მოძებნე ინგრედიენტი</label>
                  <input type="text" id="ingredient_search"  min="0" class="form-control" placeholder="ძებნა"/>
                </div>
              </div>
              
              <div style="width:100%;margin: 10px 15px; max-height:260px; overflow-y: scroll;" id="ingredients_div">
                  <?php if(!empty($foods_ingredients)) foreach ($foods_ingredients as $ingredient): ?>
                    <div class="ing"><span><?php echo $ingredient['ingredient_'.$this->lang->line('lan')];?></span> 
                      <label class="containeri">
                        <input type="checkbox" id="ing_<?php echo $ingredient['id'];?>"  name="ing_<?php echo $ingredient['id'];?>" value="1">
                        <span class="checkmark"></span>
                        </label>
                    </div>
                  <?php endforeach; ?>
              </div>
             
              <div class="col-12">
                <div class="mb-2">
                  <div id="blog-editor-wrapper" >
                    <div id="title_ge" >
                      
                      <textarea  id="editor" name="description" style="visibility: hidden;" >
                        
                     </textarea>
                     
                  
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="row">
                <div class="col-12 mb-2">
                 
                <div class="border rounded p-2">
                  <h4 class="mb-1"><?=$this->lang->line('Image');?></h4>
                  <div class="d-flex flex-column flex-md-row">
                    <img src="<?=base_url()?>/assets/images/foods/empty.png" id="blog-feature-image" class="rounded me-2 mb-1 mb-md-0" width="170" height="110" >
                    <div class="featured-info">
                      <p class="my-50">
                        <a href="#" id="blog-image-text"><?=base_url()?>assets/images/foods/</a>
                      </p>
                      <div class="d-inline-block">
                        <input class="form-control" type="file" name="file_name" id="blogCustomFile" accept="image/*" >
                      </div>
                    </div>
                  </div>
                </div>
             
              </div>
              <div class="col-12 mt-50" >
                <button class="btn btn-primary me-1" id="send" type="submit"><?=$this->lang->line('Save');?></button>
              </div>
            </div>
            </form>
             
          <!--/ Form -->
        </div>
      </div>
    </div>
  </div>
</div>
<!--/ Blog Edit -->

        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="<?=base_url();?>assets/admin/js/ckeditorr.js"></script>
  <script src="<?=base_url();?>assets/admin/js/ckeditor_main.js"></script>
  
<script>

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.style.position = "absolute";
      a.style.zIndex  = "999";
      a.style.width = "200px";
      a.style.height = "200px";
      a.style.overflowY = "scroll";
      a.style.backgroundColor = "white";
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].name.substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].name.substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i].ing_id + "'>";
          b.innerHTML += "<input type='hidden' value='" + arr[i].name + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[1].value;
              document.getElementById("ing_"+this.getElementsByTagName("input")[0].value).checked = true;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
var ingredients =[];
<?php foreach ($foods_ingredients as $ingredient_item): ?>
/*An array containing all the country names in the world:*/
 var aaa= {ing_id: "<?php echo $ingredient_item['id'];?>", name: "<?php echo $ingredient_item['ingredient_ge'];?>"} ;
 ingredients.push(aaa);
<?php endforeach; ?>
var unique = ingredients.filter( onlyUnique );

autocomplete(document.getElementById("ingredient_search"), unique);


</script>
  
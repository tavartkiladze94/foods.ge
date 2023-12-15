<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Tbilisi');
class Main extends CI_Controller {
   
   
	function  __construct() 
	{
	      parent::__construct();
	  	
    	$this->load->model("main_model");
    	$this->load->helper('form');
        $this->load->library('session');
        $this->load->helper('cookie');
        $this->load->library("pagination");
        
        if(!$this->session->has_userdata('lan')) 
        	$this->session->set_userdata('lan', 'ge'); 
         
		 
	 	 $this->lang->load('main', $this->session->userdata('lan'));
	}

    public function main()
	{
	            redirect(base_url("main/index")); 

	}

	public function index($idd = '')
    {
        
        $array = array();
        $arr = array();
        $data['count_foods'] =0;
        $view_numb = 0;
	    $arr["page"] = "foods";
	    $vieww = $this->main_model->get_page_view_count($arr["page"]);
	    $view_numb = $vieww[0]->view;
	    $arr["view"] = $view_numb+1;
	    $view_update = $this->main_model->update_page_view($arr);
	    $arr["ip_addr"] = $this->input->ip_address();
	    $history_view_update = $this->main_model->update_page_history_view($arr);
		$config["per_page"] = 120;
		$page = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;
        $data['foods'] = array();
        if((!empty($idd)) || ($idd!=0)){
            $cat_id = $this->main_model->get_foods_category_with_id($idd);
            $data['foods'] = $this->main_model->get_foods_with_category($cat_id['category_ge']);
	        $data['count_foods'] = count($this->main_model->get_foods_width_category_length($cat_id['category_ge']));
        }
        else{
	       $data['foods'] = $this->main_model->get_foods($config["per_page"], $page);
	       $data['count_foods'] = count($this->main_model->get_foods_length());
        }
	    $data['foods_all'] = $this->main_model->get_foods_all();
	    $config = array();
        $config["base_url"] = base_url() . "main/index";
        $config["total_rows"] = $data['count_foods'];
        $config["per_page"] = 120;
        $config["uri_segment"] = 3;
        $config["num_links"] = 2;
        $config['first_url'] = base_url() . 'main/index/0';
        $config['first_link'] = '1';
        $config['last_link'] = ceil($data['count_foods'] /$config["per_page"]);

        $this->pagination->initialize($config);
        $data["links"] = $this->pagination->create_links();
        $data['foods_categories'] = $this->main_model->get_foods_categories();
        $data['foods_ingredients'] = $this->main_model->get_foods_ingredients();
	    $data['foods_ings'] = $this->main_model->get_foods_inserted_ingredients();
	    $data['og_title'] = 'აირჩიე ინგრედიენტი მოამზადე კერძი ';
	    $data['og_description'] = 'აირჩიე ინგრედიენტი მოამზადე კერძი ';
	    $data['og_image'] = '';
		$this->load->view('layouts/header', $data);
		$this->load->view('main/index', $data);
		$this->load->view('layouts/footer',$data);
	}
	public function foods_search()
    {
      $this->load->library("pagination");
      $config["per_page"] = 10;
        $arrayy = [];
        $raod = 0;
        $link = "";
        $mas = [];
      if($this->uri->segment(3))
        { 
            $i=4;
       
         while($this->uri->segment($i) != "")
        {
            
            $mas[$this->uri->segment($i-1)] = $this->uri->segment($i);
            $raod = $raod +2;
            $link =$link."/".$this->uri->segment($i-1)."/".$this->uri->segment($i);
            $i = $i +2;
        }
        }
              
      else
     {
        if( $this->input->post('category') != "0") 
      {         
          $arrayy['category'] = $this->input->post('category');
          $raod = $raod+2;
          $link = $link."/category/".$this->input->post('category');
      
      
      }
      
     }
        $page = ($this->uri->segment(3+$raod)) ? $this->uri->segment(3+$raod) : 0;
        if(count($arrayy) != "0"){
        $data['foods_list_search'] = $this->main_model->get_foods_search($arrayy, $config["per_page"], $page);
        $raodenoba = count($this->main_model->get_foods_length($arrayy));
        }
      if(count($mas) != "0")
      {
      $data['foods_list_search'] = $this->main_model->get_foods_search($mas, $config["per_page"], $page);
      $raodenoba = count($this->main_model->get_foods_length($mas));
      }
      $config = array();
        $config["base_url"] = base_url() . "main/foods_search/".$link;
        $config["total_rows"] = $raodenoba;
        $config["per_page"] = 10;
        $config["uri_segment"] = 5;
        $choice = $config["total_rows"] / $config["per_page"];
        $config['first_tag_open'] = '<li>';
        $config['first_tag_close'] = '</li>';
        $config['prev_link'] = '<img src="'.base_url('assets/images/icons/left-1.png').'" alt="">';
        $config['next_link'] = '<img src="'.base_url('assets/images/icons/right-1.png').'" alt="">';
        $config['num_tag_open'] = '<li>';
        $config['num_tag_close'] = '</li>';
        $config['next_tag_open'] = '<li class="next">';
        $config['next_tag_close'] = '</li>';

        $config['prev_tag_open'] = '<li class="prev">';
        $config['prev_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li class="active"><a class="waves-effect">';
        $config['cur_tag_close'] = '</a></li>';
        $this->pagination->initialize($config);
        $data["linkss"] = $this->pagination->create_links();
      $data['count_foods_list'] = $raodenoba;
     
    $this->load->view('layouts/header');
    $this->load->view('main/foods/foods_search', $data);
    $this->load->view('layouts/footer');
  }
	public function foods_info($code)
	{
	    $vieww = array();
	    $vieww = $this->main_model->get_foods_view_count($code);
	    $view_numb = 0;
	    $view_numb = $vieww[0]->view;
	    $view_numb = $view_numb+1;
	    $view_update = $this->main_model->update_foods_view($code, $view_numb);
	    
		$data['foods_info'] = $this->main_model->get_foods_info($code);
		$data['code'] = $code;
		$data['foods_categories'] = $this->main_model->get_foods_categories();
		$data['foods_ingredients'] = $this->main_model->get_foods_ingredients_single();
	    $data['foods_ings'] = $this->main_model->get_foods_inserted_ingredients_single($code);
	    $data['foods_all'] = $this->main_model->get_foods_all();
	    $dsc = $this->lang->line('Ingredients').': ';
	    foreach ($data['foods_ings'] as $foods_ings_item)
	    {
	        $dsc .= $data['foods_ingredients'][$foods_ings_item['ingredient_id']-1]['ingredient_'.$this->lang->line('lan')].', ';
	    }
	    $data['og_code'] = $code;
	    $data['og_image'] = $data['foods_info']['file_name'];
	    $data['og_title'] = $data['foods_info']['name_'.$this->session->userdata('lan')];
	    $data['og_description'] = $dsc;
		$this->load->view('layouts/header',$data);
		$this->load->view('main/foods_info',$data);
		$this->load->view('layouts/footer',$data);
	}
	
	public function error_404()
	{
	   
		$this->load->view('layouts/header');
		$this->load->view('main/error_404');
		$this->load->view('layouts/footer');
	}
	   
    public function generateRandomNumber($length = 13) 
    {
	    $characters = '0123456789abc';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < $length; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }
	    return $randomString;
	}
	public function generateRandomString($length = 20) 
	{
	    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < $length; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }
	    return $randomString;
	}
	public function getLangId()
	{
		$lang = 'ge';
		if ($this->session->has_userdata('lan')) {
        	$lang = $this->session->lan;        
        }else {
			$lang = 'ge';
			$this->session->set_userdata('lan', $lang);
		}
		switch ($lang) {
			case 'en':
				return 1;
				break;
			case 'ge':
				return 2;
				break;
			case 'ru':
				return 3;
				break;
		
		
		}
	} 
	public function setLanguage($lang)
	{
		$this->session->set_userdata('lan', $lang);	
		redirect('main/'.$this->uri->segment(4).'/'.$this->uri->segment(5));
	   
	}
}
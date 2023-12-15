<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Tbilisi');
class Admin extends CI_Controller {

	public function __construct() {       
        parent::__construct();     
        $this->load->model("admin_model"); 
        $this->load->library('session');
        $this->load->helper('form');
        $this->load->library('pagination');
        $this->load->helper("file");
        $this->load->helper('url'); 
        $this->load->helper('url_helper');
        $this->load->helper('security');
        $this->load->library('user_agent');
       // $this->output->cache(2);
        $this->load->library('form_validation');
        $this->perPage = 4;
        if ($this->session->has_userdata('lan')) {
        	$idiom = $this->session->lan;
        		}else {
			$idiom = 'ge';
			$this->session->set_userdata('lan', $idiom);
		}		
		$this->lang->load('main', $idiom);
    }

	public function index()
	{	
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		redirect(base_url("admin/foods_all")); 
	}

	public function login()
	{            
		if($this->session->has_userdata('logged_in')) redirect(base_url("admin/foods_all")); 
        
		$this->load->view('layouts/header');
	    $this->load->view('admin/login');
	    $this->load->view('layouts/footer');
		
	}
	public function loginn()
	{
		$postData = $this->input->post();
        $validate = $this->admin_model->validate_login($postData);
        if ($validate && ($validate[0]->validation=='1')){
            $newdata = array(

                'name' => $validate[0]->name,
                'email'     => $validate[0]->email,
                'id' => $validate[0]->id,
                'code' => $validate[0]->code,
                'status' => $validate[0]->status,
                'logged_in' => TRUE
            );
            $this->session->set_userdata($newdata);
            redirect(base_url("admin/foods_all")); 
        }
        else{
            $data = array('alert' => true);        	
        	//$data['content'] = 'admin/login';
        	
		$this->load->view('layouts/header');
		$this->load->view('admin/login',$data);
		$this->load->view('layouts/footer');
        }		
	}

    ////////////////////////////////////////////////////////////foods
	public function foods_all()
    {
        if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
        $array = array();
		$config["per_page"] = 30;
		$data['quantity']= 0;
		$page = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;
	    $data['foods_all'] = $this->admin_model->get_foods($config["per_page"], $page);
	    $data['quantity'] = count($this->admin_model->get_foods_length());
	    $config = array();
        $config["base_url"] = base_url() . "admin/foods_all";
        $config["total_rows"] = $data['quantity'];
        $config["per_page"] = 30;
        $config["uri_segment"] = 3;
        $config["num_links"] = 2;
        $config['first_url'] = base_url() . 'admin/foods_all/0';
        $config['prev_link'] = '<img src="'.base_url('assets/images/icons/left-1.png').'" alt="">';
        $config['next_link'] = '<img src="'.base_url('assets/images/icons/right-1.png').'" alt="">';
        $config['first_link'] = '1';
        $config['last_link'] = ceil($data['quantity'] /$config["per_page"]);
        $config['cur_tag_open'] = '<a href="#" class="active">';
        $config['cur_tag_close'] = '</li>';
        $this->pagination->initialize($config);
        
        $data['foods_categories'] = $this->admin_model->get_foods_categories();
        $data["links"] = $this->pagination->create_links();
		$this->load->view('layouts/Aheader');
		$this->load->view('admin/foods/foods_all',$data);
		$this->load->view('layouts/Afooter');
	}
	public function foods_all_search()
	{
	    if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
	    
	    $config["per_page"] = 30;
        $arrayy = array();
        $raod = 0;
        $link = "";
        $mas = array();
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
       
	    if(	$this->input->post('code') != "") 
	    {	        
	        $arrayy['code'] = $this->input->post('code');
	        $raod = $raod+2;
	        $link = $link."/code/".$this->input->post('code');
	    }
        
	   if(	$this->input->post('category') != "0") 
	    {	        
	        $arrayy['category'] = $this->input->post('category');
	        $raod = $raod+2;
	        $link = $link."/category/".$this->input->post('category');
	    }
	    if(	$this->input->post('status') != "0") 
	    {	        
	        $arrayy['status'] = $this->input->post('status');
	        $raod = $raod+2;
	        $link = $link."/status/".$this->input->post('status');
	    }
	    $arrayy['reg_code'] = $this->session->userdata('code');
        
        }
        $page = ($this->uri->segment(3+$raod)) ? $this->uri->segment(3+$raod) : 0;
        if(count($arrayy) != "0"){
        $data['foods_all'] = $this->admin_model->get_foods_search($arrayy, $config["per_page"], $page);
	    $data['quantity'] = count($this->admin_model->get_foods_length($arrayy));
        }
	    if(count($mas) != "0")
	    {
	    $data['foods_all'] = $this->admin_model->get_foods( $config["per_page"], $page);
	    $data['quantity'] = count($this->admin_model->get_foods_length($mas));
	    }
	    $config = array();
        $config["base_url"] = base_url() . "admin/foods_all_search/".$link;
        $config["total_rows"] = $data['quantity'];
        $config["per_page"] = 30;
        $config["uri_segment"] = 3;
        $config["num_links"] = 2;
        $config['first_url'] = base_url() . 'admin/foods_all_search/0';
        $config['prev_link'] = '<img src="'.base_url('assets/images/icons/left-1.png').'" alt="">';
        $config['next_link'] = '<img src="'.base_url('assets/images/icons/right-1.png').'" alt="">';
        $config['first_link'] = '1';
        $config['last_link'] = ceil($data['quantity'] /$config["per_page"]);
        $config['cur_tag_open'] = '<a href="#" class="active">';
        $config['cur_tag_close'] = '</li>';
        $this->pagination->initialize($config);
        $data["links"] = $this->pagination->create_links();
        $data['foods_categories'] = $this->admin_model->get_foods_categories();
		$this->load->view('layouts/Aheader');
		$this->load->view('admin/foods/foods_all_search', $data);
		$this->load->view('layouts/Afooter');
	}
	public function foods_create()
	{
	    $code = $this->generateRandomString(10);
	    $filename = $this->generateRandomString(12);
	    $data['code'] = $code;
	    $data['foods_ingredients'] = $this->admin_model->get_foods_ingredients();
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		else if($this->input->server('REQUEST_METHOD') == 'POST')
		{
		    $arr = array();
		    $arr['name_ge'] = $this->input->post('name_ge');
		    $arr['name_en'] = $this->input->post('name_en');
		    $arr['name_ru'] = $this->input->post('name_ru');
		    $arr['category'] = $this->input->post('category');
		    if($this->input->post('samarxvo') == 1)
		    $arr['samarxvo'] = $this->input->post('samarxvo');
		    if($this->input->post('dieturi') == 1)
		    $arr['dieturi'] = $this->input->post('dieturi');
		    if($this->input->post('vegetarianuli') == 1)
		    $arr['vegetarianuli'] = $this->input->post('vegetarianuli');
		    $arr['description'] = $this->input->post('description');
      
            $config['upload_path']          = './assets/images/foods/';
            $config['allowed_types']        = 'jpg|png|jpeg|webp';
            $config['max_size']             = 50000;
            $config['max_width']            = 20000;
            $config['max_height']           = 20000;
            $config['file_name']             = $filename;
            $this->load->library('upload', $config);
            if($this->upload->do_upload('file_name'))
            {
            $arr['file_name'] = $this->upload->data('file_name');
            }
		$this->db->set('code', $code);
		$this->db->set($arr);
		$this->db->insert('foods');
		for($i=0; $i < count($data['foods_ingredients']); $i++)
		{
		  if($this->input->post('ing_'.$data['foods_ingredients'][$i]['id']) == 1)
		  {
		      $save  =$this->admin_model->insert_foods_ingredient($data['foods_ingredients'][$i]['id'], $code);
		  }
		}
		$this->session->set_userdata('message', 'ჩანაწერი წარმატებით დაემატა');
	    redirect(base_url("admin/foods_edit/".$code)); 
		}
		$data['foods_categories'] = $this->admin_model->get_foods_categories();
		
		$this->load->view('layouts/Aheader');
		$this->load->view('admin/foods/foods_create', $data);
		$this->load->view('layouts/Afooter');
	}
	public function foods_ingredients_create()
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		else if($this->input->server('REQUEST_METHOD') == 'POST')
		{
		    $this->db->set($this->input->post());
		    $this->db->insert('foods_ingredients');
	        redirect(base_url("admin/foods_ingredients_create/")); 
		}
		$data['foods_categories'] = $this->admin_model->get_foods_categories();
        $data['foods_ingredients'] = $this->admin_model->get_foods_ingredients();
		$this->load->view('layouts/Aheader');
		$this->load->view('admin/foods/foods_ingredients_create', $data);
		$this->load->view('layouts/Afooter');
	}
	public function foods_categories_create()
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		else if($this->input->server('REQUEST_METHOD') == 'POST') 
		{
		    $this->db->set($this->input->post());
		    $this->db->insert('foods_categories');
	        redirect(base_url("admin/foods_ingredients_create")); 
		}
		$this->load->view('layouts/Aheader');
		$this->load->view('admin/foods/foods_ingredients_create', $data);
		$this->load->view('layouts/Afooter');
	}
	public function foods_edit($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$data['foods_edit'] = array();
		$data['foods_edit'] = $this->admin_model->foods_edit($code);
		if (empty($data['foods_edit'] )) redirect(base_url("main/error_404"));
		$data['foods_ings'] = $this->admin_model->get_foods_inserted_ingredients($code);
		$data['foods_categories'] = $this->admin_model->get_foods_categories();
		$data['foods_ingredients'] = $this->admin_model->get_foods_ingredients();
		$this->load->view('layouts/Aheader');
		$this->load->view('admin/foods/foods_edit', $data);
		$this->load->view('layouts/Afooter');
	}
	public function foods_update($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		else if($this->input->server('REQUEST_METHOD') == 'POST')
		{
		    $filename = $this->generateRandomString(12);
		    $arr = array();
		    $arr['name_ge'] = $this->input->post('name_ge');
		    $arr['name_en'] = $this->input->post('name_en');
		    $arr['name_ru'] = $this->input->post('name_ru');
		    $arr['category'] = $this->input->post('category');
		    $arr['duration'] = $this->input->post('duration');
		    $arr['samarxvo'] = $this->input->post('samarxvo');
		    $arr['dieturi'] = $this->input->post('dieturi');
		    $arr['description'] = $this->input->post('description');
      
            $config['upload_path']          = './assets/images/foods/';
            $config['allowed_types']        = 'jpg|png|jpeg|webp';
            $config['max_size']             = 50000;
            $config['max_width']            = 20000;
            $config['max_height']           = 20000;
            $config['file_name']             = $filename;
            $this->load->library('upload', $config);
            if($this->upload->do_upload('file_name'))
            {
               $edit = $this->admin_model->foods_edit($code);
               $path = FCPATH  ."/assets/images/foods/".$edit['file_name'];
		       if(($edit['file_name'] !='') && (file_exists($path)))
		       {
                 unlink($path);
		       }
		    $arr['file_name'] = $this->upload->data('file_name');
            }
		$data['foods_update'] = array();
		$data['foods_update'] = $this->admin_model->foods_update( $code, $arr);
		$data['foods_ings'] = $this->admin_model->get_foods_inserted_ingredients( $code);
		$data['foods_ingredients'] = $this->admin_model->get_foods_ingredients();
		$data['foods_inserted_ingredients'] = $this->admin_model->foods_inserted_ingredients_delete($code);
		for($i=0; $i < count($data['foods_ingredients']); $i++)
		{
		  if($this->input->post('ing_'.$data['foods_ingredients'][$i]['id']) == 1)
		  {
		      $save  =$this->admin_model->insert_foods_ingredient($data['foods_ingredients'][$i]['id'], $code);
            
		  }
		}
		$this->session->set_userdata('message', 'ჩანაწერი განახლდა');
 		redirect(base_url("admin/foods_edit/".$code));
		}
		redirect(base_url("admin/foods_edit/".$code));

	}
	
	public function foods_delete($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$data['foods_edit'] = $this->admin_model->foods_edit($code);
		$data['foods_inserted_ingredients'] = $this->admin_model->foods_inserted_ingredients_delete($code);
		if(empty($data['foods_edit'] )) redirect(base_url("main/error_404"));
		$del = $this->admin_model->foods_delete($code);
		if($data['foods_edit']['file_name'] =='') redirect(base_url("admin/foods_all"));
		$path = FCPATH  ."/assets/images/foods/".$data['foods_edit']['file_name'];
		if(file_exists($path))
        unlink($path);
		$this->session->set_userdata('message', 'კერძი წაიშალა');
		redirect(base_url("admin/foods_all"));
	}
	public function foods_images_clean()
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$apartmentImages = array();
		$apartmentImages = $this->admin_model->get_all_foods_images();
		$path = FCPATH ."/assets/images/foods/";
		foreach (glob($path."*.*") as $file)
		{ 
		    $r = 0;
          foreach($apartmentImages as $item)
          {
            $pathImg = FCPATH  ."/assets/images/foods/".$item['file_name'];
            if($file ==$pathImg)
            { $r = 1;}
            }
            if($r == 0) 
            {unlink($file);}
		}
		redirect(base_url("admin/index"));
	}
	public function delete_foods_image($file_name, $code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$delete = $this->admin_model->foods_image_delete($file_name);
		$this->session->set_userdata('foods_edit_block', 'gallery_block');
        redirect(base_url("admin/foods_edit/".$code));
	}
	public function set_as_foods_main_image($file_name, $code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$set = $this->admin_model->foods_main_image($file_name, $code);
		$this->session->set_userdata('foods_edit_block', 'gallery_block');
		redirect(base_url("admin/foods_edit/".$code));
	}
	public function foods_main_image_upload($code)
    {
        if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		
	   	  
        	$str = $this->generateRandomString();
            $filename = $this->session->userdata('id')."_". $str;
               $data = array();
      
                $config['upload_path']          = './assets/images/foods/';
                $config['allowed_types']        = 'jpg|png|jpeg';
                $config['max_size']             = 20000;
                $config['max_width']            = 8096;
                $config['max_height']           = 8096;
                 $config['file_name']             = $filename;

                $this->load->library('upload', $config);

                if ( ! $this->upload->do_upload('file_name'))
                {
                        $error = array('error' => $this->upload->display_errors());
                }
                else
                {
                        $data = array('file_name' => $this->upload->data('file_name'));
                       //$cod =$this->session->userdata('foods_code');
                         $save  =$this->admin_model->insert_foods_photo($data, $code);
                         $set = $this->admin_model->foods_main_image($data, $code);
                         redirect(base_url("admin/foods_edit/".$code));
                 }
    }
    public function update_foods_gallery($codee)
    {
        if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
        $str = $this->generateRandomString();
            $filename = $this->session->userdata('id')."_". $str;
               $data = array();
                $config['upload_path']          = './assets/images/foods/';
                $config['allowed_types']        = 'jpg|png';
                $config['max_size']             = 30000;
                $config['max_width']            = 8096;
                $config['max_height']           = 8096;
                 $config['file_name']             = $filename;

                $this->load->library('upload', $config);

                if ( ! $this->upload->do_upload('file'))
                {
                        $error = array('error' => $this->upload->display_errors());
                }
                else
                {
                      
                        $data = array('file_name' => $this->upload->data('file_name'));
                      //$cod =$this->session->userdata('foods_code');
                         $save  =$this->admin_model->update_foods_gallery($data, $codee);
                          }
    }
    public function foods_activate($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		
		$this->admin_model->foods_activate($code);
		redirect(base_url("admin/foods_view/".$code));
	}
    public function foods_canceled($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$this->admin_model->foods_canceled($code);
		redirect(base_url("admin/foods_view/".$code));
	}
    /////////////////////////////////////////////////////////////////// Adverts
	public function adverts_list()
	{
	    
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$array = array();
		$config["per_page"] = 20;
		$data['city'] = array();
		$data['city'] = $this->admin_model->get_municipalities();
		$page = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;
        $data['adverts_list'] = array();
	    $data['adverts_list'] = $this->admin_model->get_adverts_list($config["per_page"], $page);
	    $data['count_ap_list'] = count($this->admin_model->get_adverts_length($array));
	    
	    $config = array();
        $config["base_url"] = base_url() . "admin/adverts_list";
        $config["total_rows"] = $data['count_ap_list'];
        $config["per_page"] = 20;
        $config["uri_segment"] = 5;
        $choice = $config["total_rows"] / $config["per_page"];
        $config['cur_tag_open'] = '<a href="#" class="active">';
        $config['cur_tag_close'] = '</a>';

        $this->pagination->initialize($config);
        $data["links"] = $this->pagination->create_links();
		$this->load->view('layouts/Aheader');
		$this->load->view('admin/advert/adverts_list', $data);
		$this->load->view('layouts/Afooter');
	}
    public function adverts_all()
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$user_ap = array();
		$data['city'] = array();
		$data['city'] = $this->admin_model->get_municipalities();
		$user_ap['reg_id'] = $this->session->userdata('id');
		$user_ap['reg_name'] = $this->session->userdata('name');
		$user_ap['reg_surname'] = $this->session->userdata('surname');
		
		$array = array();
		$config["per_page"] = 20;
		$page = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;
        $data['user_adverts_list'] = array();
	    $data['user_adverts_list'] = $this->admin_model->get_user_adverts($user_ap, $config["per_page"], $page);
	    $data['count_user_adverts_all'] = count($this->admin_model->get_adverts_length($user_ap));
	    
	    $config = array();
        $config["base_url"] = base_url() . "admin/adverts_all";
        $config["total_rows"] = $data['count_user_adverts_all'];
        $config["per_page"] = 20;
        $config["uri_segment"] = 5;
       $config['use_page_numbers'] = TRUE;
        $config['first_tag_open'] = '<li>';
        $config['first_tag_close'] = '</li>';
        //$config['first_url'] = base_url() . 'patients/list/0'; 
        $config['prev_link'] = '<img src="'.base_url('assets/images/icons/left-1.png').'" alt="">';
        $config['next_link'] = '<img src="'.base_url('assets/images/icons/right-1.png').'" alt="">';
        $config['num_tag_open'] = '<li class="paginate_button page-item ">';
        $config['num_tag_close'] = '</li>';
        $config['next_tag_open'] = '<li class="paginate_button page-item next " >';
        $config['next_tag_close'] = '</li>';

        $config['prev_tag_open'] = '<li class="paginate_button page-item previous disabled" >';
        $config['prev_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li class="paginate_button page-item active"><a href="#" class="page-link">';
        $config['cur_tag_close'] = '</a></li>';
        $this->pagination->initialize($config);
        $data["links"] = $this->pagination->create_links();
        $data['adverts_categories'] = array();
		$data['adverts_categories'] = $this->admin_model->get_adverts_categories();
		$this->load->view('layouts/Aheader');
		$this->load->view('admin/advert/adverts_all', $data);
		$this->load->view('layouts/Afooter');
	}
	public function adverts_all_search()
	{
	    if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
	    
	    $config["per_page"] = 20;
	    $raodenoba = 0;
        $arrayy = array();
        $raod = 0;
        $link = "";
        $mas = array();
        $data['city'] = array();
		$data['city'] = $this->admin_model->get_municipalities();
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
        $mas['reg_id'] = $this->session->userdata('id');
        $mas['reg_name'] = $this->session->userdata('name');
        $mas['reg_surname'] = $this->session->userdata('surname');
        
        }
        	    
        else
        {
        if( $this->input->post('category') != "0") 
        {         
          $arrayy['category'] = $this->input->post('category');
          $raod = $raod+2;
          $link = $link."/category/".$this->input->post('category');
        }
        if( $this->input->post('status') != "0") 
        {         
          $arrayy['status'] = $this->input->post('status');
          $raod = $raod+2;
          $link = $link."/status/".$this->input->post('status');
        }
        if( $this->input->post('payment_status') != "0") 
        {         
          $arrayy['payment_status'] = $this->input->post('payment_status');
          $raod = $raod+2;
          $link = $link."/payment_status/".$this->input->post('payment_status');
        }
	    $arrayy['reg_id'] = $this->session->userdata('id');
        $arrayy['reg_name'] = $this->session->userdata('name');
        $arrayy['reg_surname'] = $this->session->userdata('surname');
        
        }
        $page = ($this->uri->segment(3+$raod)) ? $this->uri->segment(3+$raod) : 0;
        if(count($arrayy) != "0"){
        $data['user_adverts_all'] = $this->admin_model->get_user_adverts($arrayy, $config["per_page"], $page);
	    $data['count_user_adverts_all'] = count($this->admin_model->get_adverts_length($arrayy));
        }
	    if(count($mas) != "0")
	    {
	    $data['user_adverts_all'] = $this->admin_model->get_user_adverts($user_ap, $config["per_page"], $page);
	    $data['count_user_adverts_all'] = count($this->admin_model->get_adverts_length($mas));
	    }
	    $config = array();
        $config["base_url"] = base_url() . "admin/adverts_all_search/".$link;
        $config["total_rows"] = $data['count_user_adverts_all'];
        $config["per_page"] = 20;
        $config["uri_segment"] = 5;
        $choice = $config["total_rows"] / $config["per_page"];
        $config['cur_tag_open'] = '<a href="#" class="active">';
        $config['cur_tag_close'] = '</a>';
        $this->pagination->initialize($config);
        $data["linkss"] = $this->pagination->create_links();
        $data['adverts_categories'] = array();
		$data['adverts_categories'] = $this->admin_model->get_adverts_categories();
		$this->load->view('layouts/Aheader');
		$this->load->view('admin/advert/adverts_all_search', $data);
		$this->load->view('layouts/Afooter');
	}
	public function advert_create()
	{
		
		$data['code'] = $this->generateRandomString(10);
		
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		else if (($this->session->has_userdata('advert_code')) && ($this->input->server('REQUEST_METHOD') == 'POST'))
		{
			$postData = $this->input->post();
			$date = date('Y-m-d H:i');
			$reg_id =$this->session->userdata('id');
			$reg_name =$this->session->userdata('name');
			$reg_surname =$this->session->userdata('surname');
			
			$code = $this->session->userdata('advert_code');


		$this->db->set($postData);
		$this->db->set('status', 'Expired');
		$this->db->set('reg_id', $reg_id);
		$this->db->set('reg_name', $reg_name);
 	    $this->db->set('reg_surname', $reg_surname);
		$this->db->set('code', $code);
		$this->db->set('payment_status', 'unpaid');
		$this->db->set('date', $date);
		$this->db->insert('advert');
	    $this->session->set_userdata('advert_created', 'success');
	    redirect(base_url("admin/advert_edit/".$code)); 
		}
		$data['adverts_categories'] = array();
		$data['adverts_categories'] = $this->admin_model->get_adverts_categories();
		$this->load->view('layouts/Aheader');
		$this->load->view('layouts/Aheader');
		$this->load->view('admin/advert/advert_create', $data);
		$this->load->view('layouts/Afooter');
	}
	public function advert_edit($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$data['city'] = array();
		$data['city'] = $this->admin_model->get_municipalities();
		$data['images'] = $this->admin_model->get_advert_images($code);
		$data['imagess'] = $this->admin_model->get_advert_images($code);
		$data['advert_edit'] = array();
		$data['advert_edit'] = $this->admin_model->advert_edit($code);
		
		$data['adverts_categories'] = array();
		$data['adverts_categories'] = $this->admin_model->get_adverts_categories();
		$this->load->view('layouts/Aheader');
		$this->load->view('layouts/Aheader');
		$this->load->view('admin/advert/advert_edit', $data);
		$this->load->view('layouts/Afooter');
	}
	public function advert_view($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$data['images'] = $this->admin_model->get_advert_images($code);
		$data['imagess'] = $this->admin_model->get_advert_images($code);
		$data['advert_view'] = array();
		$data['advert_view'] = $this->admin_model->advert_view($code);
		$this->load->view('layouts/Aheader');
		$this->load->view('admin/advert/advert_view', $data);
		$this->load->view('layouts/Afooter');
	}
	public function advert_update($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$data['advert_update'] = array();
		$data['advert_update'] = $this->admin_model->advert_update( $code, $this->input->post());
		redirect(base_url("admin/advert_edit/".$code));

	}
	public function advert_view_update($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$data['advert_update'] = array();
		$data['advert_update'] = $this->admin_model->advert_view_update( $code, $this->input->post());
		
				redirect(base_url("admin/advert_view/".$code));

	}
	public function advert_delete($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		
		$del = $this->admin_model->advert_delete($code);
		$advertImages = $this->admin_model->get_advert_images($code);
		$delfoodsImages = $this->admin_model->advert_images_delete($code);
		foreach($advertImages as $item)
		{
		  $path = FCPATH  ."/assets/images/adverts/".$item['file_name'];
          unlink($path);
		}
		redirect(base_url("admin/adverts_list"));
	}
	public function adverts_images_clean()
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$advertImages = array();
		$advertImages = $this->admin_model->get_all_adverts_images();
		$path = FCPATH ."/assets/images/adverts/";
		foreach (glob($path."*.*") as $file)
		{ 
		    $r = 0;
		    
          foreach($advertImages as $item)
          {
            $pathImg = FCPATH  ."/assets/images/adverts/".$item['file_name'];
            if($file ==$pathImg)
            { $r = 1; break;}
            
            }
            if($r == 0) 
            {unlink($file);}
		}
		redirect(base_url("admin/index"));
	}
	public function user_advert_delete($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$advertImages = array();
		$advertImages = $this->admin_model->get_advert_images($code);
		$del = $this->admin_model->user_advert_delete($code);
		$delfoodsImages = $this->admin_model->advert_images_delete($code);
		foreach($advertImages as $item)
          {
            $pathImg = FCPATH  ."/assets/images/adverts/".$item['file_name'];
		    unlink($pathImg);
          }
        $this->session->set_userdata('message', 'success');
		redirect(base_url("admin/adverts_all"));
	}
	public function advert_booking_delete($book_code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		
		$del = $this->admin_model->advert_booking_delete($book_code);
		redirect(base_url("admin/advert_booking_all/"));
	}
	public function advert_gallery($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		 $data['images'] = $this->admin_model->get_advert_images($code);
		  $data['imagess'] = $this->admin_model->get_advert_images($code);
		 $data['cod'] = $code;
		$this->load->view('layouts/Aheader');
		$this->load->view('admin/advert/advert_gallery', $data);
		$this->load->view('layouts/Afooter');
	}
	public function delete_advert_image($file_name, $code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$delete = $this->admin_model->advert_image_delete($file_name);
		$clear_file_name = $this->admin_model->advert_clear_file_name($code);
		$pathImg = FCPATH  ."/assets/images/adverts/".$file_name;
		unlink($pathImg);
        redirect(base_url("admin/advert_edit/".$code));
	}
	public function set_as_advert_main_image($file_name, $code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$delete = $this->admin_model->advert_main_image($file_name, $code);
		$this->session->set_userdata('apart_edit_block', 'gallery_block');
		redirect(base_url("admin/advert_edit/".$code));
	}
	public function advert_activate($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		
		$this->admin_model->advert_activate($code);
			redirect(base_url("admin/advert_view/".$code));
	}
	public function advert_expired($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		$this->admin_model->advert_expired($code);
		redirect(base_url("admin/advert_view/".$code));
	}
	public function advert_activate2($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		 $this->admin_model->advert_activate($code);
			redirect(base_url("admin/advert_edit/".$code));
	}
	public function advert_canceled($code)
	{
		if((!$this->session->has_userdata('logged_in'))) redirect(base_url("admin/login"));
		
		 $this->admin_model->advert_canceled($code);
		redirect(base_url("admin/advert_edit/".$code));
	}
	public function advert_upload($code)
    {
        	if(($this->session->has_userdata('advert_code')))
        	{
        		$this->session->unset_userdata('advert_code');
        		 

        	}
		    $this->session->set_userdata('advert_code', $code);
        	$str = $this->generateRandomString();
            $filename = $this->session->userdata('id')."_". $str;
            $data = array();
      

                $config['upload_path']          = './assets/images/adverts/';
                $config['allowed_types']        = 'gif|jpg|png|jpeg';
                $config['max_size']             = 30000;
                $config['max_width']            = 100096;
                $config['max_height']           = 100096;
                 $config['file_name']             = $filename;

                $this->load->library('upload', $config);

                if ( ! $this->upload->do_upload('file'))
                {
                        $error = array('error' => $this->upload->display_errors());

                       
                }
                else
                {
                        $data = array('file_name' => $this->upload->data('file_name'));
                       //$cod =$this->session->userdata('advert_code');
                         $save  =$this->admin_model->insert_advert_images($data, $code);
                         

                       
                }
    }
    public function update_advert_gallery($code)
    {
        
        	$str = $this->generateRandomString();
            $filename = $this->session->userdata('id')."_". $str;
            $data = array();
                $config['upload_path']          = './assets/images/adverts/';
                $config['allowed_types']        = 'gif|jpg|jpeg|png';
                $config['max_size']             = 300000;
                $config['max_width']            = 100096;
                $config['max_height']           = 100096;
                $config['file_name']             = $filename;

                $this->load->library('upload', $config);

                if ( ! $this->upload->do_upload('file'))
                {
                        $error = array('error' => $this->upload->display_errors());
 
                }
                else
                {
                        $data = array('file_name' => $this->upload->data('file_name'));
                        $save  =$this->admin_model->update_advert_gallery($data, $code);
                        redirect(base_url("admin/advert_edit/".$code));
                }
    }
    public function generateRandomString($length = 20) {
	    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < $length; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }
	    return $randomString;
	}
	public function generateRandomNumber($length = 8) {
	    $characters = '0123456789';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < $length; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }
	    return $randomString;
	}
	public function setLanguage($lang)
	{
		$this->session->set_userdata('lan', $lang);	
		redirect('admin/'.$this->uri->segment(4).'/'.$this->uri->segment(5));
	   
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
			case 'ru':
				return 2;
				break;
		    case 'ge':
				return 3;
				break;
		
		}
	}

    public function logout() 
    {
        $this->session->sess_destroy();
        redirect(base_url('admin/login'));
    }
   
}

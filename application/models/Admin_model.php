<?php 

class Admin_model extends CI_Model {

        function validate_login($postData){
                $this->db->select('*');
                $this->db->where('email', $postData['email']);
                $this->db->where('password', $postData['password']);
                // $this->db->where('status', 1);
                $this->db->from('users');
                $query=$this->db->get();
                if ($query->num_rows() == 0)
                    return false;
                else
                    return $query->result();
        }
        function validate_recovery($postData){
                $this->db->select('*');
                $this->db->where('email', $postData['email']);
             
                // $this->db->where('status', 1);
                $this->db->from('users');
                $query=$this->db->get();
                if ($query->num_rows() == 0)
                    return false;
                else
                    return $query->result();
        }
        function check($email){
                $this->db->select('*');
                $this->db->where('email', $email);
                // $this->db->where('status', 1);
                $this->db->from('users');
                $query=$this->db->get();
                if ($query->num_rows() == 0)
                    return false;
                else
                    return $query->result();
        }
        function check_password($password){
                $this->db->select('password');
                $this->db->where('id', $this->session->userdata('id'));
                // $this->db->where('status', 1);
                $this->db->from('users');
                $query=$this->db->get();
                if ($query->num_rows() == 0)
                    return false;
                else
                    return $query->result();
        }
        //////////////////////////////////////////////////////////////////////       foods
        public function get_foods($limit, $start)
        {
             $this->db->select('*');
             $this->db->from('foods');
             $this->db->order_by("id", "desc");
             $this->db->limit($limit, $start);
             $query=$this->db->get();
             if ($query->num_rows() == 0)
                    return false;
            else
             return $query->result_array();
        }
        public function get_foods_length()
        {
            $this->db->select('id');
            $query = $this->db->get('foods');
            $this->db->order_by("id", "desc");
            return $query->result_array();
        }
        
        public function get_foods_search($postdata, $limit, $start)
        {
             $this->db->select('*');
             $this->db->from('foods');
             $this->db->order_by("id", "desc");
             $this->db->where($postdata);
             $this->db->limit($limit, $start);
             $query=$this->db->get();
             return $query->result_array();
        }
        
        public function get_foods_length_search($array)
        {
            $this->db->select('id');
            if(count($array) != "0")
            {
             $this->db->where($array);
            }
            $query = $this->db->get('foods');
            $this->db->order_by("id", "desc");
            return $query->result_array();
        }
        
        public function get_foods_categories()
        {
             $this->db->select('*');
             $this->db->order_by("category_ge", "desc");
             $this->db->from('foods_categories');
             $query=$this->db->get();
             return $query->result_array();
        }
        public function get_foods_ingredients()
        {
             $this->db->select('*');
             $this->db->order_by("ingredient_ge", "asc");
             $this->db->from('foods_ingredients');
             $query=$this->db->get();
             return $query->result_array();
        }
        public function insert_foods_ingredient($id, $code)
        {
            $this->db->set('ingredient_id', $id);
            $this->db->set('foods_code', $code);
            $this->db->insert('foods_inserted_ingredients');
        }
        public function get_foods_inserted_ingredients($code)
        {
             $this->db->select('*');
             $this->db->where('foods_code', $code);
             $this->db->order_by("ingredient_id", "asc");
             $this->db->from('foods_inserted_ingredients');
             $query=$this->db->get();
             return $query->result_array();
        }
        public function foods_edit($code)
        {
            
            $this->db->where('code', $code);
            $this->db->from('foods');
            $query=$this->db->get();
            if ($query->num_rows() == 0)
                    return false;
            else
            return $query->row_array();
        }
        
        public function foods_view($code)
        {
            $query = $this->db->get_where('foods', array('code' => $code));
            $this->db->order_by("id", "desc");
            if ($query->num_rows() == 0)
                    return false;
            else
            return $query->row_array();
        }
        
        public function foods_delete($code)
        {
                $this->db->where('code', $code);
                $this->db->delete('foods');
        }
        public function foods_inserted_ingredients_delete($code)
        {
                $this->db->where('foods_code', $code);
                $this->db->delete('foods_inserted_ingredients');
        }
        
        public function user_foods_delete($code)
        {
                $this->db->where('code', $code);
                $this->db->delete('foods');
        }
        
        public function insert_foods_photo($data,$code)
        {
            $date = date('Y-m-d H:i');
            $this->db->set($data);
            $this->db->set('reg_code', $this->session->userdata('code'));
            $this->db->set('date', $date);
            $this->db->set('code', $code);
            $this->db->insert('foods_images');
        }
        
        public function get_foods_images($code)
        {
            $query = $this->db->get_where('foods_images', array('code' => $code));
            return $query->result_array();
        }
        
        public function get_all_foods_images()
        {
             $this->db->select('*');
             $this->db->from('foods_images');
             $query=$this->db->get();
             return $query->result_array();
        }
        
        public function foods_update($code, $postdata)
        {
            $this->db->where('code', $code);
            $this->db->update('foods', $postdata);
        }
        
        public function foods_view_update($code, $postdata)
        {
            $this->db->where('code', $code);
            $this->db->update('foods', $postdata);
        }
        
        public function update_foods_gallery($data, $code)
        {
            $date = date('Y-m-d H:i');
            $this->db->set($data);
            $this->db->set('reg_code', $this->session->userdata('code'));
            $this->db->set('code', $code);
            $this->db->set('date', $date);
            $this->db->insert('foods_images');
        }
        
         public function foods_image_delete($file_name)
        {
                $this->db->where('file_name', $file_name);
                $this->db->delete('foods_images');
        }
        
        public function foods_images_delete($code)
        {
                $this->db->where('code', $code);
                $this->db->delete('foods_images');
        }
        
        public function foods_main_image($postdata, $code)
        {
                $this->db->where('code', $code);
                $this->db->where('reg_id', $this->session->userdata('id'));
                $this->db->update('foods', $postdata);
        }
        
        public function foods_activate($code)
        {
            $category= "foods";
            $action = "Active";
            $this->admin_model->insert_user_activity($category,$action,$code);
            $this->db->where('code', $code);
             $this->status     = "Active";
            $this->db->update('foods', $this);
        }
        
        public function foods_canceled($code)
        {
            $category= "foods";
            $action = "Canceled";
            $this->admin_model->insert_user_activity($category,$action,$code);
            $this->db->where('code', $code);
            $this->status     = "Canceled";
            $this->db->update('foods', $this);
        }
        ////////////////////////////////////////////////////// Adverts
         public function get_adverts_categories()
        {
            $this->db->select('*');
            $this->db->from('adverts_category');
            $query=$this->db->get();
            return $query->result_array();
        }
        
        public function get_advert_list_edit($code)
        {
            $query = $this->db->get_where('adverts', array('code' => $code));
            $this->db->order_by("id", "desc");
            if ($query->num_rows() == 0)
                    return false;
            else
            return $query->result_array();
        }
        
        public function get_adverts_list($limit, $start)
        {
            $this->db->select('*');
            $this->db->order_by("id", "desc");
            $this->db->from('adverts');
            $this->db->limit($limit, $start);
            $query=$this->db->get();
            return $query->result_array();
        }
        
        public function get_adverts_list_search($arrayy, $limit, $start)
        {
             $this->db->select('*');
             $this->db->where($arrayy);
             $this->db->order_by("id", "desc");
             $this->db->from('adverts');
             $this->db->limit($limit, $start);
             $query=$this->db->get();
             return $query->result_array();
        }
        
        public function advert_edit($code)
        {
            $query = $this->db->get_where('adverts', array('code' => $code,  'reg_name' => $this->session->userdata('name')));
            $this->db->order_by("id", "desc");
            if ($query->num_rows() == 0)
                    return false;
            else
            return $query->row_array();
        }
        
        public function advert_view($code)
        {
            $query = $this->db->get_where('adverts', array('code' => $code));
            $this->db->order_by("id", "desc");
            if ($query->num_rows() == 0)
                    return false;
            else
            return $query->row_array();
        }
        
        public function get_adverts_length($array)
        {
            $this->db->select('id');
            if(count($array) != "0")
            {
             $this->db->where($array);
            }
            $query = $this->db->get('adverts');
            $this->db->order_by("id", "desc");
            return $query->result_array();
        }
        
        public function get_advert_images($code)
        {
            $query = $this->db->get_where('adverts_images', array('code' => $code));
            return $query->result_array();
        }
        
        public function get_all_adverts_images()
        {
            $this->db->select('*');
            $this->db->from('adverts_images');
            $query=$this->db->get();
            return $query->result_array();
        }
        
        public function insert_advert_images($data,$code)
        {
            $date = date('Y-m-d H:i');
            $this->db->set($data);
            $this->db->set('reg_code', $this->session->userdata('code'));
            $this->db->set('date', $date);
            $this->db->set('code', $code);
            $this->db->insert('adverts_images');
        }
        
        public function advert_update($code, $postdata)
        {
            $this->db->where('code', $code);
            
            $this->admin_model->insert_user_activity("Adverts", "Update", $code);
            $this->db->update('adverts', $postdata);
        }
        
        public function advert_view_update($code, $postdata)
        {
            $this->db->where('code', $code);
            $this->db->update('adverts', $postdata);
        }
        
        public function advert_delete($code)
        {
            $this->db->where('code', $code);
            $this->db->delete('adverts');
        }
        
        public function user_advert_delete($code)
        {
                $this->db->where('code', $code);
                $this->db->delete('adverts');
        }
        
        public function update_advert_gallery($data, $code)
        {
               $date = date('Y-m-d H:i');
               $this->db->set($data);
               $this->db->set('reg_code', $this->session->userdata('code'));
               $this->db->set('code', $code);
               $this->db->set('date', $date);
               $this->db->insert('adverts_images');
        }
        
        public function advert_image_delete($file_name)
        {
                $this->db->where('file_name', $file_name);
                
                $this->db->delete('adverts_images');
        }
        
        public function advert_clear_file_name($code)
        {
                $this->db->where('code', $code);
                $this->file_name     = '';
                $this->db->update('adverts', $this);
        }
        
        public function advert_images_delete($code)
        {
                $this->db->where('code', $code);
                $this->db->delete('adverts_images');
        }
        
        public function advert_main_image($file_name, $code)
        {
                $this->db->where('code', $code);
                
                $this->file_name     = $file_name;
                $this->db->update('adverts', $this);
        }
        
        public function get_user_view_adverts( $arrayy, $limit, $start)
        {
             $this->db->select('*');
             $this->db->where($arrayy);
             $this->db->from('adverts');
             $this->db->limit($limit, $start);
             $this->db->order_by("id", "desc");
             $query=$this->db->get();
            return $query->result_array();
        }
        
        public function get_user_adverts($arrayy, $limit, $start)
        {
             $this->db->select('*');
             $this->db->where($arrayy);
             $this->db->from('adverts');
             $this->db->limit($limit, $start);
             $this->db->order_by("id", "desc");
             $query=$this->db->get();
             return $query->result_array();
        }
        
        public function advert_activate($code)
        {
            $category= "Adverts";
            $action = "Active";
            $this->admin_model->insert_user_activity($category,$action,$code);
            $this->db->where('code', $code);
            $this->status     = "Active";
            $this->db->update('adverts', $this);
        }
        
        public function advert_expired($code)
        {
            $category= "Adverts";
            $action = "Expired";
            $this->admin_model->insert_user_activity($category,$action,$code);
            $this->db->where('code', $code);
            $this->status     = "Expired";
            $this->db->update('adverts', $this);
        }
        
        public function advert_canceled($code)
        {
            $category= "Adverts";
            $action = "Canceled";
            $this->admin_model->insert_user_activity($category,$action,$code);
            $this->db->where('code', $code);
            $this->status     = "Canceled";
            $this->db->update('adverts', $this);
        }

}
<?php 
class Main_model extends CI_Model {
        
        
        public function get_advert_main($limit)
        {
             $this->db->select('url,file_name');
    
             $this->db->from('advert');
             $this->db->limit($limit);
             $query=$this->db->get();
                return $query->result_array(); 
        }
        ///////////////////////////////////////////////////////////foods
        public function get_foods($limit, $start)
        {
            $this->db->select('*');
            $this->db->order_by("name_".$this->lang->line('lan'), "asc");
            $this->db->from('foods');
            $this->db->limit($limit, $start);
            $query=$this->db->get();
            return $query->result_array();
        }
        public function get_foods_all()
        {
            $this->db->select('*');
            $this->db->order_by("name_".$this->lang->line('lan'), "asc");
            $this->db->from('foods');
            $query=$this->db->get();
            return $query->result_array();
        }
        public function get_foods_with_category($category)
        {
            $this->db->select('*');
            $this->db->where('category', $category);
            $this->db->order_by("name_".$this->lang->line('lan'), "asc");
            $this->db->from('foods');
            $query=$this->db->get();
            return $query->result_array();
        }
        
        public function get_foods_search($arrayy, $limit, $start)
        {
             $this->db->select('*');
             $this->db->where($arrayy);
             $this->db->from('foods');
             $this->db->limit($limit, $start);
             $query=$this->db->get();
                return $query->result_array();
        }
        public function get_foods_categories()
        {
             $this->db->select('*');
             $this->db->order_by("category_ge", "asc");
             $this->db->from('foods_categories');
             $query=$this->db->get();
             return $query->result_array();
        }
        public function get_foods_category_with_id($id)
        {
            $query = $this->db->get_where('foods_categories', array('id' => $id));
            return $query->row_array();
        }
        public function get_foods_ingredients()
        {
             $this->db->select('*');
             $this->db->order_by("ingredient_ge", "asc");
             $this->db->from('foods_ingredients');
             $query=$this->db->get();
             return $query->result_array();
        }
        public function get_foods_ingredients_single()
        {
             $this->db->select('*');
             $this->db->order_by("id", "asc");
             $this->db->from('foods_ingredients');
             $query=$this->db->get();
             return $query->result_array();
        }
        public function get_foods_inserted_ingredients()
        {
             $this->db->select('*');
             $this->db->order_by("ingredient_id", "asc");
             $this->db->from('foods_inserted_ingredients');
             $query=$this->db->get();
             return $query->result_array();
        }
        public function get_foods_inserted_ingredients_single($code)
        {
             $this->db->select('*');
             $this->db->where('foods_code', $code);
             $this->db->order_by("ingredient_id", "asc");
             $this->db->from('foods_inserted_ingredients');
             $query=$this->db->get();
             return $query->result_array();
        }
        public function get_foods_info($code)
        {
         $query = $this->db->get_where('foods', array('code' => $code));
        return $query->row_array();
        }
        public function get_foods_length()
        {
            $this->db->select('*');
            $query = $this->db->get('foods');
            $this->db->order_by("id", "asc");
            return $query->result_array();
        }
        public function get_foods_all_length()
        {
            $this->db->select('*');
            $query = $this->db->get('foods');
            $this->db->order_by("id", "asc");
            return $query->result_array();
        }
        public function get_foods_width_category_length($category)
        {
            $this->db->select('*');
            $this->db->where('category', $category);
            $query = $this->db->get('foods');
            return $query->result_array();
        }
        public function get_foods_view_count($code)
        {
           if ($code != FALSE)
            {
                $this->db->select('view');
                $this->db->where('code', $code);
                $query = $this->db->get('foods');
                return $query->result();
            }

        }
        public function update_foods_view($code, $view)
        {
           if ($code != FALSE)
            {
                $this->view  = $view;
                $this->db->where('code', $code);
                $this->db->update('foods', $this);
            }
        }

        public function get_foods_images($code)
        {
            $this->db->select('*');
            $this->db->where('code',$code);
        
            $result = $this->db->get('foods_images')->result_array();
            return $result;
        }
        
        ////////////////////////////////////////// Visitors
          public function get_page_view_count($page)
        {
            $this->db->select('view');
            $this->db->where('page', $page);
            $query = $this->db->get('pages');
            return $query->result();
            

        }
        public function update_page_view($arr)
        {   
            $this->view  = $arr["view"];
            $this->db->where('page', $arr["page"]);
            $this->db->update('pages', $this);
            
        }
        public function update_page_history_view($arr)
        {
            $date = date('Y-m-d H:i');
            $this->db->set($arr);
           $this->db->set('date', $date);
            $this->db->insert('pages_history');
        }

}
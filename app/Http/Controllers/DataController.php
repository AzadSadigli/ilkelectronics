<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Products;
use App\Category;
use Session;
use DB;
use Image;
use Auth;
use Lang;
use App\Subscribe;
class DataController extends Controller
{
    public function searchedproducts(Request $req){
      $tp_pros = $this->top_prods();
      $search = $req->search;
      $cat_id = $req->category_id;
      if ($cat_id != 0) {
        $ct_parent = Category::find($cat_id)->parent_id;
        if (empty($ct_parent) || $ct_parent == 0) {
          $ct_list = Category::where('parent_id',$cat_id)->pluck('id')->toArray();
          $ct_query = " IN (".implode(',',$ct_list).") ";
        }else{
          $ct_query = " = ".$cat_id;
        }
      }else{$ct_query = "= 0";}
      Session::put('search',$search);
      $pros = Products::whereRaw('IF (`category` '.$ct_query.', `category` '.$ct_query.',`category` LIKE "%")')->where(function ($query) use ($search) {
                            $query->where('productname','LIKE','%' .$search. '%')
                                  ->orWhere('description','LIKE','%' .$search. '%')
                                  ->orWhere('description_title','LIKE','%' .$search. '%')
                                  ->orWhere('prod_id','LIKE','%' .$search. '%');
                        })->orderBy('created_at','desc')->get();
      $max = $pros->max("price");
      if (empty($max) | !isset($max)) {$min = 1;$max = 100;}else{$min = $pros->min("price");}
      if ($max == $min) {$max = $max + 100;}
      // if (empty($pros)) {$min = 1;$max = 100;}
      $count = count($pros);$currency = currency();
      $brands = [];
      foreach($pros as $pro) {$brands[] = $pro->brand;}
      $brands = array_values(array_unique($brands));
      return view('products',compact("pros","cat_id","search","max","min","currency","brands","tp_pros"));
    }
    public function searchedproducts_ajax(Request $req){
      $k = Session::get('search');
      $list = $req->filter;$pros="";$c = "";
      if (isset($list) && is_array($list)) {
        $arr = "";$brand_query="";$cat_section = "";$order = "ORDER BY created_at DESC";
        if (isset($list[4]) && !empty($list[4])) {
          for ($i=0; $i < count($list[4]); $i++) {if ($i != (count($list[4]) - 1)) {$arr .= "'".$list[4][$i]."',";}else{$arr .= "'".$list[4][$i]."'";}}
          $brand_query = "AND brand IN (".$arr.")";
        }
        $ct_id = $req->category;
        if (isset($ct_id) && !empty($ct_id) && $ct_id != 0) {
          $ct_parent = Category::find($ct_id)->parent_id;
          if (empty($ct_parent) || $ct_parent == 0) {
            $ct_list = Category::where('parent_id',$ct_id)->pluck('id')->toArray();
            $cat_section = " AND category IN (".implode(',',$ct_list).") ";
          }else{
            $cat_section = " AND category = ".$req->category;
          }
        }
        if ($list[0] == 2) {
          $order = "ORDER BY price DESC";
        }elseif($list[0] == 1){
          $order = "ORDER BY price ASC";
        }elseif($list[0] == 3){
          $order = "ORDER BY rating DESC";
        }
        $pros = DB::select("SELECT FORMAT(p.old_price/".currency(0).",2) as old_price,p.productname,p.slug,p.id,p.created_at as `date`,FORMAT(p.price/".currency(0).",2) as price,'".currency()."' as currency,COALESCE((SELECT image FROM `images` WHERE prod_id = p.id ORDER BY `order` ASC LIMIT 1),'default.png') as image,(SELECT AVG(rating) FROM `comments` WHERE prod_id = p.id) as rating FROM `products` p WHERE (productname LIKE '%".$k."%' OR description LIKE '%".$k."%' OR description_title LIKE '%".$k."%' OR prod_id LIKE '%".$k."%') ".$cat_section." AND price <= '".$list[2]."' AND price >= '".$list[1]."' ".$brand_query." ".$order." LIMIT ".$req->numb);
        $c = DB::select("SELECT COUNT(*) as count FROM `products` p WHERE (productname LIKE '%".$k."%' OR description LIKE '%".$k."%' OR description_title LIKE '%".$k."%' OR prod_id LIKE '%".$k."%') ".$cat_section." AND price <= '".$list[2]."' AND price >= '".$list[1]."' ".$brand_query);
      }
      return response()->json(['pros' => $pros,'count' => $c[0]->count,'empty' => Lang::get('app.No_product_found'),'currency' => currency()]);
    }
    public function category_page($slug){
      $tp_pros = $this->top_prods();
      $cat = Category::where('slug',$slug)->first();
      Session::put('category_id',$cat->id);
      $cat->views += 1;
      $cat->update();
      if (!empty($cat)) {
        if (empty($cat->parent_id) || $cat->parent_id == 0) {
          $ct_list = Category::where('parent_id',$cat->id)->pluck('id')->toArray();
          $pros = Products::whereIn('category',$ct_list)->orderBy('created_at','desc')->get();
        }else{
          $pros = Products::where('category',$cat->id)->orderBy('created_at','desc')->get();
        }
        $max = $pros->max("price");
        if (empty($max) | !isset($max)) {$min = 1;$max = 100;}else{$min = $pros->min("price");}
        if ($max == $min) {$max = $max + 100;}
        $currency = currency();
        $brands = [];
        foreach($pros as $pro) {$brands[] = $pro->brand;}
        $brands = array_values(array_unique($brands));
        return view('products',compact("pros","cat","max","min","currency","brands","tp_pros"));
      }else{
        return redirect('/');
      }
    }
    public function category_page_ajax(Request $req){
      $ct = Session::get('category_id');
      $ct_parent = Category::find($ct)->parent_id;
      $list = $req->filter;$pros="";$c = "";
      if (isset($list) && is_array($list)) {
        $arr = "";$brand_query="";$order = "ORDER BY created_at DESC";
        if (isset($list[4]) && !empty($list[4])) {
          for ($i=0; $i < count($list[4]); $i++) {if ($i != (count($list[4]) - 1)) {$arr .= "'".$list[4][$i]."',";}else{$arr .= "'".$list[4][$i]."'";}}
          $brand_query = "AND brand IN (".$arr.")";
        }
        if ($list[0] == 2) {
          $order = "ORDER BY price DESC";
        }elseif($list[0] == 1){
          $order = "ORDER BY price ASC";
        }elseif($list[0] == 3){
          $order = "ORDER BY rating DESC";
        }
        if (empty($ct_parent) || $ct_parent == 0) {
          $ct_list = Category::where('parent_id',$ct)->pluck('id')->toArray();
          $ct_query = " IN (".implode(',',$ct_list).") ";
        }else{
          $ct_query = " = ".$ct;
        }
        $pros = DB::select("SELECT (SELECT AVG(rating) FROM `comments` WHERE prod_id = p.id) as rating,FORMAT(p.old_price/".currency(0).",2) as old_price,p.productname,p.slug,p.id,p.created_at as `date`,FORMAT(p.price/".currency(0).",2) as price,'".currency()."' as currency,COALESCE((SELECT image FROM `images` WHERE prod_id = p.id ORDER BY `order` ASC LIMIT 1),'default.png') as image FROM `products` p WHERE p.category ".$ct_query." AND price <= '".$list[2]."' AND price >= '".$list[1]."' ".$brand_query." ".$order." LIMIT ".$req->numb);
        $c = DB::select("SELECT COUNT(*) as count FROM `products` p WHERE p.category ".$ct_query." AND price <= '".$list[2]."' AND price >= '".$list[1]."' ".$brand_query);

      }
      return response()->json(['pros' => $pros,'count'=>$c[0]->count,'empty' => Lang::get('app.No_product_found')]);
    }

    public function get_all_categories(){
      $cats = Category::whereNull('parent_id')->orderBy('views','desc')->get();
      return view('pg_list',compact('cats'));
    }
    public function get_notification_for_admin(Request $req){
      $range = !empty($req->range) ? $req->range : 7;
      $data = DB::select("(SELECT
                              '0' as type,
                              c.id as main_id,
                              COALESCE(NULLIF(c.name, ''), u.name) AS `name`,
                              c.created_at as time,
                              c.body as `body`,
                              c.read
                          FROM
                              `contact` c
                          LEFT JOIN `users` u ON
                              u.id = c.user_id
                          WHERE
                              c.deleted = 0)
                          UNION ALL
                          (SELECT
                              '1' as type,
                              c.id as main_id,
                              COALESCE(NULLIF(c.name, ''), u.name) AS `name`,
                              c.created_at as time,
                              c.comment as `body`,
                           	COALESCE(c.updated_at > c.created_at, 1) AS `read`
                          FROM
                              `comments` c
                          LEFT JOIN `users` u ON
                              u.id = c.user_id)
                          ORDER BY
                              time
                          DESC");
      $data = array_slice($data,0,$range);
      return response()->json(['data' => $data]);
    }
    public function subscribe(Request $req){
      $this->validate($req,[
        'email' => 'required|email'
      ]);
      $sb = new Subscribe;
      if (Auth::check()) {
        $sb->user_id = Auth::user()->id;
      }
      $sb->email = $req->email;
      $sb_exist = Subscribe::where('email',$req->email)->first();
      if (empty($sb_exist)) {
        $sb->save();
      }
      return response()->json(['mess' => Lang::get('app.You_have_subscribed')]);
    }
    public function testing(Request $req){
      $test = new Test();
      echo $this->test_for_class();
    }
}

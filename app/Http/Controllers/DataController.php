<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Products;
use App\Category;
use Session;
use DB;
use Image;
use Auth;
class DataController extends Controller
{
    public function searchedproducts(Request $req){
      $tp_pros = $this->top_prods();
      $search = $req->search;
      Session::put('search',$search);
      $pros = Products::orderBy('created_at','desc')->where('productname','LIKE','%' .$search. '%')
      ->orWhere('description','LIKE','%' .$search. '%')
      ->orWhere('description_title','LIKE','%' .$search. '%')
      ->orWhere('prod_id','LIKE','%' .$search. '%')
      ->get();
      $count = count($pros);
      $max = $pros->max("price");
      if (empty($max) | !isset($max)) {$min = 1;$max = 100;}else{$min = $pros->min("price");}
      if ($max == $min) {$max = $max + 100;}
      // if (empty($pros)) {$min = 1;$max = 100;}
      $count = count($pros);$currency = currency();
      $brands = [];
      foreach($pros as $pro) {$brands[] = $pro->brand;}
      $brands = array_values(array_unique($brands));
      return view('products',compact("pros","search","count","max","min","currency","brands","tp_pros"));
    }
    public function searchedproducts_ajax(Request $req){
      $k = Session::get('search');
      $list = $req->filter;
      $arr = "";$brand_query="";
      if (isset($list[4]) && !empty($list[4])) {
        for ($i=0; $i < count($list[4]); $i++) {if ($i != (count($list[4]) - 1)) {$arr .= "'".$list[4][$i]."',";}else{$arr .= "'".$list[4][$i]."'";}}
        $brand_query = "AND brand IN (".$arr.")";
      }
      $sql = "SELECT *,COALESCE((SELECT image FROM `images` WHERE prod_id = p.id ORDER BY `order` ASC LIMIT 1),'default.png') as image FROM `products` p WHERE (productname LIKE '%".$k."%' OR description LIKE '%".$k."%' OR description_title LIKE '%".$k."%' OR prod_id LIKE '%".$k."%') AND price <= '".$list[2]."' AND price >= '".$list[1]."' ".$brand_query." ORDER BY created_at DESC LIMIT ".$req->numb;
      $pros = DB::select($sql);
      return response()->json(['pros' => $pros]);
    }
    public function category_page($slug){
      $tp_pros = $this->top_prods();
      $cat = Category::where('slug',$slug)->first();
      Session::put('category_id',$cat->id);
      $cat->views += 1;
      $cat->update();
      if (!empty($cat)) {
        $pros = Products::where('category',$cat->id)->orderBy('created_at','desc')->get();
        $max = $pros->max("price");
        if (empty($max) | !isset($max)) {$min = 1;$max = 100;}else{$min = $pros->min("price");}
        if ($max == $min) {$max = $max + 100;}
        $count = count($pros);$currency = currency();
        $brands = [];
        foreach($pros as $pro) {$brands[] = $pro->brand;}
        $brands = array_values(array_unique($brands));
        return view('products',compact("pros","cat","count","max","min","currency","brands","tp_pros"));
      }else{
        return redirect('/');
      }
    }
    public function category_page_ajax(Request $req){
      $ct = Session::get('category_id');
      $list = $req->filter;
      $arr = "";$brand_query="";
      if (isset($list[4]) && !empty($list[4])) {
        for ($i=0; $i < count($list[4]); $i++) {if ($i != (count($list[4]) - 1)) {$arr .= "'".$list[4][$i]."',";}else{$arr .= "'".$list[4][$i]."'";}}
        $brand_query = "AND brand IN (".$arr.")";
      }
      $sql = "SELECT *,COALESCE((SELECT image FROM `images` WHERE prod_id = p.id ORDER BY `order` ASC LIMIT 1),'default.png') as image FROM `products` p WHERE p.category = ".$ct." AND price <= '".$list[2]."' AND price >= '".$list[1]."' ".$brand_query." ORDER BY created_at DESC LIMIT ".$req->numb;
      $pros = DB::select($sql);
      return response()->json(['pros' => $pros]);
    }

    public function get_all_categories(){
      $cats = Category::whereNull('parent_id')->orderBy('views','desc')->get();
      return view('pg_list',compact('cats'));
    }

    public function testing(Request $req){
      return testing_json();
    }
}

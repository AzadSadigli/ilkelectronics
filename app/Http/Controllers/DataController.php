<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Products;
use App\Category;
use Session;
use DB;
class DataController extends Controller
{
    public function searchedproducts(Request $req){
      $search = $req->search;
      // $cat
      Session::put('search',$search);
      $pros = Products::orderBy('created_at','desc')->where('productname','LIKE','%' .$search. '%')
      ->orWhere('description','LIKE','%' .$search. '%')
      ->orWhere('description_title','LIKE','%' .$search. '%')
      ->orWhere('prod_id','LIKE','%' .$search. '%')
      ->get();
      $count = count($pros);
      $max = $pros->max("price");
      $min = $pros->min("price");
      if ($max == $min) {$max = $max + 100;}
      if (empty($pros)) {$min = 1;$max = 100;}
      $count = count($pros);$currency = currency();
      $brands = [];
      foreach($pros as $pro) {$brands[] = $pro->brand;}
      $brands = array_values(array_unique($brands));
      return view('products',compact("pros","search","count","max","min","currency","brands"));
    }
    public function searchedproducts_ajax(Request $req){
      $k = Session::get('search');
      $list = $req->filter;
      $arr = "";$brand_query="";
      if (!empty($list[4])) {
        for ($i=0; $i < count($list[4]); $i++) {if ($i != (count($list[4]) - 1)) {$arr .= "'".$list[4][$i]."',";}else{$arr .= "'".$list[4][$i]."'";}}
        $brand_query = "AND brand IN (".$arr.")";
      }
      $sql = "SELECT *,(SELECT image FROM `images` WHERE prod_id = p.id ORDER BY `order` ASC LIMIT 1) as image FROM `products` p WHERE (productname LIKE '%".$k."%' OR description LIKE '%".$k."%' OR description_title LIKE '%".$k."%' OR prod_id LIKE '%".$k."%') AND price <= '".$list[2]."' AND price >= '".$list[1]."' ".$brand_query." ORDER BY created_at DESC";
      $pros = DB::select($sql);
      return response()->json($pros);
    }
    public function category_page($slug){
      $cat = Category::where('slug',$slug)->first();
      Session::put('category_id',$cat->id);
      $cat->views += 1;
      $cat->update();
      if (!empty($cat)) {
        $pros = Products::where('category',$cat->id)->orderBy('created_at','desc')->get();
        $max = $pros->max("price");
        $min = $pros->min("price");
        if ($max == $min) {$max = $max + 100;}
        if (empty($max)) {$min = 1;$max = 100;}
        $count = count($pros);$currency = currency();
        $brands = [];
        foreach($pros as $pro) {$brands[] = $pro->brand;}
        $brands = array_values(array_unique($brands));
        return view('products',compact("pros","cat","count","max","min","currency","brands"));
      }else{
        return redirect('/');
      }
    }
    public function category_page_ajax(Request $req){
      $ct = Session::get('category_id');
      $list = $req->filter;
      $arr = "";$brand_query="";
      if (!empty($list[4])) {
        for ($i=0; $i < count($list[4]); $i++) {if ($i != (count($list[4]) - 1)) {$arr .= "'".$list[4][$i]."',";}else{$arr .= "'".$list[4][$i]."'";}}
        $brand_query = "AND brand IN (".$arr.")";
      }
      $sql = "SELECT *,(SELECT image FROM `images` WHERE prod_id = p.id ORDER BY `order` ASC LIMIT 1) as image FROM `products` p WHERE p.category = ".$ct." AND price <= '".$list[2]."' AND price >= '".$list[1]."' ".$brand_query." ORDER BY created_at DESC";
      $pros = DB::select($sql);
      return response()->json($pros);
    }

    public function get_all_categories(){
      $cats = Category::whereNull('parent_id')->orderBy('views','desc')->get();
      return view('pg_list',compact('cats'));
    }
    public function testing(Request $req){
      echo '<!doctype html>
            <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
              <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
              <script>
              let cnt = $("ul li").length;
              console.log($("ul li").length)
              function reoder(){
                for (var i=0; i < 4; i++) {
                  $("ul li:eq("+i+")").data("order", i);
                }
                // console.log(cnt);
              }
              $(function() {
                  var isDragging = false;
                  $("a")
                  .mousedown(function() {
                      reoder();
                      console.log("mousedown");
                      isDragging = false;
                  })
                  // .mousemove(function() {
                  //     console.log("mousemove");
                  //     isDragging = true;
                  //  })
                  .mouseup(function() {
                      reoder();
                      console.log("mouseup");
                      var wasDragging = isDragging;
                      isDragging = false;
                      if (!wasDragging) {
                          $("#throbble").toggle();
                      }
                  });

                  $("ul").sortable();
              });
              </script>
            </head>
            <body>
            <div>
                <ul>
                    <li><a href="#">Some link #1</a></li>
                    <li><a href="#">Some link #2</a></li>
                    <li><a href="#">Some link #3</a></li>
                    <li><a href="#">Some link #4</a></li>
                </ul>
            </div>
            </body>
            </html>';

    }
}

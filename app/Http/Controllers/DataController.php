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
    public function testing(){
      $curl = curl_init();
      curl_setopt_array($curl, array(
        CURLOPT_URL => "https://sade.store/currency.json",
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
          "accept: application/json"
        ),
      ));
      curl_setopt($curl, CURLOPT_VERBOSE, TRUE);
      curl_setopt($curl, CURLOPT_FOLLOWLOCATION, TRUE);
      curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
      $res = curl_exec($curl);
      die($res);
      $response = json_decode($res,TRUE);
      $err = curl_error($curl);
      curl_close($curl);
      if ($err) {
        echo "Error: " . $err;
      } else {
        $ips = file_get_contents(base().'/public/ips.txt');
        $ips = json_decode($ips, TRUE);
        $ips[] = ['date' => date('Y-m-d H:i:s'), 'ip' => $_SERVER['REMOTE_ADDR']];
        $json = json_encode($ips);

        // $rt = $response['rates'];
        $arr = array("AZN" => 1,"RUB" => $rt['AZN'] / $rt["RUB"],"TRY" => $rt['AZN'] / $rt["TRY"],"USD" => $rt['AZN'] / $rt["USD"],);
        file_put_contents(base().'/public/currency.json',json_encode($arr,true));
        file_put_contents(base().'/public/ips.txt',$json);
        $r = file_get_contents(base().'/public/currency.json');
        if (isJson($r)) {
          echo "success";
        }else{
          echo "not json";
        }
      }
    }
    public function testing0(Request $req){
      $data = file_get_contents($base = burl().'/config/settings.php');
      $data = preg_replace('!/\*.*?\*/!s', '', $data);
      $data = preg_replace('/\n\s*\n/', "\n", $data);
      $arr = preg_split("/\,/", substr($data,(strpos($data,"[") + 1),strpos($data,"];")));
      // unset($arr[count($arr) - 1]);
      $array = [];
      for ($i=0; $i < count($arr); $i++) {
        $part1 = str_replace("'","",substr($arr[$i], strpos($arr[$i], "' =>") + 5));
        $part2 = str_replace("'","",substr($arr[$i], 0,strpos($arr[$i], "' =>")));
        $part2 = preg_replace('/\s+/', '', $part2);
        $array[] = [
          $part2 => $part1
        ];
      }
      print_r($array);

    }
}

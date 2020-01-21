<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Products;
use App\Category;

class DataController extends Controller
{
    public function searchedproducts(Request $req){
      $search = $req->search;
      $pros = Products::orderBy('created_at','desc')->where('productname','LIKE','%' .$search. '%')
      ->orWhere('description','LIKE','%' .$search. '%')
      ->orWhere('description_title','LIKE','%' .$search. '%')
      ->orWhere('prod_id','LIKE','%' .$search. '%')
      ->get();
      $count = count($pros);
      return view('products',compact("pros","search","count"));
    }
    public function searchedproducts_json(Request $req){
      return redirect()->json();
    }
    public function category_page($slug){
      $cat = Category::where('slug',$slug)->first();
      $cat->views += 1;
      $cat->update();
      if (!empty($cat)) {
        $pros = Products::where('category',$cat->id)->orderBy('created_at','desc')->get();
        $count = count($pros);
        return view('products',compact("pros","cat","count"));
      }else{
        return redirect('/');
      }
    }

    public function testing(Request $req){
      // $data = file_get_contents(burl().'/resources/lang/az/validation.php');
      // $data = preg_replace('!/\*.*?\*/!s', '', $data);
      // $data = preg_replace('/\n\s*\n/', "\n", $data);
      // $arr = preg_split("/\,/", substr($data,(strpos($data,"[") + 1),strpos($data,"]")));
      // unset($arr[count($arr) - 1]);
      // $array = [];
      // for ($i=0; $i < count($arr); $i++) {
      //   $part1 = str_replace("'","",substr($arr[$i], strpos($arr[$i], "' =>") + 5));
      //   $part2 = str_replace("'","",substr($arr[$i], 0,strpos($arr[$i], "' =>")));
      //   $part2 = preg_replace('/\s+/', '', $part2);
      //   $array[] = [
      //     $part2 => $part1
      //   ];
      // }
      // $directories = scandir(burl().'/resources/lang/en/');
      // unset($directories[0]);
      // unset($directories[1]);
      // print_r($array);

      

    }
}

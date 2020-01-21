<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Products;
use App\Protab;
use Lang;
use DB;
use App\Images;
use Image;
class ProductController extends Controller
{
    public function index(){
        $pros = Products::orderBy('created_at','desc')->get();
        return view('index',compact('pros'));
    }
    public function get_product_details($slug){
      $pro = Products::where('slug',$slug)->first();
      $pro->views += 1;
      $pro->update();
      return view('product',compact('pro'));
    }
    public function add_product_view(Request $req){
      return view('admin.add_product');
    }
    public function add_product(Request $req){
      $this->validate($req,[
        'prod_id' => 'required|unique:products'
      ]);
      $pro = new Products;
      $pro->productname = $req->productname;
      if (empty($req->slug)) {
        $pro->slug = make_slug($req->productname);
      }else{
        $pro->slug = make_slug($req->slug);
      }
      $pro->category = $req->category;
      $pro->prod_id = $req->prod_id;
      $pro->quantity = $req->quantity;
      $pro->price = $req->price;
      $pro->old_price = $req->old_price;
      $pro->description = $req->description;
      $pro->description_title = $req->description_title;
      $pro->brand = $req->brand;
      $pro->condition = $req->condition;
      $pro->token = md5(microtime());
      $pro->save();
      $imgArr=[];
      $sm_folder = 'uploads/pro/small/';
      $folder = 'uploads/pro/';
      foreach ($req->images as $picture) {
          $ext=$picture->getClientOriginalExtension();
          if($ext=='jpg' || $ext=='png' || $ext=='jpeg' || $ext=='bmp')  {
              $filename=time()+random_int(1, 100000000).'.'.$picture->getClientOriginalExtension();
              Image::make($picture)->save($sm_folder.$filename);
              $picture->move(public_path($folder),$filename);
              array_push($imgArr,$filename);
        }
      }
      for ($i=0; $i < count($imgArr); $i++) {
          $img_name = $imgArr[$i];
          resize($sm_folder.$img_name, $sm_folder.$img_name, 262.5, 350);
          resize($folder.$img_name, $folder.$img_name, 455, 455);
          $img = new Images;
          $img->prod_id = $pro->id;
          $img->image = $img_name;
          $img->save();
      }
      // update_sitemap();
      return redirect()->back()->with(['type' => 'success','message' => Lang::get('app.Product_added')]);
    }
    // if (!file_exists($sm_folder)) {
    //     mkdir($folder, 666, true);
    // }
    // if (!file_exists($save_path)) {
    //     mkdir($folder, 666, true);
    // }
    public function edit_product(Request $req){

    }
    public function delete_product(){

    }
    public function add_tab(Request $req){

    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Products;
use App\Protab;
use App\News;
use App\Pages;
use Lang;
use DB;
use App\Images;
use Image;
class ProductController extends Controller
{
    public function index(){
        $pros = DB::select("SELECT p.*,FORMAT(p.price/".currency(0).",2) as price,FORMAT(p.old_price/".currency(0).",2) as old_price,(SELECT AVG(rating) FROM `comments` c WHERE prod_id = p.id) as rating FROM products p ORDER BY created_at DESC LIMIT 20");
        // return $pros;
        return view('index',compact('pros'));
    }
    public function get_product_details($slug){
      $pro = Products::select(DB::raw("*,FORMAT(price/".currency(0).",2) as price,FORMAT(old_price/".currency(0).",2) as old_price"))->where('slug',$slug)->first();
      if (!empty($pro)) {
        $pro->views += 1;
        $pro->update();
        $pros = DB::select("SELECT p.*,FORMAT(p.price/".currency(0).",2) as price,FORMAT(p.old_price/".currency(0).",2) as old_price,(SELECT AVG(c.rating) FROM `comments` c WHERE prod_id = p.id) as rating FROM products p WHERE category = ".$pro->category." AND id != ".$pro->id." LIMIT 4");
        $prod_tabs = Protab::where('prod_id',$pro->id)->orderBy('order','ASC')->get();
        return view('product',compact('pro','pros','prod_tabs'));
      }else{
        return Lang::get('app.Product_you_looking_not_found');
      }
    }
    public function get_product_list(){
      $pros = Products::orderBy('created_at','desc')->get();
      return view('admin.list',compact('pros'));
    }
    public function add_product_view(Request $req,$id = null){
      if (!is_null($id)) {
        $pro = Products::find($id);
        return view('admin.add_product',compact('pro'));
      }else{
        return view('admin.add_product');
      }
    }
    public function add_prod_tabs($slug){
      $pro = Products::where('slug',$slug)->first();
      $pro_tabs = Protab::where('prod_id',$pro->id)->get();
      return view('admin.add_product',compact('pro','pro_tabs'));
    }
    public function get_prod_tabs_ajax(Request $req){
      $pts = Protab::where('prod_id',$req->main_id)->orderBy('order','ASC')->get();
      return response()->json(['pts' => $pts]);
    }
    public function delete_prod_tab(Request $req){
      $pt = Protab::find($req->id);
      if (!empty($pt)) {
        $pt->delete();
      }
      return response()->json(['message' => Lang::get('app.Tab_deleted')]);
    }
    public function update_product_tabs(Request $req){
      $arr = $req->list;
      for ($i=0; $i < count($arr); $i++) {
        $pt_check = Protab::find($arr[$i]["id"]);
        if (!isset($pt_check) | empty($pt_check)) {
          $pt = new Protab;
        }else{
          $pt = Protab::find($arr[$i]["id"]);
        }
        $pt->prod_id = $req->main_id;
        if (!empty($arr[$i]["title"]) && !empty($arr[$i]["desc"])) {
          $pt->title = $arr[$i]["title"];
          $pt->description = $arr[$i]["desc"];
          $pt->order = $arr[$i]["index"];
          if (!isset($pt_check) | empty($pt_check)) {
            $pt->save();
          }else{
            $pt->update();
          }
        }
      }

      return response()->json(['message' => Lang::get('app.Product_tabs_updated'),'list' => $req->list,'product' => $req->prod]);
    }
    public function add_product(Request $req,$id = null){
      // $this->validate($req,[
      //   'prod_id' => 'required|unique:products'
      // ]);
      if (is_null($id)) {
        $pro = new Products;
      }else{
        $pro = Products::find($id);
      }
      // echo "string";exit();

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
      if (is_null($id)) {
        $mess = Lang::get('app.Product_added');
        $pro->save();
      }else{
        $mess = Lang::get('app.Product_updated');
        $pro->update();
      }
      // if (isset($req->images) && !empty($req->images)) {
      if ($req->hasFile('images')) {
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
            resize($folder.$img_name, $folder.$img_name, 1200, 1200);
            logo_on_image($folder.$img_name,'img/logo-transparent.png',$folder.$img_name);
            $img = new Images;
            $img->prod_id = $pro->id;
            $img->image = $img_name;
            $img->save();
        }
      }
      update_sitemap();
      return redirect()->back()->with(['type' => 'success','message' => $mess]);
    }
    // if (!file_exists($sm_folder)) {
    //     mkdir($folder, 666, true);
    // }
    // if (!file_exists($save_path)) {
    //     mkdir($folder, 666, true);
    // }

    // public function edit_product(Request $req){
    //
    // }
    public function add_tab(Request $req){

    }
    public function change_im_order_view($type,$slug){
      if ($type === "product") {
        $pro = Products::where('slug',$slug)->first();
        $images = Images::where('prod_id',$pro->id)->orderBy('order','asc')->get();
        $url = "/uploads/pro/small/";
      }elseif($type === "page"){
        $page = Pages::where('slug',$slug)->first();
        $images = Images::where('page_id',$page->id)->orderBy('order','asc')->get();
        $url = "/uploads/pages/";
      }else{
        $ns = News::where('slug',$slug)->first();
        $images = Images::where('news_id',$ns->id)->orderBy('order','asc')->get();
        $url = "/uploads/news/";
      }
      return view('admin.add_product',compact('images','url'));
    }
    public function change_im_order(Request $req){
      $data = $req->list;
      for ($i=0; $i < count($data); $i++) {
        $img = Images::find($data[$i]);
        $img->order = $i;
        $img->update();
      }
      return response()->json(['success' => Lang::get('app.Images_reordered')]);
    }
}

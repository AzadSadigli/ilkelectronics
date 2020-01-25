<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;
use Lang;
use Hash;
use App\Comments;
use App\Wishlist;
use App\Products;
use DB;
use Image;use File;
class UserController extends Controller
{
    public function change_profile(Request $req){
      $this->validate($req, [
        'user_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
      ]);
      $mess = "Failed";
      if ($req->hasFile('user_image')) {
        $us = Auth::user();
        $folder = 'uploads/avatars/';
        $picture = $req->user_image;
        $ext=$picture->getClientOriginalExtension();
        if($ext=='jpg' || $ext=='png' || $ext=='jpeg' || $ext=='bmp')  {
           $filename=time()+random_int(1, 100000000).'.'.$picture->getClientOriginalExtension();
           $picture->move(public_path($folder),$filename);
        }
        resize($folder.$filename, $folder.$filename, 128, 128);
        if(File::exists($folder.$us->avatar)) {File::delete($folder.$us->avatar);}
        $us->avatar = $filename;
        $us->update();
        $mess = Lang::get('app.Profile_image_updated');
      }
      return response()->json(['success' => $mess,'image' => '/'.$folder.$filename]);
    }
    public function contact_us(){
      return view('contact_us');
    }
    public function add_comment(Request $req){
      $com = new Comments;
      if (Auth::check()) {
        $com->user_id = Auth::user()->id;
      }else{
        $com->name = $req->name;
        $com->surname = "0";
        $com->email = $req->email;
      }
      if (isset($req->prod_id)) {
        $com->prod_id = $req->prod_id;
      }
      $com->rating = $req->rating;
      $com->comment = $req->comment;
      $com->save();
      $res = Lang::get('app.Your_comment_added');
      if (config("settings.comment_verification") == 1) {
        $res = Lang::get('app.Your_comment_will_shared_after_verification');
      }
      return response()->json(['success' => $res]);
    }
    public function get_comments(Request $req){
      if (isset($req->prod_id)) {
        $cm  = DB::select("SELECT
                              c.rating,c.comment,c.created_at as time,
                              COALESCE(NULLIF(c.name, ''), u.name) AS `name`
                          FROM
                              `comments` c
                          LEFT JOIN `users` u ON u.id = c.user_id
                          WHERE c.prod_id = ".$req->prod_id."
                          ORDER BY `time` DESC");
      }
      $stars = round(Comments::where('prod_id',$req->prod_id)->avg('rating'));
      return response()->json(['comments' => $cm,'rating' => $stars]);
    }
    public function add_wishlist(Request $req){
      $ws = new Wishlist;
      $ws->prod_id = $req->prod_id;
      $ws->user_id = Auth::user()->id;
      if (!empty($req->quantity)) {
        $ws->quantity = $req->quantity;
      }
      if (!empty(Products::find($req->prod_id))) {
        if (empty(Wishlist::where('user_id',Auth::user()->id)->where('prod_id',$req->prod_id)->first())) {
          $ws->save();
        }else{
          $ws->update();
        }
      }
      return response()->json(['success' => Lang::get('app.Product_add_to_wishlist')]);
    }
    public function get_wishlist(Request $req){
      $limit = "";
      if ($req->type == 0) {
        $limit = " LIMIT ".config("settings.show_wishlist_max_header")." ";
      }
      $ws = DB::select("SELECT
                          w.id,
                          w.quantity as wquantity,
                          w.created_at as wtime,
                          p.prod_id,
                          p.productname,
                          p.price,
                          p.old_price,
                          p.slug,
                          p.category,
                          p.quantity as pquantity,
                          COALESCE((SELECT
                              image
                          FROM
                              images
                          WHERE
                              prod_id = w.prod_id
                          ORDER BY
                              `order` ASC
                          LIMIT 1),'default.png') AS image
                      FROM
                          wishlist w
                      LEFT JOIN products p ON
                          w.prod_id = p.id
                      WHERE
                          w.user_id = ".Auth::user()->id.$limit);
      $count = Wishlist::where('user_id',Auth::user()->id)->count();
      $currency = currency();
      $sum = DB::select("SELECT SUM(p.price)*w.quantity as sum FROM wishlist w LEFT JOIN products p ON p.id = w.prod_id");
      $tot = $sum[0]->sum;
      if ($sum[0]->sum === null) {
        $tot = 0;
      }
      return response()->json(['list' => $ws,'count' => $count,'currency' => $currency,'total' => $tot]);
    }
    public function delete_wishlist(Request $req){
      $ws = Wishlist::findOrFail($req->id);
      if ($ws->user_if = Auth::user()->id) {
        $ws->delete();
      }
      return response()->json(['success' => Lang::get('app.Wishlist_removed')]);
    }
    public function wishlist(){
      return view('wishlist');
    }
    public function update_profile(Request $req){
      $us = Auth::user();
      $us->name = $req->name;
      $us->surname = $req->surname;
      $us->email = $req->email;
      $us->birthdate = $req->birthdate;
      $us->phone = $req->phone;
      $us->update();
      return redirect()->back()->with(['type' => 'success','message' => Lang::get('app.User_data_updated')]);
    }
    public function update_user_password(Request $req){
      $this->validate($req, [
          'password' => 'required',
          'new_password' => 'confirmed|max:6|different:password',
      ]);
      $user = Auth::user();
      if (Hash::check($req->password, $user->password)) {
         $user->fill([
          'password' => Hash::make($req->new_password)
          ])->save();
          return redirect("/admin/profile#change_password")->with(['type' => 'success', 'message' => Lang::get('app.Password_changed')]);
      } else {
        return redirect("/admin/profile#change_password")->with(['type' => 'danger', 'message' => Lang::get('app.Password_didnt_changed')]);
      }
    }
    public function add_prod_comment(Request $req){
      $com = new Comments;
      if (Auth::check()) {
        $com->user_id = Auth::user()->id;
      }else{
        $com->name = $req->name;
        $com->surname = $req->surname;
        $com->email = $req->email;
      }
      $com->prod_id = $req->product_id;
      $com->comment = $req->comment;
      $com->rating = $req->rating;
      $com-save();
      return redirect()->json(['success' => Lang::get('app.Comment_added_successfully')]);
    }
}

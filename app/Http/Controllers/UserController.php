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

class UserController extends Controller
{
    public function create_user(){

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
                          (SELECT
                              image
                          FROM
                              images
                          WHERE
                              prod_id = w.prod_id
                          ORDER BY
                              `order` ASC
                          LIMIT 1) AS image
                      FROM
                          wishlist w
                      LEFT JOIN products p ON
                          w.prod_id = p.id
                      WHERE
                          w.user_id = ".Auth::user()->id.$limit);
      $count = Wishlist::where('user_id',Auth::user()->id)->count();
      $currency = currency();
      $sum = DB::select("SELECT SUM(p.price)*w.quantity as sum FROM wishlist w LEFT JOIN products p ON p.id = w.prod_id");
      return response()->json(['list' => $ws,'count' => $count,'currency' => $currency,'total' => $sum[0]]);
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

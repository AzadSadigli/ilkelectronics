<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;
use Lang;
use Hash;
use App\Comments;
class UserController extends Controller
{
    public function create_user(){

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

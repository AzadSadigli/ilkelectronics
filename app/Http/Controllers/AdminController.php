<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class AdminController extends Controller
{
    public function panel_home(){
      return view('admin.index');
    }
    public function add_category_view(){
      return view('admin.add_product');
    }
    public function add_category(Request $req){
      $this->validate($req,[
        'name' => 'unique|required'
      ]);
      $ct = new Category;
      if (isset($req->parent) && !empty($req->parent)) {
        $ct->parent_id = $req->parent;
      }
      $ct->name = $req->category_name;
      $ct->save();
      return redirect()->back()->with('success',Lang::get('Category_added_successfully'));
    }
}

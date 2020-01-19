<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Products;
use App\Protab;

class ProductController extends Controller
{
    public function index(){
        return view('index');
    }
    public function add_product_view(Request $req){
      return view('admin.add_product');
    }
    public function add_product(Request $req){

    }
    public function edit_product(Request $req){

    }
    public function delete_product(){

    }
    public function add_tab(Request $req){

    }
}

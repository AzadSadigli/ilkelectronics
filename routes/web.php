<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/','ProductController@index');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::group(['prefix' => 'admin'], function(){
  Route::get('/','AdminController@panel_home');
  Route::get('/add-product','ProductController@add_product_view');
  Route::get('/add-category','AdminController@add_category_view');
  Route::post('/add-new-category','AdminController@add_category');
});

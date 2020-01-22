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

Route::get('/testing','DataController@testing');

Route::get('/search-result/search={request}','DataController@searchedproducts');
Route::get('/get-search-result','DataController@searchedproducts_ajax');

Route::get('/category/{slug}','DataController@category_page');
Route::get('/get-category-products','DataController@category_page_ajax');

Route::get('/categories','DataController@get_all_categories');

Route::get('/product/{slug}','ProductController@get_product_details');

Route::group(['prefix' => 'admin'], function(){
  Route::group(['middleware' => 'admin'],function(){
    Route::get('/','AdminController@panel_home');
    Route::get('/add-product','ProductController@add_product_view');
    Route::get('/product-list','ProductController@get_product_list');

    Route::get('/add-category','AdminController@add_category_view');
    Route::post('/add-new-product','ProductController@add_product');
    Route::post('/add-new-category','AdminController@add_category');
    Route::get('/delete-category/{id}','AdminController@delete_category');
    Route::get('/change-subcategory/{id}','AdminController@change_subcats');
    Route::get('/profile','AdminController@my_profile');
    Route::get('/change-image-order/{slug}','ProductController@change_im_order_view');
    Route::post('/change-images-order','ProductController@change_im_order');

    Route::get('/configuration','AdminController@configuration');
    Route::get('/translation','AdminController@translation');
    Route::post('/save-tr-file','AdminController@save_tr_file');
  });
  Route::group(['middleware' => 'secondadmin'],function(){

  });
  Route::group(['middleware' => 'mainadmin'],function(){

  });
});

Route::group(['middleware' => 'auth'],function(){
  Route::get('/profile', 'HomeController@index')->name('home');
  Route::get('/wishlist', 'UserController@wishlist');
  Route::post('/update-profile-data','UserController@update_profile');
  Route::post('/update-user-password','UserController@update_user_password');
  Route::post('/add-to-wishlist','UserController@add_wishlist');
  Route::get('/get-wishlist','UserController@get_wishlist');
  Route::get('/delete-wishlist','UserController@delete_wishlist');
});

Route::get('/update-latest-currency','Controller@currency_update');
// Auth::routes();

// Authentication Routes...
// Route::get('login', 'Auth\RegisterController@account_page')->name('login');
// Route::get('register', 'Auth\RegisterController@account_page')->name('register');
Route::get('/account','Auth\RegisterController@account_page');
Route::redirect('/login','/account?action=login');
Route::redirect('/register','/account?action=register');


Route::post('login', 'Auth\LoginController@login')->name('login');
Route::post('register', 'Auth\RegisterController@register')->name('register');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...

// Password Reset Routes...
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');

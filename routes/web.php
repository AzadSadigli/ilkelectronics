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
use App\Pages;

Route::get('/','ProductController@index');
Route::get('/currency/{currency}','Controller@change_currency');

Route::get('/testing','DataController@testing');

Route::get('/search-result/search={request}','DataController@searchedproducts');
Route::get('/get-search-result','DataController@searchedproducts_ajax');

Route::get('/category/{slug}','DataController@category_page');
Route::get('/get-category-products','DataController@category_page_ajax');

Route::get('/categories','DataController@get_all_categories');

Route::get('/product/{slug}','ProductController@get_product_details');
Route::get('/page/{slug}','PageController@page_view');
Route::get('/news/{slug}','PageController@news_view');
Route::get('/page/{slug}','PageController@page_view');
Route::get('/news-list','PageController@news_list');
Route::get('/contact-us','UserController@contact_us');


Route::post('/add-new-comment','UserController@add_comment');
Route::get('/get-review-list','UserController@get_comments');

Route::group(['prefix' => 'admin'], function(){
  Route::group(['middleware' => 'admin'],function(){
    Route::view('/','admin.index');
    Route::get('/add-product','ProductController@add_product_view');
    Route::get('/product-list','ProductController@get_product_list');

    Route::get('/add-category','AdminController@add_category_view');
    Route::post('/add-new-product','ProductController@add_product');
    Route::post('/add-new-category','AdminController@add_category');
    // Route::get('/create-page','AdminController@create_page_view');

    Route::get('/delete-category/{id}','AdminController@delete_category');
    Route::get('/change-subcategory/{id}','AdminController@change_subcats');
    Route::view('/profile','admin.profile');
    Route::get('/change-image-order/{slug}','ProductController@change_im_order_view');
    Route::post('/change-images-order','ProductController@change_im_order');
    Route::get('/edit-product/{id}','ProductController@add_product_view');
    Route::get('/products-tabs/{slug}','ProductController@add_prod_tabs');
    Route::post('/update-products-tabs','ProductController@update_product_tabs');
    Route::post('/update-product/{id}','ProductController@add_product');

    //page section
    Route::get('/create-page','PageController@create_page_vew');
    Route::post('/create-new-page','PageController@create_page');
    Route::view('/page-list','admin.list',['pages' => Pages::all()]);
    Route::delete('/delete-page','PageController@delete_page');
    Route::get('/page-edit/{id}','AdminController@edit_page_view');
    Route::post('/edit-page/{id}','AdminController@edit_page');
    Route::post('/update-pg-head-foot','PageController@update_head_foot');
    Route::get('/get-page-details-for-edit','PageController@get_page_details_edit');
    Route::post('/update-page','PageController@update_page');

    //new section
    Route::get('/add-news','PageController@add_news_view');
    Route::post('/add-new-news','PageController@add_news');
    Route::view('/news-list','admin.list');
    Route::get('/news-edit/{id}','PageController@edit_news_view');
    Route::get('/delete-news/{id}','PageController@delete_news');
    Route::post('/edit-news/{id}','PageController@edit_news');


    //configuration section
    Route::get('/configuration','AdminController@configuration');
    Route::delete('/delete-configuration','AdminController@delete_conf');
    Route::post('/update-configuration','AdminController@configuration');
    Route::get('/translation','AdminController@translation');
    Route::post('/save-tr-file','AdminController@save_tr_file');
  });
  Route::group(['middleware' => 'secondadmin'],function(){
    Route::get('/delete-product/{id}','Controller@delete_product');
  });
  Route::group(['middleware' => 'mainadmin'],function(){
    Route::get('/get-file-data','AdminController@get_file_data');
    Route::post('/update-css-js','AdminController@update_css_js');
    Route::get('/code-view/{file}','AdminController@code_view');
    Route::get('/development','AdminController@development_page');
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
  Route::post('/change-user-profile','UserController@change_profile');
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

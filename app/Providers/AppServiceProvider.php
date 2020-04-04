<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Schema;
//use Illuminate\Support\URL;

use App\Category;
use App\Pages;
use App\Posters;
use App\Products;
use App\Orders;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
      if (Request::server('HTTP_X_FORWARDED_PROTO') == 'https') {
        URL::forceScheme('https');
      } else {
        URL::forceScheme('http');
      }
      Schema::defaultStringLength(191);
      // menu section starts
      $cats = Category::with('subcats')->withCount('subcats')->where(function ($q) {
        $q->where('parent_id',0)->orWhereNull('parent_id');
      })->get();
      $header_pages = Pages::with('childs')->withCount('childs')->where('status',1)->where('header',1)->where(function ($q) {
        $q->where('parent_id',0)->orWhereNull('parent_id');
      })->take(4)->get();
      view()->composer(['layouts.menu'], function($view) use ($cats,$header_pages){
        $view->with(['cats' => $cats,'header_pages'=>$header_pages]);
      });
      // menu section ends
      // main page (index) starts
      $arr_colors = ['#2da8ff','#45e645','#e31e25','#e8cd09','#d0d0d0'];
      $pss = Posters::where('type',0)->where('status',1)->get();
      $rnd_pss = Posters::inRandomOrder()->where('type',1)->where('status',1)->take(1)->get();
      view()->composer(['index'],function($view) use ($arr_colors,$pss,$rnd_pss){
        $view->with(['arr_colors' => $arr_colors,'pss' => $pss,'rnd_pss' => $rnd_pss]);
      });
      // main page (index) ends
      // admin home page (index) starts
      $home_prods = Products::orderBy('views','DESC')->take(conf("Limit_of_most_viewed_prods"))->get();
      $home_orders = Orders::with('product')->where('status',1)->orderBy('created_at','DESC')->get();
      $home_orders_ns = Orders::with('product')->where('status',0)->orderBy('created_at','DESC')->get();
      view()->composer(['admin.index'],function($view) use ($home_prods,$home_orders,$home_orders_ns){
        $view->with(['home_prods' => $home_prods,'home_orders' => $home_orders,'home_orders_ns' => $home_orders_ns]);
      });
      // admin home page (index) ends

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

    }
}

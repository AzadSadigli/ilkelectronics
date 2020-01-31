@extends('layouts.ms')
@section('head')
<meta name="description" content="">
<meta name="keywords" content="">
<meta property=”og:title” content=””/>
<meta property=”og:url” content=””/>
<meta property=”og:site_name” content=””/>
<meta property=”og:image” content=””/>
<meta property=”og:type” content=””/>
<meta property=”og:description” content=””/>
<!-- <meta name="twitter:title" content="">
<meta name="twitter:description" content="">
<meta name="twitter:image" content="">
<meta name="twitter:site" content="">
<meta name="twitter:creator" content=""> -->
<title>{{conf("Site_title")}}</title>
@endsection
@section('body')
<div id="home">
	<div class="container">
		<div class="home-wrap">
			<div id="home-slick">
				@foreach(App\Posters::where('type',0)->where('status',1)->get() as $ps)
				<div class="banner banner-1">
					<img src="/uploads/posters/{{$ps->image}}" alt="{{$ps->title}}">
					<div class="banner-caption">
						<h1 class="primary-color">{{$ps->title}} </h1>
						<h3 class="white-color font-weak">{{$ps->details}}</h3>
						@if(isset($ps->button) && !empty($ps))
						@php($arr = ['#2da8ff','#45e645','#e31e25','#e8cd09','#d0d0d0'])
						 <a href="{{$ps->button_href}}" class="primary-btn" style="background:{{$arr[$ps->button_type]}}" target='_blank'>{{$ps->button}}</a>
						@endif
					</div>
				</div>
				@endforeach
			</div>
		</div>
	</div>
</div>
<div class="section">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="section-title">
					<h2 class="title">Deals Of The Day</h2>
					<div class="pull-right">
						<div class="product-slick-dots-1 custom-dots"></div>
					</div>
				</div>
			</div>
			@foreach(App\Posters::inRandomOrder()->where('type',1)->where('status',1)->take(1)->get() as $ps)
			<div class="col-md-3 col-sm-6 col-xs-6">
				<div class="banner banner-2">
					<img src="/uploads/posters/{{$ps->image}}" alt="{{$ps->title}}">
					<div class="banner-caption">
						<h2 class="white-color">{!! $ps->title !!}</h2>
						@if(!empty($ps->button)) <button class="primary-btn">{{$ps->button}}</button> @endif
					</div>
				</div>
			</div>
			@endforeach
			<div class="col-md-9 col-sm-6 col-xs-6">
				<div class="row">
					<div id="product-slick-1" class="product-slick">
						<div class="product product-single deals_of_day">
							<div class="product-thumb">
								<div class="product-label">
									<span>New</span>
									<span class="sale">-20%</span>
								</div>
								<ul class="product-countdown">
									<li><span>00 H</span></li>
									<li><span>00 M</span></li>
									<li><span>00 S</span></li>
								</ul>
								<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
								<img src="/img/product01.jpg" alt="">
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
							</div>
							<div class="product-body">
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
								<div class="product-btns">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
						</div>
						<div class="product product-single deals_of_day">
							<div class="product-thumb">
								<div class="product-label">
									<span class="sale">-20%</span>
								</div>
								<ul class="product-countdown">
									<li><span>00 H</span></li>
									<li><span>00 M</span></li>
									<li><span>00 S</span></li>
								</ul>
								<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
								<img src="/img/product07.jpg" alt="">
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
							</div>
							<div class="product-body">
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
								<div class="product-btns">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
						</div>
						<div class="product product-single deals_of_day">
							<div class="product-thumb">
								<div class="product-label">
									<span>New</span>
									<span class="sale">-20%</span>
								</div>
								<ul class="product-countdown">
									<li><span>00 H</span></li>
									<li><span>00 M</span></li>
									<li><span>00 S</span></li>
								</ul>
								<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
								<img src="/img/product06.jpg" alt="">
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
							</div>
							<div class="product-body">
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
								<div class="product-btns">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="section nxt-sblng">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="section-title">
					<h2 class="title">{{__('app.Latest_products')}}</h2>
				</div>
			</div>
			@foreach($pros as $pro)
			<div class="col-md-3 col-sm-6 col-xs-6">
				<div class="product product-single">
					<div class="product-thumb">
						<div class="product-label">
							@if(nd(\Carbon\Carbon::parse($pro->created_at)->format('Y-m-d'))) <span>{{__('app.New')}}</span> @endif
							@if(!empty($pro->old_price)) <span class="sale">{{discount($pro->old_price,$pro->price)}} %</span> @endif
						</div>
						<a href="/product/{{$pro->slug}}" class="main-btn quick-view"><i class="fa fa-search-plus"></i> {{__('app.Quick_view')}}</a>
						@if(App\Images::where('prod_id',$pro->id)->count() == 0)
						<img src="/img/default.png" alt="{{$pro->productname}}">
						@else @php($img = App\Images::where('prod_id',$pro->id)->orderBy('order','asc')->first())
						<img src="/uploads/pro/small/{{$img->image}}" alt="{{$pro->productname}}">
						@endif
						<div class="product-rating">
							@for($k=1;$k<=5;$k++)
								@if($k <= $pro->rating)
									<i class="fa fa-star"></i>
								@else
									<i class="fa fa-star-o empty"></i>
								@endif
							@endfor
						</div>
					</div>
					<div class="product-body">
						<h3 class="product-name"><a href="/product/{{$pro->slug}}">{{$pro->productname}}</a></h3>
						<h2 class="product-price">{{$pro->price}} {{currency()}} @if(!empty($pro->old_price)) <del class="product-old-price">{{$pro->old_price}} {{currency()}}</del>@endif</h2>
						<div class="product-btns">
							@if(Auth::check())
							@if(empty(App\Wishlist::where('user_id',Auth::user()->id)->where('prod_id',$pro->id)->first()))
							<a class="primary-btn add-to-cart" data-id="{{$pro->id}}" title="{{__('app.Add_to_wishlist')}}"><i class="fa fa-shopping-cart"></i></a>
							@else
							<a class="primary-btn" title="{{__('app.Added')}}"><i class="fa fa-check"></i></a>
							@endif
							@endif
						</div>
					</div>
				</div>
			</div>
			@endforeach
		</div>
		<div class="row">
			@foreach(App\Posters::inRandomOrder()->where('type',1)->where('status',1)->take(1)->get() as $ps)
			<div class="col-md-3 col-sm-6 col-xs-6">
				<div class="banner banner-2">
					<img src="/uploads/posters/{{$ps->image}}" alt="{{$ps->title}}">
					<div class="banner-caption">
						<h2 class="white-color">{!! $ps->title !!}</h2>
						@if(isset($ps->button) && !empty($ps))
						@php($arr = ['#2da8ff','#45e645','#e31e25','#e8cd09','#d0d0d0'])
						 <a href="{{$ps->button_href}}" class="primary-btn" style="background:{{$arr[$ps->button_type]}}" target='_blank'>{{$ps->button}}</a>
						@endif
					</div>
				</div>
			</div>
			@endforeach

			<!-- Product Single -->
			<div class="col-md-3 col-sm-6 col-xs-6">
				<div class="product product-single">
					<div class="product-thumb">
						<div class="product-label">
							<span>New</span>
							<span class="sale">-20%</span>
						</div>
						<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
						<img src="/img/product07.jpg" alt="">
						<div class="product-rating">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star-o empty"></i>
						</div>
					</div>
					<div class="product-body">
						<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
						<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
						<div class="product-btns">
							<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
							<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
							<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
			<!-- /Product Single -->

			<!-- Product Single -->
			<div class="col-md-3 col-sm-6 col-xs-6">
				<div class="product product-single">
					<div class="product-thumb">
						<div class="product-label">
							<span>New</span>
							<span class="sale">-20%</span>
						</div>
						<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
						<img src="/img/product06.jpg" alt="">
						<div class="product-rating">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star-o empty"></i>
						</div>
					</div>
					<div class="product-body">
						<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
						<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
						<div class="product-btns">
							<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
							<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
							<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
			<!-- /Product Single -->

			<!-- Product Single -->
			<div class="col-md-3 col-sm-6 col-xs-6">
				<div class="product product-single">
					<div class="product-thumb">
						<div class="product-label">
							<span>New</span>
							<span class="sale">-20%</span>
						</div>
						<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
						<img src="/img/product05.jpg" alt="">
						<div class="product-rating">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star-o empty"></i>
						</div>
					</div>
					<div class="product-body">
						<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
						<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
						<div class="product-btns">
							<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
							<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
							<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
			<!-- /Product Single -->
		</div>
		@include('layouts.news')
	</div>
</div>
@endsection

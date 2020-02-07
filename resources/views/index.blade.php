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
				@php($pss = App\Posters::where('type',0)->where('status',1)->get())
				@if(count($pss) != 0)
				@foreach($pss as $ps)
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
				@else
				<div class="banner banner-1">
					<img src="/uploads/posters/default-slide.jpg" alt="{{conf('Site_title')}}">
				</div>
				@endif
			</div>
		</div>
	</div>
</div>
<div class="section">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="section-title">
					<h2 class="title">{{__('app.Deals_of_the_day')}}</h2>
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
						@foreach($bpro as $bp)
						<div class="product product-single deals_of_day">
							<div class="product-thumb">
								<div class="product-label">
									@if(!empty($bp->old_price)) <span class="sale">{{discount($bp->old_price,$bp->price)}} %</span> @endif
								</div>
								<ul class="product-countdown pro_countdown" data-date="{{$bp->end_date}}">
									<li><span></span></li><li><span></span></li><li><span></span></li><li><span></span></li>
								</ul>
								<a href="/product/{{$bp->slug}}" class="main-btn quick-view"><i class="fa fa-search-plus"></i> {{__('app.Quick_view')}}</a>
								@if(App\Images::where('prod_id',$bp->id)->count() == 0)
								<img src="/img/default.png" alt="{{$bp->productname}}">
								@else @php($img = App\Images::where('prod_id',$bp->id)->orderBy('order','asc')->first())
								<img src="/uploads/pro/small/{{$img->image}}" alt="{{$bp->productname}}">
								@endif
								<div class="product-rating">
									@for($k=1;$k<=5;$k++)
										@if($k <= $bp->rating)
											<i class="fa fa-star"></i>
										@else
											<i class="fa fa-star-o empty"></i>
										@endif
									@endfor
								</div>
							</div>
							<div class="product-body">
								<h3 class="product-name"><a href="/product/{{$bp->slug}}">{{str_limit($bp->productname,$limit = 28,$end="...")}}</a></h3>
								<h2 class="product-price">{{$bp->price}} {{currency()}} @if(!empty($bp->old_price)) <del class="product-old-price">{{$bp->old_price}} {{currency()}}</del>@endif</h2>
								<div class="product-btns">
									@if(Auth::check())
										@if(empty(App\Wishlist::where('user_id',Auth::user()->id)->where('prod_id',$bp->id)->first()))
										<a class="primary-btn add-to-cart" data-id="{{$bp->id}}" title="{{__('app.Add_to_wishlist')}}"><i class="fa fa-shopping-cart"></i></a>
										@else
										<a class="primary-btn" title="{{__('app.Added')}}"><i class="fa fa-check"></i></a>
										@endif
										<a href="/order-product/{{$bp->slug}}" class="main-btn">{{__('app.Order_now')}}</a>
									@endif
								</div>
							</div>
						</div>
						@endforeach
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
								<a href="/order-product/{{$pro->slug}}" class="main-btn">{{__('app.Order_now')}}</a>
							@endif
						</div>
					</div>
				</div>
			</div>
			@endforeach
		</div>
		@include('layouts.most_viewed_products')
		@include('layouts.news')
	</div>
</div>
@endsection

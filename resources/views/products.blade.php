@extends('layouts.ms')
@section('head')
<title>@if(Request::is('search-result/*')) {{$search}}
	@else
	{{$cat->name}}
	@endif</title>
@endsection
@section('body')
	<div id="breadcrumb">
		<div class="container">
			<ul class="breadcrumb">
				<li><a href="/">{{__('app.Home')}}</a></li>
				@if(Request::is('search-result/*'))
				<li><a>{{__('app.Search_result')}}</a> </li>
				<li class="active">{{$search}} ({{$count}})</li>
				@else
				<li><a>{{__('app.Category')}}</a> </li>
				<li class="active">{{$cat->name}} ({{$count}})</li>
				@endif
			</ul>
		</div>
	</div>
	<div class="section">
		<div class="container">
			<div class="row">
				<div id="aside" class="col-md-3">
					@include('layouts.filter')
					<div class="aside">
						<h3 class="aside-title">Top Rated Product</h3>
						<div class="product product-widget">
							<div class="product-thumb">
								<img src="/img/thumb-product01.jpg" alt="">
							</div>
							<div class="product-body">
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
							</div>
						</div>
						<div class="product product-widget">
							<div class="product-thumb">
								<img src="/img/thumb-product01.jpg" alt="">
							</div>
							<div class="product-body">
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<h3 class="product-price">$32.50</h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="main" class="col-md-9">
					<div class="store-filter clearfix">
						<div class="pull-left">
							<div class="sort-filter">
								<span class="text-uppercase">{{__('app.Sort_By')}}:</span>
								<select class="input sortby_value">
										<option value="0"></option>
										<option value="1">Price</option>
										<option value="2">Rating</option>
									</select>
								<a href="#" class="main-btn icon-btn"><i class="fa fa-arrow-down"></i></a>
							</div>
						</div>
						<div class="pull-right">
							<div class="page-filter">
								<span class="text-uppercase">Show:</span>
								<select class="input show_num_prod">
										<option value="10">10</option>
										<option value="20">20</option>
										<option value="30">30</option>
									</select>
							</div>
						</div>
					</div>
					<div id="store">
						<div class="row">
							@foreach($pros as $pro)
							<div class="col-md-4 col-sm-6 col-xs-6">
								<div class="product product-single">
									<div class="product-thumb">
										<div class="product-label">
											@if(nd($pro->created_at->format('Y-m-d'))) <span>{{__('app.New')}}</span> @endif
											@if(!empty($pro->old_price)) <span class="sale">{{discount($pro->old_price,$pro->price)}}%</span> @endif
										</div>
										<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
										@php($img = App\Images::where('prod_id',$pro->id)->orderBy('order','asc')->first())
										@if(!empty($img))
										<img src="/uploads/pro/small/{{$img->image}}" alt="{{$pro->productname}}">
										@else
										<img src="/img/default.png" alt="{{$pro->productname}}">
										@endif
									</div>
									<div class="product-body">
										<h3 class="product-price">{{$pro->price}} <del class="product-old-price">$45.00</del></h3>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o empty"></i>
										</div>
										<h2 class="product-name"><a href="/product/{{$pro->slug}}">{{$pro->productname}}</a></h2>
										<div class="product-btns">
											<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i></button>
										</div>
									</div>
								</div>
							</div>
							@endforeach
							<!-- <div class="clearfix visible-md visible-lg"></div> -->
						</div>
					</div>
					@if($count > 9)
					<div class="load-section">
							<a href="#" class="cust-btn">{{__('app.Load_more')}}</a>
					</div>
					@endif
				</div>
			</div>
		</div>
	</div>
@endsection
@section('foot')
	<script type="text/javascript">
		let sortby = 0;
		$(".reset-filter").on("click",function(){
			for (var i = 0; i < $(".filt-by-brands input").length; i++) {
				$($(".filt-by-brands input")[i]).prop("checked", false);
			}
		});
		var brand_list = [];
		$(document).on("change",".filt-by-brands input",function(){
			if ($(this).is(':checked')) {
				brand_list.push($(this).val());
			}else{
				brand_list.splice(brand_list.indexOf($(this).val()),1);
			}
		});
		$(document).on("click",".filter-btn",function(){
			let filter = [
				$(".sortby_value").val(),
				brand_list,
				$(".filt_min").val(),
				$(".filt_max").val(),
				$(".show_num_prod").val()
			];
			console.log(filter);
		});
	</script>
@endsection

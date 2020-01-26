@extends('layouts.ms')
@section('head')
<title>@if(Request::is('search-result/*')) {{$search}} - {{conf("Site_title")}}
	@else
	{{$cat->name}} - {{conf("Site_title")}}
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
						<h3 class="aside-title">{{__('app.Top_rated_products')}}</h3>
						@foreach($tp_pros as $tp)
						<div class="product product-widget">
							<div class="product-thumb">
								<img src="/uploads/pro/{{$tp->image}}" alt="{{$tp->productname}}">
							</div>
							<div class="product-body">
								<h2 class="product-name"><a href="/product/{{$tp->slug}}" title="{{$tp->productname}}">{{$tp->productname}}</a></h2>
								<h3 class="product-price">{{$tp->price}} @if(!empty($tp->old_price)) <del class="product-old-price">{{$tp->old_price}}</del> @endif</h3>
								<div class="product-rating">
									@for($k=1;$k<=5;$k++)
										@if($k < $tp->rating)
											<i class="fa fa-star"></i>
										@else
											<i class="fa fa-star-o empty"></i>
										@endif
									@endfor
								</div>
							</div>
						</div>
						@endforeach
					</div>
				</div>
				<div id="main" class="col-md-9">
					<div class="store-filter clearfix">
						<div class="pull-left">
							<div class="sort-filter">
								<span class="text-uppercase">{{__('app.Sort_By')}}:</span>
								<select class="input sortby_value">
										<option value="0">{{__('app.Latest_products')}}</option>
										<option value="1">{{__('app.First_cheaper')}}</option>
										<option value="2">{{__('app.First_expensive')}}</option>
									</select>
								<a href="#" class="main-btn icon-btn"><i class="fa fa-arrow-down"></i></a>
							</div>
						</div>
						<div class="pull-right">
							<div class="page-filter">
								<span class="text-uppercase">{{__('app.Show')}}:</span>
								<select class="input show_num_prod">
										<option value="10">10</option>
										<option value="20">20</option>
										<option value="30">30</option>
									</select>
							</div>
						</div>
					</div>
					<div class="product-list">
						<div class="row" id="prod_list" data-words="{{__('app.New')}},{{__('app.Quick_view')}},{{__('app.Please_wait')}}">
							<div class="loading-gif">
								<img src="/img/loading.gif" alt="{{__('app.Please_wait')}}">
							</div>
							<!-- <div class="clearfix visible-md visible-lg"></div> -->
						</div>
					</div>
					@if($count > 9)
					<div class="load-section">
							<a class="cust-btn">{{__('app.Load_more')}}</a>
					</div>
					@endif
				</div>
			</div>
		</div>
	</div>
@endsection
@section('foot')
@endsection

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
	<title>{{$brand->brand}} - {{conf("Site_title")}}</title>
@endsection
@section('body')
	<div id="breadcrumb">
		<div class="container">
			<ul class="breadcrumb">
				<li><a href="/">{{__('app.Home')}}</a></li>
				<li class="active">{{$brand->brand}}</li>
			</ul>
		</div>
	</div>
	<div class="section">
		<div class="container">
			<div class="row">
				<div id="main" class="col-md-12">
					<div class="store-filter clearfix">
					</div>
					<div class="product-list">
						<div class="row">
							<div class="loading-gif">
								<img src="/img/loading.gif" alt="{{__('app.Please_wait')}}">
							</div>
						</div>
					</div>
					<div class="load-section" style="display:none">
							<a class="cust-btn">{{__('app.Load_more')}}</a>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
@section('foot')
@endsection

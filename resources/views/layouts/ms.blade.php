<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	@section('head')
  @show
	<link type="text/css" rel="stylesheet" href="/css/ms.css" />
	<link rel="shortcut icon" type="image/x-icon" href="/img/icon.png" />
</head>
<body>
	<header>
		<div id="top-header">
			<div class="container">
				<div class="pull-left">
					<span>Welcome to E-shop!</span>
				</div>
				<div class="pull-right">
					<ul class="header-top-links">
						<li><a href="#">Store</a></li>
						<li><a href="#">Newsletter</a></li>
						<li><a href="#">FAQ</a></li>
						<li class="dropdown default-dropdown">
							<a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">ENG <i class="fa fa-caret-down"></i></a>
							<ul class="custom-menu">
								<li><a href="#">English (ENG)</a></li>
								<li><a href="#">Russian (Ru)</a></li>
								<li><a href="#">French (FR)</a></li>
								<li><a href="#">Spanish (Es)</a></li>
							</ul>
						</li>
						<li class="dropdown default-dropdown">
							<a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">USD <i class="fa fa-caret-down"></i></a>
							<ul class="custom-menu">
								<li><a href="#">USD ($)</a></li>
								<li><a href="#">EUR (€)</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div id="header">
			<div class="container">
				<div class="pull-left">
					<div class="header-logo">
						<a class="logo" href="/" title="{{__('app.Logo')}}">
							<img src="/img/logo.png" alt="{{__('app.Logo')}}">
						</a>
					</div>
					<div class="header-search">
            <form action="/search-result/search={request}" method="GET" autocomplete="off" class="form-search" accept-charset="utf-8">
							<input class="input search-input" type="text" name="search" placeholder="{{__('app.Search')}}..." @if(Request::is('search-result/*')) value="{{$search}}" @else value="{{ isset($s) ?  $s : ''}}" @endif oninvalid="this.setCustomValidity('{{__('app.Please_enter_value_for_search')}}')" oninput="setCustomValidity('')" required>
							<select class="input search-categories" name="category_id">
								<option value="0">{{__('app.All_categories')}}</option>
                @foreach(App\Category::all() as $ct)
                <option value="{{$ct->id}}">{{$ct->name}}</option>
                @endforeach
							</select>
							<button type="submit" class="search-btn"><i class="fa fa-search"></i></button>
						</form>
					</div>
				</div>
				<div class="pull-right">
					<ul class="header-btns">
						<li class="header-account dropdown default-dropdown">
							<div class="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
								<div class="header-btns-icon">
									<i class="fa fa-user-o"></i>
								</div>
								<strong class="text-uppercase">@if(Auth::check()) {{Auth::user()->name}} @else {{__('app.My_account')}} @endif <i class="fa fa-caret-down"></i></strong>
							</div>
							@guest <a href="#" class="text-uppercase">{{__('app.Join')}}</a> @endif
							<ul class="custom-menu">
								@if(Auth::check())
								<li><a href="/profile"><i class="fa fa-user-o"></i> {{__('app.My_account')}}</a></li>
								@if(isAdmin())
								<li><a href="/admin"><i class="fa fa-columns"></i> {{__('app.Panel')}}</a></li>
								@endif
								<li><a href="/wishlist"><i class="fa fa-shopping-cart"></i> {{__('app.My_wishlist')}}</a></li>
								<li><a href="{{ route('logout') }}"
									 onclick="event.preventDefault();
																 document.getElementById('logout-form').submit();"><i class="fa fa-angle-left"></i> {{__('app.Logout')}}</a></li>

								<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
										@csrf
								</form>
								@else
								<li><a href="/account?action=login"><i class="fa fa-unlock-alt"></i> {{__('app.Login')}}</a></li>
								<li><a href="/account?action=register"><i class="fa fa-user-plus"></i> {{__('app.Register')}}</a></li>
								@endif
							</ul>
						</li>
						<li class="header-cart dropdown default-dropdown">
							<a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
								<div class="header-btns-icon">
									<i class="fa fa-shopping-cart"></i>
									<span class="qty">3</span>
								</div>
								<strong class="text-uppercase">My Cart:</strong>
								<br>
								<span>35.20$</span>
							</a>
							<div class="custom-menu">
								<div id="shopping-cart">
									<div class="shopping-cart-list">
										<div class="product product-widget">
											<div class="product-thumb">
												<img src="/img/thumb-product01.jpg" alt="">
											</div>
											<div class="product-body">
												<h3 class="product-price">$32.50 <span class="qty">x3</span></h3>
												<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
											</div>
											<button class="cancel-btn"><i class="fa fa-trash"></i></button>
										</div>
										<div class="product product-widget">
											<div class="product-thumb">
												<img src="/img/thumb-product01.jpg" alt="">
											</div>
											<div class="product-body">
												<h3 class="product-price">$32.50 <span class="qty">x3</span></h3>
												<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
											</div>
											<button class="cancel-btn"><i class="fa fa-trash"></i></button>
										</div>
									</div>
									<div class="shopping-cart-btns">
										<button class="main-btn">View Cart</button>
										<button class="primary-btn">Checkout <i class="fa fa-arrow-circle-right"></i></button>
									</div>
								</div>
							</div>
						</li>
						<li class="nav-toggle">
							<button class="nav-toggle-btn main-btn icon-btn"><i class="fa fa-bars"></i></button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
	@include('layouts.menu')

	@if(session()->has('message'))
			<div class="notify notify-{{session()->get('type') }}">
				<a href="#" class="close">&times;</a>
					{{ session()->get('message') }}
			</div>
	@endif
  @section('body')
  @show

	<!-- FOOTER -->
	<footer id="footer" class="section section-grey">
		<!-- container -->
		<div class="container">
			<!-- row -->
			<div class="row">
				<!-- footer widget -->
				<div class="col-md-3 col-sm-6 col-xs-6">
					<div class="footer">
						<!-- footer logo -->
						<div class="footer-logo">
							<a class="logo" href="#">
		            <img src="/img/logo.png" alt="">
		          </a>
						</div>
						<!-- /footer logo -->

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>

						<!-- footer social -->
						<ul class="footer-social">
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-instagram"></i></a></li>
							<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
							<li><a href="#"><i class="fa fa-pinterest"></i></a></li>
						</ul>
						<!-- /footer social -->
					</div>
				</div>
				<!-- /footer widget -->

				<!-- footer widget -->
				<div class="col-md-3 col-sm-6 col-xs-6">
					<div class="footer">
						<h3 class="footer-header">My Account</h3>
						<ul class="list-links">
							<li><a href="#">My Account</a></li>
							<li><a href="#">My Wishlist</a></li>
							<li><a href="#">Compare</a></li>
							<li><a href="#">Checkout</a></li>
							<li><a href="#">Login</a></li>
						</ul>
					</div>
				</div>
				<!-- /footer widget -->

				<div class="clearfix visible-sm visible-xs"></div>

				<!-- footer widget -->
				<div class="col-md-3 col-sm-6 col-xs-6">
					<div class="footer">
						<h3 class="footer-header">Customer Service</h3>
						<ul class="list-links">
							<li><a href="#">About Us</a></li>
							<li><a href="#">Shiping & Return</a></li>
							<li><a href="#">Shiping Guide</a></li>
							<li><a href="#">FAQ</a></li>
						</ul>
					</div>
				</div>
				<div class="col-md-3 col-sm-6 col-xs-6">
					<div class="footer">
						<h3 class="footer-header">Stay Connected</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
						<form>
							<div class="form-group">
								<input class="input" placeholder="Enter Email Address">
							</div>
							<button class="primary-btn">Join Newslatter</button>
						</form>
					</div>
				</div>
			</div>
			<hr>
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center">
					<div class="footer-copyright">
						Copyright &copy; {{date('Y')}}
					</div>
				</div>
			</div>
		</div>
	</footer>
	<script src="/js/ms.js"></script>
  @section('foot')
  @show
</body>

</html>

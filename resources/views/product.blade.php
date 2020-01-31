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
<title>{{$pro->productname}} - {{conf("Site_title")}}</title>
@endsection
@section('body')
	<div id="breadcrumb">
		<div class="container">
			<ul class="breadcrumb">
				<li><a href="/">{{__('app.Home')}}</a></li>
				@php($ct = App\Category::find($pro->category))
				@if(!empty($ct))
				<li><a href="/category/">{{App\Category::find($ct->parent_id)->name}}</a></li>
				<li class="active">{{$ct->name}}</li>
				@endif
			</ul>
		</div>
	</div>
	<div class="section">
		<div class="container">
			<div class="row">
				<div class="product product-details clearfix">
					<div class="col-md-6">
						@php($imgs = App\Images::where('prod_id',$pro->id)->orderBy('order','asc')->get())
						<div @if(count($imgs) !== 0) id="product-main-view" @endif>
							@if(count($imgs) !== 0)
								@foreach($imgs as $img)
									<div class="product-view">
										<img src="/uploads/pro/{{$img->image}}" alt="{{$pro->productname}}">
									</div>
								@endforeach
							@else
							<div class="product-view">
								<img class="pro-default" src="/uploads/pro/default.png" alt="{{$pro->productname}}">
							</div>
							@endif
						</div>
						@if(count($imgs) !== 0)
						<div id="product-view">
							@foreach($imgs as $img)
								<div class="product-view">
									<img src="/uploads/pro/small/{{$img->image}}" alt="{{$pro->productname}}">
								</div>
							@endforeach
						</div>
						@endif
					</div>
					<div class="col-md-6">
						<div class="product-body">
							<div class="product-label">
								@if(nd($pro->created_at))<span>{{__('app.New')}}</span> @endif
								@if(!empty($pro->old_price)) <span class="sale">{{discount($pro->old_price,$pro->price)}} %</span> @endif
							</div>
							<h2 class="product-name">{{$pro->productname}}</h2>

							<h3 class="product-price">{{$pro->price}} {{currency()}} @if(!empty($pro->old_price)) <del class="product-old-price">{{$pro->old_price}} {{currency()}}</del> @endif</h3>
							<div id="un_product_rating">
								<div class="product-rating"></div>
								<a href="#reviews">{{__('app.Review_s')}} / {{__('app.Add_review')}}</a>
							</div>
							<p><strong>{{__('app.Availability')}}:</strong> @if($pro->quantity > 0) <span class="in_stock">{{__('app.In_stock')}}</span> @else <span class="not_in_stock">{{__('app.Not_in_stock')}}</span> @endif</p>
							<p><strong>{{__('app.Product_ID')}}:</strong> {{$pro->prod_id}}</p>
							<p><strong>{{__('app.Brand')}}:</strong> {{$pro->brand}}</p>
							<p>{{$pro->description}}</p>
							<div class="product-options">
								<!-- <ul class="size-option">
									<li><span class="text-uppercase">Size:</span></li>
									<li class="active"><a href="#">S</a></li>
									<li><a href="#">XL</a></li>
									<li><a href="#">SL</a></li>
								</ul>
								<ul class="color-option">
									<li><span class="text-uppercase">Color:</span></li>
									<li class="active"><a href="#" style="background-color:#475984;"></a></li>
									<li><a href="#" style="background-color:#8A2454;"></a></li>
									<li><a href="#" style="background-color:#BF6989;"></a></li>
									<li><a href="#" style="background-color:#9A54D8;"></a></li>
								</ul> -->
							</div>

							<div class="product-btns">
								<div class="qty-input">
									<span class="text-uppercase">{{__('app.Quantity')}}: </span>
									<input class="input quantity" type="number" value="1">
								</div>
								<a class="primary-btn add-to-cart" data-id="{{$pro->id}}"><i class="fa fa-shopping-cart"></i></a>
								<!-- <div class="pull-right">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-share-alt"></i></button>
								</div> -->
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="product-tab">
							<ul class="tab-nav product-tabs">
								<li class="active"><a data-toggle="tab" href="#description">{{__('app.Description')}}</a></li>
								<li><a data-toggle="tab" href="#reviews">{{__('app.Reviews')}} (<b></b>)</a></li>
							</ul>
							<div class="tab-content">
								<div id="description" class="tab-pane fade in active">
									<table class="table">
								    <tbody>
											@foreach($prod_tabs as $pt)
								      <tr>
								        <td>{{$pt->title}}</td>
								        <td>{{$pt->description}}</td>
								      </tr>
											@endforeach
								    </tbody>
								  </table>
									<strong>{{$pro->description_title}}</strong>
									<p>{{$pro->description}}</p>
								</div>
								<div id="reviews" class="tab-pane fade in">
									<div class="row">
										<div class="col-md-6">
											<div class="product-reviews" id="prod_review_list" data-id="{{$pro->id}}">
												<p class="no_review" style="display:none;">{{__('app.No_review_here')}}</p>
												<ul class="reviews-pages" id="rev_pg_pro"></ul>
											</div>
										</div>
										<div class="col-md-6">
											<h4 class="text-uppercase">{{__('app.Write_your_review')}}</h4>
											<p>
												@if(config("settings.comment_verification") == 0)
												{{__('app.Your_comment_will_shared_after_verification')}}
												@endif
											</p>
											<div class="review-form">
												<div class="form-group">
													<input class="input" type="text" @if(Auth::check()) value="{{Auth::user()->name}} {{Auth::user()->surname}}" readonly @else placeholder="{{__('app.Name')}}..." @endif id="commenter_name"  />
												</div>
												<div class="form-group">
													<input class="input" type="email" @if(Auth::check()) value="{{Auth::user()->email}}" readonly @else placeholder="{{__('app.E_mail')}}..." @endif id="commenter_email" />
												</div>
												<div class="form-group">
													<textarea class="input" placeholder="{{__('app.Your_comment')}}..." id="comment_section" required></textarea>
												</div>
												<div class="form-group">
													<div class="input-rating">
														<strong class="text-uppercase">{{__('app.Your_rating')}}: </strong>
														<div class="stars">
															<input type="radio" name="rating" value="5" id="star5"/><label for="star5"></label>
															<input type="radio" name="rating" value="4" id="star4" checked/><label for="star4"></label>
															<input type="radio" name="rating" value="3" id="star3"/><label for="star3"></label>
															<input type="radio" name="rating" value="2" id="star2"/><label for="star2"></label>
															<input type="radio" name="rating" value="1" id="star1"/><label for="star1"></label>
														</div>
													</div>
												</div>
												<a class="primary-btn share_comment pull-right" title="{{__('app.Share')}}"><i class="fa fa-arrow-right"></i> </a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="section">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="section-title">
						<h2 class="title">{{__('app.Similar_products')}}</h2>
					</div>
				</div>
				@foreach($pros as $pr)
				<div class="col-md-3 col-sm-6 col-xs-6">
					<div class="product product-single">
						<div class="product-thumb">
							<a href="/product/{{$pr->slug}}" title="{{$pr->productname}}" class="main-btn quick-view"><i class="fa fa-search-plus"></i> {{__('app.Quick_view')}}</a>
							@php($im = App\Images::where('prod_id',$pr->id)->orderBy('order','asc')->first())
							@if(!empty($im))
							<img src="/uploads/pro/small/{{$im->image}}" alt="{{$pr->productname}}">
							@else
							<img src="/img/default.png" alt="{{$pr->productname}}">
							@endif
							<div class="product-rating">
								@for($k=1;$k<=5;$k++)
									@if($k <= $pr->rating)
										<i class="fa fa-star"></i>
									@else
										<i class="fa fa-star-o empty"></i>
									@endif
								@endfor
							</div>
						</div>
						<div class="product-body">
							<h3 class="product-name"><a href="/product/{{$pr->slug}}" title="{{$pr->productname}}">{{$pr->productname}}</a></h3>
							<h2 class="product-price">{{$pr->price}} {{currency()}} @if(!empty($pr->old_price)) <del class="product-old-price">{{$pr->old_price}} {{currency()}}</del>@endif</h2>
							<div class="product-btns">
								<a class="primary-btn add-to-cart" data-id="{{$pr->id}}" title=""><i class="fa fa-shopping-cart"></i></a>
							</div>
						</div>
					</div>
				</div>
				@endforeach
			</div>
		</div>
	</div>
@endsection
@section('foot')
@endsection

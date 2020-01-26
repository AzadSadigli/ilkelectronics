@extends('layouts.ms')
@section('head')
@if(empty($news_unique))
<title>{{__('app.All_news')}} - {{conf("Site_title")}}</title>
@else
<title>{{$news_unique->title}} - {{conf("Site_title")}}</title>
@endif
@endsection
@section('body')
	<div id="breadcrumb">
		<div class="container">
			<ul class="breadcrumb">
				<li><a href="/">{{__('app.Home')}}</a></li>
				<li class="active">{{__('app.All_news')}}</li>
			</ul>
		</div>
	</div>
	<div class="section">
		<div class="container">
			<div class="row">
				<div id="aside" class="col-md-3">
					<div class="aside">
						<h3 class="aside-title">{{__('app.Related_news')}}</h3>
						@foreach(App\News::where('status',1)->get() as $newss)
						<div class="product product-widget">
							<div class="product-thumb">
								@php($img = App\Images::where('news_id',$newss->id)->orderBy('order','asc')->first())
								@if(!empty($img))
								<img src="/uploads/news/{{$img->image}}" alt="{{$newss->title}}">
								@else
								<img src="/uploads/news/defualt.png" alt="{{$newss->title}}">
								@endif
							</div>
							<div class="product-body">
								<h2 class="product-name"><a href="/news/{{$newss->slug}}" title="{{$newss->title}}">{{str_limit($newss->title,$limit = 30, $end = "...")}}</a></h2>
								<small>{{\Carbon\Carbon::parse($newss->created_at)->format('d M, Y')}}</small>
							</div>
						</div>
						@endforeach
					</div>
				</div>
				<div id="main" class="col-md-9">
					@if(empty($news_unique))
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
					<div class="news-section">
						@foreach($news as $ns)
						<div class="news-item">
							<div class="news-image">
								@php($img = App\Images::where('news_id',$ns->id)->orderBy('order','asc')->first())
								@if(!empty($img))
								<img src="/uploads/news/{{$img->image}}" alt="{{$ns->title}}">
								@else
								<img src="/uploads/news/defualt.png" alt="{{$ns->title}}">
								@endif
							</div>
							<div class="news-body">
								<h4><a href="/news/{{$ns->slug}}">{{str_limit($ns->title,$limit=70,$end="...")}}</a></h4>
								<p><a href="/news/{{$ns->slug}}">{{str_limit($ns->body,$limit=130,$end="...")}}</a> </p>
								<div class="news-time">
									<span class="comments">{{App\Comments::where('news_id',$ns->id)->count()}} <i class="fa fa-comments"></i> </span>
									<span class="date"> {{\Carbon\Carbon::parse($ns->created_at)->format('d M, Y') }} <i class="fa fa-calendar"></i> </span>
								</div>
							</div>
						</div>
						@endforeach
					</div>
					@else
					<div class="news-details">
						<div class="news-big-image">
							@php($img = App\Images::where('news_id',$news_unique->id)->orderBy('order','asc')->first())
							@if(!empty($img))
							<img src="/uploads/news/{{$img->image}}" alt="{{$news_unique->title}}">
							@else
							<img src="/uploads/news/defualt.png" alt="{{$news_unique->title}}">
							@endif
							<div class="news-time">
								<span class="comments">{{App\Comments::where('news_id',$news_unique->id)->count()}} <i class="fa fa-comments"></i> </span>
								<span class="date"> {{\Carbon\Carbon::parse($news_unique->created_at)->format('d M, Y') }} <i class="fa fa-calendar"></i> </span>
							</div>
						</div>
						<div class="news-body-section">
							<h3><a href="/news/{{$news_unique->slug}}" title="{{$news_unique->title}}">{{$news_unique->title}}</a> </h3>
							<p>{!!$news_unique->body!!}</p>
						</div>
						<div class="news-commenting" data-id="{{$news_unique->id}}">
							<div class="product-reviews">
								<div class="single-review">
									<div class="review-heading">
										<div><a href="#"><i class="fa fa-user-o"></i> John</a></div>
										<div><a href="#"><i class="fa fa-clock-o"></i> 27 DEC 2017 / 8:0 PM</a></div>
									</div>
									<div class="review-body">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute
											irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
									</div>
								</div>
									<ul class="reviews-pages">
										<li class="active">1</li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#"><i class="fa fa-caret-right"></i></a></li>
									</ul>
								</div>
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
								<a class="primary-btn share_comment pull-right" title="{{__('app.Share')}}"><i class="fa fa-arrow-right"></i> </a>
							</div>
						</div>
					</div>
					@endif
				</div>
			</div>
		</div>
	</div>
@endsection
@section('foot')
@endsection

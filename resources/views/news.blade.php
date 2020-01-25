@extends('layouts.ms')
@section('head')
<title>{{__('app.All_news')}}</title>
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
						<div class="news-commenting">

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

@extends('layouts.ms')
@section('head')
<title>{{__('app.Wishlist')}}</title>
@endsection
@section('body')
	<div id="breadcrumb">
		<div class="container">
			<ul class="breadcrumb">
				<li><a href="#">{{__('app.Home')}}</a></li>
				<li class="active">{{__('app.Categories')}}</li>
			</ul>
		</div>
	</div>
	<div class="section">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
						<div class="order-summary clearfix">
							<div class="section-title">
								<h3 class="title">{{__('app.Categories')}}</h3>
							</div>
						</div>
						<div class="pages-body">
							<ul>
								@foreach($cats as $ct)
								<li class="parent" data-url="/category/{{$ct->slug}}">
									{{$ct->name}}
									<i class="fa fa-chevron-circle-right"></i>
								</li>
								@foreach(App\Category::where('parent_id',$ct->id)->get() as $sbct)
								<li class="child" data-url="/category/{{$sbct->slug}}">
									<i class="fa fa-dot-circle"></i> {{$sbct->name}}
									<i class="fa fa-chevron-circle-right"></i>
								</li>
								@endforeach
								@endforeach
							</ul>
						</div>
				</div>
			</div>
		</div>
	</div>
@endsection

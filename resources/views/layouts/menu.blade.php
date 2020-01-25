	<div id="navigation">
		<div class="container">
			<div id="responsive-nav">
				<div class="category-nav @if(!Request::is('/')) show-on-click @endif">
					<span class="category-header">{{__('app.Categories')}} <i class="fa fa-list"></i></span>
					<ul class="category-list">
						@foreach(App\Category::whereNull('parent_id')->get() as $ct)
						<li class="dropdown side-dropdown">
							@if(App\Category::where('parent_id',$ct->id)->count() > 0) <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true"> @else <a href="/category/{{$ct->slug}}"> @endif
								{{$ct->name}}
								@if(App\Category::where('parent_id',$ct->id)->count() > 0) <i class="fa fa-angle-right"></i> @endif</a>
								@if(App\Category::where('parent_id',$ct->id)->count() > 0)
								<div class="custom-menu">
								<div class="row">
									<div class="col-md-4">
										<ul class="list-links">
											@foreach(App\Category::whereRaw('MOD(id, 2) = 0')->where('parent_id',$ct->id)->get() as $sub_ct)
											<li><a href="/category/{{$sub_ct->slug}}">{{$sub_ct->name}}</a></li>
											@endforeach
										</ul>
										<hr class="hidden-md hidden-lg">
									</div>
									<div class="col-md-4">
										<ul class="list-links">
											@foreach(App\Category::whereRaw('MOD(id, 2) != 0')->where('parent_id',$ct->id)->get() as $sub_ct)
											<li><a href="/category/{{$sub_ct->slug}}">{{$sub_ct->name}}</a></li>
											@endforeach
										</ul>
										<hr class="hidden-md hidden-lg">
									</div>
								</div>
							</div>
								@endif
						</li>
						@endforeach
						<li><a href="/categories">{{__('app.View_all')}}</a></li>
					</ul>
				</div>
				<div class="menu-nav">
					<span class="menu-header">{{__('app.Menu')}} <i class="fa fa-bars"></i></span>
					<ul class="menu-list">
						<li><a href="/">{{__('app.Home')}}</a></li>
						@foreach(App\Pages::where('status',1)->where('header',1)->where('parent_id',0)->take(4)->get() as $page)
						@php($ch_pg = App\Pages::where('status',1)->where('parent_id',$page->id)->where('header',1)->get())
						<li @if(count($ch_pg) != 0) class="dropdown default-dropdown" @endif><a @if(count($ch_pg) != 0) class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true" @else href="/page/{{$page->slug}}" @endif>{{$page->shortname}} @if(count($ch_pg) != 0) <i class="fa fa-caret-down"></i> @endif</a>
							@if(count($ch_pg) != 0)
							<ul class="custom-menu">
								@foreach($ch_pg as $pg)
								<li><a href="/page/{{$pg->slug}}">{{$pg->shortname}}</a></li>
								@endforeach
							</ul>
							@endif
						</li>
						@endforeach
						<li><a href="/contact-us">{{__('app.Contact_us')}}</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>

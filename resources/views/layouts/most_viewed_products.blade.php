@if(count($mv_pros) > 0)
<div class="section most-vw">
    <div class="row">
      <div class="col-md-12">
        <div class="section-title">
          <h2 class="title">{{__('app.Most_viewed_products')}}</h2>
        </div>
      </div>
      @foreach($mv_pros as $pro)
			<div class="col-md-3 col-sm-6 col-xs-6">
				<div class="product product-single">
					<div class="product-thumb">
						<div class="product-label">
							@if(nd(\Carbon\Carbon::parse($pro->created_at)->format('Y-m-d'))) <span>{{__('app.New')}}</span> @endif
							@if(!empty($pro->old_price)) <span class="sale">{{discount($pro->old_price,$pro->price)}} %</span> @endif
						</div>
            @php($lns = App\Loans::where('prod_id',$pro->id)->where('rate',0)->orderBy('duration','desc')->first())
						@if(!empty($lns))<i class="ln_head"><b>{{$lns->duration}} {{__('app.Interest_free')}}</b></i>@endif
						<a href="/product/{{$pro->slug}}" class="main-btn quick-view"></a>
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
						<h3 class="product-name"><a href="/product/{{$pro->slug}}">{{str_limit($pro->productname,$limit = 80,$end="...")}}</a></h3>
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
</div>
@endif

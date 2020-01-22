@extends('layouts.ms')
@section('head')
<title>{{__('app.Wishlist')}}</title>
@endsection
@section('body')
	<div id="breadcrumb">
		<div class="container">
			<ul class="breadcrumb">
				<li><a href="#">{{__('app.Home')}}</a></li>
				<li class="active">{{__('app.Wishlist')}}</li>
			</ul>
		</div>
	</div>
	<div class="section">
		<div class="container">
			<div class="row">
				<form id="checkout-form" class="clearfix">
					<div class="col-md-12">
						<div class="order-summary clearfix">
							<div class="section-title">
								<h3 class="title">{{__('app.Products_added_to_wishlist')}}</h3>
							</div>
							<table class="shopping-cart-table table">
								<thead>
									<tr>
										<th>{{__('app.Product')}}</th>
										<th></th>
										<th class="text-center">{{__('app.Price')}}</th>
										<th class="text-center">{{__('app.Quantity')}}</th>
										<th class="text-center">{{__('app.Total')}}</th>
										<th class="text-right"></th>
									</tr>
								</thead>
								<tbody id="wishlist_tbody"></tbody>
								<tfoot>
									<tr>
										<th class="empty" colspan="3"></th>
										<th>SUBTOTAL</th>
										<th colspan="2" class="sub-total">$97.50</th>
									</tr>
									<tr>
										<th class="empty" colspan="3"></th>
										<th>SHIPING</th>
										<td colspan="2">Free Shipping</td>
									</tr>
									<tr>
										<th class="empty" colspan="3"></th>
										<th>TOTAL</th>
										<th colspan="2" class="total">$97.50</th>
									</tr>
								</tfoot>
							</table>
							<!-- <div class="pull-right">
								<button class="primary-btn">Place Order</button>
							</div> -->
						</div>

					</div>
				</form>
			</div>
		</div>
	</div>
@endsection

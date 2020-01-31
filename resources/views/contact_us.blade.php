@extends('layouts.ms')
@section('head')
<meta name="description" content="">
<meta name="keywords" content="">
<title>{{__('app.Contact_us')}} - {{conf("Site_title")}}</title>
@endsection
@section('body')
	<div id="breadcrumb">
		<div class="container">
			<ul class="breadcrumb">
				<li><a href="/">{{__('app.Home')}}</a></li>
				<li class="active">{{__('app.Contact_us')}}</li>
			</ul>
		</div>
	</div>
	<div class="section">
		<div class="container">
			<div class="row">
					<form method="POST" action="/send-message">
							@csrf
						<div class="col-md-6">
              <div class="section-title">
									<h4 class="title">{{__('app.Contact_us')}}</h4>
							</div>
							<div id="contact_form" class="profile-section">
								<div class="form-group row">
									<input id="name" type="text" placeholder="{{ __('app.Name') }}..." class="input" @if(Auth::check()) value="{{ Auth::user()->name }}" disabled @endif required autocomplete="name" autofocus>
									@error('name')
											<span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
									@enderror
								</div>
								<div class="form-group row">
										<input id="email" type="email" placeholder="{{ __('app.E_mail') }}..." class="input" @if(Auth::check()) value="{{ Auth::user()->email }}" disabled @endif required autocomplete="email">
										@error('email')
											<span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
										@enderror
								</div>
								<div class="form-group row">
										<textarea id="body" class="input @error('email') is-invalid @enderror" placeholder="{{__('app.Your_message')}}..."></textarea>
										@error('body')
											<span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
										@enderror
								</div>
								<div class="form-group row mb-0 pull-right">
									<a class="cust-btn">{{ __('app.Send') }}</a>
								</div>
							</div>
						</div>
					</form>
					<div class="col-md-6">
						<div class="profile-section">
							<div class="section-title">
									<h4 class="title">{{__('app.My_account')}}</h4>
							</div>
							<div class="input-checkbox">
									<div class="prof_sec">
											<ul>
												<li><i class="fa fa-chevron-left"></i>  <a href="/profile"> {{__('app.Account_settings')}}</a></li>
												<li> <i class="fa fa-chevron-left"></i> <a href="/profile?action=password-change"> {{__('app.Change_password')}}</a></li>
											</ul>
											{{conf("Contact_page_text")}}
									</div>
								</div>
							</div>
						</div>
					</div>
			</div>
		</div>
	</div>
@endsection

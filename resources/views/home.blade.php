@extends('layouts.ms')
@section('head')
<title>{{__('app.My_account')}} - {{conf("Site_title")}}</title>
@endsection
@section('body')
	<div id="breadcrumb">
		<div class="container">
			<ul class="breadcrumb">
				<li><a href="/">{{__('app.Home')}}</a></li>
				<li class="active">{{__('app.My_account')}}</li>
			</ul>
		</div>
	</div>
	<div class="section">
		<div class="container">
			<div class="row">
					<form method="POST" action="/update-profile-data">
							@csrf
						<div class="col-md-6">
              <div class="section-title">
									<h4 class="title">{{__('app.Edit_profile')}}</h4>
							</div>
							<div class="billing-details">
								<div class="form-group row">
									<input id="name" type="text" placeholder="{{ __('app.Name') }}" class="input @error('name') is-invalid @enderror" name="name" value="{{ Auth::user()->name }}" required autocomplete="name" autofocus>
									@error('name')
											<span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
									@enderror
								</div>
								<div class="form-group row">
									<input id="surname" type="text" placeholder="{{ __('app.Surname') }}" class="input @error('surname') is-invalid @enderror" name="surname" value="{{ Auth::user()->surname }}" required autocomplete="surname" autofocus>
									@error('surname')
											<span class="invalid-feedback" role="alert"><strong>{{ surname }}</strong></span>
									@enderror
								</div>
								<div class="form-group row">
										<input id="email" type="email" placeholder="{{ __('app.E_mail') }}" class="input @error('email') is-invalid @enderror" name="email" value="{{ Auth::user()->email }}" required autocomplete="email">
										@error('email')
											<span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
										@enderror
								</div>
								<div class="form-group row">
										<input id="birthdate" type="date" @if(!empty(Auth::user()->birthdate)) value="{{\Carbon\Carbon::parse(Auth::user()->birthdate)->format('Y-m-d')}}" @endif max="{{date('Y-m-d',strtotime('-13 year',time()))}}" class="input @error('birthdate') is-invalid @enderror" name="birthdate" required>
										@error('birthdate')
											<span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
										@enderror
								</div>
								<div class="form-group row mb-0">
										<button type="submit" class="cust-btn">{{ __('app.Update') }}</button>
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
									<div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
											<p>
									</div>
								</div>
							</div>
						</div>
					</div>
			</div>
		</div>
	</div>
@endsection

@extends('layouts.ms')
@section('head')
@if(isset($_GET['action']))
	@if($_GET['action'] === 'login')
		<title>{{__('app.Login')}}</title>
	@else
		<title>{{__('app.Register')}}</title>
	@endif
@endif
@endsection
@section('body')
	<div id="breadcrumb">
		<div class="container">
			<ul class="breadcrumb">
				<li><a href="#">{{__('app.Home')}}</a></li>
				<li class="active">{{__('app.Login')}}</li>
			</ul>
		</div>
	</div>
	<div class="section">
		<div class="container">
			<div class="row">
				@if(isset($_GET['action']))
					@if($_GET['action'] === 'login')
					<form action="{{ route('login') }}" method="POST">
						@csrf
						<div class="col-md-6">
							<div class="billing-details">
								<p>{{__('app.Register_now')}} ? <a href="/account?action=register">{{__('app.Register')}}</a></p>
								<div class="section-title">
									<h3 class="title">{{__('app.Login')}} </h3>
								</div>
								<div class="form-group">
									<input id="email" type="email" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus class="input @error('email') is-invalid @enderror">
									@error('email')
											<span class="invalid-feedback" role="alert">
													<strong>{{ $message }}</strong>
											</span>
									@enderror
								</div>
								<div class="form-group">
									<input id="password" type="password" class="input @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
									@error('password')
											<span class="invalid-feedback" role="alert">
													<strong>{{ $message }}</strong>
											</span>
									@enderror
								</div>
								</div>
								<div class="form-group">
									<div class="input-checkbox">
										<input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
										<label class="font-weak" for="register">{{__('app.Remember_me')}}</label>
									</div>
								</div>
								<div class="form-group row mb-0">
										<div class="col-md-8 offset-md-4">
												<button type="submit" class="cust-btn">{{ __('app.Login') }}</button>
												@if (Route::has('password.request'))
														<a class="btn btn-link" href="{{ route('password.request') }}">
																{{ __('Forgot Your Password?') }}
														</a>
												@endif
										</div>
								</div>
							</div>
						</form>
					@else
					<form method="POST" action="{{ route('register') }}">
							@csrf
						<div class="col-md-6">
							<div class="billing-details">
								<div class="form-group row">
									<input id="name" type="text" placeholder="{{ __('app.Name') }}" class="input @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
									@error('name')
											<span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
									@enderror
								</div>
								<div class="form-group row">
									<input id="surname" type="text" placeholder="{{ __('app.Surname') }}" class="input @error('surname') is-invalid @enderror" name="surname" value="{{ old('surname') }}" required autocomplete="surname" autofocus>
									@error('surname')
											<span class="invalid-feedback" role="alert"><strong>{{ surname }}</strong></span>
									@enderror
								</div>
								<div class="form-group row">
										<input id="email" type="email" placeholder="{{ __('app.E_mail') }}" class="input @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">
										@error('email')
											<span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
										@enderror
								</div>
								<div class="form-group row">
										<input id="birthdate" type="date" max="{{date('Y-m-d',strtotime('-13 year',time()))}}" class="input @error('birthdate') is-invalid @enderror" name="birthdate" required>
										@error('birthdate')
											<span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
										@enderror
								</div>
								<div class="form-group row">
										<div class="radio-btn-section">
											<input type="radio" name="gender" value="0" required> {{__('app.Male')}}
											<input type="radio" name="gender" value="1" required> {{__('app.Female')}}
										</div>
										@error('gender')
											<span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
										@enderror
								</div>
								<div class="form-group row">
										<input id="password" type="password" placeholder="{{ __('Password') }}" class="input @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
										@error('password')
												<span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
										@enderror
								</div>
								<div class="form-group row">
										<input id="password-confirm" type="password" placeholder="{{ __('Confirm Password') }}" class="input" name="password_confirmation" required autocomplete="new-password">
								</div>
								<div class="form-group row mb-0">
										<button type="submit" class="cust-btn">{{ __('app.Register') }}</button>
							</div>
							</div>
						</div>
					</form>
					@endif
				@endif
					<div class="col-md-6">
						<div class="shiping-methods">
							<div class="section-title">
									<h4 class="title">Shiping Methods</h4>
							</div>
							<div class="input-checkbox">
									<input type="radio" name="shipping" id="shipping-1" checked>
									<label for="shipping-1">Free Shiping -  $0.00</label>
									<div class="caption">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
											<p>
									</div>
								</div>
								<div class="input-checkbox">
									<input type="radio" name="shipping" id="shipping-2">
									<label for="shipping-2">Standard - $4.00</label>
									<div class="caption">
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

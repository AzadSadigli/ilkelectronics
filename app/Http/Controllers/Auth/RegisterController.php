<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\OTP;
class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/profile';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function account_page(){
      if (isset($_GET['action']) && in_array($_GET['action'],array('login','register','password-reset'))) {
        if (isset($_GET['email']) && !empty($_GET['email'])) {
          $otp = OTP::where('email',$_GET['email'])->where('status',0)->get();
          if (count($otp) !== 0) {
            return view('auth.account');
          }else{
            return redirect('/account?action=login');
          }
        }else{
          return view('auth.account');
        }
      }else{
        return redirect('/');
      }
    }
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'surname' => ['required', 'string', 'max:255'],
            'birthdate' => ['required','date'],
            'gender' => ['required', 'integer'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $role_id = 1;
        $avatar = 'default.png';
        return User::create([
            'name' => $data['name'],
            'surname' => $data['surname'],
            'birthdate' => $data['birthdate'],
            // 'phone' => $data['phone'],
            'gender' => $data['gender'],
            'email' => $data['email'],
            'role_id' => $role_id,
            'avatar' => $avatar,
            'password' => Hash::make($data['password']),
        ]);
    }
}

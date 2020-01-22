<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="shortcut icon" type="image/x-icon" href="/img/icon.png" />
    @section('head')
    @show
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <style media="screen">
      .card .header h2 small a{
        cursor: pointer;
        color: #03a9f4;
      }
      .notify{
        color: white;
        font-weight: bold;
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 17px;
        z-index: 1000;
      }
      .notify-success{
        background: #00adff;
      }
      .notify-danger{
        background: #e31e25;
      }
      .notify a{
        margin-left: 10px;
        display: inline-block;
        color: white;
        opacity: 0.9;
        font-weight: 100;
      }
      .words tr td textarea{
        /* height: 32px; */
        padding: 10px;
        width: 60%;
        border-radius: 7px;
        border: none;
        box-shadow: 0 0 6px 0px #cccccc;
      }
      .btns-section{
        width: 90%;
        /* margin-top: 20px; */
        margin: 16px auto 10px auto;
        height: fit-content;
        border-bottom: 1px solid #eeeeee;
      }
      .btns-section div{
        margin: 5px 0 10px 0;
        display: block;
      }
      .btns-section a{
        background: #18b5e4;
        padding: 10px;
        display: inline-block;
        cursor: pointer;
        color: white;
        box-shadow: 0 0 5px 1px #cccccc;
        text-decoration: none;
        margin-left: 2px;
      }
      .btns-section a:hover,
      .btns-section a.active,
      .btns-section a:focus,
      .btns-section a:active{
        background: #137f9e;
      }
      .btn{
        padding: 8px 25px 8px 25px;
        min-height: 38px;
        cursor: pointer;
      }
      .modal-input-list{
        margin-top: 10px;
      }
      .modal-input-list textarea,.modal-input-list input{
        display: block;
        width: 90%;
        border-radius: 6px;
        border: 1px solid #d4d4d4;
        padding: 10px;
      }
      .modal-input-list input{
        height: 38px;
      }
      .modal-input-list label{
        display: block;
      }
    </style>
</head>
<body class="theme-red">
    <div class="page-loader-wrapper">
        <div class="loader">
            <div class="preloader">
                <div class="spinner-layer pl-red">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
            <p>{{__('app.Please_wait')}}</p>
        </div>
    </div>
    <div class="overlay"></div>
    <nav class="navbar">
        <div class="container-fluid">
            <div class="navbar-header">
                <a href="javascript:void(0);" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></a>
                <a href="javascript:void(0);" class="bars"></a>
                <a class="navbar-brand" href="/admin">{{config("settings.admin_title")}}</a>
            </div>
            <div class="collapse navbar-collapse" id="navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button">
                            <i class="material-icons">notifications</i>
                            <span class="label-count">7</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li class="header">NOTIFICATIONS</li>
                            <li class="body">
                                <ul class="menu">
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="icon-circle bg-light-green">
                                                <i class="material-icons">person_add</i>
                                            </div>
                                            <div class="menu-info">
                                                <h4>12 new members joined</h4>
                                                <p>
                                                    <i class="material-icons">access_time</i> 14 mins ago
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="icon-circle bg-cyan">
                                                <i class="material-icons">add_shopping_cart</i>
                                            </div>
                                            <div class="menu-info">
                                                <h4>4 sales made</h4>
                                                <p>
                                                    <i class="material-icons">access_time</i> 22 mins ago
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="icon-circle bg-red">
                                                <i class="material-icons">delete_forever</i>
                                            </div>
                                            <div class="menu-info">
                                                <h4><b>Nancy Doe</b> deleted account</h4>
                                                <p>
                                                    <i class="material-icons">access_time</i> 3 hours ago
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="icon-circle bg-orange">
                                                <i class="material-icons">mode_edit</i>
                                            </div>
                                            <div class="menu-info">
                                                <h4><b>Nancy</b> changed name</h4>
                                                <p>
                                                    <i class="material-icons">access_time</i> 2 hours ago
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="icon-circle bg-blue-grey">
                                                <i class="material-icons">comment</i>
                                            </div>
                                            <div class="menu-info">
                                                <h4><b>John</b> commented your post</h4>
                                                <p>
                                                    <i class="material-icons">access_time</i> 4 hours ago
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="icon-circle bg-light-green">
                                                <i class="material-icons">cached</i>
                                            </div>
                                            <div class="menu-info">
                                                <h4><b>John</b> updated status</h4>
                                                <p>
                                                    <i class="material-icons">access_time</i> 3 hours ago
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="icon-circle bg-purple">
                                                <i class="material-icons">settings</i>
                                            </div>
                                            <div class="menu-info">
                                                <h4>Settings updated</h4>
                                                <p>
                                                    <i class="material-icons">access_time</i> Yesterday
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="footer">
                                <a href="javascript:void(0);">View All Notifications</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button">
                            <i class="material-icons">flag</i>
                            <span class="label-count">9</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li class="header">TASKS</li>
                            <li class="body">
                                <ul class="menu tasks">
                                    <li>
                                        <a href="javascript:void(0);">
                                            <h4>
                                                Footer display issue
                                                <small>32%</small>
                                            </h4>
                                            <div class="progress">
                                                <div class="progress-bar bg-pink" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 32%">
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <h4>
                                                Make new buttons
                                                <small>45%</small>
                                            </h4>
                                            <div class="progress">
                                                <div class="progress-bar bg-cyan" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <h4>
                                                Create new dashboard
                                                <small>54%</small>
                                            </h4>
                                            <div class="progress">
                                                <div class="progress-bar bg-teal" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 54%">
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <h4>
                                                Solve transition issue
                                                <small>65%</small>
                                            </h4>
                                            <div class="progress">
                                                <div class="progress-bar bg-orange" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 65%">
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <h4>
                                                Answer GitHub questions
                                                <small>92%</small>
                                            </h4>
                                            <div class="progress">
                                                <div class="progress-bar bg-purple" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 92%">
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="footer">
                                <a href="javascript:void(0);">View All Tasks</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <section>
        <aside id="leftsidebar" class="sidebar">
            <div class="user-info">
                <div class="image">
                    <img src="/adm/images/user.png" width="48" height="48" alt="User" />
                </div>
                <div class="info-container">
                    <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{Auth::user()->name}} {{Auth::user()->surname}}</div>
                    <div class="email">{{Auth::user()->email}}</div>
                    <div class="btn-group user-helper-dropdown">
                        <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                        <ul class="dropdown-menu pull-right">
                            <li><a href="/admin/profile"><i class="material-icons">person</i>Profile</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="javascript:void(0);"><i class="material-icons">group</i>Followers</a></li>
                            <li><a href="javascript:void(0);"><i class="material-icons">shopping_cart</i>Sales</a></li>
                            <li><a href="javascript:void(0);"><i class="material-icons">favorite</i>Likes</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="{{ route('logout') }}"
            									 onclick="event.preventDefault();
            																 document.getElementById('logout-form').submit();"><i class="material-icons">input</i> {{__('app.Logout')}}</a></li>

            								<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            										@csrf
            								</form>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="menu">
                <ul class="list">
                    <li class="header">MAIN NAVIGATION</li>
                    <li @if(Request::is('admin')) class="active" @endif>
                        <a href="/admin">
                            <i class="material-icons">home</i>
                            <span>{{__('app.Home')}}</span>
                        </a>
                    </li>
                    <li @if(Request::is('admin/product-list') | Request::is('admin/user-list')) class="active" @endif>
                        <a href="javascript:void(0);" class="menu-toggle">
                            <i class="material-icons">format_list_bulleted</i>
                            <span>{{__('app.List')}}</span>
                        </a>
                        <ul class="ml-menu">
                            <li @if(Request::is('admin/add-product')) class="active" @endif>
                                <a href="/admin/product-list">{{__('app.Product_list')}}</a>
                            </li>
                            <li @if(Request::is('admin/add-category')) class="active" @endif>
                                <a href="/admin/user-list">{{__('app.User_list')}}</a>
                            </li>
                            <li @if(Request::is('admin/add-category')) class="active" @endif>
                                <a href="/admin/add-category">{{__('app.Category_list')}}</a>
                            </li>
                        </ul>
                    </li>
                    <li @if(Request::is('admin/add-product') | Request::is('admin/add-category') | Request::is('admin/add-user')) class="active" @endif>
                        <a href="javascript:void(0);" class="menu-toggle">
                            <i class="material-icons">add_circle_outline</i>
                            <span>{{__('app.Add')}}</span>
                        </a>
                        <ul class="ml-menu">
                            <li @if(Request::is('admin/add-product')) class="active" @endif>
                                <a href="/admin/add-product">{{__('app.Add_new_product')}}</a>
                            </li>
                            <li @if(Request::is('admin/add-category')) class="active" @endif>
                                <a href="/admin/add-category">{{__('app.Add_new_category')}}</a>
                            </li>
                            <li @if(Request::is('admin/add-user')) class="active" @endif>
                                <a href="/admin/add-user">{{__('app.Add_new_user')}}</a>
                            </li>
                        </ul>
                    </li>
                    <li @if(Request::is('admin/translation') | Request::is('admin/configuration') | Request::is('admin/add-user')) class="active" @endif>
                        <a href="javascript:void(0);" class="menu-toggle">
                            <i class="material-icons">add_circle_outline</i>
                            <span>Static</span>
                        </a>
                        <ul class="ml-menu">
                            <li @if(Request::is('admin/add-product')) class="active" @endif>
                              <a href="/admin/translation">
                                  <span>{{__('app.Translation')}}</span>
                              </a>
                            </li>
                            <li @if(Request::is('admin/configuration')) class="active" @endif>
                                <a href="/admin/configuration">{{__('app.Configuration')}}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="legal">
                <div class="copyright">
                    &copy; {{date('Y')}} <a href="/">{{config("settings.admin_title")}}</a>
                </div>
            </div>
        </aside>
    </section>
    @if(session()->has('message'))
  			<div class="notify notify-{{session()->get('type') }}">
  				<a href="#" class="close">&times;</a>
  					{{ session()->get('message') }}
  			</div>
  	@endif
    @section('body')
    @show
    @section('foot')
    @show
    <script type="text/javascript">
    function reload_js(src) {
       $('script[src="' + src + '"]').remove();
       $('<script>').attr('src', src).appendTo('head');
    }
    $(document.body).on("click",".notify .close",function(){
      close_notify();
    });
    setInterval(function(){
      close_notify();
      // $('.notify').animate({bottom:"100px"});
    },6000);
    function close_notify(){
      $(".notify").fadeOut(300, function() { $(this).remove(); });
    }
    </script>
</body>

</html>

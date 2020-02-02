@extends('admin.adms')
@section('head')
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">
    <link href="/adm/plugins/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="/adm/plugins/node-waves/waves.css" rel="stylesheet" />
    <link href="/adm/plugins/animate-css/animate.css" rel="stylesheet" />
    <link href="/adm/plugins/morrisjs/morris.css" rel="stylesheet" />
    <link href="/adm/css/style.css" rel="stylesheet">
    <link href="/adm/css/themes/all-themes.css" rel="stylesheet" />
    <title>{{conf("admin_title")}}</title>
@endsection
@section('body')
    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <h2>{{__('app.Dashboard')}}</h2>
            </div>
            <div class="row clearfix">
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box bg-pink hover-expand-effect">
                        <div class="icon">
                            <i class="material-icons">shopping_cart</i>
                        </div>
                        <div class="content">
                            <div class="text">{{__('app.Products')}}</div>
                            <div class="number count-to" data-from="0" data-to="{{App\Products::all()->count()}}" data-speed="15" data-fresh-interval="20"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box bg-cyan hover-expand-effect">
                        <div class="icon">
                            <i class="material-icons">people</i>
                        </div>
                        <div class="content">
                            <div class="text">{{__('app.Users')}}</div>
                            <div class="number count-to" data-from="0" data-to="{{App\User::all()->count()}}" data-speed="1000" data-fresh-interval="20"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box bg-light-green hover-expand-effect">
                        <div class="icon">
                            <i class="material-icons">format_list_bulleted</i>
                        </div>
                        <div class="content">
                            <div class="text">{{__('app.Categories')}}</div>
                            <div class="number count-to" data-from="0" data-to="{{App\Category::all()->count()}}" data-speed="1000" data-fresh-interval="20"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box bg-orange hover-expand-effect">
                        <div class="icon">
                            <i class="material-icons">insert_drive_file</i>
                        </div>
                        <div class="content">
                            <div class="text">{{__('app.News')}}</div>
                            <div class="number count-to" data-from="0" data-to="{{App\News::all()->count()}}" data-speed="1000" data-fresh-interval="20"></div>
                        </div>
                    </div>
                </div>
            </div>
            @if(false)
            <div class="row clearfix">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div class="card">
                        <div class="body bg-cyan">
                            <div class="m-b--35 font-bold">LATEST SOCIAL TRENDS</div>
                            <ul class="dashboard-stat-list">
                                <li>
                                    #socialtrends
                                    <span class="pull-right">
                                        <i class="material-icons">trending_up</i>
                                    </span>
                                </li>
                                <li>
                                    #materialdesign
                                    <span class="pull-right">
                                        <i class="material-icons">trending_up</i>
                                    </span>
                                </li>
                                <li>#adminbsb</li>
                                <li>#freeadmintemplate</li>
                                <li>#bootstraptemplate</li>
                                <li>
                                    #freehtmltemplate
                                    <span class="pull-right">
                                        <i class="material-icons">trending_up</i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            @endif

            <div class="row clearfix">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="card">
                        <div class="header">
                            <h2>{{__('app.Most_viewed_products')}}</h2>
                        </div>
                        <div class="body">
                            <div class="table-responsive">
                                <table class="table table-hover dashboard-task-infos">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>{{__('app.Product')}}</th>
                                            <th>{{__('app.Creation_date')}}</th>
                                            <th>{{__('app.Views_count')}}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach(App\Products::orderBy('views','DESC')->take(conf("Limit_of_most_viewed_prods"))->get() as $pr)
                                        <tr>
                                            <td>{{$pr->prod_id}}</td>
                                            <td><a href="/product/{{$pr->slug}}" target="_blank">{{$pr->productname}}</a> </td>
                                            <td>{{$pr->created_at}}</td>
                                            <td>{{$pr->views}} {{__('app.times')}}</td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- category stat -->
                    <div class="card">
                        <div class="header">
                            <h2>{{__('app.Category_statistics')}}</h2>
                        </div>
                        <div class="body">
                            <div class="table-responsive">
                                <table class="table table-hover dashboard-task-infos">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>{{__('app.Category')}}</th>
                                            <th>{{__('app.Creation_date')}}</th>
                                            <th>{{__('app.Views')}}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($cat_list as $ct)
                                          @if(!empty($ct->numbs))
                                          <tr>
                                              <td>{{$ct->id}}</td>
                                              <td><a href="/category/{{$ct->slug}}" target="_blank">{{$ct->name}}</a> </td>
                                              <td>{{\Carbon\Carbon::parse($ct->created_at)->format('d M,Y')}}</td>
                                              <td>{{$ct->numbs}} {{__('app.times')}}</td>
                                          </tr>
                                          @endif
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@section('foot')
    <script src="/adm/plugins/jquery/jquery.min.js"></script>
    <script src="/adm/plugins/bootstrap/js/bootstrap.js"></script>
    <script src="/adm/plugins/bootstrap-select/js/bootstrap-select.js"></script>
    <script src="/adm/plugins/jquery-slimscroll/jquery.slimscroll.js"></script>
    <script src="/adm/plugins/node-waves/waves.js"></script>
    <script src="/adm/plugins/jquery-countto/jquery.countTo.js"></script>
    <script src="/adm/plugins/raphael/raphael.min.js"></script>
    <script src="/adm/plugins/morrisjs/morris.js"></script>
    <script src="/adm/plugins/chartjs/Chart.bundle.js"></script>
    <!-- <script src="/adm/plugins/flot-charts/jquery.flot.js"></script> -->
    <!-- <script src="/adm/plugins/flot-charts/jquery.flot.resize.js"></script>
    <script src="/adm/plugins/flot-charts/jquery.flot.pie.js"></script>
    <script src="/adm/plugins/flot-charts/jquery.flot.categories.js"></script>
    <script src="/adm/plugins/flot-charts/jquery.flot.time.js"></script> -->
    <script src="/adm/plugins/jquery-sparkline/jquery.sparkline.js"></script>
    <script src="/adm/js/admin.js"></script>
    <script src="/adm/js/pages/index.js"></script>
    <script src="/adm/js/demo.js"></script>
@endsection

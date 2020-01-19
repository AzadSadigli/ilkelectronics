@extends('admin.adms')
@section('head')
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">
<link href="/adm/plugins/bootstrap/css/bootstrap.css" rel="stylesheet">
<link href="/adm/plugins/node-waves/waves.css" rel="stylesheet" />
<link href="/adm/plugins/animate-css/animate.css" rel="stylesheet" />
<link href="/adm/plugins/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css" rel="stylesheet" />
<link href="/adm/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css" rel="stylesheet" />
<link href="/adm/plugins/waitme/waitMe.css" rel="stylesheet" />
<link href="/adm/plugins/bootstrap-select/css/bootstrap-select.css" rel="stylesheet" />
<link href="/adm/css/style.css" rel="stylesheet">
<link href="/adm/css/themes/all-themes.css" rel="stylesheet" />
@if(Request::is('admin/add-category'))
<title>{{__('app.Add_new_category')}}</title>
@else
<title>{{__('app.Add_new_product')}}</title>
@endif
@endsection
@section('body')
<section class="content">
    <div class="container-fluid">
        <div class="block-header">
            <h2>{{__('app.Add')}}</h2>
        </div>
        <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card">
                    <div class="header">
                        <h2>
                            @if(Request::is('admin/add-category')) {{__('app.Add_new_category')}}
                            <small><a href="/admin/add-product">{{__('app.Add_new_product')}}</a> </small>
                            @else {{__('app.Add_new_product')}}
                            <small><a href="/admin/add-category">{{__('app.Add_new_category')}}</a> </small>
                            @endif
                        </h2>
                        <ul class="header-dropdown m-r--5">
                            <li class="dropdown">
                                <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <i class="material-icons">more_vert</i>
                                </a>
                                <ul class="dropdown-menu pull-right">
                                    <li><a href="javascript:void(0);">{{__('app.Reset')}}</a></li>
                                    <li><a href="javascript:void(0);">{{__('app.Refresh')}}</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="body">
                      @if(session()->has('success'))
                          <div class="alert alert-success alert-dismissible">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                              {{ session()->get('success') }}
                          </div>
                      @endif
                      @if(Request::is('admin/add-category'))
                      <form action="/admin/add-new-category" method="POST" enctype="multipart/form-data">
                        @csrf
                        <h2 class="card-inside-title">{{__('app.Parent_category')}}</h2>
                          <div class="row clearfix">
                              <div class="col-sm-12">
                                  <select class="form-control show-tick" name="category_name">
                                      <option value="">-- {{__('app.Independent')}} --</option>
                                      @foreach(App\Category::all() as $ct)
                                      <option value="{{$ct->id}}">{{$ct->name}}</option>
                                      @endforeach
                                  </select>
                              </div>
                              <div class="col-sm-12">
                                <div class="form-group">
                                  <label for="product_name">{{__('app.Category')}}</label>
                                  <div class="form-line">
                                      <input type="text" name="category_name" class="form-control" placeholder="{{__('app.Category')}}" />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <button type="submit" class="btn btn-primary pull-right">{{__('app.Add')}}</button>
                              </div>
                            </div>
                            </div>
                      </form>
                      @else
                      <form action="/admin/add-new-product" method="POST" enctype="multipart/form-data">
                        @csrf
                        <h2 class="card-inside-title">{{__('app.Category')}}</h2>
                          <div class="row clearfix">
                              <div class="col-sm-6">
                                  <select class="form-control show-tick" name="category">
                                      <option value="">-- {{__('app.Select_category')}} --</option>
                                      <option value="10">10</option>
                                      <option value="20">20</option>
                                      <option value="30">30</option>
                                      <option value="40">40</option>
                                      <option value="50">50</option>
                                  </select>
                              </div>
                              <div class="col-sm-6">
                                  <select class="form-control" name="subcategory">
                                      <option value="">-- {{__('app.Select_category')}} --</option>
                                      <option value="10">10</option>
                                      <option value="20">20</option>
                                      <option value="30">30</option>
                                      <option value="40">40</option>
                                      <option value="50">50</option>
                                  </select>
                              </div>
                          </div>
                          <div class="row clearfix">
                              <div class="col-sm-12">
                                <div class="form-group">
                                  <label for="product_name">{{__('app.ID')}}</label>
                                  <div class="form-line">
                                      <input type="text" name="product_id" class="form-control" placeholder="{{__('app.ID')}}" />
                                  </div>
                                </div>
                                  <div class="form-group">
                                    <label for="product_name">{{__('app.Product_slug')}}</label>
                                    <div class="form-line">
                                        <input type="text" name="slug" class="form-control" placeholder="{{__('app.Product_slug')}}" />
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label for="product_name">{{__('app.Product_name')}}</label>
                                    <div class="form-line">
                                        <input type="text" name="product_name" class="form-control" placeholder="{{__('app.Product_name')}}" />
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label for="price">{{__('app.Price')}}</label>
                                    <div class="form-line">
                                        <input type="number" name="price" class="form-control" step="0.01" placeholder="{{__('app.Price')}}">
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label for="old_price">{{__('app.Old_price')}}</label>
                                    <div class="form-line">
                                        <input type="number" name="old_price" class="form-control" step="0.01" placeholder="{{__('app.Old_price')}}">
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label for="quantity">{{__('app.Quantity')}}</label>
                                    <div class="form-line">
                                        <input type="number" name="quantity" class="form-control" placeholder="{{__('app.Quantity')}}">
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label for="description">{{__('app.Description_title')}}</label>
                                    <div class="form-line">
                                        <input type="text" name="description" class="form-control" placeholder="{{__('app.Description_title')}}">
                                    </div>
                                  </div>
                              </div>
                          </div>
                          <h2 class="card-inside-title">{{__('app.Description')}}</h2>
                          <div class="form-group">
                              <div class="form-line">
                                  <textarea rows="3" name="description" class="form-control no-resize auto-growth" placeholder="{{__('app.Description')}}"></textarea>
                              </div>
                          </div>
                          <div class="form-group">
                            <label for="images">{{__('app.Images')}}</label>
                            <input type="file" name="images[]" class="form-control" multiple>
                          </div>
                          <div class="demo-switch">
                              <div class="switch">
                                  <label>{{__('app.Not_active')}}<input type="checkbox" checked="" name="status"><span class="lever"></span>{{__('app.Active')}}</label>
                              </div>
                          </div>
                          <div class="form-group">
                            <button type="submit" class="btn btn-primary pull-right">{{__('app.Add')}}</button>
                          </div>
                        </form>
                        @endif
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
<script src="/adm/plugins/autosize/autosize.js"></script>
<script src="/adm/plugins/momentjs/moment.js"></script>
<script src="/adm/plugins/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js"></script>
<script src="/adm/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script src="/adm/js/admin.js"></script>
<script src="/adm/js/pages/forms/basic-form-elements.js"></script>
<script src="/adm/js/demo.js"></script>
@endsection

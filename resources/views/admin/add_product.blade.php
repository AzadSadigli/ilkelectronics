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
@elseif(Request::is('admin/change-image-order/*'))
<title>{{__('app.Change_order')}}</title>
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
                            @elseif(Request::is('admin/change-image-order/*'))
                            {{__('app.Change_order')}}
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
                      @if(session()->has('message'))
                          <div class="alert alert-{{session()->get('type') }} alert-dismissible">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                              {{ session()->get('message') }}
                          </div>
                      @endif
                      @if(Request::is('admin/add-category'))
                      <form action="/admin/add-new-category" method="POST" enctype="multipart/form-data">
                        @csrf
                        <h2 class="card-inside-title">{{__('app.Parent_category')}}</h2>
                          <div class="row clearfix">
                              <div class="col-sm-12">
                                  <select class="form-control show-tick" name="parent">
                                      <option value="">-- {{__('app.Independent')}} --</option>
                                      @foreach(App\Category::whereNull('parent_id')->get() as $ct)
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
                      @if(App\Category::all()->count() > 0)
                        <div class="card">
                          <div class="body table-responsive">
                              <table class="table">
                                  <thead>
                                      <tr>
                                          <th>{{__('app.Category')}}</th>
                                          <th>{{__('app.Parent_category')}}</th>
                                          <th>X</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      @foreach(App\Category::all() as $ct)
                                      <tr>
                                          <th scope="row">{{$ct->name}}</th>
                                          <td>@if(!empty($ct->parent_id)) {{App\Category::find($ct->parent_id)->name}} @endif</td>
                                          <td><a href="/admin/delete-category/{{$ct->id}}" class="btn btn-danger">X</a> </td>
                                      </tr>
                                      @endforeach
                                  </tbody>
                              </table>
                          </div>
                      </div>
                      @endif
                      @elseif(Request::is('admin/change-image-order/*'))
                      <a href="#" class="btn btn-primary my-btn pull-right">{{__('app.Reorder')}}</a><br><br>
                      <hr>
                      <ul class="image-list">
                          @foreach($images as $key => $img)
                          <li data-id="{{$key}}">
                            <b>{{$key + 1}}. </b>
                            <img src="/uploads/pro/small/{{$img->image}}" data-id="{{$img->id}}">
                          </li>
                          @endforeach
                      </ul>
                      @else
                        <form action="/admin/add-new-product" method="POST" enctype="multipart/form-data">
                          @csrf
                          <h2 class="card-inside-title">{{__('app.Category')}}</h2>
                          <div class="row clearfix">
                              <div class="col-sm-6 pcats">
                                  <select class="form-control show-tick" id="pcat" required>
                                      <option selected>-- {{__('app.Select_category')}} --</option>
                                      @foreach(App\Category::whereNull('parent_id')->get() as $ct)
                                          <option value="{{$ct->id}}">{{$ct->name}}</option>
                                      @endforeach
                                  </select>
                              </div>
                              <div class="col-sm-6 pcats">
                                  <select class="form-control" name="category" id="psubcat" data-default="{{__('app.Select_category')}}" required></select>
                              </div>
                          </div>
                          <div class="row clearfix">
                              <div class="col-sm-12">
                                <div class="form-group">
                                  <label for="product_name">{{__('app.ID')}}</label>
                                  <div class="form-line">
                                      <input type="text" name="prod_id" class="form-control" placeholder="{{__('app.ID')}}" required/>
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
                                        <input type="text" name="productname" class="form-control" placeholder="{{__('app.Product_name')}}" required/>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label for="price">{{__('app.Price')}}</label>
                                    <div class="form-line">
                                        <input type="number" name="price" class="form-control" min="0" step="0.01" placeholder="{{__('app.Price')}}" required>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label for="old_price">{{__('app.Old_price')}}</label>
                                    <div class="form-line">
                                        <input type="number" name="old_price" class="form-control" min="0" step="0.01" placeholder="{{__('app.Old_price')}}">
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label for="quantity">{{__('app.Quantity')}}</label>
                                    <div class="form-line">
                                        <input type="number" name="quantity" min="0" class="form-control" placeholder="{{__('app.Quantity')}}" required>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label for="quantity">{{__('app.Brand')}}</label>
                                    <div class="form-line">
                                        <input type="text" name="brand" class="form-control" placeholder="{{__('app.Brand')}}" required>
                                    </div>
                                  </div>
                                  <div class="demo-switch">
                                      <div class="switch">
                                          <label>{{__('app.Used')}}<input type="checkbox" name="condition" checked value="1"><span class="lever"></span>{{__('app.New')}}</label>
                                      </div>
                                  </div><br>
                                  <div class="form-group">
                                    <label for="description">{{__('app.Description_title')}}</label>
                                    <div class="form-line">
                                        <input type="text" name="description_title" class="form-control" placeholder="{{__('app.Description_title')}}">
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
                                  <label>{{__('app.Not_active')}}<input type="checkbox" name="status" checked value="1"><span class="lever"></span>{{__('app.Active')}}</label>
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
<script type="text/javascript">
$("#pcat").on("change",function(e){
  e.preventDefault();
  $.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
  if ($(this).val() !== "") {
    $.ajax({
      url: '/admin/change-subcategory/' + $(this).val(),
      type: 'GET',
      cache:false,
      success:function(data){
        let html = "<option selected disabled>-- "+$("#psubcat").data('default')+" --</option>";
        for (var i = 0; i < data.length; i++) {
          html += "<option id='"+data[i].id+"'>"+data[i].name+"</option>";
        }
        $("#psubcat").html(html).selectpicker('refresh');
      }
    });
  }
});
$("input[name='status'],input[name='condition']").change(function(){
  if ($(this).val() == 1) {
    $(this).val(0)
  }else{
    $(this).val(1)
  }
});
$(document.body).on("change","#psubcat",function(){
  console.log($(this).val());
});
</script>
@if(Request::is('admin/change-image-order/*'))
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script>
$(document.body).on("click",".my-btn",function(){
  reorder();
  var arr = [];
  for (var i=0; i < $("ul.image-list li").length; i++) {
    let img_id = $("ul.image-list li:eq("+i+") img").data("id");
    arr.push(img_id);
  }
  $.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
  $.ajax({
    type: 'POST',
    url: '/admin/change-images-order',
    data:{list:arr},
    success:function(data){notify(data.success,"success");}
  });
});
function reorder(){
  for (var i = 0; i < $("ul.image-list li").length; i++) {
    $("ul.image-list li:eq("+i+") b").html((i + 1) + ".");
  }
}
$(function() {
    var isDragging = false;
    $("ul.image-list li")
    .mousedown(function() {
        reorder();
        isDragging = false;
    })
    .mouseup(function() {
        reorder();
        var wasDragging = isDragging;
        isDragging = false;
        if (!wasDragging) {
            $("#throbble").toggle();
        }
    });
    $("ul").sortable();
});
</script>
@endif
@endsection

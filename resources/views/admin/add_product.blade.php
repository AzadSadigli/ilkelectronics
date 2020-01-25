﻿@extends('admin.adms')
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
@elseif(Request::is('admin/edit-product/*'))
<title>{{__('app.Edit_product')}}</title>
@elseif(Request::is('admin/change-image-order/*'))
<title>{{__('app.Change_order')}}</title>
@elseif(Request::is('admin/products-tabs/*'))
<title>{{__('app.Add_product_tabs')}}</title>
@else
<title>{{__('app.Add_new_product')}}</title>
@endif
@endsection
@section('body')
<section class="content">
    <div class="container-fluid">
        <div class="block-header">
          @if(Request::is('admin/edit-product/*'))
            <h2>{{__('app.Edit')}}</h2>
          @else
            <h2>{{__('app.Add')}}</h2>
          @endif
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
                            @elseif(Request::is('admin/edit-product/*'))
                            {{__('app.Edit_product')}}
                            <small><a href='/admin/change-image-order/{{$pro->slug}}'>{{__('app.Update_image_order')}}</a> |
                              <a href="/admin/products-tabs/{{$pro->slug}}"> {{__('app.Add_product_tabs')}}</a>
                            </small>
                            @elseif(Request::is('admin/products-tabs/*'))
                            {{__('app.Add_product_tabs')}}
                            <small></small>
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
                      <span>{{$pro->prod_id}}: {{$pro->productname}}</span>
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
                      @elseif(Request::is('admin/products-tabs/*'))
                      <div class="body table-responsive">
                        <table class="table table-bordered" id="tab_table">
                          <thead>
                            <tr>
                              <th>{{__('app.Title')}}</th>
                              <th>{{__('app.Details')}}</th>
                              <th>#</th>
                            </tr>
                          </thead>
                          <tbody data-id="{{$pro->id}}" data-words="{{__('app.Title')}},{{__('app.Details')}}">
                            @foreach($pro_tabs as $pt)
                            <tr data-id={{$pt->id}}>
                              <td><input type="text" class="tab_inputs" placeholder="{{__('app.Title')}}..." value="{{$pt->title}}"> </td>
                              <td><input type="text" class="tab_inputs" placeholder="{{__('app.Details')}}..." value="{{$pt->description}}"> </td>
                              <td><a class="btn btn-danger tab_input_delete"><i class="fa fa-trash"></i></a> </td>
                            </tr>
                            @endforeach
                          </tbody>
                        </table>
                        <div class="pull-right">
                          <a id="add_new_tab" class="btn btn-primary"><i class="fa fa-plus"></i></a>
                          <a id="save_new_tabs" class="btn btn-primary"><i class="fa fa-save"></i></a>
                        </div>
                      </div>
                      @else
                        <form @if(Request::is('admin/edit-product/*')) action="/admin/update-product/{{$pro->id}}" @else action="/admin/add-new-product" @endif method="POST" enctype="multipart/form-data">
                          @csrf
                          <h2 class="card-inside-title">{{__('app.Category')}}</h2>
                          <div class="row clearfix">
                              <div class="col-sm-6 pcats">
                                @php($parent_id = App\Category::find($pro->category)->parent_id)
                                  <select class="form-control show-tick" id="pcat" @if(Request::is('admin/edit-product/*')) data-select="{{$parent_id}}" @endif required>
                                      <option @if(!Request::is('admin/edit-product/*')) selected @endif>-- {{__('app.Select_category')}} --</option>
                                      @foreach(App\Category::whereNull('parent_id')->get() as $ct)
                                          <option value="{{$ct->id}}" @if(Request::is('admin/edit-product/*')) @if($ct->id == $parent_id) selected @endif @endif>{{$ct->name}}</option>
                                      @endforeach
                                  </select>
                              </div>
                              <div class="col-sm-6 pcats">
                                  <select class="form-control" id="psubcat" @if(Request::is('admin/edit-product/*')) data-select="{{$pro->category}}" @endif data-default="{{__('app.Select_category')}}" required></select>
                              </div>
                          </div>
                          <input type="hidden" id="hidden_sub" name="category" @if(Request::is('admin/edit-product/*')) value="{{$pro->category}}" @endif>
                          <div class="row clearfix">
                              <div class="col-sm-12">
                                <div class="form-group">
                                  <label for="product_name">{{__('app.ID')}}</label>
                                  <div class="form-line">
                                      <input type="text" name="prod_id" class="form-control" @if(Request::is('admin/edit-product/*')) value="{{$pro->prod_id}}" @endif placeholder="{{__('app.ID')}}" required/>
                                  </div>
                                </div>
                                  <div class="form-group">
                                    <label for="product_name">{{__('app.Product_slug')}}</label>
                                    <div class="form-line">
                                        <input type="text" name="slug" class="form-control" @if(Request::is('admin/edit-product/*')) value="{{$pro->slug}}" @endif placeholder="{{__('app.Product_slug')}}" />
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label for="product_name">{{__('app.Product_name')}}</label>
                                    <div class="form-line">
                                        <input type="text" name="productname" class="form-control" @if(Request::is('admin/edit-product/*')) value="{{$pro->productname}}" @endif placeholder="{{__('app.Product_name')}}" required/>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label for="price">{{__('app.Price')}}</label>
                                    <div class="form-line">
                                        <input type="number" name="price" class="form-control" min="0" step="0.01" @if(Request::is('admin/edit-product/*')) value="{{$pro->price}}" @endif placeholder="{{__('app.Price')}}" required>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label for="old_price">{{__('app.Old_price')}}</label>
                                    <div class="form-line">
                                        <input type="number" name="old_price" class="form-control" min="0" step="0.01" @if(Request::is('admin/edit-product/*')) value="{{$pro->old_price}}" @endif placeholder="{{__('app.Old_price')}}">
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label for="quantity">{{__('app.Quantity')}}</label>
                                    <div class="form-line">
                                        <input type="number" name="quantity" min="0" class="form-control" @if(Request::is('admin/edit-product/*')) value="{{$pro->quantity}}" @endif placeholder="{{__('app.Quantity')}}" required>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label for="quantity">{{__('app.Brand')}}</label>
                                    <div class="form-line">
                                        <input type="text" name="brand" class="form-control" @if(Request::is('admin/edit-product/*')) value="{{$pro->brand}}" @endif placeholder="{{__('app.Brand')}}" required>
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
                                        <input type="text" name="description_title" @if(Request::is('admin/edit-product/*')) value="{{$pro->description_title}}" @endif class="form-control" placeholder="{{__('app.Description_title')}}">
                                    </div>
                                  </div>
                              </div>
                          </div>
                          <h2 class="card-inside-title">{{__('app.Description')}}</h2>
                          <div class="form-group">
                              <div class="form-line">
                                  <textarea rows="3" name="description" class="form-control no-resize auto-growth" placeholder="{{__('app.Description')}}">@if(Request::is('admin/edit-product/*')){{$pro->description}}@endif</textarea>
                              </div>
                          </div>
                          <div class="form-group">
                            <label for="images">{{__('app.Images')}}</label>
                            <input type="file" name="images[]" class="form-control" multiple @if(!Request::is('admin/edit-product/*')) required @endif>
                          </div>
                          <div class="demo-switch">
                              <div class="switch">
                                  <label>{{__('app.Not_active')}}<input type="checkbox" name="status" @if(Request::is('admin/edit-product/*')) @if($pro->status != 1) checked @endif @endif value="1"><span class="lever"></span>{{__('app.Active')}}</label>
                              </div>
                          </div>
                          <div class="form-group">
                            <button type="submit" class="btn btn-primary pull-right">@if(Request::is('admin/edit-product/*')) {{__('app.Update')}}  @else {{__('app.Add')}} @endif</button>
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
  change_subcat($(this).val());
});
$(document).ready(function(){
  change_subcat($("#pcat").data("select"));

  let tbd = "#tab_table > tbody";
  $("#add_new_tab").on("click",function(){
    $(tbd).append("<tr>"+$("#tab_table > tbody > tr").html()+"</tr>");
    setCookie("number_of_tr",$("#tab_table > tbody > tr").length,7);
  });
  let new_input = "<tr><td><input type='text' class='tab_inputs' placeholder='"+$(tbd).data("words").split(',')[0]+"...'> </td><td><input type='text' class='tab_inputs' placeholder='"+$(tbd).data("words").split(',')[1]+"...'> </td><td><a class='btn btn-danger tab_input_delete'><i class='fa fa-trash'></i></a> </td></tr>";
  if (getCookie("number_of_tr") !== null) {
    for (var i = 0; i < getCookie("number_of_tr"); i++) {
      $(tbd).append(new_input);
      $(tbd+" > tr:eq("+i+") > td:eq(0) > input").val(getCookie($(tbd).data("id") + "val0" + "_" + i));
      $(tbd+" > tr:eq("+i+") > td:eq(1) > input").val(getCookie($(tbd).data("id") + "val1" + "_" + i));
    }
  }
  $(document.body).on("click",".tab_input_delete",function(){
    setCookie("number_of_tr",(getCookie("number_of_tr") - 1),7);
    $(tbd+" > tr:eq("+getCookie("number_of_tr")+")").remove();
  });
  let arr = [];
  $(document.body).on("input","#tab_table > tbody input",function(){
    let k = $(this).parents("td").index() + "_" +$(this).parents("tr").index();
    let v = $(this).val();
    setCookie($(tbd).data("id") + "val" + k,v,10);
    console.log(getCookie($(tbd).data("id") + "val" + k));
  });
  $("#save_new_tabs").on("click",function(){
    let tab_list = [];
    for (var i = 0; i < $(tbd + " > tr").length; i++) {
      let title = $(tbd + " > tr:eq("+i+") > td:eq(0) > input").val();
      let desc = $(tbd + " > tr:eq("+i+") > td:eq(1) > input").val();
      tab_list.push({
        title,desc
      });
    }
    let th = this;
    $(th).html('<i class="fa fa-refresh fa-spin"></i>')
    $.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
    $.ajax({
      url: '/admin/update-products-tabs',
      type: 'POST',
      data:{list:tab_list,prod:$(tbd).data("id")},
      success:function(data){
        console.log(data);
      },complete:function(){
        $(th).html('<i class="fa fa-save"></i>')
      }
    });
  });
});

const change_subcat = function(id){
  if (id !== "" && id !== null) {
    // e.preventDefault();
    $.ajax({
      url: '/admin/change-subcategory/' + id,
      type: 'GET',
      cache: false,
      success:function(data){
        let html = "<option selected disabled>-- "+$("#psubcat").data('default')+" --</option>";
        for (var i = 0; i < data.length; i++) {
          let sl = "";
          if (data[i].id == $("#psubcat").data("select")) {sl = "selected"}
          html += "<option value='"+data[i].id+"' "+sl+">"+data[i].name+"</option>";
        }
        $("#psubcat").html(html).selectpicker('refresh');
        $("#psubcat option[value='"+$("#psubcat").data("select")+"']").prop("selected",true);
        // $("#psubcat");
      }
    });
  }
}
$("input[name='status'],input[name='condition']").change(function(){
  if ($(this).val() == 1) {
    $(this).val(0)
  }else{
    $(this).val(1)
  }
});
$(document.body).on("change","#psubcat",function(){
  $("input#hidden_sub").val($(this).val());
  console.log();
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

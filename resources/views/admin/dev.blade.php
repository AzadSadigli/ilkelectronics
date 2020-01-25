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
<title>Development</title>




@endsection
@section('body')
<section class="content">
    <div class="container-fluid">
        <div class="block-header"><h2>{{__('app.Development')}}</h2></div>
        <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card">
                    <div class="header">
                        <h2>
                            {{__('app.Development')}}
                            <small></small>
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
                          <h2 class="card-inside-title">{{__('app.Development')}}</h2>
                          <div class="row clearfix">
                              <div class="col-sm-12">
                                  <div class="form-group">
                                    <label for="description">{{__('app.Description_title')}}</label>
                                    <div class="form-line">
                                        <input type="text" name="description_title" class="form-control" placeholder="{{__('app.Description_title')}}">
                                    </div>
                                  </div>
                              </div>
                          </div>
                          <h2 class="card-inside-title">Code</h2>
                          <div class="form-group">
                              <div class="form-line">
                                  <textarea rows="3" name="description" id="js_code_area" placeholder="{{__('app.Description')}}">
                                    <h2>test</h2>
                                  </textarea>
                              </div>
                          </div>
                          <div class="demo-switch">
                              <div class="switch">
                                  <label>{{__('app.Not_active')}}<input type="checkbox" name="status" checked value="1"><span class="lever"></span>{{__('app.Active')}}</label>
                              </div>
                          </div>
                          <div class="form-group">
                            <button class="btn btn-primary pull-right">{{__('app.Update')}}</button>
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

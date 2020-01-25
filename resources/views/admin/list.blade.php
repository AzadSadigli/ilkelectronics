@extends('admin.adms')
@section('head')
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">
<link href="/adm/plugins/bootstrap/css/bootstrap.css" rel="stylesheet">
<link href="/adm/plugins/node-waves/waves.css" rel="stylesheet" />
<link href="/adm/plugins/animate-css/animate.css" rel="stylesheet" />
<link href="/adm/plugins/jquery-datatable/skin/bootstrap/css/dataTables.bootstrap.css" rel="stylesheet">
<link href="/adm/css/style.css" rel="stylesheet">
<link href="/adm/css/themes/all-themes.css" rel="stylesheet" />
@if(Request::is('admin/page-list'))
<title>{{__('app.Page_list')}}</title>
@elseif(Request::is('admin/news-list'))
<title>{{__('app.News_list')}}</title>
@else
<title>{{__('app.Product_list')}}</title>
@endif
@endsection
@section('body')
<section class="content">
    <div class="container-fluid">
        <div class="block-header"><h2>{{__('app.List')}}</h2></div>
        <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card">
                    <div class="header"><h2>
                      @if(Request::is('admin/page-list'))
                      {{__('app.Page_list')}}
                      @elseif(Request::is('admin/news-list'))
                      {{__('app.News_list')}}
                      @else
                      {{__('app.Product_list')}}
                      @endif
                    </h2></div>
                    <div class="body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped table-hover dataTable js-exportable">
                                <thead id="copy_to_tfoot">
                                  @if(Request::is('admin/page-list'))
                                    <tr>
                                      <td>{{__('app.Parent_page')}}</td>
                                      <td>{{__('app.Page_shortname')}}</td>
                                      <td>{{__('app.Page_title')}}</td>
                                      <td>{{__('app.Page_body')}}</td>
                                      <td>{{__('app.Footer')}} / {{__('app.Header')}}</td>
                                      <td>#</td>
                                    </tr>
                                  @elseif(Request::is('admin/news-list'))
                                  @else
                                    <tr>
                                      <th>ID</th><th>{{__('app.Product_name')}}</th><th>{{__('app.Price')}} / {{__('app.Old_price')}}</th>
                                      <th>{{__('app.Quantity')}}</th><th>{{__('app.Views')}}</th><th>#</th>
                                    </tr>
                                  @endif
                                </thead>
                                <tfoot></tfoot>
                                <tbody>
                                    @if(Request::is('admin/page-list'))
                                      @foreach($pages as $page)
                                      <tr>
                                        <td>
                                          @php($pg = App\Pages::find($page->parent_id))
                                          @if(!empty($pg))
                                          <b>{{$pg->shortname}}</b>
                                          @else
                                          <i style="color:red;">{{__('app.No_parent_page')}}</i>
                                          @endif
                                        </td>
                                        <td>{{$page->shortname}}</td>
                                        <td>{{$page->title}}</td>
                                        <td>{{str_limit($page->body, $limit = 100, $end = '...')}}
                                          @if(strlen($page->body) > 100)
                                          <a class="read_more" data-toggle="modal" data-target="#promodal" data-text="{{$page->body}}" data-words="{{__('app.More')}},{{__('app.Close')}}">{{__('app.More')}}</a>
                                          @endif
                                        </td>
                                        <td class="page-list-rd-btns">
                                          <div class="demo-switch">
                                              <div class="switch">
                                                  <input type="hidden" name="status" @if($page->status == 1) value="1" @else value="0" @endif>
                                                  <label>{{__('app.Status')}}<input type="checkbox" data-page="{{$page->id}}" @if($page->status == 1) checked @endif><span class="lever"></span></label>
                                              </div>
                                          </div>
                                          <hr>
                                          <div class="demo-switch">
                                              <div class="switch">
                                                  <input type="hidden" name="important" @if($page->important == 1) value="1" @else value="0" @endif>
                                                  <label>{{__('app.Important')}}<input type="checkbox" data-page="{{$page->id}}" @if($page->important == 1) checked @endif><span class="lever"></span></label>
                                              </div>
                                          </div>
                                          <hr>
                                          <div class="demo-switch">
                                              <div class="switch">
                                                  <input type="hidden" name="footer" @if($page->footer == 1) value="1" @else value="0" @endif>
                                                  <label>{{__('app.In_footer')}}<input type="checkbox" data-page="{{$page->id}}" @if($page->footer == 1) checked @endif id="pg_footer"><span class="lever"></span></label>
                                              </div>
                                          </div>
                                          <hr>
                                          <div class="demo-switch">
                                              <div class="switch">
                                                  <input type="hidden" name="header"  @if($page->header == 1) value="1" @else value="0" @endif >
                                                  <label>{{__('app.In_header')}}<input type="checkbox" data-page="{{$page->id}}"  @if($page->header == 1) checked @endif id="pg_header"><span class="lever"></span></label>
                                              </div>
                                          </div>
                                        </td>
                                        <td class="list-btns">
                                          <a class="btn btn-danger dl_page" data-id="{{$page->id}}" data-toggle="modal" data-target="#promodal" data-text="{{__('app.Are_you_sure_to_delete_page')}}" data-words="{{__('app.Delete_page')}},{{__('app.Delete')}},{{__('app.Close')}}"><i class="fa fa-trash"></i></a>
                                          <a class="btn btn-primary" href="/add-page-tab/{{$page->id}}"><i class="fa fa-plus"></i></a>
                                        </td>
                                      </tr>
                                      @endforeach
                                    @elseif(Request::is('admin/news-list'))
                                    @else
                                      @foreach($pros as $pro)
                                      <tr>
                                          <td>{{$pro->prod_id}}</td>
                                          <td>{{$pro->productname}}</td>
                                          <td>{{$pro->price}} {{currency()}} @if(!empty($pro->old_price)) / {{$pro->old_price}} {{currency()}} @endif</td>
                                          <td>{{$pro->quantity}}</td>
                                          <td>{{$pro->views}}</td>
                                          <td class="list-btns">
                                            <a class="btn btn-danger dl_prod" data-id="{{$pro->id}}" data-toggle="modal" data-target="#promodal" data-text="{{__('app.Are_you_sure_to_delete_product')}}" data-words="{{__('app.Delete_product')}},{{__('app.Delete')}},{{__('app.Close')}}"><i class="fa fa-trash"></i></a>
                                            <a class="btn btn-success" href="/admin/edit-product/{{$pro->id}}"><i class="fa fa-cog"></i></a>
                                            <a class="btn btn-primary" data-id="{{$pro->id}}" data-toggle="modal" data-target="#promodal"><i class="fa fa-eye"></i></a>
                                          </td>
                                      </tr>
                                      @endforeach
                                    @endif
                                </tbody>
                            </table>
                            <div id="promodal" class="modal fade" role="dialog"></div>
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
<script src="/adm/plugins/jquery-datatable/jquery.dataTables.js"></script>
<script src="/adm/plugins/jquery-datatable/skin/bootstrap/js/dataTables.bootstrap.js"></script>
<script src="/adm/plugins/jquery-datatable/extensions/export/dataTables.buttons.min.js"></script>
<script src="/adm/plugins/jquery-datatable/extensions/export/buttons.flash.min.js"></script>
<script src="/adm/plugins/jquery-datatable/extensions/export/jszip.min.js"></script>
<script src="/adm/plugins/jquery-datatable/extensions/export/pdfmake.min.js"></script>
<script src="/adm/plugins/jquery-datatable/extensions/export/vfs_fonts.js"></script>
<script src="/adm/plugins/jquery-datatable/extensions/export/buttons.html5.min.js"></script>
<script src="/adm/plugins/jquery-datatable/extensions/export/buttons.print.min.js"></script>
<script src="/adm/js/admin.js"></script>
<script src="/adm/js/pages/tables/jquery-datatable.js"></script>
<script src="/adm/js/demo.js"></script>
<script type="text/javascript">
  $(document).ready(function(){
    $("#copy_to_tfoot").siblings("tfoot").html($("#copy_to_tfoot").html())
  });
  $(document.body).on("click",".list-btns > .dl_prod",function(){
    let wrds = $(this).data("words").split(",");
    let html = "<div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>"+wrds[0]+"</h4></div><div class='modal-body'><p>"+$(this).data("text")+"</p></div><div class='modal-footer'><a class='btn btn-default' data-dismiss='modal'>"+wrds[2]+"</a><a href='/admin/delete-product/"+$(this).data("id")+"' class='btn btn-danger'>"+wrds[1]+"</a></div></div></div>";
    $("#promodal").html(html);
  });
  $(document.body).on("click",".list-btns > .dl_page",function(){
    let wrds = $(this).data("words").split(",");
    let html = "<div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>"+wrds[0]+"</h4></div><div class='modal-body'><p>"+$(this).data("text")+"</p></div><div class='modal-footer'><a class='btn btn-default' data-dismiss='modal'>"+wrds[2]+"</a><a href='/admin/delete-page/"+$(this).data("id")+"' class='btn btn-danger'>"+wrds[1]+"</a></div></div></div>";
    $("#promodal").html(html);
  });
  $(document.body).on("click",".read_more",function(){
    let wrds = $(this).data("words").split(",");
    let html = "<div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>"+wrds[0]+"</h4></div><div class='modal-body'><p>"+$(this).data("text")+"</p></div><div class='modal-footer'><a class='btn btn-default' data-dismiss='modal'>"+wrds[1]+"</a></div></div></div>";
    $("#promodal").html(html);
  });


  $(document.body).on("change",".page-list-rd-btns input",function(){
    $.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
    $.ajax({
      url: '/admin/update-pg-head-foot',
      type: 'POST',
      data:{page:$(this).data("page"),tp:$(this).parents("label").siblings("input").attr("name"),tp_val: $(this).parents("label").siblings("input").val()},
      success:function(data){
        console.log(data);
      }
    });
    console.log($(this).parents("label").siblings("input").attr("name"));
  });
</script>
@endsection

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
<title>{{__('app.Product_list')}}</title>
@endsection
@section('body')
<section class="content">
    <div class="container-fluid">
        <div class="block-header"><h2>{{__('app.List')}}</h2></div>
        <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card">
                    <div class="header"><h2>{{__('app.Product_list')}}</h2></div>
                    <div class="body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped table-hover dataTable js-exportable">
                                <thead>
                                    <tr>
                                      <th>ID</th><th>{{__('app.Product_name')}}</th><th>{{__('app.Price')}} / {{__('app.Old_price')}}</th>
                                      <th>{{__('app.Quantity')}}</th><th>{{__('app.Views')}}</th><th>#</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>ID</th><th>{{__('app.Product_name')}}</th><th>{{__('app.Price')}} / {{__('app.Old_price')}}</th>
                                        <th>{{__('app.Quantity')}}</th><th>{{__('app.Views')}}</th><th>#</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    @foreach($pros as $pro)
                                    <tr>
                                        <td>{{$pro->prod_id}}</td>
                                        <td>{{$pro->productname}}</td>
                                        <td>{{$pro->price}} {{currency()}} @if(!empty($pro->old_price)) / {{$pro->old_price}} {{currency()}} @endif</td>
                                        <td>{{$pro->quantity}}</td>
                                        <td>{{$pro->views}}</td>
                                        <td class="list-btns">
                                          <a class="btn btn-danger" data-id="{{$pro->id}}" data-toggle="modal" data-target="#promodal"><i class="fa fa-trash"></i></a>
                                          <a class="btn btn-success" data-id="{{$pro->id}}" data-toggle="modal" data-target="#promodal"><i class="fa fa-cog"></i></a>
                                          <a class="btn btn-primary" data-id="{{$pro->id}}" data-toggle="modal" data-target="#promodal"><i class="fa fa-eye"></i></a>
                                          <br><a href='/admin/change-image-order/{{$pro->slug}}'>Update image order</a>

                                        </td>
                                    </tr>
                                    @endforeach
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
  $(document.body).on("click",".list-btns > a",function(){
    let close = "Close";
    let html = "<div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>Modal Header</h4></div><div class='modal-body'><p>Some text in the modal.</p></div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>"+close+"</button></div></div></div>";
    $("#promodal").html(html);
    console.log($(this).data("id"));
  });
</script>
@endsection

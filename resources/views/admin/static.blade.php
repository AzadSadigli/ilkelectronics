@extends('admin.adms')
@section('head')
<title>Static</title>
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">
<link href="/adm/plugins/bootstrap/css/bootstrap.css" rel="stylesheet">
<link href="/adm/plugins/node-waves/waves.css" rel="stylesheet" />
<link href="/adm/plugins/animate-css/animate.css" rel="stylesheet" />
<link href="/adm/css/style.css" rel="stylesheet">
<link href="/adm/css/themes/all-themes.css" rel="stylesheet" />
@endsection
@section('body')
    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <h2>{{__('app.Translation')}}</h2>
            </div>
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2>
                                {{__('app.Translation')}}
                                <small><b></b><b></b></small>
                            </h2>
                            <ul class="header-dropdown m-r--5">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">more_vert</i>
                                    </a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        @if(Request::is('admin/translation'))
                        <div id="addNewWord" class="modal fade" role="dialog">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">{{__('app.Add_new_word')}}</h4>
                              </div>
                              <div class="modal-body">
                                <div class="modal-input-list">
                                  <label for="">Index</label>
                                  <input type="text" id="index" placeholder="Index...">
                                </div>
                                <div class="modal-input-list">
                                  <label for="">{{__('app.Translation')}}</label>
                                  <textarea id="word_translate" placeholder="{{__('app.Translation')}}..."></textarea>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">{{__('app.Close')}}</button>
                                <button type="button" class="btn btn-primary addnew_w">{{__('app.Add')}}</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="btns-section">
                          <div>
                            @for($i=0;$i<count($dirs);$i++)
                            <a class="folder_name" data-id="{{$dirs[$i]}}">{{$dirs[$i]}}</a>
                            @endfor
                          </div>
                          <div id="exist_files"></div>
                        </div>
                        @endif
                        <div class="body table-responsive">
                            <table class="table table-striped">
                                <thead><tr><th>#</th><th>Index</th><th>{{__('app.Value')}}</th><th>{{__('app.Operations')}}</th></tr></thead>
                                <tbody class="words"></tbody>
                            </table>
                            <div class=" pull-right">
                              <a class="btn btn-primary add_new_w" data-toggle="modal" data-target="#addNewWord" style="display:none;" title="{{__('app.Add')}}"><i class="fa fa-plus"></i> </a>
                              <a class="btn btn-primary" id="save_files" style="display:none;" title="{{__('app.Save')}}"><i class="fa fa-save"></i></a>
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
    <script src="/adm/js/admin.js"></script>
    <script src="/adm/js/demo.js"></script>
    <script type="text/javascript">
      $(document).ready(function(){
        if (document.URL.indexOf("translation") >= 0) {
          var folder = "";
          var fl = "";
          function get_tr_folder(folder){
            $.ajax({
              url: '/admin/translation',
              type: 'GET',
              data:{folder:folder},
              success:function(data){
                let files = "";
                for (var i = 0; i < data.length; i++) {
                  files += "<a class='file_name' data-id='"+data[i]+"'>"+folder+"/"+data[i].replace(".php", "")+"</a>";
                }
                $(".header > h2 > small > b:eq(0)").html('/'+folder);
                $("#exist_files").html(files);
              }
            });
          }
          function get_tr_file(folder,fl){
            $.ajax({
              url: '/admin/translation',
              type: 'GET',
              data:{file:fl,fld:folder},
              success:function(data){
                let string = "";
                for (var i = 0; i < data.length; i++) {
                  let btns = "<a class='btn btn-danger delete_word' data-key='"+Object.keys(data[i])+"'><i class='fa fa-trash'></i></a><a><i></i></a>";
                  string += "<tr><th scope='row' data-index='"+(i + 1)+"'>"+(i+1)+"</th><td>"+Object.keys(data[i])+"</td><td><textarea name='"+Object.keys(data[i])+"'>"+Object.values(data[i])+"</textarea> </td><td>"+btns+"</td></tr>";
                }
                $(".header > h2 > small > b:eq(0)").html('/'+folder + '/' + fl);
                $(".words").html(string);
                $("a.add_new_w").css("display","");
                $("#save_files").css("display","");
                $("#file_link").attr("folder",folder).attr("file",fl);
              }
            });
          }
          $(document.body).on("click",".delete_word",function(){
            var list = [];
            for (var i = 0; i < $(".words > tr").length; i++) {
              if ($(".words > tr:eq("+i+") > td:eq(0)").text() !== $(this).data("key")) {
                let key = $(".words > tr:eq("+i+") > td:eq(0)").text();
                let val = $(".words > tr:eq("+i+") > td:eq(1) > textarea").val();
                list.push({key, val});
              }
            }
            load_words(folder,fl,list);
          });
          $(".folder_name").on("click",function(){$(this).addClass("active").siblings().removeClass("active");folder = $(this).data("id");get_tr_folder(folder);});
          $(document.body).on("click",".file_name",function(){$(this).addClass("active").siblings().removeClass("active");fl = $(this).data("id");get_tr_file(folder,fl);});
          $("#save_files").on("click",function(){
            var list = [];
            for (var i = 0; i < $(".words > tr").length; i++) {
              let key = $(".words > tr:eq("+i+") > td:eq(0)").text();
              let val = $(".words > tr:eq("+i+") > td:eq(1) > textarea").val();
              list.push({key, val});
            }
            $(this).html('<i class="fa fa-refresh fa-spin"></i>');
            load_words(folder,fl,list);
          });
          function load_words(folder,fl,list){
            $.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
            $.ajax({
              url: '/admin/save-tr-file',
              type: 'POST',
              data:{folder: folder,file:fl,list:list},
              success:function(data){
                console.log(data.message);
                $('#addNewWord').modal('hide');
                $('#addNewWord textarea,#addNewWord input').val("");
                get_tr_file(folder,fl);
                let $target = $('html,body');
                $target.animate({scrollTop: $target.height()}, 1000);
              },
              complete:function(){
                $("#save_files .fa-spin").remove();
                $("#save_files").html('<i class="fa fa-save"></i>');
              }
            });
          }
          $(".addnew_w").on("click",function(){
            $.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
            var list = [];
            for (var i = 0; i < $(".words > tr").length; i++) {
              let key = $(".words > tr:eq("+i+") > td:eq(0)").text();
              let val = $(".words > tr:eq("+i+") > td:eq(1) > textarea").val();
              list.push({key, val});
            }
            let key = $("#index").val();
            let val = $("#word_translate").val();
            list.push({key, val});
            load_words(folder,fl,list);
          });
        }else if(document.URL.indexOf("configuration") >= 0){
          function get_configuration(){
            $.ajax({
              url: '/admin/configuration',
              type: 'GET',
              data:{get_data:0},
              success:function(data){
                let tr = "";
                let len = Object.keys(data).length;
                for (var i = 0; i < len; i++) {
                  let val = Object.values(data)[i]; let key = Object.keys(data)[i];
                  let input = "no input detected";
                  if (val[1] === "text_input") {input = "<input type='text' id='"+key+"' value='"+val[0]+"' class='value'>";
                  }else if(val[1] === "radio_input"){
                    input = "<div class='demo-switch'><div class='switch'><label data-on='"+val[3]+"' data-off='"+val[4]+"'>"+val[4]+"<input type='checkbox' checked='' id='"+key+"' data-on='"+val[0]+"' data-off='"+val[2]+"' class='value' value='"+val[2]+"'><span class='lever'></span>"+val[3]+"</label></div></div>";
                  }else if(val[1] === "textarea"){
                    input = "<textarea id='"+key+"' class='value'>"+val[0]+"</textarea>";
                  }else if(val[1] === "number_input"){
                    input = "<input type='number' id='"+key+"' value='"+val[0]+"' class='value'>";
                  }
                  let btns = "<a class='btn btn-danger delete_word' data-key='"+key+"'><i class='fa fa-trash'></i></a><a><i></i></a>";
                  tr += "<tr><th scope='row' data-tp='"+val[1]+"' data-index='"+(i + 1)+"'>"+(i+1)+"</th><td>"+key+"</td><td>"+input+" </td><td>"+btns+"</td></tr>";
                }
                $("#save_files,.add_new_w").css("display","");
                $(".words").html(tr);
              },complete:function(){
                $("#save_files").html('<i class="fa fa-save"></i>');
              }
            });
          }
          $("#save_files").on("click",function(){
            let list = [];
            for (var i = 0; i < $(".words > tr").length; i++) {
              let base = ".words > tr:eq("+i+")"; let off_value = ""; let on_text = ""; let off_text ="";
              if ($(base+" td label").data("on")) {
                on_text = $(base+" td label").data("on");
                off_text = $(base+" td label").data("off");
                off_value = $(base+" td .value").data("off");
              }
              let key = $(base+" > td:eq(0)").text();
              let val = $(base+" > td:eq(1) .value").val();
              let type = $(base + ">th").data("tp");
              list.push({key,val,type,on_text,off_text,off_value});
            }
            console.log(list);
            $.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
            $.ajax({
              type: 'POST',
              url: '/admin/update-configuration',
              data:{list:list},
              success:function(data){
                console.log(data);
              }
            });
            $(this).html('<i class="fa fa-refresh fa-spin"></i>');
            get_configuration();
          });
          get_configuration();
          $(document.body).on("change",".switch > label > input[type='checkbox']",function(){
            if ($(this).val() == $(this).data("on") | $(this).val() === $(this).data("on")) {
              $(this).val($(this).data("off"))
            }else{
              $(this).val($(this).data("on"))
            }
          });
        }
      });
    </script>
@endsection

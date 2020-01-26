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
<title>Development - {{conf("admin_title")}}</title>
@endsection
@section('body')
<section class="content">
    <div class="container-fluid">
        <div class="block-header"><h2>Development</h2></div>
        <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card">
                    <div class="header">
                        <h2>
                            Development
                            <small class="url-link"></small>
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
                          <h2 class="card-inside-title">Development</h2>
                          <div class="row clearfix">
                             <div class="col-sm-12">
                                 <select class="form-control show-tick" id="select_file">
                                     <option value="ms.css">master.css</option>
                                     <option value="ms.js">master.js</option>
                                 </select>
                             </div>
                          </div>
                          <h2 class="card-inside-title">Code</h2>
                          <div class="form-group">
                              <div class="form-line">
                                  <textarea name="description" id="code_review" placeholder="{{__('app.Description')}}"><h2>test</h2></textarea>
                                  <div class="txt_replacer">
                                      <div class="rp_item">
                                        <label for="termSearch">Search</label>
                                        <input type="text" id="termSearch" name="termSearch" placeholder="First word..." />
                                      </div>
                                      <div class="rp_item">
                                        <label for="termReplace">Replace</label>
                                        <input type="text" id="termReplace" name="termReplace" placeholder="Second word..."/>
                                      </div>
                                      <div class="rp_item">
                                        <label for="caseSensitive">Case Sensitive</label>
                                        <input type="checkbox" name="caseSensitive" id="caseSensitive" />
                                      </div>
                                      <div class="rp_btns">
                                        <a href="#" onclick="SAR.find(); return false;" id="find">FIND</a>
                                        <a href="#" onclick="SAR.findAndReplace(); return false;" id="findAndReplace">FIND/REPLACE</a>
                                        <a href="#" onclick="SAR.replaceAll(); return false;" id="replaceAll">REPLACE ALL</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="demo-switch">
                              <div class="switch">
                                  <label>{{__('app.Not_active')}}<input type="checkbox" name="status" checked value="1"><span class="lever"></span>{{__('app.Active')}}</label>
                              </div>
                          </div>
                          <div class="form-group">
                            <button class="btn btn-primary pull-right" title="{{__('app.Save')}}" id="save_code" style="display:none;"><i class="fa fa-save"></i></button>
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
<!-- <script src="/adm/plugins/bootstrap-select/js/bootstrap-select.js"></script> -->
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
$(document).ready(function(){
  $("#select_file").on("change",function(){
    get_code_ontext($(this).val());
  });
  get_code_ontext($("#select_file").val());
  function get_code_ontext(file){
    let $sc = $("#save_code");
    $sc.html('<i class="fa fa-refresh fa-spin"></i>');
    $.ajax({
        type: 'GET',
        url: '/admin/get-file-data',
        data:{file:file},
        success:function(data){
          $("#code_review").val(data);
          $(".url-link").html("<a href='/admin/code-view/"+file+"'>"+file+"</a>");
          let textarea = document.getElementById('code_review');
          textarea.scrollTop = textarea.scrollHeight;
        },
        complete:function(){$sc.css("display","").html('<i class="fa fa-save"></i>');}
    });
  }
  $("#save_code").on("click",function(e){
    let $sc = $("#save_code");
    $sc.html('<i class="fa fa-refresh fa-spin"></i>');
    e.preventDefault();
    $.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
    $.ajax({
      type: 'POST',
      url: '/admin/update-css-js',
      data:{file:$("#select_file").val(),val:$("#code_review").val()},
      success:function(data){
        notify(data.message,"success");
      },
      complete:function(){
          $sc.html('<i class="fa fa-save"></i>');
      }
    });
  });
});

var SAR = {};

  SAR.find = function(){
      // collect variables
      var txt = $("#code_review").val();
      var strSearchTerm = $("#termSearch").val();
      var isCaseSensitive = ($("#caseSensitive").attr('checked') == 'checked') ? true : false;

      // make text lowercase if search is supposed to be case insensitive
      if(isCaseSensitive == false){
          txt = txt.toLowerCase();
          strSearchTerm = strSearchTerm.toLowerCase();
      }

      // find next index of searchterm, starting from current cursor position
      var cursorPos = ($("#code_review").getCursorPosEnd());
      var termPos = txt.indexOf(strSearchTerm, cursorPos);

      // if found, select it
      if(termPos != -1){
          $("#code_review").selectRange(termPos, termPos+strSearchTerm.length);
      }else{
          // not found from cursor pos, so start from beginning
          termPos = txt.indexOf(strSearchTerm);
          if(termPos != -1){
              $("#code_review").selectRange(termPos, termPos+strSearchTerm.length);
          }else{
              alert("not found");
          }
      }
  };

  SAR.findAndReplace = function(){
      var origTxt = $("#code_review").val(); // needed for text replacement
      var txt = $("#code_review").val(); // duplicate needed for case insensitive search
      var strSearchTerm = $("#termSearch").val();
      var strReplaceWith = $("#termReplace").val();
      var isCaseSensitive = ($("#caseSensitive").attr('checked') == 'checked') ? true : false;
      var termPos;
      if(isCaseSensitive == false){
          txt = txt.toLowerCase();
          strSearchTerm = strSearchTerm.toLowerCase();
      }
      var cursorPos = ($("#code_review").getCursorPosEnd());
      var termPos = txt.indexOf(strSearchTerm, cursorPos);
      var newText = '';
      if(termPos != -1){
          newText = origTxt.substring(0, termPos) + strReplaceWith + origTxt.substring(termPos+strSearchTerm.length, origTxt.length)
          $("#code_review").val(newText);
          $("#code_review").selectRange(termPos, termPos+strReplaceWith.length);
      }else{
          termPos = txt.indexOf(strSearchTerm);
          if(termPos != -1){
              newText = origTxt.substring(0, termPos) + strReplaceWith + origTxt.substring(termPos+strSearchTerm.length, origTxt.length)
              $("#code_review").val(newText);
              $("#code_review").selectRange(termPos, termPos+strReplaceWith.length);
          }else{
              alert("not found");
          }
      }
  };

  SAR.replaceAll = function(){
      var origTxt = $("#code_review").val(); // needed for text replacement
      var txt = $("#code_review").val(); // duplicate needed for case insensitive search
      var strSearchTerm = $("#termSearch").val();
      var strReplaceWith = $("#termReplace").val();
      var isCaseSensitive = ($("#caseSensitive").attr('checked') == 'checked') ? true : false;
      if(isCaseSensitive == false){
          txt = txt.toLowerCase();
          strSearchTerm = strSearchTerm.toLowerCase();
      }
      var matches = [];
      var pos = txt.indexOf(strSearchTerm);
      while(pos > -1) {
          matches.push(pos);
          pos = txt.indexOf(strSearchTerm, pos+1);
      }
      for (var match in matches){
          SAR.findAndReplace();
      }
  };
  $.fn.selectRange = function(start, end) {
      return this.each(function() {
          if(this.setSelectionRange) {
              this.focus();
              this.setSelectionRange(start, end);
          } else if(this.createTextRange) {
              var range = this.createTextRange();
              range.collapse(true);
              range.moveEnd('character', end);
              range.moveStart('character', start);
              range.select();
          }
      });
  };

  $.fn.getCursorPosEnd = function() {
      var pos = 0;
      var input = this.get(0);
      // IE Support
      if (document.selection) {
          input.focus();
          var sel = document.selection.createRange();
          pos = sel.text.length;
      }
      // Firefox support
      else if (input.selectionStart || input.selectionStart == '0')
          pos = input.selectionEnd;
      return pos;
  };
</script>
@endsection

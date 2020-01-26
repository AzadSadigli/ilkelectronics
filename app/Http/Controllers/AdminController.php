<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use Lang;
use DB;
use App\Pages;
use Auth;
use App\Config;
class AdminController extends Controller
{
    // public function panel_home(){return view('admin.index');}
    public function create_user(){

    }

    public function add_category_view(){return view('admin.add_product');}

    public function add_category(Request $req){
      // $this->validate($req,[
      //   'category_name' => 'unique|required'
      // ]);
      $ct = new Category;
      if (isset($req->parent) && !empty($req->parent)) {
        $ct->parent_id = $req->parent;
      }
      $ct->token = md5(microtime());
      $ct->name = $req->category_name;
      if (empty($req->slug)) {
        $ct->slug = make_slug($req->category_name);
      }
      $ct->save();
      update_sitemap();
      return redirect()->back()->with(['message' => Lang::get('app.Category_added_successfully'),'type' => 'success']);
    }
    public function delete_category($id){
      $ct = Category::findOrFail($id);
      $ct->delete();
      DB::select("DELETE FROM category WHERE parent_id = ".$id);
      update_sitemap();
      return redirect()->back()->with(['message' => Lang::get('app.Category_deleted'),'type' => 'danger']);
    }
    public function change_subcats($id){
      $cats = Category::where('parent_id',$id)->get();
      $cts = [];
      foreach ($cats as $key => $ct) {
        $cts[] = ['id' => $ct->id,'name' => $ct->name];
      }
      return $cts;
    }
    // public function my_profile(){return view('admin.profile');}
    public function translation(){
      $directories = glob(burl().'/resources/lang/*' , GLOB_ONLYDIR);
      $dirs = [];
      for ($i=0; $i < count($directories); $i++) {
        $dirs[] = substr($directories[$i], strrpos($directories[$i], '/') + 1);
      }
      if (isset($_GET['folder'])) {
        $files = [];
        $directories = scandir(burl().'/resources/lang/'.$_GET['folder'].'/');
        unset($directories[0]);
        unset($directories[1]);
        $vals = array_values($directories);
        for ($i=0; $i < count($vals); $i++) {
          $files[] = $vals[$i];
        }
        return response()->json($files);
      }

      if (isset($_GET['fld']) && isset($_GET['file'])) {
        $data = file_get_contents(burl().'/resources/lang/'.$_GET['fld'].'/'.$_GET['file']);
        $data = preg_replace('!/\*.*?\*/!s', '', $data);
        $data = preg_replace('/\n\s*\n/', "\n", $data);
        $arr = preg_split("/\,/", substr($data,(strpos($data,"[") + 1),strpos($data,"];")));
        unset($arr[count($arr) - 1]);
        $array = [];
        for ($i=0; $i < count($arr); $i++) {
          $part1 = str_replace(array("'",'"'),"",substr($arr[$i], strpos($arr[$i], "' =>") + 5));
          $part2 = str_replace(array("'",'"'),"",substr($arr[$i], 0,strpos($arr[$i], "' =>")));
          $part2 = preg_replace('/\s+/', '', $part2);
          $array[] = [
            $part2 => $part1
          ];
        }
        // $count = count($array);
        return response()->json($array);
      }
      return view('admin.static',compact('dirs'));
    }
    public function save_tr_file(Request $req){
      $start = "<?php\n\n// '".$req->file."' file in lang '".$req->folder."' folder \n\nreturn [";
      $end = "\n];";
      $body = "";
      for ($i=0; $i < count($req->list); $i++) {
        $a = $req->list;
        $body .= "\n    '".preg_replace('/\s+/', '', $a[$i]['key'])."' => '".$a[$i]['val']."',";
      }
      $data = $start.$body.$end;
      $data = file_put_contents(burl().'/resources/lang/'.$req->folder.'/'.$req->file,$data);
      return response()->json(['message' => 'ok']);
    }
    public function development_page(){
      $view = 'admin.dev';
      // $file = "/resources/views/".str_replace(".","/",$view).".blade.php";
      // // $data = file_get_contents($file);
      // echo number_of_tags($file,"<link");
      // exit();
      return view($view);
    }
    public function get_file_data(Request $req){
      $data = "";
      if (in_array($req->file,array('ms.js','ms.css'))) {
        if ($req->file === "ms.css") {
          $file = "css/ms.css";
          $new_file = "css/ms.min.css";
        }else{
          $file = "js/ms.js";
          $new_file = "js/ms.min.js";
        }
        $url = burl()."/public/".$file;
        $data = file_get_contents($url);
      }
      return response()->json($data);
    }
    public function update_css_js(Request $req){
      if (in_array($req->file,array('ms.js','ms.css'))) {
        if ($req->file === "ms.css") {
          $file = "css/ms.min.css";
          $data = minimizeCSS($req->val);
        }else{
          $file = "js/ms.min.js";
          $data = minimizeJS($req->val);
        }
        $url = burl()."/public/".$file;
        if (!empty($req->val)) {
          file_put_contents($url,$data);
        }
      }
      return response()->json(['message' => Lang::get('app.File_updated')]);
    }
    public function code_view($file){
      $data = "";
      if (in_array($file,array('ms.js','ms.css'))) {
        if ($file === "ms.css") {
          $file = "css/ms.css";
        }else{
          $file = "js/ms.js";
        }
        $url = burl()."/public/".$file;
        $data = file_get_contents($url);
      }
      return view('layouts.code',compact('data'));
    }
    public function delete_conf(Request $req){
      $conf = Config::where('config',$req->config)->first();
      $conf->delete();
      return response()->json(['message' => Lang::get('app.Config_deleted')]);
    }
    public function configuration(Request $req){
      if (isset($_POST['list']) && !empty($_POST['list'])) {
        for ($i=0; $i < count($req->list); $i++) {
          $vl = $req->list[$i];$key = $vl['key'];
          if (!empty($vl['on_text'])) {
            $array = [$vl['val'],$vl['type'],$vl['off_value'],$vl['on_text'],$vl['off_text']];
          }else{
            $array = [$vl['val'],$vl['type']];
          }
          $json = json_encode($array);
          $cn = Config::where('config',$vl['key'])->first();
          if (!empty($cn)) {
            $cn->value = $json;
            $cn->update();
          }else{
            $cn_new = new Config;
            $cn_new->config = $vl['key'];
            $cn_new->value = $json;
            $cn_new->save();
          }
        }
        return response()->json(['message' => Lang::get('app.Config_changed')]);
      }else if(isset($req->get_data)){
        $configs = Config::all();
        $arr_list = [];
        for ($i=0; $i < count($configs); $i++) {
          $key = $configs[$i]["config"];
          $val = json_decode($configs[$i]["value"]);
          $arr_list[] = [$key => $val];
        }
        return response()->json($arr_list);
      }else{
        $dirs = 0;
        return view('admin.static');
      }
    }
}

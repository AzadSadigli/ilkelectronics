<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use Lang;
use DB;

class AdminController extends Controller
{
    public function panel_home(){
      return view('admin.index');
    }
    public function add_category_view(){
      return view('admin.add_product');
    }
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
    public function my_profile(){
      return view('admin.profile');
    }
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
    public function configuration(){
      $base = burl().'/config/settings.php';
      $data = file_get_contents($base);
      $data = preg_replace('!/\*.*?\*/!s', '', $data);
      $data = preg_replace('/\n\s*\n/', "\n", $data);

      $directories = glob(burl().'/resources/lang/*' , GLOB_ONLYDIR);
      $dirs = [];
      for ($i=0; $i < count($directories); $i++) {
        $dirs[] = substr($directories[$i], strrpos($directories[$i], '/') + 1);
      }
      if (1 == 2) {
        $start = "<?php\n\n// '".$req->file."' file in lang '".$req->folder."' folder \n\nreturn [";
        $end = "\n];";
        $body = "";
      }

      if (isset($_GET['get_data'])) {
        $data = file_get_contents($base);
        $data = preg_replace('!/\*.*?\*/!s', '', $data);
        $data = preg_replace('/\n\s*\n/', "\n", $data);
        $arr = preg_split("/\,/", substr($data,(strpos($data,"[") + 1),strpos($data,"];")));
        // unset($arr[count($arr) - 1]);
        $array = [];
        for ($i=0; $i < count($arr); $i++) {
          $part1 = str_replace("'","",substr($arr[$i], strpos($arr[$i], "' =>") + 5));
          $part2 = str_replace("'","",substr($arr[$i], 0,strpos($arr[$i], "' =>")));
          $part2 = preg_replace('/\s+/', '', $part2);
          $array[] = [
            $part2 => $part1
          ];
        }
        return response()->json($array);
      }
      return view('admin.static',compact('dirs'));
    }
}

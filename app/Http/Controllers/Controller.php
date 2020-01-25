<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use DB;
use App\Images;
use File;
use Lang;
use Session;
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function delete_product($id){
      $imgs = Images::where('prod_id',$id)->get();
      foreach ($imgs as $k => $im) {
        $image = "uploads/pro/".$im->image;
        if(File::exists($image) && $im->image !== 'default.png') {File::delete($image);}
        $image_small = "uploads/pro/small/".$im->image;
        if(File::exists($image_small) && $im->image !== 'default.png') {File::delete($image_small);}
        DB::select("DELETE FROM images WHERE id = ".$im->id);
      }
      DB::select("DELETE FROM protab WHERE prod_id = ".$id);
      DB::select("DELETE FROM products WHERE id = ".$id);
      return redirect()->back()->with(['type' => 'success','message' => Lang::get('app.Product_deteled')]);
    }
    public function change_currency($currency){
      $val = file_get_contents(burl().'/public/currency.json');
      $val = json_decode($val,true);
      if (in_array($currency,['AZN','RUB','TRY','USD'])) {
        Session::put('currency',$currency);
        Session::put('currency_value',$val[$currency]);
      }
      return redirect()->back();
    }
    public function top_prods(){
      return DB::select("SELECT
                              COALESCE((SELECT image FROM `images` i WHERE i.prod_id = p.id ORDER BY `order` ASC LIMIT 1), 'default.png') AS image,
                              (SELECT AVG(c.rating) FROM `comments` c WHERE c.prod_id = p.id) AS rating,
                          p.slug,
                          p.productname,
                          p.price,
                          p.old_price
                          FROM
                              `products` p
                          WHERE
                              p.quantity > 0
                          ORDER BY
                              `rating`
                          DESC LIMIT 3");
    }
    public function currency_update(){
      $curl = curl_init();
      curl_setopt_array($curl, array(
        CURLOPT_URL => "https://sade.store/currency.json",
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
          "accept: application/json"
        ),
      ));
      curl_setopt($curl, CURLOPT_VERBOSE, TRUE);
      curl_setopt($curl, CURLOPT_FOLLOWLOCATION, TRUE);
      curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
      $res = curl_exec($curl);
      $rt = json_decode($res,TRUE);
      $err = curl_error($curl);
      curl_close($curl);
      if ($err) {
        echo "Error: " . $err;
      } else {
        $ips = file_get_contents(burl().'/public/ips.txt');
        $ips = json_decode($ips, TRUE);
        $ips[] = ['date' => date('Y-m-d H:i:s'), 'ip' => $_SERVER['REMOTE_ADDR']];
        $json = json_encode($ips);

        // $rt = $response['rates'];
        $arr = array("AZN" => 1,"RUB" => $rt["RUB"],"TRY" => $rt["TRY"],"USD" => $rt["USD"],);
        file_put_contents(burl().'/public/currency.json',json_encode($arr,true));
        file_put_contents(burl().'/public/ips.txt',$json);
        $r = file_get_contents(burl().'/public/currency.json');
        if (isJson($r)) {
          echo "success";
        }else{
          echo "not json";
        }
      }
    }
}

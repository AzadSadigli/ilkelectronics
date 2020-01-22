<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
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
      die($res);
      $response = json_decode($res,TRUE);
      $err = curl_error($curl);
      curl_close($curl);
      if ($err) {
        echo "Error: " . $err;
      } else {
        $ips = file_get_contents(base().'/public/ips.txt');
        $ips = json_decode($ips, TRUE);
        $ips[] = ['date' => date('Y-m-d H:i:s'), 'ip' => $_SERVER['REMOTE_ADDR']];
        $json = json_encode($ips);

        // $rt = $response['rates'];
        $arr = array("AZN" => 1,"RUB" => $rt['AZN'] / $rt["RUB"],"TRY" => $rt['AZN'] / $rt["TRY"],"USD" => $rt['AZN'] / $rt["USD"],);
        file_put_contents(base().'/public/currency.json',json_encode($arr,true));
        file_put_contents(base().'/public/ips.txt',$json);
        $r = file_get_contents(base().'/public/currency.json');
        if (isJson($r)) {
          echo "success";
        }else{
          echo "not json";
        }
      }
    }
}

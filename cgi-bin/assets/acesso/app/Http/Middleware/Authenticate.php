<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\JWTAuth;
use Namshi\JOSE\SimpleJWS;
use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Support\Facades\DB;
use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;
use Exception;

class Authenticate
{
    /**
     * The authentication guard factory instance.
     *
     * @var \Illuminate\Contracts\Auth\Factory
     */
    protected $auth;
    protected $jwt;
    /**
     * Create a new middleware instance.
     *
     * @param  \Illuminate\Contracts\Auth\Factory  $auth
     * @return void
     */
    public function __construct(Auth $auth, JWTAuth $jwt)
    {
        $this->auth = $auth;
        $this->jwt = $jwt;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {   
        if (!$request->header('Authorization')) { // all your get method not passed this step
            return Result(Null, 400, 'The token could not be parsed from the request');
        }
        //return JWTAuth::getToken();
        $token = $this->jwt->getToken();
        if (!$token) { // all your get method not passed this step
            return Result(Null, 400, 'Invailed Token');
        }

        try {
            $credentials = JWT::decode($token, env('JWT_SECRET'), ['HS256']);
        } catch(ExpiredException $e) {
            return response()->json(['status' => 'Token is Expired']);
        } catch(Exception $e) {
            return response()->json(['status' => 'Token is Invalid']);
        }

        $User = user($this->jwt);

        $Account_Role = TypeFromToken($this->jwt);
        
        if ($this->auth->guard($Account_Role)->guest()) {
            return Result(Null, 400, 'Unauthorized');
        }

        if (!$User) { return response()->json(['status' => 'Token is Unacceptable']); }
            
        if ($Account_Role == "delivers") { 
            if($User->confirmed == 0){ return Result(Null, 400, 'Your Account Has Been Limited'); }      
        }

        return $next($request);

    }
}

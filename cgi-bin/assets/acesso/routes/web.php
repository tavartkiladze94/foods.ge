<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/



//PUBLIC
$router->group(['prefix' => 'api', 'middleware' => ['throttle:2,60']], function($router)
{
    $router->post('login_in', 'api\Authintication\MainAuth@authenticate');
    $router->post('login_in_company', 'api\Authintication\MainAuth@login_in_company');
    //$router->post('registers', 'api\Authintication\MainAuth@register');

});


 

$router->get('/{route:.*}/', function ()  {
    return view('home');
});

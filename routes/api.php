<?php

use App\Models\people;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/people', [App\Http\Controllers\Api\GetPeopleController::class, 'list'])->name('people');
Route::get('/planets', [App\Http\Controllers\Api\GetPlanetsController::class, 'list'])->name('planets');
Route::get('/starships', [App\Http\Controllers\Api\GetStarshipsListController::class, 'list'])->name('starships');

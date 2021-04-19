<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class GetPlanetsController extends Controller
{
    public function list()
    {
        return Http::get('https://swapi.dev/api/planets/')->json();
    }
}

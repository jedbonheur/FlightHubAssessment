<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PeopleResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class GetPeopleController extends Controller
{
    public function list()
    {
        return Http::get('https://swapi.dev/api/people/')->json();
    }
}

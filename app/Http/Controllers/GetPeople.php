<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class GetPeople extends Controller
{
    public function list()
    {
        $data = Http::get('https://swapi.dev/api/people/')->json();
        // dd($data);
        return view('home', ['data' => $data]);
    }
}

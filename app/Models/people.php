<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class people extends Model
{
    public $timestamps = false;
    //casting arrays 
    protected $casts = [
        'films' => 'array',
        'species' => 'array',
        'vehicles' => 'array',
        'starships' => 'array',
    ];
    use HasFactory;
    protected $dateFormat = 'c';
}

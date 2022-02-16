<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function register()
    {
        return Inertia::render('Register');

    }

    public function index()
    {
        return Inertia::render('Index');

    }
}

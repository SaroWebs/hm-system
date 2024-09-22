<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class PagesController extends Controller
{
    public function test() {
        return Inertia::render('Test');
    }

    
    public function welcome() {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register')
        ]);
    }

    public function dashboard()
    {
        return Inertia::render('Dashboard/Home');
    }

    public function patients()
    {
        return Inertia::render('Patients/Patients');
    }

    public function appointment()
    {
        return Inertia::render('Patients/Appointment');
    }
    public function admission()
    {
        return Inertia::render('Patients/Admission');
    }
}

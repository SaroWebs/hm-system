<?php

use App\Http\Controllers\PagesController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;


Route::controller(PagesController::class)->group(function () {
    Route::get('/', 'welcome')->name('welcome');
    Route::get('/test', 'test');
});

Route::middleware('auth')->group(function () {
    Route::controller(PagesController::class)->group(function () {
        Route::get('/home', 'dashboard')->name('home');
        Route::get('/dashboard', 'dashboard')->name('dashboard');
        Route::get('/patients', 'patients')->name('patients');
        Route::get('/patients/appointment', 'appointment')->name('appointment');
        Route::get('/patients/admission', 'admission')->name('admission');
    });

    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile', 'edit')->name('profile.edit');
        Route::patch('/profile', 'update')->name('profile.update');
        Route::delete('/profile', 'destroy')->name('profile.destroy');
    });
});

require __DIR__ . '/auth.php';

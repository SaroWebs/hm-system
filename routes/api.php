<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\BillingController;
use App\Http\Controllers\LabTestController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\AuditLogController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PrescriptionController;
use App\Http\Controllers\MedicalRecordController;

Route::apiResource('users', UserController::class);
Route::apiResource('doctors', DoctorController::class);
Route::apiResource('patients', PatientController::class);
Route::apiResource('appointments', AppointmentController::class);
Route::apiResource('medical-records', MedicalRecordController::class);
Route::apiResource('prescriptions', PrescriptionController::class);
Route::apiResource('lab-tests', LabTestController::class);
Route::apiResource('departments', DepartmentController::class);
Route::apiResource('inventory', InventoryController::class);
Route::apiResource('billings', BillingController::class);
Route::apiResource('staff', StaffController::class);
Route::apiResource('audit-logs', AuditLogController::class);
Route::apiResource('notifications', NotificationController::class);

// Route::middleware('auth:sanctum')->group(function () {
// });

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



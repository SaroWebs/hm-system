<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DoctorController extends Controller
{
    public function index()
    {
        $doctors = Doctor::with(['user', 'department'])->get();
        return response()->json($doctors);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'department_id' => 'required|exists:departments,id',
            'specialization' => 'required|string',
            'license_number' => 'required|string|unique:doctors',
            'qualification' => 'required|string',
            'joining_date' => 'required|date',
            'office_number' => 'nullable|string',
            'emergency_contact' => 'nullable|string',
            'bio' => 'nullable|string',
            'consultation_fee' => 'nullable|numeric',
            'is_available' => 'boolean',
            'working_hours' => 'nullable|json',
        ]);

        $doctor = Doctor::create($validatedData);
        return response()->json($doctor, Response::HTTP_CREATED);
    }

    public function show(Doctor $doctor)
    {
        return response()->json($doctor->load(['user', 'department']));
    }

    public function update(Request $request, Doctor $doctor)
    {
        $validatedData = $request->validate([
            'department_id' => 'exists:departments,id',
            'specialization' => 'string',
            'license_number' => 'string|unique:doctors,license_number,' . $doctor->id,
            'qualification' => 'string',
            'joining_date' => 'date',
            'office_number' => 'nullable|string',
            'emergency_contact' => 'nullable|string',
            'bio' => 'nullable|string',
            'consultation_fee' => 'nullable|numeric',
            'is_available' => 'boolean',
            'working_hours' => 'nullable|json',
        ]);

        $doctor->update($validatedData);
        return response()->json($doctor->fresh(['user', 'department']));
    }

    public function destroy(Doctor $doctor)
    {
        $doctor->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}

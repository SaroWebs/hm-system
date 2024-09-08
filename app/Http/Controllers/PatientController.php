<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PatientController extends Controller
{
    public function index()
    {
        $patients = Patient::with('user')->get();
        return response()->json($patients);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'patient_number' => 'required|string|unique:patients',
            'date_of_birth' => 'required|date',
            'gender' => 'required|string',
            'blood_type' => 'required|string',
            'allergies' => 'nullable|string',
            'chronic_conditions' => 'nullable|string',
            'emergency_contact_name' => 'required|string',
            'emergency_contact_number' => 'required|string',
            'insurance_provider' => 'nullable|string',
            'insurance_policy_number' => 'nullable|string',
            'last_visit_date' => 'nullable|date',
            'notes' => 'nullable|string',
        ]);

        $patient = Patient::create($validatedData);
        return response()->json($patient, Response::HTTP_CREATED);
    }

    public function show(Patient $patient)
    {
        return response()->json($patient->load('user'));
    }

    public function update(Request $request, Patient $patient)
    {
        $validatedData = $request->validate([
            'date_of_birth' => 'date',
            'gender' => 'string',
            'blood_type' => 'string',
            'allergies' => 'nullable|string',
            'chronic_conditions' => 'nullable|string',
            'emergency_contact_name' => 'string',
            'emergency_contact_number' => 'string',
            'insurance_provider' => 'nullable|string',
            'insurance_policy_number' => 'nullable|string',
            'last_visit_date' => 'nullable|date',
            'notes' => 'nullable|string',
        ]);

        $patient->update($validatedData);
        return response()->json($patient->fresh('user'));
    }

    public function destroy(Patient $patient)
    {
        $patient->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}

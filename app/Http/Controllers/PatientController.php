<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PatientController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 50);
        $page = $request->input('page', 1);
        $sortBy = $request->input('sort_by', 'created_at');
        $sort = $request->input('sort', 'desc'); 

        $patients = Patient::with(['detalis'])->orderBy($sortBy, $sort)->paginate($perPage);

        return response()->json($patients);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'nullable|string',
            'date_of_birth' => 'required|date',
            'gender' => 'required|string',
            'contact_number' => 'required|string|unique:patients', // Updated to contact_number
            'email' => 'nullable|email|unique:patients', // Added email
            'address' => 'nullable|string', // Added address
            'emergency_contact_name' => 'required|string',
            'emergency_contact_number' => 'required|string',
            'insurance_provider' => 'nullable|string',
            'policy_number' => 'nullable|string', // Updated to policy_number
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
            'first_name' => 'nullable|string', // Added first_name
            'last_name' => 'nullable|string', // Added last_name
            'date_of_birth' => 'date',
            'gender' => 'string',
            'contact_number' => 'nullable|string', // Updated to contact_number
            'email' => 'nullable|email', // Added email
            'address' => 'nullable|string', // Added address
            'emergency_contact_name' => 'string',
            'emergency_contact_number' => 'string',
            'insurance_provider' => 'nullable|string',
            'policy_number' => 'nullable|string', // Updated to policy_number
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

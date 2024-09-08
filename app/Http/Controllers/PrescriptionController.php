<?php

namespace App\Http\Controllers;

use App\Models\Prescription;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PrescriptionController extends Controller
{
    public function index()
    {
        $prescriptions = Prescription::with(['patient', 'doctor', 'appointment'])->get();
        return response()->json($prescriptions);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'doctor_id' => 'required|exists:doctors,id',
            'appointment_id' => 'nullable|exists:appointments,id',
            'prescription_number' => 'required|string|unique:prescriptions',
            'medications' => 'required|json',
            'instructions' => 'required|string',
            'issue_date' => 'required|date',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'duration_days' => 'required|integer',
            'is_recurring' => 'boolean',
            'recurrence_pattern' => 'nullable|string',
            'notes' => 'nullable|string',
            'is_dispensed' => 'boolean',
            'dispensed_by' => 'nullable|string',
            'dispensed_at' => 'nullable|date',
        ]);

        $prescription = Prescription::create($validatedData);
        return response()->json($prescription, Response::HTTP_CREATED);
    }

    public function show(Prescription $prescription)
    {
        return response()->json($prescription->load(['patient', 'doctor', 'appointment']));
    }

    public function update(Request $request, Prescription $prescription)
    {
        $validatedData = $request->validate([
            'medications' => 'json',
            'instructions' => 'string',
            'start_date' => 'date',
            'end_date' => 'date',
            'duration_days' => 'integer',
            'is_recurring' => 'boolean',
            'recurrence_pattern' => 'nullable|string',
            'notes' => 'nullable|string',
            'is_dispensed' => 'boolean',
            'dispensed_by' => 'nullable|string',
            'dispensed_at' => 'nullable|date',
        ]);

        $prescription->update($validatedData);
        return response()->json($prescription->fresh(['patient', 'doctor', 'appointment']));
    }

    public function destroy(Prescription $prescription)
    {
        $prescription->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}

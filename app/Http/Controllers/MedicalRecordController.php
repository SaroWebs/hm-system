<?php

namespace App\Http\Controllers;

use App\Models\MedicalRecord;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MedicalRecordController extends Controller
{
    public function index()
    {
        $medicalRecords = MedicalRecord::with(['patient', 'doctor', 'appointment'])->get();
        return response()->json($medicalRecords);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'doctor_id' => 'required|exists:doctors,id',
            'appointment_id' => 'nullable|exists:appointments,id',
            'date' => 'required|date',
            'chief_complaint' => 'required|string',
            'symptoms' => 'required|string',
            'diagnosis' => 'required|string',
            'treatment' => 'required|string',
            'notes' => 'nullable|string',
            'vital_signs' => 'nullable|json',
            'medications' => 'nullable|string',
            'lab_results' => 'nullable|string',
            'follow_up_instructions' => 'nullable|string',
            'is_confidential' => 'boolean',
        ]);

        $medicalRecord = MedicalRecord::create($validatedData);
        return response()->json($medicalRecord, Response::HTTP_CREATED);
    }

    public function show(MedicalRecord $medicalRecord)
    {
        return response()->json($medicalRecord->load(['patient', 'doctor', 'appointment']));
    }

    public function update(Request $request, MedicalRecord $medicalRecord)
    {
        $validatedData = $request->validate([
            'date' => 'date',
            'chief_complaint' => 'string',
            'symptoms' => 'string',
            'diagnosis' => 'string',
            'treatment' => 'string',
            'notes' => 'nullable|string',
            'vital_signs' => 'nullable|json',
            'medications' => 'nullable|string',
            'lab_results' => 'nullable|string',
            'follow_up_instructions' => 'nullable|string',
            'is_confidential' => 'boolean',
        ]);

        $medicalRecord->update($validatedData);
        return response()->json($medicalRecord->fresh(['patient', 'doctor', 'appointment']));
    }

    public function destroy(MedicalRecord $medicalRecord)
    {
        $medicalRecord->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}

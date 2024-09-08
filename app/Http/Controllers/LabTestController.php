<?php

namespace App\Http\Controllers;

use App\Models\LabTest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LabTestController extends Controller
{
    public function index()
    {
        $labTests = LabTest::with(['patient', 'doctor'])->get();
        return response()->json($labTests);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'doctor_id' => 'required|exists:doctors,id',
            'test_name' => 'required|string',
            'test_code' => 'required|string|unique:lab_tests',
            'description' => 'nullable|string',
            'results' => 'nullable|json',
            'interpretation' => 'nullable|string',
            'test_date' => 'required|date',
            'collection_time' => 'nullable|date_format:H:i',
            'result_time' => 'nullable|date_format:H:i',
            'status' => 'required|string',
            'performed_by' => 'nullable|string',
            'verified_by' => 'nullable|string',
            'is_critical' => 'boolean',
            'notes' => 'nullable|string',
        ]);

        $labTest = LabTest::create($validatedData);
        return response()->json($labTest, Response::HTTP_CREATED);
    }

    public function show(LabTest $labTest)
    {
        return response()->json($labTest->load(['patient', 'doctor']));
    }

    public function update(Request $request, LabTest $labTest)
    {
        $validatedData = $request->validate([
            'results' => 'nullable|json',
            'interpretation' => 'nullable|string',
            'test_date' => 'date',
            'collection_time' => 'nullable|date_format:H:i',
            'result_time' => 'nullable|date_format:H:i',
            'status' => 'string',
            'performed_by' => 'nullable|string',
            'verified_by' => 'nullable|string',
            'is_critical' => 'boolean',
            'notes' => 'nullable|string',
        ]);

        $labTest->update($validatedData);
        return response()->json($labTest->fresh(['patient', 'doctor']));
    }

    public function destroy(LabTest $labTest)
    {
        $labTest->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}

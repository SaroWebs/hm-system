<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AppointmentController extends Controller
{
    public function index()
    {
        $appointments = Appointment::with(['doctor', 'patient', 'department'])->get();
        return response()->json($appointments);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'doctor_id' => 'required|exists:doctors,id',
            'patient_id' => 'required|exists:patients,id',
            'department_id' => 'required|exists:departments,id',
            'appointment_datetime' => 'required|date',
            'status' => 'required|string',
            'type' => 'required|string',
            'reason' => 'nullable|string',
            'notes' => 'nullable|string',
            'is_confirmed' => 'boolean',
            'check_in_time' => 'nullable|date',
            'check_out_time' => 'nullable|date',
            'cancellation_reason' => 'nullable|string',
        ]);

        $appointment = Appointment::create($validatedData);
        return response()->json($appointment, Response::HTTP_CREATED);
    }

    public function show(Appointment $appointment)
    {
        return response()->json($appointment->load(['doctor', 'patient', 'department']));
    }

    public function update(Request $request, Appointment $appointment)
    {
        $validatedData = $request->validate([
            'doctor_id' => 'exists:doctors,id',
            'patient_id' => 'exists:patients,id',
            'department_id' => 'exists:departments,id',
            'appointment_datetime' => 'date',
            'status' => 'string',
            'type' => 'string',
            'reason' => 'nullable|string',
            'notes' => 'nullable|string',
            'is_confirmed' => 'boolean',
            'check_in_time' => 'nullable|date',
            'check_out_time' => 'nullable|date',
            'cancellation_reason' => 'nullable|string',
        ]);

        $appointment->update($validatedData);
        return response()->json($appointment->fresh(['doctor', 'patient', 'department']));
    }

    public function destroy(Appointment $appointment)
    {
        $appointment->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}

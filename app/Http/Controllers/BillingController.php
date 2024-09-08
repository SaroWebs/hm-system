<?php

namespace App\Http\Controllers;

use App\Models\Billing;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BillingController extends Controller
{
    public function index()
    {
        $billings = Billing::with(['patient', 'appointment'])->get();
        return response()->json($billings);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'appointment_id' => 'nullable|exists:appointments,id',
            'invoice_number' => 'required|string|unique:billings',
            'total_amount' => 'required|numeric',
            'paid_amount' => 'required|numeric',
            'balance' => 'required|numeric',
            'status' => 'required|string',
            'bill_date' => 'required|date',
            'due_date' => 'required|date',
            'payment_method' => 'nullable|string',
            'notes' => 'nullable|string',
            'items' => 'nullable|json',
            'is_insured' => 'boolean',
            'insurance_claim_number' => 'nullable|string',
        ]);

        $billing = Billing::create($validatedData);
        return response()->json($billing, Response::HTTP_CREATED);
    }

    public function show(Billing $billing)
    {
        return response()->json($billing->load(['patient', 'appointment']));
    }

    public function update(Request $request, Billing $billing)
    {
        $validatedData = $request->validate([
            'paid_amount' => 'numeric',
            'balance' => 'numeric',
            'status' => 'string',
            'due_date' => 'date',
            'payment_method' => 'nullable|string',
            'notes' => 'nullable|string',
            'items' => 'nullable|json',
            'is_insured' => 'boolean',
            'insurance_claim_number' => 'nullable|string',
        ]);

        $billing->update($validatedData);
        return response()->json($billing->fresh(['patient', 'appointment']));
    }

    public function destroy(Billing $billing)
    {
        $billing->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}

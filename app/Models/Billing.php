<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Billing extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'patient_id', 'appointment_id', 'invoice_number', 'total_amount',
        'paid_amount', 'balance', 'status', 'bill_date', 'due_date',
        'payment_method', 'notes', 'items', 'is_insured', 'insurance_claim_number'
    ];

    protected $casts = [
        'items' => 'array',
        'is_insured' => 'boolean',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function appointment()
    {
        return $this->belongsTo(Appointment::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Prescription extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'patient_id', 'doctor_id', 'appointment_id', 'prescription_number',
        'medications', 'instructions', 'issue_date', 'start_date', 'end_date',
        'duration_days', 'is_recurring', 'recurrence_pattern', 'notes',
        'is_dispensed', 'dispensed_by', 'dispensed_at'
    ];

    protected $casts = [
        'medications' => 'array',
        'is_recurring' => 'boolean',
        'is_dispensed' => 'boolean',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function appointment()
    {
        return $this->belongsTo(Appointment::class);
    }
}

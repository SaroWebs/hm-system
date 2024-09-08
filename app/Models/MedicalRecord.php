<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MedicalRecord extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'patient_id', 'doctor_id', 'appointment_id', 'date', 'chief_complaint',
        'symptoms', 'diagnosis', 'treatment', 'notes', 'vital_signs',
        'medications', 'lab_results', 'follow_up_instructions', 'is_confidential'
    ];

    protected $casts = [
        'vital_signs' => 'array',
        'is_confidential' => 'boolean',
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

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'doctor_id', 'patient_id', 'department_id', 'appointment_datetime',
        'status', 'type', 'reason', 'notes', 'is_confirmed', 'check_in_time',
        'check_out_time', 'cancellation_reason'
    ];

    protected $dates = [
        'appointment_datetime', 'check_in_time', 'check_out_time'
    ];

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function medicalRecord()
    {
        return $this->hasOne(MedicalRecord::class);
    }

    public function billing()
    {
        return $this->hasOne(Billing::class);
    }
}

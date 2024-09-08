<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Patient extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id', 'patient_number', 'date_of_birth', 'gender', 'blood_type',
        'allergies', 'chronic_conditions', 'emergency_contact_name',
        'emergency_contact_number', 'insurance_provider', 'insurance_policy_number',
        'last_visit_date', 'notes'
    ];

    protected $dates = ['date_of_birth', 'last_visit_date'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function medicalRecords()
    {
        return $this->hasMany(MedicalRecord::class);
    }

    public function prescriptions()
    {
        return $this->hasMany(Prescription::class);
    }

    public function labTests()
    {
        return $this->hasMany(LabTest::class);
    }

    public function billings()
    {
        return $this->hasMany(Billing::class);
    }
}

<?php

namespace App\Models;

use App\Models\Billing;
use App\Models\LabTest;
use App\Models\Appointment;
use App\Models\Prescription;
use App\Models\MedicalRecord;
use App\Models\PatientDetail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Patient extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function details()
    {
        return $this->hasOne(PatientDetail::class);
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

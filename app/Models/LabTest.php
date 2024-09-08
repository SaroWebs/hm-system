<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LabTest extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'patient_id', 'doctor_id', 'test_name', 'test_code', 'description',
        'results', 'interpretation', 'test_date', 'collection_time',
        'result_time', 'status', 'performed_by', 'verified_by', 'is_critical', 'notes'
    ];

    protected $casts = [
        'results' => 'array',
        'is_critical' => 'boolean',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}

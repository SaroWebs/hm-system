<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Staff extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id', 'department_id', 'employee_id', 'position', 'hire_date',
        'employment_status', 'salary', 'shift', 'qualifications',
        'emergency_contact_name', 'emergency_contact_number',
        'contract_end_date', 'notes', 'is_active'
    ];

    protected $casts = [
        'qualifications' => 'array',
        'is_active' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}

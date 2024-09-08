<?php

namespace App\Models;

use App\Models\Staff;
use App\Models\Doctor;
use App\Models\Appointment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Department extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name', 'code', 'description', 'head_of_department', 'capacity',
        'location', 'phone_number', 'email', 'is_active'
    ];

    public function doctors()
    {
        return $this->hasMany(Doctor::class);
    }

    public function staff()
    {
        return $this->hasMany(Staff::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
}

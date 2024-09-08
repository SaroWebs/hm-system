<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Inventory extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'item_name', 'item_code', 'category', 'quantity', 'unit_price',
        'unit_of_measure', 'reorder_level', 'supplier', 'expiry_date',
        'storage_location', 'description', 'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}

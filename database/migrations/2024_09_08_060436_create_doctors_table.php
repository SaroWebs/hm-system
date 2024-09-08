<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('department_id')->constrained();
            $table->string('specialization');
            $table->string('license_number')->unique();
            $table->string('qualification');
            $table->date('joining_date');
            $table->string('office_number')->nullable();
            $table->string('emergency_contact')->nullable();
            $table->text('bio')->nullable();
            $table->string('consultation_fee')->nullable();
            $table->boolean('is_available')->default(true);
            $table->json('working_hours')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctors');
    }
};

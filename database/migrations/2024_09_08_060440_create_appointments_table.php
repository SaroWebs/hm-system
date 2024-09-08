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
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('doctor_id')->constrained();
            $table->foreignId('patient_id')->constrained();
            $table->foreignId('department_id')->constrained();
            $table->dateTime('appointment_datetime');
            $table->string('status');
            $table->string('type'); // e.g., consultation, follow-up, etc.
            $table->text('reason')->nullable();
            $table->text('notes')->nullable();
            $table->boolean('is_confirmed')->default(false);
            $table->dateTime('check_in_time')->nullable();
            $table->dateTime('check_out_time')->nullable();
            $table->string('cancellation_reason')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};

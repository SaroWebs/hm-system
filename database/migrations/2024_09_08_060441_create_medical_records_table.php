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
        Schema::create('medical_records', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained()->onDelete('cascade');
            $table->foreignId('doctor_id')->constrained()->onDelete('cascade');
            $table->foreignId('appointment_id')->nullable()->constrained()->onDelete('set null');
            $table->date('date')->nullable();
            $table->text('chief_complaint')->nullable();
            $table->text('symptoms')->nullable();
            $table->text('diagnosis')->nullable();
            $table->text('treatment')->nullable();
            $table->text('notes')->nullable();
            $table->json('vital_signs')->nullable();
            $table->text('medications')->nullable();
            $table->text('lab_results')->nullable();
            $table->text('follow_up_instructions')->nullable();
            $table->boolean('is_confidential')->default(false);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medical_records');
    }
};

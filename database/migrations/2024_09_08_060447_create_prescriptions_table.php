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
        Schema::create('prescriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained();
            $table->foreignId('doctor_id')->constrained();
            $table->foreignId('appointment_id')->nullable()->constrained();
            $table->string('prescription_number')->unique();
            $table->json('medications');
            $table->text('instructions');
            $table->date('issue_date');
            $table->date('start_date');
            $table->date('end_date');
            $table->integer('duration_days');
            $table->boolean('is_recurring')->default(false);
            $table->string('recurrence_pattern')->nullable();
            $table->text('notes')->nullable();
            $table->boolean('is_dispensed')->default(false);
            $table->string('dispensed_by')->nullable();
            $table->dateTime('dispensed_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prescriptions');
    }
};

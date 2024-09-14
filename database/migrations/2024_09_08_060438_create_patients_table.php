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
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name')->nullable();
            $table->date('date_of_birth');
            $table->enum('gender', ['male', 'female', 'other'])->default('male');
            $table->string('contact_number')->unique(); // Ensure unique contact numbers
            $table->string('email')->nullable()->unique(); // Unique email for patient communication
            $table->text('address')->nullable();
            $table->string('emergency_contact_name')->nullable();
            $table->string('emergency_contact_number')->nullable();
            $table->string('insurance_provider')->nullable(); // Added for insurance tracking
            $table->string('policy_number')->nullable(); // Added for insurance tracking
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};

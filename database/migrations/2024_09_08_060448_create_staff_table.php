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
        Schema::create('staff', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('department_id')->constrained();
            $table->string('employee_id')->unique();
            $table->string('position');
            $table->date('hire_date');
            $table->string('employment_status');
            $table->decimal('salary', 10, 2)->nullable();
            $table->string('shift')->nullable();
            $table->json('qualifications')->nullable();
            $table->string('emergency_contact_name');
            $table->string('emergency_contact_number');
            $table->date('contract_end_date')->nullable();
            $table->text('notes')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('staff');
    }
};

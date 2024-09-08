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
        Schema::create('lab_tests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained();
            $table->foreignId('doctor_id')->constrained();
            $table->string('test_name');
            $table->string('test_code')->unique();
            $table->text('description')->nullable();
            $table->json('results')->nullable();
            $table->text('interpretation')->nullable();
            $table->date('test_date');
            $table->time('collection_time')->nullable();
            $table->time('result_time')->nullable();
            $table->string('status');
            $table->string('performed_by')->nullable();
            $table->string('verified_by')->nullable();
            $table->boolean('is_critical')->default(false);
            $table->text('notes')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lab_tests');
    }
};

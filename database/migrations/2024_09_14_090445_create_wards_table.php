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
        Schema::create('wards', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('type', ['general', 'private', 'icu', 'nicu', 'picu', 'maternity', 'other'])->default('general');
            $table->integer('capacity')->default(0);
            $table->integer('available_beds')->default(0);
            $table->integer('floor')->nullable();
            $table->string('block')->nullable();
            $table->foreignId('department_id')->constrained()->onDelete('cascade');
            $table->boolean('is_active')->default(true);
            $table->boolean('is_available')->default(true);
            $table->decimal('bed_charge', 10, 2)->nullable();
            $table->text('notes')->nullable(); // Added for additional information
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wards');
    }
};

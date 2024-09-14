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
        Schema::create('compliance_reports', function (Blueprint $table) {
            $table->id();
            $table->string('report_name');
            $table->text('report_description');
            $table->boolean('issue_detected')->default(false);
            $table->enum('resolution_status', ['open', 'in_progress', 'resolved', 'closed'])->nullable();
            $table->date('date_reported')->nullable();
            $table->foreignId('reported_by')->constrained('users')->nullable(); // Added for tracking who reported
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('compliance_reports');
    }
};

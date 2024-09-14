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
        Schema::create('user_roles', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('description')->nullable();
            $table->boolean('is_active')->default(true);

            // Management permissions
            $table->boolean('can_manage_users')->default(false);
            $table->boolean('can_manage_roles')->default(false);
            $table->boolean('can_manage_patients')->default(false);
            $table->boolean('can_manage_appointments')->default(false);
            $table->boolean('can_manage_medical_records')->default(false);
            $table->boolean('can_manage_billing')->default(false);
            $table->boolean('can_manage_inventory')->default(false);
            $table->boolean('can_generate_reports')->default(false);

            // Additional permissions
            $table->boolean('can_manage_lab_tests')->default(false);         // Lab and diagnostics management
            $table->boolean('can_manage_pharmacy')->default(false);          // Pharmacy management
            $table->boolean('can_manage_ward_beds')->default(false);         // Ward and bed management
            $table->boolean('can_manage_emergency')->default(false);         // Emergency management
            $table->boolean('can_manage_insurance')->default(false);         // Insurance management
            $table->boolean('can_manage_communication')->default(false);     // Communication and notifications
            $table->boolean('can_audit_compliance')->default(false);         // Audit and compliance

            // Hierarchical management and permissions
            $table->integer('access_level')->default(0);                     // Defines the hierarchy level of the role
            $table->boolean('is_super_admin')->default(false);               // Super admin with full privilege

            $table->timestamps();

            });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_roles');
    }
};

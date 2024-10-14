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
            $table->enum('marital_status', ['married', 'unmarried', 'widowed','separated','divorced','other'])->default('other');
            $table->string('contact_number');
            $table->string('email')->nullable()->unique();
            $table->text('address')->nullable();
            $table->string('religion')->nullable();
            $table->string('occupation')->nullable();
            $table->string('relative_name')->nullable();
            $table->string('relationship')->nullable();
            $table->string('relative_phone')->nullable();
            $table->boolean('verified')->default(0);
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

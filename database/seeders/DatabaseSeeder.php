<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create superuser role
        $superRole = \App\Models\UserRole::create([
            'name' => 'super',
            'description' => 'Has full access to all system functionalities',
            'is_active' => true,
            'can_manage_users' => true,
            'can_manage_roles' => true,
            'can_manage_patients' => true,
            'can_manage_appointments' => true,
            'can_manage_medical_records' => true,
            'can_manage_billing' => true,
            'can_manage_inventory' => true,
            'can_generate_reports' => true,
            'access_level' => 100,
        ]);

        // Create superuser
        if($superRole->id){
            \App\Models\User::create([
                'name' => 'Super Admin',
                'email' => 'admin@example.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
                'role_id' => $superRole->id,
            ]);
        }
    }
}

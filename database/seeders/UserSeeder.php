<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('id_ID');
        $firstName = $faker->firstName;
        $lastName = $faker->lastName;
        $fullName = $firstName . " " . $lastName;

        $user = User::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => bcrypt('password')
        ]);

        $user->createToken($fullName)->plainTextToken;

        User::factory()->count(5)->create();
    }
}

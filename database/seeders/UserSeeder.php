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
            'name' => $fullName,
            'email' => $faker->email,
            'password' => bcrypt('password')
        ]);

        $user->createToken($firstName . $lastName)->plainTextToken;

        User::factory()->count(5)->create();
    }
}

<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\ProductHistory;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductHistoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductHistory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        
        return [
            'product_id' => Product::factory()->create()->id,
            'name' => $this->faker->name,
            'quantity' => rand(0, 1000)
        ];
    }
}

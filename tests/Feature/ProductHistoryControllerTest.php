<?php

namespace Tests\Feature;

use App\Models\ProductHistory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductHistoryControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testListingProducts()
    {
        ProductHistory::factory()->count(5)->create();

        $response = $this->get('api/products/histories');

        $response->assertSuccessful()->assertJsonCount(ProductHistory::count());
    }
}
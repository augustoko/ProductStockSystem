<?php

namespace Tests\Feature;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;


class ProductControllerTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testListingProducts()
    {
        Product::factory()->count(5)->create();

        $response = $this->get('/api/products');

        $response->assertSuccessful()->assertJsonCount(Product::count());
    }

    public function testCreateProducts()
    {

        $product = Product::factory()->make();

        $this->post('/api/products', $product->toArray())->assertSuccessful();
    }

    public function testUpdateProduct()
    {
        $product = Product::factory()->create();

        $productNew = Product::factory()->make();

        $this->put('/api/products/'.$product->id, $productNew->toArray())->assertSuccessful();
    }

    public function testDeleteProduct()
    {
        $product = Product::factory()->create();

        $this->delete('/api/products/'.$product->id)->assertSuccessful();

        $this->assertDatabaseMissing('products', [
            'id' => $product->id
        ]);
    }

    public function testBulkUpdateProduct()
    {
        $product = Product::factory()->count(5)->make();

        $this->post('/api/products/bulk', $product->toArray())->assertSuccessful();
    }
}
<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductBulkRequest;
use App\Http\Requests\ProductRequest;
use App\Services\ProductService;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    private ProductService $service;

    public function __construct()
    {
        $this->service = new ProductService();
    }

    public function index()
    {
        return Product::all();
    }

    public function store(ProductRequest $request)
    {
        $id = $this->service->storeProduct($request->all());

        return [
            'id' => $id
        ];
    }

    public function update(Product $product, ProductRequest $request)
    {
        $this->service->updateProduct($product->id, $request->all());
    }

    public function destroy(Product $product)
    {
        $product->delete();
    }

    public function bulkUpdateAndCreate(ProductBulkRequest $request)
    {
        $this->service->bulkUpdateAndCreate($request->all());
    }
}

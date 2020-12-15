<?php

namespace App\Http\Controllers;

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

    public function store(Request $request)
    {
        $request()->validate([
            'name' => 'alpha_num|required',
            'price' => 'required|decimal|size:12',
            'quantity' => 'required|integer|size:10'
        ]);

        $this->service->storeProduct($request->all());

        return response(null, 200);
    }

    public function update(Request $request)
    {
        $request()->validate([
            'id' => 'required',
            'name' => 'alpha_num|required',
            'price' => 'decimal|size:12|required',
            'quantity' => 'integer|size:10|required'
        ]);

        $this->service->updateProduct($request->all());

        return response(null, 200);
    }

    public function destroy($id)
    {
        Product::find($id)->delete();

        return response(null, 200);
    }

    public function bulkUpdateAndCreate(Request $request)
    {
        $request()->validate([
            '*.id' => 'required',
            '*.name' => 'alpha_num|required',
            '*.price' => 'decimal|size:12|required',
            '*.quantity' => 'integer|size:10|required'
        ]);
        
        $this->service->bulkUpdateAndCreate($request->all());

        return response(null, 200);
    }

}

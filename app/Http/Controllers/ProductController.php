<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
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

        $product = new Product();
        $product->name = $request('name');
        $product->price = $request('price');
        $product->quantity = $request('quantity');

        $product->save();

        return response(200)->json($product);
    }

    public function update(Request $request)
    {
        $request()->validate([
            'id' => 'required',
            'name' => 'alpha_num|required',
            'price' => 'decimal|size:12|required',
            'quantity' => 'integer|size:10|required'
        ]);

        $product = Product::find($request('id'));
        $product->name = $request('name');
        $product->price = $request('price');
        $product->quantity = $request('quantity');

        $product->save();
    }

    public function destroy($id)
    {
        Product::find($id)->delete();
    }


}

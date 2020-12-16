<?php

namespace App\Services;

use App\Models\Product;
use Illuminate\Support\Str;

class ProductService
{
    public function bulkUpdateAndCreate(array $items) : void
    {
        foreach ($items as $item){
            if(empty($item['id'])){
                $this->storeProduct($item);
                continue;
            }
            $this->updateProduct($item['id'] ,$item);
        }
    }

    public function storeProduct(array $data) : string
    {
        $product = new Product();
        $product->name = $data['name'];
        $product->price = $data['price'];
        $product->quantity = $data['quantity'];

        $product->save();

        return $product->id;
    }

    public function updateProduct(int $id ,array $data) : void
    {
        $product = Product::find($id);
        $product->name = $data['name'];
        $product->price = $data['price'];
        $product->quantity = $data['quantity'];

        $product->save();
        
    }
}
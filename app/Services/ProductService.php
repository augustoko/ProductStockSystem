<?php

namespace App\Services;

use App\Models\Product;

class ProductService
{
    public function bulkUpdateAndCreate(array $items) : void
    {
        foreach ($items as $item){
            if(empty($item['id'])){
                $this->storeProduct($item);
                continue;
            }
            $this->updateProduct($item);
        }
    }

    public function storeProduct(array $data) : void
    {
        $product = new Product();
        $product->name = $data['name'];
        $product->price = $data['price'];
        $product->quantity = $data['quantity'];

        $product->save();
    }

    public function updateProduct(array $data) : void
    {
        $product = Product::find($data['id']);
        $product->name = $data['name'];
        $product->price = $data['price'];
        $product->quantity = $data['quantity'];

        $product->save();
        
    }
}
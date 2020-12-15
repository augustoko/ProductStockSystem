<?php

namespace App\Services;

use App\Models\Product;
use App\Models\ProductHistory;

class ProductHistoryService
{
    public function storeProductHistory(Product $product) : void
    {
        $productHistory = new ProductHistory();
        $productHistory->product_id = $product->id;
        $productHistory->name = $product->name;
        $productHistory->quantity = $product->quantity;
        $productHistory->update_time = $product->created_at;

        $product->save();  
    }
}
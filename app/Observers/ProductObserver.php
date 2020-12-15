<?php

namespace App\Observers;

use App\Models\Product;
use App\Services\ProductHistoryService;

class ProductObserver
{
    private ProductHistoryService $services;

    public function __construct()
    {
        $this->services = new ProductHistoryService();
    }

    public function created(Product $product)
    {
        $this->services->storeProductHistory($product);
    }

    public function updated(Product $product)
    {
        if($product->isDirty('quantity')){
            $this->services->storeProductHistory($product);        
        }
    }

}

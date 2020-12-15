<?php

namespace App\Observers;

use App\Models\Product;
use App\Models\ProductHistory;
use App\Services\ProductHistoryService;

class ProductObserver
{
    private ProductHistoryService $services;

    public function __construct()
    {
        $this->services = new ProductHistory();
    }

    public function created(Product $product)
    {
        $this->services->storeProductHistory($product);

    }

    public function updated(Product $product)
    {
        $this->services->storeProductHistory($product);
    }

}

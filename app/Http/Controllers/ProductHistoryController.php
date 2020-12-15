<?php

namespace App\Http\Controllers;

use App\Models\ProductHistory;

class ProductHistoryController extends Controller
{
    public function index()
    {
        return ProductHistory::all();
    }
}

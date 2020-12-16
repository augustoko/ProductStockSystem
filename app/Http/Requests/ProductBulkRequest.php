<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductBulkRequest extends FormRequest
{
    public function rules()
    {
        return [
            '*.id' => 'nullable',
            '*.name' => 'string|required',
            '*.price' => 'numeric|required|min:0,max:999999999',
            '*.quantity' => 'integer|required|min:0,max:999999999'
        ];
    }
}

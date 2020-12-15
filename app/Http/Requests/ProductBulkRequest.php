<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductBulkRequest extends FormRequest
{
    public function rules()
    {
        return [
            '*.id' => 'nullable',
            '*.name' => 'alpha_num|required',
            '*.price' => 'numeric|required|min:0',
            '*.quantity' => 'integer|required|min:0'
        ];
    }
}

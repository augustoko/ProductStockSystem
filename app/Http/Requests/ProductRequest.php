<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    public function rules()
    {
        if(empty(request('id'))){
            return [
                'name' => 'string|required',
                'price' => 'numeric|required|min:0,max:999999999',
                'quantity' => 'integer|required|min:0,max:999999999'
            ];
        }

        return [
            'id' => 'required',
            'name' => 'string|required',
            'price' => 'numeric|required|min:0,max:999999999',
            'quantity' => 'integer|required|min:0,max:999999999'
        ];
    }
}

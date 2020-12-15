<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    public function rules()
    {
        if(empty(request('id'))){
            return [
                'name' => 'alpha_num|required',
                'price' => 'numeric|required|min:0',
                'quantity' => 'integer|required|min:0'
            ];
        }

        return [
            'id' => 'required',
            'name' => 'alpha_num|required',
            'price' => 'numeric|required|min:0',
            'quantity' => 'integer|required|min:0'
        ];
    }
}

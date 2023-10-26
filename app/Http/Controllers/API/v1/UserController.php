<?php

namespace App\Http\Controllers\API\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\UserResource;

class UserController extends Controller
{
    /**
     *  handle the incoming request
     *
     * @param \Illuminate\Http\Request $request
     * @param \Illuminate\Http\Response
     *
     * */

    public function __invoke(Request $request)
    {
        return UserResource::make(
            auth()->user()
        );
    }
}

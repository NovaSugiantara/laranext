<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\v1\UserController;
use App\Http\Controllers\API\v1\AuthorController;
use App\Http\Controllers\API\v1\ArticleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });

// http://article:test/v1/articles

Route::group([
    'prefix' => 'v1',
    'middleware' => 'auth:sanctum'
    ], function () {
        // Articles
        Route::apiResource('/articles', ArticleController::class);

        // Author
        Route::get('/authors/{user}', [AuthorController::class,'show'])->name('authors');

        // User
        Route::get('/user', UserController::class);
    });

<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/Surveys','dbcontroller@getSurveys');

Route::get('/timeframes','dbcontroller@GetSurveyTimeFrames');

Route::get('/updatetimeframe','dbcontroller@UpdateSurveyTimeFrame');

Route::get('/updatesurvey','dbcontroller@UpdateSurveyValidatetimings');
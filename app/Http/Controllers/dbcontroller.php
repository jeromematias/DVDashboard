<?php

namespace App\Http\Controllers;
use App\Surveys;
use Illuminate\Http\Request;

class dbcontroller extends Controller
{
	
	protected $surveylist = array();
	protected $timeframes = array();

  public function __construct(){
  	$this->surveylist = Surveys::all();
  }
  
  public function getSurveys(){  	
  	return response($this->surveylist);
  }

  public function GetSurveyTimeFrames(){
  	$this->timeframes = DB::select('EXEC GetSurveyTimeFrames');
    return response($this->timeframes);
  }

}

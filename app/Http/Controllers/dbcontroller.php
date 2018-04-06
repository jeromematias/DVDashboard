<?php

namespace App\Http\Controllers;
use App\Surveys;
use Illuminate\Http\Request;

class dbcontroller extends Controller
{
	
	protected $surveylist = array();
	protected $timeframes = array();
	/**
	 * [__construct description]
	 */
  public function __construct(){
  	$this->surveylist = Surveys::all();
  }
  /**
   * [getSurveys description]
   * @return [type] [description]
   */
  public function getSurveys(){  	
  	return response($this->surveylist);
  }
  /**
   * [GetSurveyTimeFrames description]
   */
  public function GetSurveyTimeFrames(){
  	$this->timeframes = DB::select('EXEC GetSurveyTimeFrames');
    return response($this->timeframes);
  }

}

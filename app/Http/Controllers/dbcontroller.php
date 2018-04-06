<?php

namespace App\Http\Controllers;
use DB;
use App\Surveys;
use Illuminate\Http\Request;

class dbcontroller extends Controller
{
	
	protected $surveylist = array();
	protected $timeframes = array();
	protected $UpdateSurveyTimeFrame = array();
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

  public function UpdateSurveyTimeFrame(Request $r){
  	//DB::select('SET ANSI_NULLS ON; SET ANSI_WARNINGS ON; EXEC UpdateSurveyTimeFrame ?, ?, ?, ?',array($r->SurveyName,$r->WeekNum,$r->WarningTime,$r->ErrorTime));
  	//Update SurveyTimeFrames set MinsBefore = @MinsBefore, MinsAfter=@MinsAfter where SurveyName=@SurveyName and WeekDay=@WeekDay
  	DB::table('SurveyTimeFrames')
            ->where('SurveyName', $r->SurveyName)
            ->where('WeekDay', $r->WeekNum)
            ->update(['MinsBefore' => $r->WarningTime],['MinsAfter' => $r->ErrorTime]);
  	return response('update success');
  }

}

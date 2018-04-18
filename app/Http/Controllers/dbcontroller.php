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
	protected $difference = array();
	protected $GetStatus = array();
	protected $GetUserDefaultSurvey = array();
	protected $UpdateUser = array();
	/**
	 * [__construct description]
	 */
  public function __construct(){
  	$this->surveylist = Surveys::all();
  }
  public function UpdateUser(Request $r){
  	//DB::table('EXEC UpdateUser ?, ?',array($r->UserID,$r->DefaultSurvey));  	
  	//insert into Users values(@UserID,@UserID,@DefaultSurveyName)
  	//update Users set DefaultSurveyName=@DefaultSurveyName where UserID=@UserID
  	//
  	$user = dvuser::where('UserID', '=', $r->UserID)->first();
		return $user;
  }
  /**
   * [GetUserDefaultSurvey description]
   * @param Request $r [description]
   */
  public function GetUserDefaultSurvey(Request $r){
  	$this->GetUserDefaultSurvey = DB::select('EXEC GetUserDefaultSurvey ?',array($r->UserID));
  	return response($this->GetUserDefaultSurvey);
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
  	DB::table('SurveyTimeFrames')
            ->where('SurveyName', $r->SurveyName)
            ->where('WeekDay', $r->WeekNum)
            ->update(['MinsBefore' => $r->WarningTime,'MinsAfter' => $r->ErrorTime]);
  	return response('success');
  }

  public function UpdateSurveyValidatetimings(Request $r){  	
  	DB::table('Surveys')
            ->where('SurveyName', $r->SurveyName)            
            ->update(['MinsValidationWarning' => $r->validationwarning,'MinsValidationError' => $r->validationerror]);
  	return response('success');
  }

  public function GetDiff(Request $r){  	
  	$this->difference = DB::select('EXEC GetDiff ?, ?, ?',array($r->SurveyName,$r->Unit,$r->Days));
  	return response($this->difference);
  }

  public function GetStatus(Request $r){
  	$GetStatus = DB::select('EXEC GetStatus ?, ?',array($r->SurveyName,$r->Unit));
  	return response($GetStatus);
  }

  public function getServer(){
  	var_dump($_SERVER);
  }

}

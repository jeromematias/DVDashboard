<?php

namespace App\Http\Controllers;
use App\Surveys;
use Illuminate\Http\Request;

class dbcontroller extends Controller
{
	protected $surveylist = array();
  public function __construct(){
  	$this->surveylist = Surveys::all();
  }
  public function getSurveys(){  	
  	return response($this->surveylist);
  }
}

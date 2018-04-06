$(function(){
	var Surveylist = [];
	$.get(window.location.href + "Surveys",function(data){		
		for(var i in data){
			Surveylist.push(data[i].SurveyName)
		}
	}).done(function(){
		init_surveynames();
		showTimeFrames();
	})
	

	/**
	 * [showTimeFrames description]
	 * @return {[type]} [description]
	 */	
	function showTimeFrames(){
		$.get(window.location.href + "timeframes",function(data){		
			console.log(data)			
		}).done(function(){
			
		})	
	}

	/**
	 * [init_surveynames description]
	 * @return {[type]} [description]
	 */	
	function init_surveynames(){
		$('#surveylist').appendSurvey({
			Surveylist : Surveylist
		})
		$('#surveynames').appendSurveyOption({
			Surveylist : Surveylist
		})
	}		
});
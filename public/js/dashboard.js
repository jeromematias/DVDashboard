$(function(){
	var Surveylist = [];
	$.get(window.location.href + "Surveys",function(data){		
		for(var i in data){
			Surveylist.push(data[i].SurveyName)
		}
	}).done(function(){
		init_surveynames();
	})
	function init_surveynames(){
		$('#surveylist').appendSurvey({
			Surveylist : Surveylist
		})
		$('#surveynames').appendSurveyOption({
			Surveylist : Surveylist
		})
	}		
});
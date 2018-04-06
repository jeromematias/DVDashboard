$(function(){
	var Surveylist = [];
	init_surveynames();
	function init_surveynames(){
		$.get(window.location.href + "Surveys",function(data){		
			for(var i in data){
				Surveylist.push(data[i].SurveyName)
			}
		}).done(function(){
			$('#surveylist').appendSurvey({
				Surveylist : Surveylist
			})
			$('#surveynames').appendSurveyOption({
				Surveylist : Surveylist
			})
		})
	}		
});
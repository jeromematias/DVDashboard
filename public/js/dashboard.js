$(function(){
	var Surveylist = [];
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
		}).done(function(){
			console.log('done')
		})
	})		
});
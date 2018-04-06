$(function(){
	var Surveylist = [];
	$.get(window.location.href + "Surveys",function(data){
		console.log(data);
		for(var i in data){
			Surveylist.push(data[i].SurveyName)
		}
	}).done(function(){
		$('#surveylist').appendSurvey({
			Surveylist : Surveylist
		})
	})		
});
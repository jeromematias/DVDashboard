$(function(){
	$.get(window.location.href + "Surveys",function(data){
		console.log(data);
	})	
	$('#surveylist').appendSurvey({
		Surveylist : ['Singtel Cencus','Singtel NewsRoom','Digiturk','SKY UK Cencus']
	})
});
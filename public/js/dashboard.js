$(function(){
	$('#surveylist').appendSurvey({
		Surveylist : ['Singtel Cencus','Singtel NewsRoom','Digiturk','SKY UK Cencus']
	})
	$.get(window.location.href + "Surveys",{},function(data){
		console.log(data);
	})
	$.ajax({
		type : 'GET',
		url : window.location.href + "Surveys",
		success : function(data){
			console.log(data);
		}
	})
	

});
$(function(){
	
	$.get(window.location.href + "Surveys",{},function(data){
		console.log(data);
	})
	$.ajax({
		type : 'GET',
		success : function(data){
			console.log(data);
		}
	})
	$('#surveylist').appendSurvey({
		Surveylist : ['Singtel Cencus','Singtel NewsRoom','Digiturk','SKY UK Cencus']
	})

});
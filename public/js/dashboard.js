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
			var output = '<table class="table table-bordered">';
					output += '<thead>'
					output += '<tr>'+
											'<th>TV weekday</th>'+
											'<th class="text-center">Warning time MAM(MinsBefore)</th>'+
											'<th class="text-center">Error time MAM(MinsAfter)</th>';
					output += '</tr>'
					output += '</thead><tbody>'
			for(var i in data){
				if($('#surveynames').val() == data[i].SurveyName){
					output += '<tr>'+
											'<td>'+ showeekday(data[i].WeekDay) +'</td>'+
											'<td class="text-center">'+ data[i].MinsBefore +'</td>'+
											'<td class="text-center">'+ data[i].MinsAfter +'</td>';
					output += '</tr>'
				}
			}
					output += '</tbody></table>';
			$('#timeframewrapper').html(output);			
		}).done(function(){
			
		})	
	}

	function showeekday(num){
		switch(Number(num)){
			case 1 : 
				return 'Monday';
				break;
			case 2 : 
				return 'Tuesday';
				break;
			case 3 : 
				return 'Wednesday';
				break;
			case 4 : 
				return 'Thursday';
				break;
			case 5 : 
				return 'Friday';
				break;
			case 6 : 
				return 'Saturday';
				break;
			case 7 : 
				return 'Sunday';
				break;
		}
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
		$('surveynames').on('change', function() {
			showTimeFrames()
		})
	}		
});
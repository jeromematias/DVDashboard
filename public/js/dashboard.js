$(function(){
	$.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
	var Surveylist = [];
	var Validationlist = [];
	var weekday;
	var validationsurveyname;
	$.get(window.location.href + "Surveys",function(data){
		console.log(data)		
		for(var i in data){
			Surveylist.push(data[i].SurveyName)
			Validationlist.push({
				SurveyName : data[i].SurveyName,
				SurveyCode : data[i].SurveyCode,
				Warning : data[i].MinsValidationWarning,
				Error : data[i].MinsValidationError,
			})
		}
	}).done(function(){
		init_surveynames();
		showTimeFrames();
		showvalidation();
	})
	
	$('#savetimeframe').click(function(){
		var request = {
			SurveyName : $('#surveynames').val(),
			WeekNum : weekday,
			WarningTime : $('#warningtime').val(),
			ErrorTime : $('#errortime').val()
		}
		$.get(window.location.href + "updatetimeframe",request,function(response){
			showTimeFrames();
			$('#warningtime').val('')
			$('#errortime').val('')			
			bootbox.alert("Timeframe successfully updated!");			
		})
	})

	$('#savevalidation').click(function(){
		var request = {
			SurveyName : $('#surveynames').val(),			
			validationwarning : $('#validationwarning').val(),
			validationerror : $('#validationerror').val()
		}
		$.get(window.location.href + "updatesurvey",request,function(response){
			showvalidation();
			$('#validationwarning').val('')
			$('#validationerror').val('')
			bootbox.alert("Survey validation successfully updated!");			
		})		
	})
	/**
	 * [showTimeFrames description]
	 * @return {[type]} [description]
	 */	
	function showTimeFrames(){
		$.get(window.location.href + "timeframes",function(data){		
			console.log(data)
					

					//Conversion
			var output = '<table class="table table-bordered" id="tb-conversion">';
					output += '<thead>'
					output += '<tr>'+
											'<th>TV weekday</th>'+
											'<th class="text-center">Warning time MAM</th>'+
											'<th class="text-center">Error time MAM</th>'+
											'<th>Update</th>';
					output += '</tr>'
					output += '</thead><tbody class="table-sm">'
			for(var i in data){
				if($('#surveynames').val() == data[i].SurveyName){
					output += '<tr>'+
											'<td>'+ showeekday(data[i].WeekDay) +'</td>'+
											'<td class="text-center">'+ data[i].MinsBefore +'</td>'+
											'<td class="text-center">'+ data[i].MinsAfter +'</td>'+
											'<td><i class="icon-note float-right font-weight-bold text-primary" id="up-minb" data-value="'+ data[i].WeekDay +'"></i></td>'
					output += '</tr>'
				}
			}
					output += '</tbody></table>';
										
					//Validationlist
			$('#timeframewrapper').html(output);	

			$('#tb-conversion tbody tr td #up-minb').each(function(){
				$(this).click(function(){
					weekday = $(this).data('value');					
					$('#modal-timeframe').modal({
						backdrop: 'static',
    				keyboard: false
					})
				})
				$(this).css({
					cursor : 'pointer'
				})
			})
			


		}).done(function(){
			
		})	
	}

	function showvalidation(){
		$.get(window.location.href + "Surveys",function(data){
			//validation
			var output += '<table class="table table-bordered" id="tb-validation">'
			output += '<thead>'
			output += '<tr>'+
									'<th class="text-center">Warning Minutes after Conversion</th>'+
									'<th class="text-center">Error Minutes after Conversion</th>'+
									'<th>Update</th>';
			output += '</tr>'
			output += '</thead><tbody class="table-sm">'
			
			for(var i in Validationlist){
				if($('#surveynames').val() == Validationlist[i].SurveyName){
					output += '<tr>'+
										'<td class="text-center">'+ Validationlist[i].Warning +'</td>'+
										'<td class="text-center">'+ Validationlist[i].Error +'</td>'+
										'<td><i class="icon-note float-right font-weight-bold text-primary" id="up-validation" data-value="'+ $('#surveynames').val() +'"></i></td>';
					output += '</tr>'
				}
			}
			output += '</tbody></table>';
		})
		
		$('#vaildationwrapper').html(output);	

		$('#tb-validation tbody tr td #up-validation').each(function(){
			$(this).click(function(){
				validationsurveyname = $(this).data('value');					
				$('#modal-validation').modal({
					backdrop: 'static',
  				keyboard: false
				})
			})
			$(this).css({
				cursor : 'pointer'
			})
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
		$('#surveynames').on('change', function() {
			showTimeFrames()
			showvalidation()
		})
	}		
});
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
	var graphsurveyname;
	var arrSurvey = [];
	var echartBar;
	$.get(window.location.href + "Surveys",function(data){		
		for(var i in data){
			if(i == 0){
				graphsurveyname = data[i].SurveyName;
			}
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
		init_graph(graphsurveyname,$('#unit').val(),$('#days').val());

		$('#unit,#days').on('change',function(){
			init_graph(graphsurveyname,$('#unit').val(),$('#days').val());
		})

		$('#surveylist .nav-link').each(function(){
			$(this).click(function(){				
				if(graphsurveyname != $(this).data('value')){					
					graphsurveyname = $(this).data('value');
					init_graph(graphsurveyname,$('#unit').val(),$('#days').val());
				}else{
					bootbox.alert($(this).data('value') + " already loaded")					
				}
			})			
		})
		$('#surveylist .nav-link').css({
			cursor : 'pointer'
		})
		checkStatus();
		setInterval(checkStatus, 60*1000);		
	})
	$('#container').bind('resize', function(e) {	   
	   echartBar.resize();
	   console.log('test')
	});

	window.onresize = function() {
    echartBar.resize();
  }	
	function checkStatus(){
		$.get(window.location.href+'status',{SurveyName:graphsurveyname,Unit:1},function(response){
			console.log(response)
			$('#con-date').text("Last date loaded : "+response[0].LatestDataDate)
			$('#con-status').text(response[0].ProcessName)				
			$('#breadcrumb1').css({
				backgroundColor : response[0].ColorCode
			})
		})
		$.get(window.location.href+'status',{SurveyName:graphsurveyname,Unit:2},function(response){
			console.log(response)
			$('#val-date').text("Last date loaded : "+response[0].LatestDataDate)
			$('#val-status').text("Manual : "+response[0].ProcessName)
			$('#breadcrumb2').css({
				backgroundColor : response[0].ColorCode
			})
		})
		updategraph();
	}
	$('#savetimeframe').click(function(){
		if($.isNumeric($('#warningtime').val()) && $.isNumeric($('#errortime').val())){
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
				$('#modal-timeframe').modal('hide');
				bootbox.alert("Timeframe successfully updated!");							
			}).done(function(){
				if($('#surveynames').val() == graphsurveyname){
					updategraph();
					checkStatus();
				}				
			})
		}else{
			bootbox.alert('Please make sure Warning Time and Error Time is numeric or not empty!')
		}
	})

	$('#savevalidation').click(function(){
		if($.isNumeric($('#validationwarning').val()) && $.isNumeric($('#validationerror').val())){
			var request = {
				SurveyName : $('#surveynames').val(),			
				validationwarning : $('#validationwarning').val(),
				validationerror : $('#validationerror').val()
			}
			$.get(window.location.href + "updatesurvey",request,function(response){
				showvalidation();
				$('#validationwarning').val('')
				$('#validationerror').val('')
				$('#modal-validation').modal('hide');
				bootbox.alert("Survey validation successfully updated!");			
			}).done(function(){
				if($('#surveynames').val() == graphsurveyname){
					updategraph();
					checkStatus();
				}
			})	
		}else{
			bootbox.alert('Please make sure Warning Time and Validation Warning Minute and Error Minute is numeric or not empty!')
		}		
	})

	function updategraph(){
		var request = {
			SurveyName : graphsurveyname,
			Unit : $('#unit').val(),
			Days : $('#days').val()
		}
		$.get(window.location.href + 'graph',request,function(data){
			var arr = [];
			console.log(data)
			for(var i in data){						
				arr.push(data[i].OffSet)						
			}
			if(arraysEqual(arrSurvey,arr) == false){
				init_graph(graphsurveyname,$('#unit').val(),$('#days').val());
			}			
		})				
	}

	function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
      return false;
    for(var i = arr1.length; i--;) {
      if(arr1[i] !== arr2[i])
        return false;
    }
    console.log("graph",{status : 'updaterequired'})
    return true;
	}
	/**
	 * [showTimeFrames description]
	 * @return {[type]} [description]
	 */	
	function showTimeFrames(){
		$.get(window.location.href + "timeframes",function(data){					
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
											'<td><i class="icon-note float-right font-weight-bold text-primary" id="up-minb" data-id="'+ data[i].MinsBefore +'" value="'+ data[i].MinsAfter +'" data-value="'+ data[i].WeekDay +'"></i></td>'
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
					});
					$('#warningtime').val($(this).data('id'));
					$('#errortime').val($(this).attr('value'));			
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
			var output = '<table class="table table-bordered" id="tb-validation">'
					output += '<thead>'
					output += '<tr>'+
											'<th class="text-center">Warning Minutes after Conversion</th>'+
											'<th class="text-center">Error Minutes after Conversion</th>'+
											'<th>Update</th>';
					output += '</tr>'
					output += '</thead><tbody class="table-sm">'
			
			for(var i in data){
				if($('#surveynames').val() == data[i].SurveyName){
					output += '<tr>'+					
										'<td class="text-center">'+ data[i].MinsValidationWarning +'</td>'+
										'<td class="text-center">'+ data[i].MinsValidationError +'</td>'+
										'<td><i class="icon-note float-right font-weight-bold text-primary" id="up-validation" data-id="'+ data[i].MinsValidationWarning +'" value="'+ data[i].MinsValidationError +'" data-value="'+ $('#surveynames').val() +'"></i></td>';
					output += '</tr>'
				}
			}
			output += '</tbody></table>';

			$('#vaildationwrapper').html(output);	

			$('#tb-validation tbody tr td #up-validation').each(function(){
				$(this).click(function(){
					validationsurveyname = $(this).data('value');					
					$('#modal-validation').modal({
						backdrop: 'static',
	  				keyboard: false
					})					
					$('#validationwarning').val($(this).data('id'))
					$('#validationerror').val($(this).attr('value'))
				})
				$(this).css({
					cursor : 'pointer'
				})
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

	function init_graph(SurveyName,Unit,Days){
		$.get(window.location.href + 'graph',{SurveyName:SurveyName,Unit:Unit,Days:Days},function(data){			
			var xAxisData = [];
			var seriesData = [];
			for(var i in data){
				xAxisData.push(data[i].DataDate)
				arrSurvey.push(data[i].OffSet)
				seriesData.push({value : data[i].OffSet, itemStyle : {
					normal : {
            color : data[i].ColorCode
          },
          emphasis : {
            color : data[i].ColorCode
          }
				}})
			}
			$('#SurveyTabName').text(SurveyName)
			echartBar = echarts.init(document.getElementById('container'));			
			option = null;
			option = {
			    xAxis: {
			        type: 'category',
			        data: xAxisData,
			        name: 'Days',
              nameLocation: 'middle',
              nameGap : 60,
			    },
			    yAxis: {
			        type: 'value',
			        name: 'Minutes',
              nameLocation: 'middle',
              nameGap : 60,
			    },
			    grid: {
              left: '60',
              right: '1%',
              bottom: '60',
              top: '1%',              
              containLabel: true
          },
			    series: [{
			        data: seriesData,
			        type: 'bar',
			        label: {			        					        		
	                normal: {
                    show: true,                    
                    position: 'top',
                    formatter : '{c}',
                    color : '#000',
	                },
	                emphasis : {
	                	show : true,
	                	color : '#000'
	                }
	            }
			    }]
			};
			echartBar.setOption(option);
			console.log("graph",{status : "graph loaded"})	
		})		
	}		
});
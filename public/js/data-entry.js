$(function(){
	var offset = 0,
			take = 62;	
	trans.get('household?offset=0&take=62',function(data){
		console.log(data);
		var output = '';
		output += '<table class="table table-bordered table-striped table-hover" width="100%" id="tb-trans">';
		output += '<thead class="bg-primary">';
		output += '<tr>'+
								'<th class="text-center">HouseholdId</th>'+
								'<th class="text-center">Brgy</th>'+
								'<th class="text-center">Household #</th>'+
								'<th class="text-center">Created by</th>'+
								'<th class="text-center">Modified by</th>'+
								'<th class="text-center">Total Population</th>'+								
								'<th class="text-center"></th>'+								
							'</tr>';
		output += '</thead><tbody class="table-sm" id="trans-body">';						
		for(var i in data){
		output += '<tr>'+								
								'<td class="text-center">'+ data[i].HouseholdId +'</td>'+
								'<td class="text-center">'+ data[i].Brgy +'</td>'+
								'<td class="text-center">'+ data[i].HouseHoldNo +'</td>'+
								'<td class="text-center">'+ data[i].cre_by +'</td>'+
								'<td class="text-center">'+ data[i].mod_by +'</td>'+ 
								'<td class="text-center">'+ data[i].totpop +'</td>'+
								'<td class="text-center">'+
									'<button class="btn btn-sm bg-primary" data-toggle="modal" data-target="#respondent-mod"><i class="icon-note"></i> Show</button>'+									
								'</td>'+									
							'</tr>';
		}
		
		output += '</tbody></table>';
		$('#trans-wrapper').html(output)		
		var $table = $('#tb-trans');
		$table.floatThead({
	    responsiveContainer: function($table){
        return $table.closest('.table-responsive');
	    }
		});
		$('#trans-wrapper').scroll(function(){
			if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight - 5){
				offset = offset + 100;		
				console.log({offset : offset, take : take})
				trans.get('household?offset='+ offset +'&take=100',function(data){
					output = '';
					for(var i in data){
						output += '<tr>'+								
												'<td class="text-center">'+ data[i].HouseholdId +'</td>'+
												'<td class="text-center">'+ data[i].Brgy +'</td>'+
												'<td class="text-center">'+ data[i].HouseHoldNo +'</td>'+
												'<td class="text-center">'+ data[i].cre_by +'</td>'+
												'<td class="text-center">'+ data[i].mod_by +'</td>'+
												'<td class="text-center">'+ data[i].totpop +'</td>'+
												'<td class="text-center">'+
													'<button class="btn btn-sm bg-primary" data-toggle="modal" data-target="#respondent-mod"><i class="icon-note"></i> Show</button>'+									
												'</td>'+									
											'</tr>';
					}
					$('#trans-body').append(output)
					console.log(output)
				})			
			}
		})
	});	


	function getpurok(purokid){
		trans.get('purok?purokid='+purokid,function(data){
			console.log(data)
			return data;
		})
	}

})
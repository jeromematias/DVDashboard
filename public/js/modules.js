(function ( $ ) {
	$.fn.appendSurvey = function(Survey){
		var self = this;	
		for(var i in Survey.Surveylist){
			var surveyname = Survey.Surveylist[i]
			$(self).append('<li class="nav-item"><a class="nav-link" href="#" data-value="'+ surveyname +'"><i class="icon-plus text-success font-weight-bold"></i> '+ surveyname +'</a></li>')
		}		
	}
	$.fn.appendSurveyOption = function(Survey){
		var self = this;	
		$(self).find('option')
	    .remove()
	    .end();
		for(var i in Survey.Surveylist){
			var surveyname = Survey.Surveylist[i]
			$(self).append('<option value="'+ surveyname +'">' + surveyname + '</option>')
		    .end();
		}
		return "done"
	}
}( jQuery ));
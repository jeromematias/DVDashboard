$.fn.appendSurvey = function(Survey){
	var self = this;	
	for(var i in Survey.Surveylist){

		var surveyname = Survey.Surveylist[i]

		$(self).append('<li class="nav-item"><a class="nav-link" href="#"><i class="icon-plus text-success font-weight-bold"></i> '+ surveyname +'</a></li>')

	}
}
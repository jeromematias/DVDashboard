$.fn.appendSurvey = function(Survey){
	var self = this;	
	for(var i in Survey.Surveylist){
		var surveyname = Survey.Surveylist[i]
		$(self).append(surveyname)
	}
}
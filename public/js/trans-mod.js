var trans = (function() {      
  return {
    get:function(url,handleData) {
      $.get(window.location.href + "/" + url,function(data){  
		    handleData(data);
		  })
    }
  }   
}());

var reg = (function() {      
  return {
    get:function(url,brgy,handleData) {
      $.get("reports/" + url, { BrgyID : brgy } ,function(data){  
		    handleData(data);
		  })
    }
  }   
}());
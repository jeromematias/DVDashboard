var request = {};
var box = '';
var activeTab = null;
var initmodule = {
  BrgyOption : function(brgy){
    $('#' + brgy).find('option').remove();
    var selectBox = document.getElementById(brgy);    
    $.get(window.location.href + "/barangay",request,function(data){  
      for(var i in data){
        selectBox.options.add(new Option(data[i].barangay, data[i].brgyid));
      }
    })
  }
}

var reportmodule = {
  population : function(request){
    $.get(window.location.href + "/population",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbpopulation">'
      output += '<thead class="font-weight-bold"><tr>'
      output += '<td>Age Group</td>'
      output += '<td>Male</td>'
      output += '<td>%</td>'
      output += '<td>Female</td>'
      output += '<td>%</td>'
      output += '<td>Total</td>'
      output += '</tr></thead><tbody class="table-sm">'
      if(data.length > 0){
        for(var i in data){
          output += '<tr>'
          output += '<td>'+ data[i].age +'</td>'
          output += '<td>'+ data[i].male +'</td>'
          output += '<td>'+ data[i].malePercent +'</td>'
          output += '<td>'+ data[i].female +'</td>'
          output += '<td>'+ data[i].femalePercent +'</td>'
          output += '<td>'+ data[i].total +'</td>'
          output += '</tr>'
        }
      }else{
        output += '<tr>'
        output += '<td colspan="6">No data found</td>'
        output += '</tr>'
      }      
      output += '</tbody></table>'
      $('#reportcontent').html(output)      
      output = '';
    })
  },
  householdhead : function(request){
    $.get(window.location.href + "/HouseholdHeadCount",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbhouseholdhead">'
      output += '<thead class="font-weight-bold"><tr>'
      output += '<td> Barangay</td>'
      output += '<td>Age Sex Composition</td>'
      output += '<td>Male</td>'
      output += '<td>Female</td>'
      output += '<td>Total</td>'
      output += '</tr></thead><tbody class="table-sm">'
      if(data.length > 0){
        for(var i in data){
          output += '<tr>'
          output += '<td>'+ $("#brgy option:selected").text(); +'</td>'
          output += '<td># of Household Head</td>'
          output += '<td>'+ data[i].male +'</td>'
          output += '<td>'+ data[i].female +'</td>'
          output += '<td>'+ data[i].total +'</td>'
          output += '</tr>'
        }
      }else{
        output += '<tr>'
        output += '<td colspan="6">No data found</td>'
        output += '</tr>'
      }      
      output += '</tbody></table>'
      $('#householdhead').html(output)
      output = '';
    })
  },
  maritalstatus : function(request){
    $.get(window.location.href + "/maritalstatus",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center maritalstatus" width="100%" id="tbmaritalstatus">'
      output += '<thead class="font-weight-bold"><tr>'
      output += '<th rowspan="2">Barangay</th>'
      output += '<th rowspan="2">Age Group</th>'
      output += '<th colspan="2">Single</th>'
      output += '<th rowspan="2">Total</th>'
      output += '<th colspan="2">Married</th>'
      output += '<th rowspan="2">Total</th>'
      output += '<th colspan="2">Widow(er)</th>'
      output += '<th rowspan="2">Total</th>'
      output += '<th colspan="2">Separated</th>'
      output += '<th rowspan="2">Total</th>'
      output += '<th colspan="2">Common Law/Live in</th>'
      output += '<th rowspan="2">Total</th>'
      output += '<th colspan="2">Unknown</th>'
      output += '<th rowspan="2">Total</th>'
      output += '</tr>'
      output += '<tr>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'            
      output += '</tr></thead><tbody class="table-sm">'
      if(data.length > 0){
        for(var i in data){
          output += '<tr>'
          if(i == 0){
            output += '<td>'+ $("#brgy option:selected").text(); +'</td>'
          }else{
            output += '<td></td>'
          }
          //, , , , , , , , , 
          output += '<td>'+ data[i].age +'</td>'
          output += '<td>'+ data[i].singlemale +'</td>'
          output += '<td>'+ data[i].singlefemale +'</td>'
          
          output += '<td>'+ Number(data[i].singlefemale + data[i].singlemale) +'</td>'

          output += '<td>'+ data[i].marriedmale +'</td>'
          output += '<td>'+ data[i].marriedfemale +'</td>'

          output += '<td>'+ Number(data[i].marriedmale + data[i].marriedfemale) +'</td>'

          output += '<td>'+ data[i].widowedmale +'</td>'
          output += '<td>'+ data[i].widowedfemale +'</td>'
          
          output += '<td>'+ Number(data[i].widowedmale + data[i].widowedfemale) +'</td>'

          output += '<td>'+ data[i].separatedmale +'</td>'
          output += '<td>'+ data[i].separatedfemale +'</td>'

          output += '<td>'+ Number(data[i].separatedmale + data[i].separatedfemale) +'</td>'

          output += '<td>'+ data[i].liveinmale +'</td>'
          output += '<td>'+ data[i].liveinfemale +'</td>'

          output += '<td>'+ Number(data[i].liveinmale + data[i].liveinfemale) +'</td>'

          output += '<td>'+ data[i].unkownmale +'</td>'
          output += '<td>'+ data[i].unkownfemale +'</td>'

          output += '<td>'+ Number(data[i].unkownmale + data[i].unkownfemale) +'</td>'
                    
          output += '</tr>'
        }
      }else{
        output += '<tr>'
        output += '<td colspan="6">No data found</td>'
        output += '</tr>'
      }      
      output += '</tbody></table>'
      $('#maritalStatus').html(output)
      output = '';
    })
  },
  birthRA : function(request){
    $.get(window.location.href + "/birthRA",{BrgyID : $('#brgy').val()},function(data){      
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbbirthRA">'      
      output += '<thead>'
      output += '<tr>'
      output += '<th rowspan="3">Barangay</th>'
      output += '<th rowspan="3">Age Group</th>'      
      output += '<th colspan="2" rowspan="2">Birth Registered</th>'
      output += '<th rowspan="3">Total</th>'      
      output += '<th colspan="2" rowspan="2">Birth Not Registered</th>'
      output += '<th rowspan="3">Total</th>'      
      output += '<th colspan="15">Birth Attendant</th>'            
      output += '</tr>'
      output += '<tr>'
      output += '<th colspan="2">Hilots</th>'
      output += '<th rowspan="2">Total</th>'      
      output += '<th colspan="2">Midwife</th>'
      output += '<th rowspan="2">Total</th>'
      output += '<th colspan="2">Doctor</th>'
      output += '<th rowspan="2">Total</th>'      
      output += '<th colspan="2">Nurse</th>'
      output += '<th rowspan="2">Total</th>'
      output += '<th colspan="2">Others</th>'
      output += '<th rowspan="2">Total</th>'
      output += '</tr>'
      output += '<tr>'    
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'      
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'       
      output += '<th>M</th>'
      output += '<th>F</th>'               
      output += '</tr>'
      output += '</thead>'
      output += '<tbody>'
      for(var i in data){
        output += '<tr>'    
        if(i == 0){
          output += '<td>'+ $("#brgy option:selected").text(); +'</td>'
        }else{
          output += '<td></td>'
        }
        output += '<td>'+ data[i].age +'</td>'
        output += '<td>'+ data[i].maleregistered +'</td>'
        output += '<td>'+ data[i].femaleregistered +'</td>'
        output += '<td>'+ data[i].totalregistered +'</td>'
        output += '<td>'+ data[i].malenonregistered +'</td>'      
        output += '<td>'+ data[i].femalenonregistered +'</td>'
        output += '<td>'+ data[i].totalnonregistered +'</td>'
        output += '<td>'+ data[i].maleHilots +'</td>'
        output += '<td>'+ data[i].femaleHilots +'</td>'
        output += '<td>'+ data[i].totalHilots +'</td>'
        output += '<td>'+ data[i].maleMidwife +'</td>'       
        output += '<td>'+ data[i].femaleMidwife +'</td>'
        output += '<td>'+ data[i].totalMidwife +'</td>'       
        output += '<td>'+ data[i].maleDoctor +'</td>'
        output += '<td>'+ data[i].femaleDoctor +'</td>'             
        output += '<td>'+ data[i].totalDoctor +'</td>'
        output += '<td>'+ data[i].maleNurse +'</td>'
        output += '<td>'+ data[i].femaleNurse +'</td>'
        output += '<td>'+ data[i].totalNurse +'</td>'
        output += '<td>'+ data[i].maleOthers +'</td>'
        output += '<td>'+ data[i].femaleOthers +'</td>'
        output += '<td>'+ data[i].totalOthers +'</td>'
        output += '</tr>'
        
      }
      output += '</tbody>'
      output += '</table>'      
      $('#birthreg').html(output)
      output = ''

    })
  },
  EducProfile : function(request){
    $.get(window.location.href + "/educprofile",{BrgyID : $('#brgy').val()},function(data){      
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbEducProfile">'      
      output += '<thead>'
      output += '<tr>'
      output += '<th>Barangay</th>'
      output += '<th>Level of Education</th>'
      output += '<th>Male</th>'
      output += '<th>Female</th>'
      output += '<th>Total</th>'
      output += '</tr>'
      output += '</thead>'
      output += '<tbody>'
      for(var i in data){
        output += '<tr>'
        if(i == 0){
          output += '<td>'+ $("#brgy option:selected").text(); +'</td>'
        }else{
          output += '<td></td>'
        }
        output += '<td>'+ data[i].fld2 +'</td>'
        output += '<td>'+ data[i].male +'</td>'
        output += '<td>'+ data[i].female +'</td>'
        output += '<td>'+ data[i].total +'</td>'
        output += '</tr>'
      }
      output += '</tbody>'
      output += '</table>'
      $('#EducProfile').html(output)
      output = ''
    })    
  },
  AttendingSchool : function(request){
    $.get(window.location.href + "/attendingschool",{BrgyID : $('#brgy').val()},function(data){      
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbAttendingSchool">'      
      output += '<thead>'
      output += '<tr>'
      output += '<th>Barangay</th>'
      output += '<th>Attending School at present</th>'
      output += '<th>Male</th>'
      output += '<th>Female</th>'
      output += '<th>Total</th>'
      output += '</tr>'
      output += '</thead>'
      output += '<tbody>'
      for(var i in data){
        output += '<tr>'
        if(i == 0){
          output += '<td>'+ $("#brgy option:selected").text(); +'</td>'
        }else{
          output += '<td></td>'
        }
        output += '<td>'+ data[i].fld2 +'</td>'
        output += '<td>'+ data[i].male +'</td>'
        output += '<td>'+ data[i].female +'</td>'
        output += '<td>'+ data[i].total +'</td>'
        output += '</tr>'
      }
      output += '</tbody>'
      output += '</table>'
      $('#AttendingSchool').html(output)
      output = ''
    })   
  },
  notattendingschool : function(request){
    $.get(window.location.href + "/notattendingschool",{BrgyID : $('#brgy').val()},function(data){      
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbnotattendingschool">'      
      output += '<thead>'
      output += '<tr>'
      output += '<th>Barangay</th>'
      output += '<th>Reason for not Attending School at present</th>'
      output += '<th>Male</th>'
      output += '<th>Female</th>'
      output += '<th>Total</th>'
      output += '</tr>'
      output += '</thead>'
      output += '<tbody>'
      for(var i in data){
        output += '<tr>'
        if(i == 0){
          output += '<td>'+ $("#brgy option:selected").text(); +'</td>'
        }else{
          output += '<td></td>'
        }
        output += '<td>'+ data[i].fld2 +'</td>'
        output += '<td>'+ data[i].male +'</td>'
        output += '<td>'+ data[i].female +'</td>'
        output += '<td>'+ data[i].total +'</td>'
        output += '</tr>'
      }
      output += '</tbody>'
      output += '</table>'
      $('#notattendingschool').html(output)
      output = '';
    })   
  },
  religousaffiliation : function(request){
    $.get(window.location.href + "/religousaffiliation",{BrgyID : $('#brgy').val()},function(data){      
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbreligousaffiliation">'      
      output += '<thead>'
      output += '<tr>'
      output += '<th>Barangay</th>'
      output += '<th>Religous Affiliation</th>'
      output += '<th>Male</th>'
      output += '<th>Female</th>'
      output += '<th>Total</th>'
      output += '</tr>'
      output += '</thead>'
      output += '<tbody>'
      for(var i in data){
        output += '<tr>'
        if(i == 0){
          output += '<td>'+ $("#brgy option:selected").text(); +'</td>'
        }else{
          output += '<td></td>'
        }
        output += '<td>'+ data[i].fld2 +'</td>'
        output += '<td>'+ data[i].male +'</td>'
        output += '<td>'+ data[i].female +'</td>'
        output += '<td>'+ data[i].total +'</td>'
        output += '</tr>'
      }
      output += '</tbody>'
      output += '</table>'
      $('#religousaffiliation').html(output)
      output = '';
    })  
  },
  disabledpersons : function(request){
    $.get(window.location.href + "/disabledpersons",{BrgyID : $('#brgy').val()},function(data){      
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbdisabledpersons">'      
      output += '<thead>'
      output += '<tr>'
      output += '<th>Barangay</th>'
      output += '<th>Spicify Disability</th>'
      output += '<th>Male</th>'
      output += '<th>Female</th>'
      output += '<th>Total</th>'
      output += '</tr>'
      output += '</thead>'
      output += '<tbody>'
      for(var i in data){
        output += '<tr>'
        if(i == 0){
          output += '<td>'+ $("#brgy option:selected").text(); +'</td>'
        }else{
          output += '<td></td>'
        }
        output += '<td>'+ data[i].fld2 +'</td>'
        output += '<td>'+ data[i].male +'</td>'
        output += '<td>'+ data[i].female +'</td>'
        output += '<td>'+ data[i].total +'</td>'
        output += '</tr>'
      }
      output += '</tbody>'
      output += '</table>'
      $('#disabledpersons').html(output)
      output = '';
    }) 
  },
  regvoters4ps : function(request){
    $.get(window.location.href + "/regvoters4ps",{BrgyID : $('#brgy').val()},function(data){      
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbregvoters4ps">'      
      output += '<thead>'
      output += '<tr>'
      output += '<th>Barangay</th>'
      output += '<th>No. of voters registered at the barangay</th>'
      output += '<th>No. of voters not registered at the barangay</th>'
      output += '<th>No. of 4ps beneficiaries</th>'
      output += '</tr>'
      output += '</thead>'
      output += '<tbody>'      
      for(var i in data){
        output += '<tr>'
        if(i == 0){
          output += '<td>'+ $("#brgy option:selected").text(); +'</td>'
        }else{
          output += '<td></td>'
        }
        output += '<td>'+ data[i].regvoters +'</td>'
        output += '<td>'+ data[i].nonregvoters +'</td>'
        output += '<td>'+ data[i].beneficiaries +'</td>'        
        output += '</tr>'
      }
      output += '</tbody>'
      output += '</table>'
      $('#regvoters4ps').html(output)
      output = '';
    }) 
  },
  socialservices : function(request){
    $.get(window.location.href + "/socialservices",{BrgyID : $('#brgy').val()},function(data){      
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbsocialservices">'      
      output += '<thead>'
      output += '<tr>'
      output += '<th>Barangay</th>'
      output += '<th>GSIS</th>'
      output += '<th>PAG-IBIG</th>'
      output += '<th>PHILHEALTH</th>'
      output += '<th>Others</th>'
      output += '<th>SSS</th>'
      output += '<th>Senior</th>'
      output += '<th>None</th>'
      output += '</tr>'
      output += '</thead>'
      output += '<tbody>'
      
      for(var i in data){
        output += '<tr>'
        output += '<td>'+ data[i].barangay +'</td>'
        output += '<td>'+ data[i].GSIS +'</td>'
        output += '<td>'+ data[i].PAGIBIG +'</td>'
        output += '<td>'+ data[i].PHILHEALTH +'</td>' 
        output += '<td>'+ data[i].Others +'</td>' 
        output += '<td>'+ data[i].SSS +'</td>' 
        output += '<td>'+ data[i].Senior +'</td>'        
        output += '<td>'+ data[i].None +'</td>'        
        output += '</tr>'
      }
      output += '</tbody>'
      output += '</table>'
      $('#socialservices').html(output)
      output = '';
    })
  },
  specialskills : function(request){
    $.get(window.location.href + "/specialskills",{BrgyID : $('#brgy').val()},function(data){      
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbspecialskills">'      
      output += '<thead>'
      output += '<tr>'
      output += '<th rowspan="3">Barangay</th>'
      output += '<th colspan="22">Special Skills</th>'
      output += '</tr>'
      output += '<tr>'    
      output += '<th colspan="2">Driving</th>'
      output += '<th colspan="2">Plumbing</th>'
      output += '<th colspan="2">Welding</th>'
      output += '<th colspan="2">Electrical</th>'
      output += '<th colspan="2">Massage</th>'
      output += '<th colspan="2">Mechanic/Automotive</th>'
      output += '<th colspan="2">Carpentry</th>'
      output += '<th colspan="2">Food Processing</th>'
      output += '<th colspan="2">Dress Making/Tailoring</th>'
      output += '<th colspan="2">Computer Skills/Appliance repair</th>'
      output += '<th colspan="2">Others</th>'
      output += '</tr>'
      output += '<tr>'      
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '<th>M</th>'
      output += '<th>F</th>'
      output += '</tr>'
      output += '</thead>'
      output += '<tbody>'
      
      for(var i in data){
        output += '<tr>'
        output += '<td>'+ data[i].barangay +'</td>'
        output += '<td>'+ data[i].MDriving +'</td>'
        output += '<td>'+ data[i].FDriving +'</td>'
        output += '<td>'+ data[i].MPlumbing +'</td>'
        output += '<td>'+ data[i].FPlumbing +'</td>'
        output += '<td>'+ data[i].MWelding +'</td>'
        output += '<td>'+ data[i].FWelding +'</td>'
        output += '<td>'+ data[i].MElectrical +'</td>'
        output += '<td>'+ data[i].FElectrical +'</td>'
        output += '<td>'+ data[i].MMassage +'</td>'
        output += '<td>'+ data[i].FMassage +'</td>'
        output += '<td>'+ data[i].MMechanic +'</td>'
        output += '<td>'+ data[i].FMechanic +'</td>'
        output += '<td>'+ data[i].MCarpentry +'</td>'
        output += '<td>'+ data[i].FCarpentry +'</td>'
        output += '<td>'+ data[i].MFood +'</td>'
        output += '<td>'+ data[i].FFood +'</td>'
        output += '<td>'+ data[i].MDressmaking +'</td>'
        output += '<td>'+ data[i].FDressmaking +'</td>'
        output += '<td>'+ data[i].MComputer +'</td>'
        output += '<td>'+ data[i].FComputer +'</td>'
        output += '<td>'+ data[i].MOthers +'</td>'
        output += '<td>'+ data[i].FOthers +'</td>'          
        output += '</tr>'
      }
      output += '</tbody>'
      output += '</table>'
      $('#specialskills').html(output)
      output = '';
    })
  },
  monthlyincome : function(request){
    $.get(window.location.href + "/monthlyincome",{BrgyID : $('#brgy').val()},function(data){      
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbmonthlyincome">'      
      output += '<thead>'
      output += '<tr>'
      output += '<th rowspan="2">Barangay</th>'
      output += '<th colspan="12">Approximate Income</th>'
      output += '</tr>'
      output += '<tr>'      
      output += '<th>0 - 1000</th>'
      output += '<th>1000 - 5000</th>'
      output += '<th>6000 - 10000</th>'
      output += '<th>11000 - 15000</th>'
      output += '<th>16000 - 20000</th>'
      output += '<th>21000 - 25000</th>'
      output += '<th>26000 - 30000</th>'
      output += '<th>31000 - 35000</th>'
      output += '<th>36000 - 40000</th>'
      output += '<th>41000 - 45000</th>'
      output += '<th>46000 - 50000</th>'
      output += '<th>51000 & Over</th>'
      output += '</tr>'       
      output += '</thead>'
      output += '<tbody>'
      
      for(var i in data){
        output += '<tr>'
        output += '<td>'+ data[i].barangay +'</td>' 
        output += '<td>'+ data[i].range1 +'</td>'
        output += '<td>'+ data[i].range2 +'</td>'
        output += '<td>'+ data[i].range3 +'</td>'
        output += '<td>'+ data[i].range4 +'</td>'
        output += '<td>'+ data[i].range5 +'</td>'
        output += '<td>'+ data[i].range6 +'</td>'
        output += '<td>'+ data[i].range7 +'</td>'
        output += '<td>'+ data[i].range8 +'</td>'
        output += '<td>'+ data[i].range9 +'</td>'
        output += '<td>'+ data[i].range10 +'</td>'
        output += '<td>'+ data[i].range11 +'</td>'
        output += '<td>'+ data[i].range12 +'</td>'        
        output += '</tr>'
      }
      output += '</tbody>'
      output += '</table>'
      $('#monthlyincome').html(output)
      output = '';
    })
  },
  unitoccupied : function(request){
    $.get(window.location.href + "/unitoccupied",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbunitoccupied">'      
      output += '<thead>'
      output += '<tr>'
      output += '<th rowspan="2">Barangay</th>'
      output += '<th colspan="2">Ownership of the housing occupied</th>'
      output += '<th rowspan="2">Total</th>'
      output += '</tr>'
      output += '<tr>'
      output += '<th>YES</th>'
      output += '<th>NO</th>'
      output += '</tr>'       
      output += '</thead>'
      output += '<tbody>'
      for(var i in data){
        output += '<tr>'
        output += '<td>'+ data[i].barangay +'</td>'
        output += '<td>'+ data[i].Occupied +'</td>'
        output += '<td>'+ data[i].NotOccupied +'</td>'
        output += '<td>'+ data[i].Total +'</td>'
        output += '</tr>'
      }
      output += '</tbody>'
      output += '</table>'
      $('#unitoccupied').html(output)
      output = '';      
    });
  },
  classificationofhouse : function(request){
    $.get(window.location.href + "/classificationofhouse",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbclassificationofhouse">'      
      output += '<thead>'
      output += '<tr>'
      output += '<th rowspan="2">Barangay</th>'
      output += '<th colspan="5">Classification  of dwelling units</th>'
      output += '<th rowspan="2">Total</th>'
      output += '</tr>'
      output += '<tr>'
      output += '<th>Permanent/Concrete</th>'
      output += '<th>Semi-permanent(combination)</th>'
      output += '<th>Temporary(Nipa,Bamboo,Cogon)</th>'
      output += '<th>Makeshift/Salvaged Materials</th>'
      output += '<th>Others</th>'
      output += '</tr>'
      output += '</thead>'
      output += '<tbody>'
      for(var i in data){
        output += '<tr>'
        output += '<td>'+ data[i].barangay +'</td>'
        output += '<td>'+ data[i].permanent +'</td>'
        output += '<td>'+ data[i].SemiPermanent +'</td>'
        output += '<td>'+ data[i].Temporary +'</td>'
        output += '<td>'+ data[i].Makeshift +'</td>'        
        output += '<td>'+ data[i].Others +'</td>'
        output += '<td>'+ data[i].Total +'</td>'
        output += '</tr>'
      }
      output += '</tbody>'
      output += '</table>'
      $('#classificationofhouse').html(output)
      output = '';      
    });
  },
  lightingfuel : function(request){
    $.get(window.location.href + "/lightingfuel",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tblightingfuel">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',2,0)
      output += hth('Type of fuel/Used for lighting',0,6)
      output += hth('Total',2,0)
      output += tr(0)
      output += tr(1)
      output += hth('Electricity',0,0)
      output += hth('Kerosene',0,0)
      output += hth('Battery',0,0)
      output += hth('Lamp',0,0)
      output += hth('Tapping',0,0)
      output += hth('Others',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){
        output += tr(1)
        output += td(data[i].barangay)
        output += td(data[i].Electricity)
        output += td(data[i].Kerosene)
        output += td(data[i].Battery)
        output += td(data[i].Lamp)
        output += td(data[i].Tapping)
        output += td(data[i].others)
        output += td(data[i].Total)
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#lightingfuel').html(output)      
      output = '';      
    });
  },
  cookingFuel : function(request){
    $.get(window.location.href + "/cookingFuel",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbcookingFuel">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',2,0)
      output += hth('Type of Fuel/Used for Cooking',0,5)
      output += tr(0)
      output += tr(1)
      output += hth('Electricity',0,0)
      output += hth('LPG',0,0)
      output += hth('Wood',0,0)
      output += hth('Others',0,0)
      output += hth('Botane',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){
        output += tr(1)
        output += td(data[i].barangay)
        output += td(data[i].Electricity)
        output += td(data[i].LPG)
        output += td(data[i].Wood)
        output += td(data[i].Others)
        output += td(data[i].botane)
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#cookingfuel').html(output)
      output = '';      

    })
  },
  houselocation : function(request){
    $.get(window.location.href + "/houselocation",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbhouselocation">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',2,0)
      output += hth('House Location',0,4)
      output += tr(0)
      output += tr(1)
      output += hth('Electricity',0,0)
      output += hth('LPG',0,0)
      output += hth('Wood',0,0)
      output += hth('Others',0,0)      
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){
        output += tr(1)
        output += td(data[i].barangay)
        output += td(data[i].SeaShore)
        output += td(data[i].RiverBanks)
        output += td(data[i].LandslideArea)
        output += td(data[i].Others)        
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#houselocation').html(output)
      output = '';      

    })
  },
  householdappliances : function(request){
    $.get(window.location.href + "/householdappliances",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbhouseholdappliances">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',2,0)
      output += hth('House Appliances',0,14)
      output += tr(0)
      output += tr(1)      
      output += hth('radio',0,0)
      output += hth('tv',0,0)
      output += hth('Dvd/Vcd/Vhs',0,0)
      output += hth('Cellphone',0,0)      
      output += hth('Refrigerator',0,0)      
      output += hth('Oven',0,0)      
      output += hth('ElecIron',0,0)      
      output += hth('Car',0,0)      
      output += hth('Motorcycle/TriCycle',0,0)      
      output += hth('Bicycle/TriCycle',0,0)      
      output += hth('Computer',0,0)      
      output += hth('Washing Machine',0,0)      
      output += hth('Air Condition',0,0)      
      output += hth('Others',0,0)            
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){
        output += tr(1)        
        output += td(data[i].barangay)
        output += td(data[i].radio)
        output += td(data[i].tv)
        output += td(data[i].DvdVcdVhs)
        output += td(data[i].Cellphone)
        output += td(data[i].Refrigerator)
        output += td(data[i].Oven)        
        output += td(data[i].ElecIron)
        output += td(data[i].Car)
        output += td(data[i].MotorTriCycle)
        output += td(data[i].BiTriCycle)
        output += td(data[i].Computer)
        output += td(data[i].WashingMachine)
        output += td(data[i].AirCondition)
        output += td(data[i].Others)        
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#householdappliances').html(output)
      output = '';      

    })

  },
  drinkingwater : function(request){
    $.get(window.location.href + "/drinkingwater",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbdrinkingwater">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',2,0)
      output += hth('Source of Drinking Water',0,7)
      output += tr(0)
      output += tr(1)      
      output += hth('Community water system',0,0)
      output += hth('Deep well with pump(POSO)',0,0)
      output += hth('Dug well(Atabay)',0,0)
      output += hth('Water rifilling Station',0,0)
      output += hth('Spring',0,0)
      output += hth('BCWD',0,0)
      output += hth('Others',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)        
        output += td(data[i].barangay)        
        output += td(data[i].community)        
        output += td(data[i].poso)
        output += td(data[i].atabay)
        output += td(data[i].refillingstation)
        output += td(data[i].spring)
        output += td(data[i].bcwd)
        output += td(data[i].Others)
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#drinkingwater').html(output)
      output = '';      

    })
  },
  gendrinkingwater : function(request){
    $.get(window.location.href + "/gendrinkingwater",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbgendrinkingwater">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',2,0)
      output += hth('General Used of  Water',0,7)
      output += tr(0)
      output += tr(1)      
      output += hth('Community water system',0,0)
      output += hth('Deep well with pump(POSO)',0,0)
      output += hth('Dug well(Atabay)',0,0)
      output += hth('Water rifilling Station',0,0)
      output += hth('Spring',0,0)
      output += hth('BCWD',0,0)
      output += hth('Others',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)        
        output += td(data[i].barangay)        
        output += td(data[i].community)        
        output += td(data[i].poso)
        output += td(data[i].atabay)
        output += td(data[i].refillingstation)
        output += td(data[i].spring)
        output += td(data[i].bcwd)
        output += td(data[i].Others)
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#gendrinkingwater').html(output)
      output = '';      

    })
  },
  watersourcedistance : function(request){
    $.get(window.location.href + "/watersourcedistance",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbwatersourcedistance">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',2,0)
      output += hth('Distance of Water Source From the household',0,3)
      output += tr(0)
      output += tr(1)      
      output += hth('Less than 250 meters Distance',0,0)
      output += hth('250-500 meters Distance',0,0)
      output += hth('500 meters Distance and more',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)        
        output += td(data[i].barangay)
        output += td(data[i].distance1)
        output += td(data[i].distance2)
        output += td(data[i].distance3)
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#watersourcedistance').html(output)
      output = '';      

    })
  },
  genwatersourcedistance : function(request){
    $.get(window.location.href + "/genwatersourcedistance",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbgenwatersourcedistance">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',2,0)
      output += hth('Distance of Gen. Water Source From the household',0,3)
      output += tr(0)
      output += tr(1)      
      output += hth('Less than 250 meters Distance',0,0)
      output += hth('250-500 meters ',0,0)
      output += hth('500 meters Distance and more',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)        
        output += td(data[i].barangay)
        output += td(data[i].distance1)
        output += td(data[i].distance2)
        output += td(data[i].distance3)
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#genwatersourcedistance').html(output)
      output = '';      

    })
  },
  toilettype : function(request){
    $.get(window.location.href + "/toilettype",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbtoilettype">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',2,0)
      output += hth('Toilet type used',0,8)
      output += tr(0)
      output += tr(1)      
      output += hth('Water-Sealed, Sewer Septic Tank Exclusive',0,0)
      output += hth('Water-Sealed, Sewer Septic Tank Inclusive',0,0)
      output += hth('Water-Sealed, Other Depository Exclusive',0,0)
      output += hth('Water-Sealed, Other Depository Inclusive',0,0)
      output += hth('Closed Pit (Antipolo)',0,0)
      output += hth('Open Pit',0,0)
      output += hth('Others (Pail System, Others)',0,0)
      output += hth('NONE',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)        
        output += td(data[i].barangay)
        output += td(data[i].type1)
        output += td(data[i].type2)
        output += td(data[i].type3)
        output += td(data[i].type4)
        output += td(data[i].type5)
        output += td(data[i].type6)
        output += td(data[i].type7)
        output += td(data[i].type8)        
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#toilettype').html(output)
      output = '';      

    })  
  },
  garbagedisposal : function(request){
    $.get(window.location.href + "/garbagedisposal",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbgarbagedisposal">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',2,0)
      output += hth('Garbage Disposal',0,8)
      output += tr(0)
      output += tr(1)      
      output += hth('Collected By Garbage Truck',0,0)
      output += hth('Composting',0,0)
      output += hth('Burning',0,0)
      output += hth('Burying',0,0)
      output += hth('Thrown Anywhere',0,0)
      output += hth('Recycled',0,0)
      output += hth('Garbage segregated before disposing',0,0)
      output += hth('Garbage not segregated before disposing',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)              
        output += td(data[i].barangay)
        output += td(data[i].Collected)
        output += td(data[i].Composting)
        output += td(data[i].Burning)
        output += td(data[i].Burying)
        output += td(data[i].ThrownAnywhere)
        output += td(data[i].Recycled)
        output += td(data[i].Segregated)
        output += td(data[i].NonSegregated)
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#garbagedisposal').html(output)
      output = '';      

    })
  },  
  birthspace : function(request){
    $.get(window.location.href + "/birthspacing",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbbirthspace">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)
      output += hth("TOTAL MWRA's",0,0)
      output += hth("BTL",0,0)
      output += hth("V",0,0)
      output += hth("IUD",0,0)
      output += hth("Pills",0,0)
      output += hth("INJ",0,0)
      output += hth("Condom",0,0)
      output += hth("STM",0,0)
      output += hth("SDM",0,0)
      output += hth("BOM",0,0)
      output += hth("Withdrawal",0,0)
      output += hth("BBT",0,0)
      output += hth("Calendar",0,0)
      output += hth("TOTAL USER",0,0)
      output += hth("NON USER",0,0)      
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)
        output += td("TBA")
        output += td(data[i].BTL)        
        output += td(data[i].V)
        output += td(data[i].IUD)
        output += td(data[i].Pills)
        output += td(data[i].INJ)
        output += td(data[i].Condom)
        output += td(data[i].STM)
        output += td(data[i].SDM)
        output += td(data[i].BOM)
        output += td(data[i].Withdrawal)
        output += td(data[i].BBT)
        output += td(data[i].Calendar)
        output += td(data[i].TotalUser)
        output += td(data[i].NonUser)
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#birthspace').html(output)
      output = '';      

    })
  },
  fpstopping : function(request){
    $.get(window.location.href + "/fpstopping",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbfpstopping">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)            
      output += hth("Fear of SideEffect",0,0) 
      output += hth("No FP Service Center",0,0) 
      output += hth("Wanted Child",0,0) 
      output += hth("Menopausal Period",0,0) 
      output += hth("Sickness",0,0) 
      output += hth("Spouse Away/Abroad",0,0) 
      output += hth("Method failure",0,0) 
      output += hth("Achieving Pregnancy",0,0) 
      output += hth("Others",0,0) 
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)        
        output += td(data[i].FearofSideEffect)
        output += td(data[i].NoFPServiceCenter)
        output += td(data[i].WantChild)
        output += td(data[i].Menopausal)
        output += td(data[i].Sickness)
        output += td(data[i].SpouseAway)
        output += td(data[i].Methodfail)
        output += td(data[i].AchievingPregnancy)
        output += td(data[i].Others)
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#reason').html(output)
      output = '';      

    })
  },
  engagedfarming : function(request){
    $.get(window.location.href + "/engagedfarming",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbengagedfarming">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)
      output += hth('Farming',0,0)
      output += hth('Fishing',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)
        output += td(data[i].Farming)
        output += td(data[i].Fishing)
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#engagedfarming').html(output)
      output = '';      

    })
  },
  crops : function(request){
    $.get(window.location.href + "/crops",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbcrops">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)      
      output += hth('rice',0,0)
      output += hth('corn',0,0)
      output += hth('vegetables',0,0)
      output += hth('rootcrops',0,0)
      output += hth('fruits',0,0)
      output += hth('Sugarcane',0,0)
      output += hth('Coffe',0,0)
      output += hth('Others',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)
        output += td(data[i].rice)        
        output += td(data[i].corn)
        output += td(data[i].vegetables)
        output += td(data[i].rootcrops)
        output += td(data[i].fruittrees)
        output += td(data[i].sugarcane)
        output += td(data[i].coffe)
        output += td(data[i].others)
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#crops').html(output)
      output = '';      

    })
  },
  typeoffishing : function(request){
    $.get(window.location.href + "/typeoffishing",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbtypeoffishing">'      
      //barangay, CommercialFishing, MarineFishing, Inland, Aquaculture, CollectingSeaProducts, Others, Total
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)      
      output += hth('Commercial Fishing',0,0)
      output += hth('Marine Fishing',0,0)
      output += hth('Inland',0,0)
      output += hth('Aquaculture',0,0)
      output += hth('Collecting Sea Products',0,0)
      output += hth('Others',0,0)
      output += hth('Total',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)
        output += td(data[i].CommercialFishing)        
        output += td(data[i].MarineFishing)
        output += td(data[i].Inland)
        output += td(data[i].Aquaculture)
        output += td(data[i].CollectingSeaProducts)
        output += td(data[i].Others)
        output += td(data[i].Total)        
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#typeoffishing').html(output)
      output = '';      

    })
  },
  marketdistance : function(request){
    $.get(window.location.href + "/marketdistance",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbmarketdistance">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)      
      output += hth('Less than 250 meters Distance',0,0)
      output += hth('250 to 500 meters Distance',0,0)
      output += hth('More than 500 meters Distance',0,0)
      output += hth('Not Available',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)      
        output += td(data[i].less250)
        output += td(data[i].S250t0500)
        output += td(data[i].morethan500)
        output += td(data[i].notavailable)        
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#marketdistance').html(output)
      output = '';      

    })
  },
  publicpreschool : function(request){
    $.get(window.location.href + "/publicpreschool",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbpublicpreschool">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)      
      output += hth('Less than 250 meters Distance',0,0)
      output += hth('250 to 500 meters Distance',0,0)
      output += hth('More than 500 meters Distance',0,0)
      output += hth('Not Available',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)      
        output += td(data[i].less250)
        output += td(data[i].S250t0500)
        output += td(data[i].morethan500)
        output += td(data[i].notavailable)        
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#publicpreschool').html(output)
      output = '';      

    })
  },
  publicprimaryschool : function(request){
    $.get(window.location.href + "/publicprimaryschool",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbpublicprimaryschool">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)      
      output += hth('Less than 250 meters Distance',0,0)
      output += hth('250 to 500 meters Distance',0,0)
      output += hth('More than 500 meters Distance',0,0)
      output += hth('Not Available',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)      
        output += td(data[i].less250)
        output += td(data[i].S250t0500)
        output += td(data[i].morethan500)
        output += td(data[i].notavailable)        
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#publicprimaryschool').html(output)
      output = '';      

    })
  },
  publictertiaryshcool : function(request){
    $.get(window.location.href + "/publictertiaryshcool",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbpublictertiaryshcool">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)      
      output += hth('Less than 250 meters Distance',0,0)
      output += hth('250 to 500 meters Distance',0,0)
      output += hth('More than 500 meters Distance',0,0)
      output += hth('Not Available',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)      
        output += td(data[i].less250)
        output += td(data[i].S250t0500)
        output += td(data[i].morethan500)
        output += td(data[i].notavailable)        
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#publictertiaryshcool').html(output)
      output = '';      

    })
  },
  privatepreschool : function(request){
    $.get(window.location.href + "/privatepreschool",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbprivateprimaryschool">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)      
      output += hth('Less than 250 meters Distance',0,0)
      output += hth('250 to 500 meters Distance',0,0)
      output += hth('More than 500 meters Distance',0,0)
      output += hth('Not Available',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)      
        output += td(data[i].less250)
        output += td(data[i].S250t0500)
        output += td(data[i].morethan500)
        output += td(data[i].notavailable)        
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#privatepreschool').html(output)
      output = '';      

    })
  },
  privatesecondaryschool : function(request){
    $.get(window.location.href + "/privatesecondaryschool",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbprivatesecondaryschool">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)      
      output += hth('Less than 250 meters Distance',0,0)
      output += hth('250 to 500 meters Distance',0,0)
      output += hth('More than 500 meters Distance',0,0)
      output += hth('Not Available',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)      
        output += td(data[i].less250)
        output += td(data[i].S250t0500)
        output += td(data[i].morethan500)
        output += td(data[i].notavailable)        
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#privatesecondaryschool').html(output)
      output = '';      

    })
  },
  privatetertiaryschool : function(request){
    $.get(window.location.href + "/privatetertiaryschool",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbprivatetertiaryschool">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)      
      output += hth('Less than 250 meters Distance',0,0)
      output += hth('250 to 500 meters Distance',0,0)
      output += hth('More than 500 meters Distance',0,0)
      output += hth('Not Available',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)      
        output += td(data[i].less250)
        output += td(data[i].S250t0500)
        output += td(data[i].morethan500)
        output += td(data[i].notavailable)        
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#privatetertiaryschool').html(output)
      output = '';      

    })
  },
  publichealthcenter : function(request){
    $.get(window.location.href + "/publichealthcenter",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbpublichealthcenter">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)      
      output += hth('Less than 250 meters Distance',0,0)
      output += hth('250 to 500 meters Distance',0,0)
      output += hth('More than 500 meters Distance',0,0)
      output += hth('Not Available',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)      
        output += td(data[i].less250)
        output += td(data[i].S250t0500)
        output += td(data[i].morethan500)
        output += td(data[i].notavailable)        
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#publichealthcenter').html(output)
      output = '';      

    })
  },
  privatehealthcenter : function(request){
    $.get(window.location.href + "/privatehealthcenter",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbprivatehealthcenter">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)      
      output += hth('Less than 250 meters Distance',0,0)
      output += hth('250 to 500 meters Distance',0,0)
      output += hth('More than 500 meters Distance',0,0)
      output += hth('Not Available',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)      
        output += td(data[i].less250)
        output += td(data[i].S250t0500)
        output += td(data[i].morethan500)
        output += td(data[i].notavailable)        
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#privatehealthcenter').html(output)
      output = '';      

    })
  },
  publicbirthingclinic : function(request){
    $.get(window.location.href + "/publicbirthingclinic",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbpublicbirthingclinic">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)      
      output += hth('Less than 250 meters Distance',0,0)
      output += hth('250 to 500 meters Distance',0,0)
      output += hth('More than 500 meters Distance',0,0)
      output += hth('Not Available',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)      
        output += td(data[i].less250)
        output += td(data[i].S250t0500)
        output += td(data[i].morethan500)
        output += td(data[i].notavailable)        
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#publicbirthingclinic').html(output)
      output = '';      

    })
  },
  privatebirthingclinic : function(request){
    $.get(window.location.href + "/privatebirthingclinic",{BrgyID : $('#brgy').val()},function(data){
      var output = '<table class="table table-hover table-bordered text-center" width="100%" id="tbprivatebirthingclinic">'      
      output += thead(1)
      output += tr(1)
      output += hth('Barangay',0,0)      
      output += hth('Less than 250 meters Distance',0,0)
      output += hth('250 to 500 meters Distance',0,0)
      output += hth('More than 500 meters Distance',0,0)
      output += hth('Not Available',0,0)
      output += tr(0)
      output += thead(0)
      output += tbody(1)
      for(var i in data){        
        output += tr(1)                                  
        output += td(data[i].barangay)      
        output += td(data[i].less250)
        output += td(data[i].S250t0500)
        output += td(data[i].morethan500)
        output += td(data[i].notavailable)        
        output += tr(0)
      }
      output += tbody(0)
      output += '</table>'
      $('#privatebirthingclinic').html(output)
      output = '';      

    })
  }
}
function thead(num){
  if(num == 1){
    return '<thead>'
  }else{
    return '</thead>'
  }
}
function tbody(num){
  if(num == 1){
    return '<tbody>'
  }else{
    return '</tbody>'
  }
}
function hth(title,r,c){
  return '<th rowspan="'+ r +'" colspan="'+ c +'">'+ title +'</th>'
}
function tr(num){
  if(num == 1){
    return '<tr>'
  }else{
    return '</tr>'
  }
}
function td(data){
  return '<td>'+ data +'</td>';
}
$(function(){  
  
  initmodule.BrgyOption('brgy');
  
  $('#showbrgy').click(function(){    
    request = {
      BrgyID : $('#brgy').val()
    }
    reportgroup(request)    
  })  
  
  $(document).ajaxStart(function() {    
    box = bootbox.dialog({
      message: '<p class="text-center align-middle">Please wait while Report is loading . . .</p>',
      closeButton: false,
    });
    var dialog = box.find('.modal-dialog');
    box.css('display', 'block');    
    dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2)); 
    $(document).ajaxStop(function() {    
      box.modal('hide')
    });
  });
    
  function reportgroup(request){
    if($('#reportlist').val() == 1){
      reportmodule.population(request);
      reportmodule.householdhead(request);
      reportmodule.maritalstatus(request);
      reportmodule.birthRA(request);
      reportmodule.EducProfile(request);
      reportmodule.AttendingSchool(request);
      reportmodule.notattendingschool(request);
      reportmodule.religousaffiliation(request);
      reportmodule.disabledpersons(request);
      reportmodule.regvoters4ps(request);
      reportmodule.socialservices(request);
      reportmodule.specialskills();
      $('#tabreport7').fadeOut();
      $('#tabreport6').fadeOut();            
      $('#tabreport6').fadeOut();
      $('#tabreport5').fadeOut(); 
      $('#tabreport4').fadeOut();
      $('#tabreport3').fadeOut();
      $('#tabreport2').fadeOut();
      $('#tabreport1').fadeIn();
      activeTab = '#hholdinfo';
      $('#tabreport1 .nav-link').each(function() {
        $(this).click(function(){
          activeTab = $(this).attr('href')
        })
      })              
    }else if($('#reportlist').val() == 2){
      reportmodule.monthlyincome()
      $('#tabreport7').fadeOut();
      $('#tabreport6').fadeOut();
      $('#tabreport6').fadeOut();
      $('#tabreport5').fadeOut(); 
      $('#tabreport4').fadeOut();
      $('#tabreport3').fadeOut();
      $('#tabreport1').fadeOut();
      $('#tabreport2').fadeIn();
      activeTab = '#MIncome';
      $('#tabreport2 .nav-link').each(function() {
        $(this).click(function(){
          activeTab = $(this).attr('href')
        })
      })  
    }else if($('#reportlist').val() == 3){  
      reportmodule.unitoccupied();    
      reportmodule.classificationofhouse();    
      reportmodule.lightingfuel();    
      reportmodule.cookingFuel();
      reportmodule.houselocation();    
      reportmodule.householdappliances();
      $('#tabreport7').fadeOut();    
      $('#tabreport6').fadeOut();
      $('#tabreport6').fadeOut();
      $('#tabreport5').fadeOut(); 
      $('#tabreport4').fadeOut();
      $('#tabreport2').fadeOut();
      $('#tabreport1').fadeOut();
      $('#tabreport3').fadeIn();
      activeTab = '#HOwnership';
      $('#tabreport3 .nav-link').each(function() {
        $(this).click(function(){
          activeTab = $(this).attr('href')
        })
      })       
    }else if($('#reportlist').val() == 4){
      reportmodule.drinkingwater()
      reportmodule.gendrinkingwater() 
      reportmodule.watersourcedistance() 
      reportmodule.genwatersourcedistance() 
      reportmodule.toilettype()
      reportmodule.garbagedisposal()
      $('#tabreport7').fadeOut();
      $('#tabreport6').fadeOut();
      $('#tabreport6').fadeOut();
      $('#tabreport5').fadeOut(); 
      $('#tabreport3').fadeOut();
      $('#tabreport2').fadeOut();
      $('#tabreport1').fadeOut();
      $('#tabreport4').fadeIn(); 
      activeTab = '#DWater';
      $('#tabreport4 .nav-link').each(function() {
        $(this).click(function(){
          activeTab = $(this).attr('href')
        })
      })      
    }else if($('#reportlist').val() == 5){
      reportmodule.birthspace()
      reportmodule.fpstopping()
      $('#tabreport7').fadeOut();
      $('#tabreport6').fadeOut();
      $('#tabreport6').fadeOut();
      $('#tabreport4').fadeOut(); 
      $('#tabreport3').fadeOut();
      $('#tabreport2').fadeOut();
      $('#tabreport1').fadeOut();
      $('#tabreport5').fadeIn(); 
      activeTab = '#BSpace';
      $('#tabreport5 .nav-link').each(function() {
        $(this).click(function(){
          activeTab = $(this).attr('href')
        })
      })      
    }else if($('#reportlist').val() == 6){
      reportmodule.engagedfarming()
      reportmodule.crops()
      reportmodule.typeoffishing()
      $('#tabreport7').fadeOut();
      $('#tabreport6').fadeOut();
      $('#tabreport5').fadeOut();
      $('#tabreport4').fadeOut(); 
      $('#tabreport3').fadeOut();
      $('#tabreport2').fadeOut();
      $('#tabreport1').fadeOut();
      $('#tabreport6').fadeIn(); 
      activeTab = '#EFarming';
      $('#tabreport6 .nav-link').each(function() {
        $(this).click(function(){
          activeTab = $(this).attr('href')
        })
      })      
    }else if($('#reportlist').val() == 7){
      reportmodule.marketdistance()
      reportmodule.publicpreschool()
      reportmodule.publicprimaryschool()
      reportmodule.privatepreschool()
      reportmodule.publictertiaryshcool()      
      reportmodule.privatesecondaryschool()      
      reportmodule.privatetertiaryschool()      
      reportmodule.publichealthcenter()
      reportmodule.privatehealthcenter()
      reportmodule.publicbirthingclinic()
      reportmodule.privatebirthingclinic()
      $('#tabreport6').fadeOut();
      $('#tabreport5').fadeOut();
      $('#tabreport4').fadeOut(); 
      $('#tabreport3').fadeOut();
      $('#tabreport2').fadeOut();
      $('#tabreport1').fadeOut();
      $('#tabreport7').fadeIn(); 
      activeTab = '#MDistance';
      $('#tabreport7 .nav-link').each(function() {
        $(this).click(function(){
          activeTab = $(this).attr('href')
        })
      })      
    }          
  }       
  $('#printreport').click(function(){        
    $(activeTab).print({
      //Use Global styles
      globalStyles : true,
      //Add link with attrbute media=print
      mediaPrint : false,
      //Custom stylesheet
      stylesheet : "http://fonts.googleapis.com/css?family=Inconsolata",
      //Print in a hidden iframe
      iframe : false,
      //Don't print this
      noPrintSelector : ".avoid-this",
      //Add this at top
      prepend : "",
      //Add this on bottom
      append : "<br/>Buh Bye!",
      //Log to console when printing is done via a deffered callback
      deferred: $.Deferred().done(function() { console.log('Printing done', arguments); })
    });
  })

})
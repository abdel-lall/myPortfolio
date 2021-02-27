
var st0L = $("#st0").get(0).getTotalLength()
var st1L = $("#st1").get(0).getTotalLength()
var st2L = $("#st2").get(0).getTotalLength()

$("#st0").css({"stroke-dasharray":st0L,"stroke-dashoffset" :st0L} )
$("#st1").css({"stroke-dasharray":st1L,"stroke-dashoffset" :st1L} )
$("#st2").css({"stroke-dasharray":st2L,"stroke-dashoffset" :st2L} )
$("#descreption").css({opacity : 0 , "margin-top" : '20px'})


$( "#st0" ).animate({"stroke-dashoffset": "0px"}, 500, function() {
    $("#st1").animate({"stroke-dashoffset": "0px"},1000, function() {
        $("#st2").animate({"stroke-dashoffset": "0px"},2200)
    })
  });
  setTimeout(()=>{
    $("#descreption").animate({opacity : 1 , "margin-top" : '0px'},1500)
  },3700)
  
  
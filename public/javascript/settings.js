$("#logIn").on('click',function(){
 
    if($('#password').val() == undefined){
        
        $("#pswCheck").css('visibility', 'visible')
    }else{
        var data = {
            username: 'Admin',
            password : $('#password').val()
        }
        $.ajax({
                type: "POST",
                url: "/settingLogin",
                data,
              }).then(function (res) {
                 
                  if(res == "Incorrect password."){
                      $("#pswCheck").css("visibility", 'visible')
                  }else{
                      window.location.href = '/settings'
                  }
              });
    }
})


// ===========================================settings menu====================================================



$("#trafficSttitle").on("click",function(e){
    e.preventDefault()
    $("#messageSection").css("visibility","hidden")
    $("#trafficSection").css("visibility","visible")
    $("#trafficSttitle").css('border-bottom', 'thin solid #e0e0e0')
    $("#messagesSttitle").css('border-bottom', 'none') 
})
$("#messagesSttitle").on("click",function(e){
    e.preventDefault()
    $("#messageSection").css("visibility","visible")
    $("#trafficSection").css("visibility","hidden")
    $("#messagesSttitle").css('border-bottom', 'thin solid #e0e0e0')
    $("#trafficSttitle").css('border-bottom', 'none') 
})

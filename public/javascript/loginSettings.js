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
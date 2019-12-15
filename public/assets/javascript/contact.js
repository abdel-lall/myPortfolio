
 $("#btnSend").on("click",function(e){
    e.preventDefault()
    $("#name").css({'border-color': "white"})
    $("#email").css({'border-color': "white"})
    $("#message").css({'border-color': "white"})
   
    data = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val(),
    }
    
    if(data.name == "" || data.email == "" || data.message == ""){
        if(data.name == ""){
            $("#name").css({'border-color': "red"})
        }
        if(data.email == ""){
            $("#email").css({'border-color': "red"})
        }
        if(data.message == ""){
            $("#message").css({'border-color': "red"})
        }
    }else if(!validateEmail(data.email)){
        $("#email").css({'border-color': "red"})
    }else{
        $.ajax({
            type: "POST",
            url: "/contact",
            data: data,
          }).then(function(res){
              if(res=="sent"){
                $(".fa-check-circle").show()
                  setTimeout(() => {
                    $(".fa-check-circle").hide()
                  }, 1500);
                  
              }
          });
    }
    
   
 })
 function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
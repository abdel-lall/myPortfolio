
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


window.onload = function() {

    $.ajax({
        type: "POST",
        url: "/settings",
      }).then(function (res) {
         console.log(res)

        var trafficData = res.trafRes
        trafficData.forEach(element => {
            var eleTemplate = `<div class="trafficCard" data-card=${element._id}>
            <div class="visitID">${element.ip}</div>
            <div class="visitDate">Central:${element.time}/ISO:${element.date}</div>
            <div class="visitCount">//</div>
            <button class="deleteVisit" data-id=${element._id}>delete</button>
          </div>`
    
            $("#trafficSection").append(eleTemplate)
            $(".deleteVisit").on('click',function(e){
                e.preventDefault()
                e.stopPropagation();
                e.stopImmediatePropagation();
                var id = $(this).attr('data-id')
                $.ajax({
                    type: "DELETE",
                    url: "/settings",
                    data: {
                        id: id,
                        dataType: 'traffic'
                    },
                  }).then(function (res) {
                    
                    $("#trafficSection").find(`[data-card='${id}']`).remove()
                  });
            })



        });
        var messageData = res.messRes
        messageData.forEach(element => {
            var meleTemplate = `<div class="messageCard" data-card=${element._id}>
            <div class="messageSenderName">${element.name}</div>
            <div class="messageSenderEmail">
            ${element.email}
            </div>
            <div class="messageContent">
            ${element.message}
            </div>
            <button class="deleteMessage" data-id=${element._id}>delete</button>
          </div>`
          $("#messageSection").append(meleTemplate)
          $(".deleteMessage").on('click',function(event){
            event.preventDefault()
            event.stopPropagation();
            event.stopImmediatePropagation();
            var id = $(this).attr('data-id')
            $.ajax({
                type: "DELETE",
                url: "/settings",
                data: {
                    id: id,
                    dataType: "message"
                },
              }).then(function (res) {
                $("#messageSection").find(`[data-card='${id}']`).remove()
              });
        })
        });

      });
    
}
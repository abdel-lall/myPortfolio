
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
        var trafficData = res.trafRes
        var date = new Date()
        draw_function_Grapgh(trafficData);
        trafficData.forEach(element => {
            if(moment(element.date).format('L') == moment(date).format('L')){
              var eleTemplate = `<div class="trafficCard" data-card=${element._id}>
              <div class="visitID">IP: ${element.ip}</div>
              <div class="visitDate">Date & Time: ${element.time}</div>
              </div>`
              $("#Visitsdetails").append(eleTemplate)
            }
        });
        $('.graph_point').on('click',function(e){
          e.preventDefault()
          $("#Visitsdetails").empty()
          trafficData.forEach(element => {
            if(moment(element.date).format('L') == e.target.id){
              var eleTemplate = `<div class="trafficCard" data-card=${element._id}>
              <div class="visitID">IP: ${element.ip}</div>
              <div class="visitDate">Date & Time: ${element.time}</div>
              </div>`
              $("#Visitsdetails").append(eleTemplate)
            }
        });
        })
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







function draw_function_Grapgh(data){
  add_X_axis_vals(generate_X_axis_vals());
  var sorted_visites = sort_Visites(data);
  var y_axis_vals = generate_Y_axis_vals(sorted_visites)
  var biggest_y_val = y_axis_vals[y_axis_vals.length -1]
  add_Y_axis_vals(y_axis_vals)
  var visit_count = count_visites(sorted_visites)
  var coordinate = generate_coordinate(visit_count,biggest_y_val)
  for(i=0;i<coordinate.length -1;i++){ 
    add_Line(coordinate[i][0],coordinate[i+1][0],coordinate[i][1],coordinate[i+1][1])
  }
  for(i=0;i<coordinate.length;i++){ 
    add_Point(coordinate[i][0],coordinate[i][1],visit_count[i],i)
  }

}
function generate_coordinate(arr,max){
  var coordinate =[];
  var y_unit = 400/max
  var y_coordinate=0;
  var x_coordinate=0;
  for(i=0;i<arr.length;i++){
    y_coordinate = arr[i]*y_unit;
    x_coordinate = x_coordinate +50;
    coordinate[i] = [x_coordinate,y_coordinate]
  }
  return coordinate;
}
function add_Point(x,y,label,id){
    var date  = new Date();
    var x_ = x + 124.48;
    var y_ = 500.5 - y;
    var svgns = "http://www.w3.org/2000/svg";
    var svg = document.getElementById("grapg_svg")
    var point  = document.createElementNS(svgns ,'circle')
    point.setAttribute('class', 'graph_point')
    point.setAttribute('r', 2.5)
    point.setAttribute('cx', x_)
    point.setAttribute('cy', y_)
    point.setAttribute('id',moment(date).subtract(14-id, 'days').format("L"))
    point.innerHTML = "<title class='point_title'> "+label+" </title>";
    
    svg.appendChild(point)
}
function add_Line(x1,x2,y1,y2){
    var x_1 = x1 + 124.48;
    var x_2 = x2 + 124.48;
    var y_1 = 500.5 - y1;
    var y_2 = 500.5 - y2;
    var svgns = "http://www.w3.org/2000/svg";
    var svg = document.getElementById("grapg_svg")
    var line  = document.createElementNS(svgns ,'line')
    line.setAttribute('class', 'graph_line')
    line.setAttribute('x1', x_1)
    line.setAttribute('x2', x_2)
    line.setAttribute('y1', y_1)
    line.setAttribute('y2', y_2) 
    svg.appendChild(line)
}
function sort_Visites(data){
  dates = generate_X_axis_vals()
  var arr =[]
    
    for(i=0;i<dates.length;i++){
      var arr1 =[]
      data.forEach(element => {
      if(moment(element.date).format('MM[-]DD') == dates[i]){
       arr1.push(element)
      }
    })
    arr[i] = arr1
    }
  return arr
 
}
function count_visites(arr){
  var visit_count = []
  for(i=0;i<arr.length;i++){
    visit_count[i] = arr[i].length
  }
  return visit_count;
}
function generate_Y_axis_vals(arr){
  var biggestVal =0;
  var y_values=[];
  var firstVal = 0;
    for(i=0;i<arr.length;i++){
      
        if(arr[i].length>biggestVal){
          biggestVal = arr[i].length
      }
    }
    if(biggestVal % 4 == 0){
      firstVal = biggestVal/4;
      for(i=1;i<5;i++){
        y_values.push(firstVal*i)
      }
    }else{
      firstVal = ((4 - (biggestVal % 4))+ biggestVal)/4
      for(i=1;i<5;i++){
        y_values.push(firstVal*i)
      }
    }
    return y_values;
}
function add_Y_axis_vals(array){
    for(i=0;i<array.length;i++){
        document.getElementById(`V_number_${i+1}`).innerHTML = array[i];
    }
}
function generate_X_axis_vals(){
  var todayDate = new Date()
  var datesArray = []
  
  for(i=15;i>0;i--){
    var date = moment(todayDate).subtract(i-1, 'days').format('MM[-]DD')
    datesArray.push(date)   
  }
  return datesArray
}
function add_X_axis_vals(array){
  
    for(i=0;i<array.length;i++){
        document.getElementById(`date_${i+1}`).innerHTML = array[i];
    }
}



$( document ).ready(function() {
  
// ++++++++++++++++++++++++++++++++++++++landing page script +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// change profile picture according to the screen width 

  if($(window).width()<= 992){
    $("#myPhoto").attr("src", "./portraitmobile.png");
   }else{
    $("#myPhoto").attr("src", "./portrait.png");
   }



// hello svg animation 
// var st0L = $("#st0").get(0).getTotalLength();
// var st1L = $("#st1").get(0).getTotalLength();
// var st2L = $("#st2").get(0).getTotalLength();


// $("#st0").css({ "stroke-dasharray": st0L, "stroke-dashoffset": st0L });
// $("#st1").css({ "stroke-dasharray": st1L, "stroke-dashoffset": st1L });
// $("#st2").css({ "stroke-dasharray": st2L, "stroke-dashoffset": st2L });
// $("#descreption").css({ opacity: 0 });
// $("#socialMedia").css({ opacity: 0 });

// $("#st0").animate({ "stroke-dashoffset": "0px" }, 500, function () {
//   $("#st1").animate({ "stroke-dashoffset": "0px" }, 1000, function () {
//     $("#st2").animate({ "stroke-dashoffset": "0px" }, 2200);
//   });
// });
// setTimeout(() => {
//   $("#socialMedia").animate({ opacity: 1 }, 1300);
//   $("#descreption").animate({ opacity: 1 }, 1300);
// }, 3700);


// social media icons animation on hover 
$("#twitterLogo").on({
  mouseenter: function () {
    $("#twitterLogo").attr("src", "./twiterlogo_filled.png");
    $("#twitterLogo").css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
  },
  mouseleave: function () {
    $("#twitterLogo").attr("src", "./twiterlogo_black.png");

  },
});
$("#inLogo").on({
  mouseenter: function () {
    $("#inLogo").attr("src", "./linkedinlogo_filled.png");
    $("#inLogo").css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
  },
  mouseleave: function () {
    $("#inLogo").attr("src", "./linkedinlogo_black.png");
  },
});
$("#gitLogo").on({
  mouseenter: function () {
    $("#gitLogo").attr("src", "./githublogo_filled.png");
    $("#gitLogo").css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
  },
  mouseleave: function () {
    $("#gitLogo").attr("src", "./githublogo_black.png");

  },
});


// hamburger menu 
var hamState = false;
$( window ).resize(function() {
 if($(".container").width()> 576){
  $("#name").removeAttr( 'style' )
  $(".navbarBTN").removeAttr( 'style' )
  $(".navbar").removeAttr( 'style' )
  $(".navbarBTNS").removeAttr( 'style' )
  $("#line1").removeAttr( 'style' )
  $("#line2").removeAttr( 'style' )
  $("#line3").removeAttr( 'style' )
  hamState = false;
 } 
 if($(".container").width()<= 992){
  $("#myPhoto").attr("src", "./portraitmobile.png");
 }else{
  $("#myPhoto").attr("src", "./portrait.png");
 }
});

$("#hamburgerM").on("click", function (e) {
  e.preventDefault();
  if (!hamState) {
    $("#line2").css({
      "animation": "turn 1s ease forwards",
      "transform-origin": "center",
      "transform-box": "fill-box",
    });

    $("#line1").css({
      "animation": "turnSr 1s ease forwards",
      "transform-origin": "right top",
      "transform-box": "fill-box",
    });
    $("#line3").css({
      "animation": "turnSl 1s ease forwards",
      "transform-origin": "left top",
      "transform-box": "fill-box",
    });
    $("#name").hide()
    $(".navbarBTN").fadeIn(1200)
    $(".navbar").css({"grid-template-columns":  "max-content auto"})
    $(".navbarBTNS").css({
      "grid-template-columns": "repeat(3 ,auto) max-content",
      "justify-items": "center",
    })
  


    hamState = true;
  } else {
    $("#line2").css({
      "animation": "turnRev 1s ease forwards",
      "transform-origin": "center",
      "transform-box": "fill-box",
    });

    $("#line1").css({
      "animation": "turnSrRev 1s ease forwards",
      "transform-origin": "right top",
      "transform-box": "fill-box",
    });
    $("#line3").css({
      "animation": "turnSlRev 1s ease forwards",
      "transform-origin": "left top",
      "transform-box": "fill-box",
    });
    $("#name").fadeIn(1200)
    $(".navbarBTN").hide()
    $(".navbar").css({"grid-template-columns":  "repeat(2,max-content) auto"})
    $(".navbarBTNS").css({
      "grid-template-columns": "auto",
      "justify-items": "end",
    })
    hamState = false;
  }
});



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++Work page script ++++++++++++++++++++++++++++++++++++++++++
  
var workData = [
  {
    id : "1" ,
    img : "./sq-website1.jpg",
    title : "Google Book Search",
    desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem quae minus est libero mollitia!"
  },
  {
    id : "2" ,
    img : "./sq-website1.jpg",
    title : "Google Book Search",
    desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem quae minus est libero mollitia!"
  },
  {
    id : "3" ,
    img : "./sq-website1.jpg",
    title : "Google Book Search",
    desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem quae minus est libero mollitia!"
  },
  {
    id : "4" ,
    img : "./sq-website1.jpg",
    title : "Google Book Search",
    desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem quae minus est libero mollitia!"
  },
  {
    id : "5" ,
    img : "./sq-website1.jpg",
    title : "Google Book Search",
    desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem quae minus est libero mollitia!"
  },
  {
    id : "6" ,
    img : "./sq-website1.jpg",
    title : "Google Book Search",
    desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem quae minus est libero mollitia!"
  },
]

  $("#leftArrow").on("click",function(){

    let projectId = parseInt($("#workDesDiv").data("id")) 
    
    if(projectId > 0){
      $("#rightArrow").show()
      workCardAnimmation('hide')
      projectId = projectId - 1;
      $("#workDesDiv").data('id', projectId)
      $("#workTitle").html(workData[projectId].title)
      $("#workOvv").html(workData[projectId].desc)
      $("#workImg").html(workData[projectId].img)
      workCardAnimmation('show')
    }else{
      $("#leftArrow").hide()
    }
  })
$("#rightArrow").on("click",function(){
  let projectId = parseInt($("#workDesDiv").data("id") )
  if(projectId < workData.length-1){
    $("#leftArrow").show()
    workCardAnimmation('hide')
    projectId = projectId + 1;
    $("#workDesDiv").data('id', projectId)
    console.log(parseInt($("#workDesDiv").data("id") ))
    $("#workTitle").html(workData[projectId].title)
    $("#workOvv").html(workData[projectId].desc)
    $("#workImg").html(workData[projectId].img)
    workCardAnimmation('show')
  }else{
    $("#rightArrow").hide()
  }
    
  })
function workCardAnimmation(par){
  if (par== 'show'){
    $("#workImg").fadeIn("ease")
    $("#workTitle").fadeIn("ease")
    $("#workOvv").fadeIn("ease")
  }else if (par == 'hide'){
    $("#workImg").fadeOut("ease")
    $("#workTitle").fadeOut("ease")
    $("#workOvv").fadeOut("ease")
  }
}

});

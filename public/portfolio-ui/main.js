// var st0L = $("#st0").get(0).getTotalLength();
// var st1L = $("#st1").get(0).getTotalLength();
// var st2L = $("#st2").get(0).getTotalLength();

// console.log($(".container").height())

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

// $("#twitterLogo").on({
//   mouseenter: function () {
//     $("#twitterLogo").attr("src", "./twiterlogo_filled.png");
//     $("#twitterLogo").css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
//   },
//   mouseleave: function () {
//     $("#twitterLogo").attr("src", "./twiterlogo_black.png");

//   },
// });
// $("#inLogo").on({
//   mouseenter: function () {
//     $("#inLogo").attr("src", "./linkedinlogo_filled.png");
//     $("#inLogo").css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
//   },
//   mouseleave: function () {
//     $("#inLogo").attr("src", "./linkedinlogo_black.png");
//   },
// });

// $("#gitLogo").on({
//   mouseenter: function () {
//     $("#gitLogo").attr("src", "./githublogo_filled.png");
//     $("#gitLogo").css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
//   },
//   mouseleave: function () {
//     $("#gitLogo").attr("src", "./githublogo_black.png");

//   },
// });
var hamState = false;

$("#hamburgerM").on("click", function (e) {
  e.preventDefault();
  if (!hamState) {
    $("#line2").css({
      "animation": "turn 1s ease forwards",
      "transform-origin": "center",
      "transform-box": "fill-box",
    });

    $("#line1").css({
      "animation": "turnS 1s ease forwards",
      "transform-origin": "right top",
      "transform-box": "fill-box",
    });
    $("#line3").css({
      "animation": "turnS 1s ease forwards",
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
      "animation": "turnSRev 1s ease forwards",
      "transform-origin": "right top",
      "transform-box": "fill-box",
    });
    $("#line3").css({
      "animation": "turnSRev 1s ease forwards",
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

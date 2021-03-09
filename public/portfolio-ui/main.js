var st0L = $("#st0").get(0).getTotalLength();
var st1L = $("#st1").get(0).getTotalLength();
var st2L = $("#st2").get(0).getTotalLength();

$("#st0").css({ "stroke-dasharray": st0L, "stroke-dashoffset": st0L });
$("#st1").css({ "stroke-dasharray": st1L, "stroke-dashoffset": st1L });
$("#st2").css({ "stroke-dasharray": st2L, "stroke-dashoffset": st2L });
$("#descreption").css({ opacity: 0 });
$("#socialMedia").css({ opacity: 0 });

$("#st0").animate({ "stroke-dashoffset": "0px" }, 500, function () {
  $("#st1").animate({ "stroke-dashoffset": "0px" }, 1000, function () {
    $("#st2").animate({ "stroke-dashoffset": "0px" }, 2200);
  });
});
setTimeout(() => {
  $("#socialMedia").animate({ opacity: 1 }, 1300);
  $("#descreption").animate({ opacity: 1 }, 1300);
}, 3700);

$("#twitterLogo").on({
  mouseenter: function () {
    $("#twitterLogo").attr("src", "./twiterlogo_filled.png");
    $("#twitterLogo").css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
  },
  mouseleave: function () {
    $("#twitterLogo").animate({ opacity: 0.5 }, 400, function () {
      $("#twitterLogo").attr("src", "./twiterlogo_black.png");
      $("#twitterLogo").css({ opacity: 1 });
    });
  },
});
$("#inLogo").on({
  mouseenter: function () {
    $("#inLogo").attr("src", "./linkedinlogo_filled.png");
    $("#inLogo").css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
  },
  mouseleave: function () {
    $("#inLogo").animate({ opacity: 0.5 }, 400, function () {
      $("#inLogo").attr("src", "./linkedinlogo_black.png");
      $("#inLogo").css({ opacity: 1 });
    });
  },
});

$("#gitLogo").on({
  mouseenter: function () {
    $("#gitLogo").attr("src", "./githublogo_filled.png");
    $("#gitLogo").css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
  },
  mouseleave: function () {
    $("#gitLogo").animate({ opacity: 0.5 }, 400, function () {
      $("#gitLogo").attr("src", "./githublogo_black.png");
      $("#gitLogo").css({ opacity: 1 });
    });
  },
});

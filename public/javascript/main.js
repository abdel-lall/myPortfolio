// ============================barba js=========================================================================
barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0 , duration: ".5"
      });
    }
  },
  {
    name: 'landingPage-transition',
    from: {
      namespace: ['landingPage']
    },
    to: {
      namespace: ['main']
    }, 
    leave(data) {
      return gsap.to(data.current.container, {
        dutation: '1', y: "-100vh"
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0 , duration: ".5"
      });
    }
  }
],
  views: [
    {
      namespace: 'landingPage',
      beforeEnter(){

      },
      afterEnter(){
        var l1 = $("#a513d6d5cde6a").get(0).getTotalLength();
       

        var shape1 = $("#a513d6d5cde6a")
       
        shape1.css({ "stroke-dasharray": l1, "stroke-dashoffset": l1 });
       

        shape1.animate({ "stroke-dashoffset": "0px" }, 2000)
        
        setTimeout(() => {
          $("#landingpageName").fadeTo( 1000 , 1, function(){
            barba.go("/main")
          } );
        }, 2000);
      
      }
    },
    {
      namespace: "main",
      beforeEnter() {
        
      },
      afterEnter() {
        hamburgerMenu()
        socialMediaHoverEffect();
        SocialMediaLinks();
        // change profile picture according to the screen width
        if ($(window).width() <= 992) {
          $("#myPhoto").attr("src", "./images/portraitmobile.png");
        } else {
          $("#myPhoto").attr("src", "./images/portrait.png");
        }
        //=========================== hello svg animation ============================================================

        var st0L = $("#st0").get(0).getTotalLength();
        var st1L = $("#st1").get(0).getTotalLength();
        var st2L = $("#st2").get(0).getTotalLength();

        $("#st0").css({ "stroke-dasharray": st0L, "stroke-dashoffset": st0L });
        $("#st1").css({ "stroke-dasharray": st1L, "stroke-dashoffset": st1L });
        $("#st2").css({ "stroke-dasharray": st2L, "stroke-dashoffset": st2L });
        $("#descreption").css({ opacity: 0 });
        $("#socialMedia").css({ opacity: 0 });
        $("#myPhoto").css({ opacity: 0 });

        $("#st0").animate({ "stroke-dashoffset": "0px" }, 500, function () {
          $("#st1").animate({ "stroke-dashoffset": "0px" }, 1000, function () {
            $("#st2").animate({ "stroke-dashoffset": "0px" }, 2200);
          });
        });
        setTimeout(() => {
          $("#socialMedia").animate({ opacity: 1 }, 1300);
          $("#descreption").animate({ opacity: 1 }, 1300);
          $("#myPhoto").animate({ opacity: 1 }, 1300);
        }, 3700);
      },
    },
    {
      namespace: "works",
      beforeEnter() {},
      afterEnter() {
        hamburgerMenu()
        var workData = [
          {
            id: "1",
            img: "./images/sq-website1.jpg",
            title: "Google Book Search",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem quae minus est libero mollitia!",
          },
          {
            id: "2",
            img: "./images/sq-website1.jpg",
            title: "Google Book Search",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem quae minus est libero mollitia!",
          },
          {
            id: "3",
            img: "./images/sq-website1.jpg",
            title: "Google Book Search",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem quae minus est libero mollitia!",
          },
          {
            id: "4",
            img: "./images/sq-website1.jpg",
            title: "Google Book Search",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem quae minus est libero mollitia!",
          },
          {
            id: "5",
            img: "./images/sq-website1.jpg",
            title: "Google Book Search",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem quae minus est libero mollitia!",
          },
          {
            id: "6",
            img: "./images/sq-website1.jpg",
            title: "Google Book Search",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem quae minus est libero mollitia!",
          },
        ];

        $("#leftArrow").on("click", function () {
          let projectId = parseInt($("#workDesDiv").data("id"));

          if (projectId > 0) {
            $("#rightArrow").show();
            workCardAnimmation("hide");
            projectId = projectId - 1;
            $("#workDesDiv").data("id", projectId);
            $("#workTitle").html(workData[projectId].title);
            $("#workOvv").html(workData[projectId].desc);
            $("#workImg").html(workData[projectId].img);
            workCardAnimmation("show");
          } else {
            $("#leftArrow").hide();
          }
        });
        $("#rightArrow").on("click", function () {
          let projectId = parseInt($("#workDesDiv").data("id"));
          if (projectId < workData.length - 1) {
            $("#leftArrow").show();
            workCardAnimmation("hide");
            projectId = projectId + 1;
            $("#workDesDiv").data("id", projectId);
            console.log(parseInt($("#workDesDiv").data("id")));
            $("#workTitle").html(workData[projectId].title);
            $("#workOvv").html(workData[projectId].desc);
            $("#workImg").html(workData[projectId].img);
            workCardAnimmation("show");
          } else {
            $("#rightArrow").hide();
          }
        });
      },
    },
    {
      namespace: "contact",
      beforeEnter() {},
      afterEnter() {
        hamburgerMenu()
        socialMediaHoverEffect();
        SocialMediaLinks();
        // ==================================email form =========================================================
        $("#send").on("click", function (e) {
          e.preventDefault();
          console.log($("#fullName").val());
          console.log($("#email").val());
          console.log($("#message").val());
          $("#fullName").css({ "border-bottom-width": "1px" });
          $("#email").css({ "border-bottom-width": "1px" });
          $("#message").css({ "border-bottom-width": "1px" });
          data = {
            name: $("#fullName").val(),
            email: $("#email").val(),
            message: $("#message").val(),
          };

          if (data.name == "" || data.email == "" || data.message == "") {
            if (data.name == "") {
              $("#fullName").css({ "border-bottom-width": "2px" });
            }
            if (data.email == "") {
              $("#email").css({ "border-bottom-width": "2px" });
            }
            if (data.message == "") {
              $("#message").css({ "border-bottom-width": "2px" });
            }
          } else if (!validateEmail(data.email)) {
            $("#email").css({ "border-bottom-width": "2px" });
          }
          // else {
          //   $.ajax({
          //     type: "POST",
          //     url: "/contact",
          //     data: data,
          //   }).then(function (res) {
          //     if (res == "sent") {
          //       $("#b4c5399e-8e88-454a-af31-c29cb5db6be6").css("visibility", "visible");
          //       setTimeout(() => {
          //         $("#b4c5399e-8e88-454a-af31-c29cb5db6be6").css("visibility", "hidden");
          //       }, 1500);
          //     }
          //   });
          // }
        });
      },
    },
  ],
});



// ==========================social media icons links===============================================================
function SocialMediaLinks() {
  $("#twitterLogo").on("click", function (e) {
    e.preventDefault();
    window.open("https://twitter.com/A_Lallouache");
  });
  $("#inLogo").on("click", function (e) {
    e.preventDefault();
    window.open(
      "https://www.linkedin.com/in/abdelmounaim-lallouache-16834a183"
    );
  });
  $("#gitLogo").on("click", function (e) {
    e.preventDefault();
    window.open("https://github.com/abdel-lall");
  });
}

// ==============================email validation function =========================================================
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// ========================================works card animation ====================================================
function workCardAnimmation(par) {
  if (par == "show") {
    $("#workImg").fadeIn("ease");
    $("#workTitle").fadeIn("ease");
    $("#workOvv").fadeIn("ease");
  } else if (par == "hide") {
    $("#workImg").fadeOut("ease");
    $("#workTitle").fadeOut("ease");
    $("#workOvv").fadeOut("ease");
  }
}

// ========================================social media icons hover animation ======================================

function socialMediaHoverEffect() {
  $("#twitterLogo").on({
    mouseenter: function () {
      $("#twitterLogo").attr("src", "./images/twiterlogo_filled.png");
      $("#twitterLogo").css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
    },
    mouseleave: function () {
      $("#twitterLogo").attr("src", "./images/twiterlogo_black.png");
    },
  });
  $("#inLogo").on({
    mouseenter: function () {
      $("#inLogo").attr("src", "./images/linkedinlogo_filled.png");
      $("#inLogo").css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
    },
    mouseleave: function () {
      $("#inLogo").attr("src", "./images/linkedinlogo_black.png");
    },
  });
  $("#gitLogo").on({
    mouseenter: function () {
      $("#gitLogo").attr("src", "./images/githublogo_filled.png");
      $("#gitLogo").css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
    },
    mouseleave: function () {
      $("#gitLogo").attr("src", "./images/githublogo_black.png");
    },
  });
}
// =============================================hamburger menu  ===================================================
function hamburgerMenu() {
  // hamburger menu
  var hamState = false;
  $(window).resize(function () {
    if ($(".container").width() > 576) {
      $("#name").removeAttr("style");
      $(".navbarBTN").removeAttr("style");
      $(".navbar").removeAttr("style");
      $(".navbarBTNS").removeAttr("style");
      $("#line1").removeAttr("style");
      $("#line2").removeAttr("style");
      $("#line3").removeAttr("style");
      hamState = false;
    }
    if ($(".container").width() <= 992) {
      $("#myPhoto").attr("src", "./images/portraitmobile.png");
    } else {
      $("#myPhoto").attr("src", "./images/portrait.png");
    }
  });
  $("#hamburgerM").on("click", function (e) {
    e.preventDefault();
    if (!hamState) {
      $("#line2").css({
        animation: "turn 1s ease forwards",
        "transform-origin": "center",
        "transform-box": "fill-box",
      });

      $("#line1").css({
        animation: "turnSr 1s ease forwards",
        "transform-origin": "right top",
        "transform-box": "fill-box",
      });
      $("#line3").css({
        animation: "turnSl 1s ease forwards",
        "transform-origin": "left top",
        "transform-box": "fill-box",
      });
      $("#name").hide();
      $(".navbarBTN").fadeIn(1200);
      $(".navbar").css({ "grid-template-columns": "max-content auto" });
      $(".navbarBTNS").css({
        "grid-template-columns": "repeat(3 ,auto) max-content",
        "justify-items": "center",
      });

      hamState = true;
    } else {
      $("#line2").css({
        animation: "turnRev 1s ease forwards",
        "transform-origin": "center",
        "transform-box": "fill-box",
      });

      $("#line1").css({
        animation: "turnSrRev 1s ease forwards",
        "transform-origin": "right top",
        "transform-box": "fill-box",
      });
      $("#line3").css({
        animation: "turnSlRev 1s ease forwards",
        "transform-origin": "left top",
        "transform-box": "fill-box",
      });
      $("#name").fadeIn(1200);
      $(".navbarBTN").hide();
      $(".navbar").css({
        "grid-template-columns": "repeat(2,max-content) auto",
      });
      $(".navbarBTNS").css({
        "grid-template-columns": "auto",
        "justify-items": "end",
      });
      hamState = false;
    }
  });
}

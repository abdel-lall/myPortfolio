var j = 0;
var i = 0;
var time;
var interv;
var align;
var noStyle = {
  "margin-left": "0px",
  "border-left": "none",
};

function repeatAnim() {
  clearTimeout(time);
  clearInterval(interv);
  clearTimeout(align);
  $("#li2,#li3,#li4,#li7,#li6").css(noStyle);
  for (i = 0; i < 8; i++) {
    $("#c" + i).hide();
    $("#" + i).empty();
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function selectedPage() {
  var style = {
    "text-decoration": "line-through black",
    "text-decoration-thickness": "1px",
    color: "#22212a",
    "margin-top": "6px",
    "mix-blend-mode": "multiply",
    "font-weight": "400",
  };
  $("#about").css(style);
  $("#portfolio2").css(style);
  $("#contact3").css(style);
}

function writer(a, b) {
  var style = {
    "margin-left": "30px",
    "border-left": "solid 1px #000000",
  };
  var styleMobile = {
    "margin-left": "15px",
    "border-left": "solid 1px #000000",
  };
  var txt = [
    "<div>",
    "<h1>",
    "I'm Abdelmounaim Lallouache",
    "</h1>",
    "<p>",
    "I'm a full-stack web devoloper. I care deeply about creating useful and beautiful websites. I like to be involved at different stages of a project, from the front-end to the back-end.",
    "</p>",
    "</div>",
  ];
  var speed = 120;

  if (b < txt[a].length) {
    $("#c" + a).show();
    $("#" + a).append(txt[a].charAt(b));
    b++;
    time = setTimeout(function () {
      writer(a, b);
    }, speed);
  } else {
    if (a < txt.length - 1) {
      b = 0;
      $("#c" + a).hide();
      a++;
      writer(a, b);
    } else {
      console.log("done");
      interv = setInterval(() => {
        $("#c7").toggle();
      }, 500);

      align = setTimeout(function () {
        if ($("#code").width() > 350) {
          $("#li2,#li3,#li4,#li7,#li6").css(style);
        } else {
          $("#li2,#li3,#li4,#li7,#li6").css(styleMobile);
        }
      }, 500);
    }
  }
}

barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
  views: [
    {
      namespace: "about",
      beforeEnter() {
        repeatAnim();
      },
      afterEnter() {
        selectedPage();
        writer(0, 0);
      },
    },
    {
      namespace: "portfolio",
      beforeEnter() {},
      afterEnter() {
        selectedPage();
      },
    },
    {
      namespace: "contact",
      beforeEnter() {
        $(".fa-check-circle").css("visibility", "hidden");
      },
      afterEnter() {
        selectedPage();
        $("#btnSend").on("click", function (e) {
          e.preventDefault();
          $("#name").css({ "border-color": "white" });
          $("#email").css({ "border-color": "white" });
          $("#message").css({ "border-color": "white" });
          data = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val(),
          };

          if (data.name == "" || data.email == "" || data.message == "") {
            if (data.name == "") {
              $("#name").css({ "border-color": "red" });
            }
            if (data.email == "") {
              $("#email").css({ "border-color": "red" });
            }
            if (data.message == "") {
              $("#message").css({ "border-color": "red" });
            }
          } else if (!validateEmail(data.email)) {
            $("#email").css({ "border-color": "red" });
          } else {
            $.ajax({
              type: "POST",
              url: "/contact",
              data: data,
            }).then(function (res) {
              if (res == "sent") {
                $(".fa-check-circle").css("visibility", "visible");
                setTimeout(() => {
                  $(".fa-check-circle").css("visibility", "hidden");
                }, 1500);
              }
            });
          }
        });
      },
    },
  ],
});

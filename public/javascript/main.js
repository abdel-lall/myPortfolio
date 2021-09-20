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
                    opacity: 0,
                    duration: ".5"
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
                    dutation: '1',
                    y: "-100vh"
                });
            },
            enter(data) {
                return gsap.from(data.next.container, {
                    opacity: 0,
                    duration: ".5"
                });
            }
        }
    ],
    views: [{
            namespace: 'landingPage',
            beforeEnter() {

            },
            afterEnter() {
                // =========================================landing page logo animation =================================
                var l1 = $("#a513d6d5cde6a").get(0).getTotalLength();
                var shape1 = $("#a513d6d5cde6a")

                shape1.css({ "stroke-dasharray": l1, "stroke-dashoffset": l1 });
                shape1.animate({ "stroke-dashoffset": "0px" }, 2000)
                setTimeout(() => {
                    $("#landingpageName").fadeTo(1000, 1, function() {
                        barba.go("/main")
                    });
                }, 2000);

            }
        },
        {
            namespace: "main",
            beforeEnter() {

            },
            afterEnter() {
                hamburgerMenu('Main')
                socialMediaHoverEffect('Main');
                SocialMediaLinks('Main');
                // change profile picture according to the screen width
                // if ($(window).width() <= 992) {
                //   $("#myPhoto").attr("src", "./images/portraitmobile.png");
                // } else {
                //   $("#myPhoto").attr("src", "./images/portrait.png");
                // }
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

                $("#st0").animate({ "stroke-dashoffset": "0px" }, 500, function() {
                    $("#st1").animate({ "stroke-dashoffset": "0px" }, 1000, function() {
                        $("#st2").animate({ "stroke-dashoffset": "0px" }, 2200);
                    });
                });
                setTimeout(() => {
                    $("#socialMedia").animate({ opacity: 1 }, 1500);
                    $("#descreption").animate({ opacity: 1 }, 1500);
                    $("#myPhoto").animate({ opacity: 1 }, 1500);
                }, 3700);
            },
        },
        {
            namespace: "works",
            beforeEnter() {},
            afterEnter() {
                hamburgerMenu('Works')
                var workData = [{
                        id: "1",
                        img: "./images/website1.png",
                        title: "Job Hunter",
                        desc: "Job hunter is an app that helps the users to organize their job seacrh by keeping track of their job applications, It also allows them to search for job positions posted on indeed.com.",
                        readme: 'https://github.com/abdel-lall/job-hunter/blob/master/README.md',
                        linkWebsite: 'https://job-hunter-al.herokuapp.com/'
                    },
                    {
                        id: "2",
                        img: "./images/website2.png",
                        title: "Trivia Game",
                        desc: "Trivia game gives the player ten random questions, one at a time. the player has 15 sec to answer, each time he answers the game tells him if he got answer right.at the end it displays the final score",
                        readme: 'https://github.com/abdel-lall/TriviaGame/blob/master/README.md',
                        linkWebsite: 'https://abdel-lall.github.io/TriviaGame/'
                    },
                    {
                        id: "3",
                        img: "./images/website3.png",
                        title: "Clicky Game",
                        desc: "Clicky game is a memory game, it starts by showing twelve cards to the player to click on, after each click the game shuffles the cards. if the player clicks at the same card twice he loses the game.",
                        readme: 'https://github.com/abdel-lall/Clicky-Game/blob/master/README.md',
                        linkWebsite: 'https://abdel-lall.github.io/Clicky-Game/'
                    },
                    {
                        id: "4",
                        img: "./images/website4.jpg",
                        title: "Google Book Search",
                        desc: "Google Book Search an app that alows the users to search for books via the Google Books API, and gives them option to view the books on Google Books, or save the books.",
                        readme: 'https://github.com/abdel-lall/-Google-Books-Search-app/blob/master/README.md',
                        linkWebsite: 'https://google-books-search-app-react.herokuapp.com/'
                    },
                    {
                        id: "5",
                        img: "./images/website5.png",
                        title: "Hangman",
                        desc: "hangman is word guessing game.It displays 10 blured picture of known figures in the tech industry one at a time and asks the the player to guess the name of the person in the picture.",
                        readme: 'https://github.com/abdel-lall/hangman/blob/master/README.md',
                        linkWebsite: 'https://abdel-lall.github.io/hangman/'
                    },

                ];

                $("#leftArrow").on("click", function(e) {
                    e.preventDefault()
                    let workId = parseInt($("#workDesDiv").attr("data-id"));
                    workId = workId - 1;
                    if (workId > -1) {
                        $("#rightArrow").show();
                        let newid = workId.toString()
                        $("#workDesDiv").attr("data-id", newid);
                        $("#workDesDiv").fadeOut(500, function() {
                            $("#workTitle").html(workData[workId].title);
                            $("#workOvv").html(workData[workId].desc);
                            $("#workImg").attr("src", workData[workId].img);
                            $("#readM").attr('href', workData[workId].readme)
                            $("#visitWeb").attr('href', workData[workId].linkWebsite)
                            $("#workDesDiv").fadeIn(500)
                        })


                    }
                    if (workId == 0) {
                        $("#leftArrow").hide();
                    }
                });
                $("#rightArrow").on("click", function(e) {
                    e.preventDefault()
                    let workId = parseInt($("#workDesDiv").attr("data-id"));
                    workId = workId + 1
                    if (workId < workData.length) {
                        $("#leftArrow").show();
                        let newid = workId.toString()
                        $("#workDesDiv").attr("data-id", newid);
                        $("#workDesDiv").fadeOut(500, function() {
                            $("#workTitle").html(workData[workId].title);
                            $("#workOvv").html(workData[workId].desc);
                            $("#workImg").attr('src', workData[workId].img);
                            $("#readM").attr('href', workData[workId].readme)
                            $("#visitWeb").attr('href', workData[workId].linkWebsite)
                            $("#workDesDiv").fadeIn(500)
                        })
                    }
                    if (workId == workData.length - 1) {
                        $("#rightArrow").hide();
                    }
                });
            },
        },
        {
            namespace: "contact",
            beforeEnter() {},
            afterEnter() {
                hamburgerMenu('Contact')
                socialMediaHoverEffect('Contact');
                SocialMediaLinks('Contact');
                // ==================================email form =========================================================
                $("#send").on("click", function(e) {
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
                    } else {
                        $.ajax({
                            type: "POST",
                            url: "/contact",
                            data: data,
                        }).then(function(res) {
                            if (res) {
                                $("#b4c5399e-8e88-454a-af31-c29cb5db6be6").css("visibility", "visible");
                                setTimeout(() => {
                                    $("#b4c5399e-8e88-454a-af31-c29cb5db6be6").css("visibility", "hidden");
                                }, 1500);
                            }
                        });
                    }
                });
            },
        },
    ],
});



// ==========================social media icons links===============================================================
function SocialMediaLinks(pageName) {
    $("#twitterLogo" + pageName).on("click", function(e) {
        e.preventDefault();
        window.open("https://twitter.com/A_Lallouache");
    });
    $("#inLogo" + pageName).on("click", function(e) {
        e.preventDefault();
        window.open(
            "https://www.linkedin.com/in/abdelmounaim-lallouache-16834a183"
        );
    });
    $("#gitLogo" + pageName).on("click", function(e) {
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

function socialMediaHoverEffect(pageName) {
    $("#twitterLogo" + pageName).on({
        mouseenter: function() {
            $("#twitterLogo" + pageName).attr("src", "./images/twiterlogo_filled.png");
            $("#twitterLogo" + pageName).css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
        },
        mouseleave: function() {
            $("#twitterLogo" + pageName).attr("src", "./images/twiterlogo_black.png");
        },
    });
    $("#inLogo" + pageName).on({
        mouseenter: function() {
            $("#inLogo" + pageName).attr("src", "./images/linkedinlogo_filled.png");
            $("#inLogo" + pageName).css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
        },
        mouseleave: function() {
            $("#inLogo" + pageName).attr("src", "./images/linkedinlogo_black.png");
        },
    });
    $("#gitLogo" + pageName).on({
        mouseenter: function() {
            $("#gitLogo" + pageName).attr("src", "./images/githublogo_filled.png");
            $("#gitLogo" + pageName).css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
        },
        mouseleave: function() {
            $("#gitLogo" + pageName).attr("src", "./images/githublogo_black.png");
        },
    });



}
// =============================================hamburger menu  ===================================================
function hamburgerMenu(pageName) {
    // hamburger menu
    var hamState = false;
    $(window).resize(function() {
        if ($(".container").width() > 576) {
            $("#name" + pageName).removeAttr("style");
            $(".navbarBTN").removeAttr("style");
            $(".navbar").removeAttr("style");
            $(".navbarBTNS").removeAttr("style");
            $("#line1" + pageName).removeAttr("style");
            $("#line2" + pageName).removeAttr("style");
            $("#line3" + pageName).removeAttr("style");
            hamState = false;
        }

    });
    $("#hamburgerM" + pageName).on("click", function(e) {
        e.preventDefault();
        if (!hamState) {
            $("#line2" + pageName).css({
                animation: "turn 1s ease forwards",
                "transform-origin": "center",
                "transform-box": "fill-box",
            });

            $("#line1" + pageName).css({
                animation: "turnSr 1s ease forwards",
                "transform-origin": "right top",
                "transform-box": "fill-box",
            });
            $("#line3" + pageName).css({
                animation: "turnSl 1s ease forwards",
                "transform-origin": "left top",
                "transform-box": "fill-box",
            });
            $("#name" + pageName).hide();
            $(".navbarBTN").fadeIn(1200);
            $(".navbar").css({ "grid-template-columns": "max-content auto" });
            $(".navbarBTNS").css({
                "grid-template-columns": "repeat(3 ,auto) max-content",
                "justify-items": "center",
            });

            hamState = true;
        } else {
            $("#line2" + pageName).css({
                animation: "turnRev 1s ease forwards",
                "transform-origin": "center",
                "transform-box": "fill-box",
            });

            $("#line1" + pageName).css({
                animation: "turnSrRev 1s ease forwards",
                "transform-origin": "right top",
                "transform-box": "fill-box",
            });
            $("#line3" + pageName).css({
                animation: "turnSlRev 1s ease forwards",
                "transform-origin": "left top",
                "transform-box": "fill-box",
            });
            $("#name" + pageName).fadeIn(1200);
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
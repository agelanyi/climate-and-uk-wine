// variables
var $header_top = $(".header-top");
var $nav = $("nav");

// toggle menu
$header_top.find("a").on("click", function () {
  $(this).parent().toggleClass("open-menu");
});

// fullpage customization
$("#fullpage").fullpage({
  // AG: we are telling fullpage that there are a few element classes where
  // we have overflowing text and we'd like to use normal scrolling
  // Ref: https://alvarotrigo.com/fullPage/help/make-an-element-scrollable-inside-a-fullpage-js-section-or-slide/
  normalScrollElements: '.paragraph-ref, .paragraph-main-scroll',
  sectionsColor: [
    "#2DC4B2",
    "#669EC4",
    "#669EC4",
    "#DCDBE9",
    "#A2719B",
    "#DCDBE9",
    "#2DC4B2",
    "#A2719B",
    "#DCDBE9",
    "#DCDBE9",
    "#A2719B",
    "#AA5E79",
    "#2DC4B2",
    "#669EC4",
    "#669EC4",
    "#DCDBE9",
    "#A2719B",
    "#AA5E79",
  ]
  ],
  sectionSelector: ".vertical-scrolling",
  slideSelector: ".horizontal-scrolling",
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: [
    "firstSection",
    "secondSection",
    "thirdSection",
    "fourthSection",
    "fifthSection",
    "sixthSection",
    "seventhSection",
    "eighthSection",
    "ninethSection",
    "tenthSection",
    "eleventhSection",
    "twelfthSection",
    "thirteenthSection",
    "fourteenthSection",
    "fifteenthSection",
    "sixteenthSection",
    "seventeenthSection",
  ],
  menu: "#menu",

  afterLoad: function (anchorLink, index) {
    $header_top.css("background", "transparent");
    $nav.css("background", "#3F571A");
    if (index == 14) {
      $("#fp-nav").hide();
    }
  },

  onLeave: function (index, nextIndex, direction) {
    if (index == 14) {
      $("#fp-nav").show();
    }
  },

  afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
    if (anchorLink == "fourteenthSection" && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, "up");
      $header_top.css("background", "transparent");
      $nav.css("background", "transparent");
      $(this).css("background", "#374140");
      $(this).find("h2").css("color", "white");
      $(this).find("h3").css("color", "white");
      $(this).find("p").css({
        color: "#a9a9a9",
        opacity: 1,
        transform: "translateY(0)",
      });
    }
  },

  onSlideLeave: function (anchorLink, index, slideIndex, direction) {
    if (anchorLink == "fourteenthSection" && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, "up");
      $header_top.css("background", "rgba(0, 47, 77, .3)");
      $nav.css("background", "rgba(0, 47, 77, .25)");
    }
  },
});

// Add screen toggle

let myDocument = document.documentElement;
let btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    if(btn.textContent == "Click to Go Fullscreen"){
        if (myDocument.requestFullscreen) {
            myDocument.requestFullscreen();
        } 
        else if (myDocument.msRequestFullscreen) {
            myDocument.msRequestFullscreen();
        } 
        else if (myDocument.mozRequestFullScreen) {
            myDocument.mozRequestFullScreen();
        }
        else if(myDocument.webkitRequestFullscreen) {
            myDocument.webkitRequestFullscreen();
        }
        btn.textContent = "Click to Exit Fullscreen";
    }
    else{
        if(document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if(document.msexitFullscreen) {
            document.msexitFullscreen();
        }
        else if(document.mozexitFullscreen) {
            document.mozexitFullscreen();
        }
        else if(document.webkitexitFullscreen) {
            document.webkitexitFullscreen();
        }
        btn.textContent = "Click to Go Fullscreen";
    }
});

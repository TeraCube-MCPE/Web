/*!
    * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict


var SNOW_Picture = "img/snow4.gif"  
var SNOW_no = 15;  
  
var SNOW_browser_IE_NS = (document.body.clientHeight) ? 1 : 0;  
var SNOW_browser_MOZ = (self.innerWidth) ? 1 : 0;  
var SNOW_browser_IE7 = (document.documentElement.clientHeight) ? 1 : 0;  
  
var SNOW_Time;  
var SNOW_dx, SNOW_xp, SNOW_yp;  
var SNOW_am, SNOW_stx, SNOW_sty;   
var i, SNOW_Browser_Width, SNOW_Browser_Height;  
  
if (SNOW_browser_IE_NS)  
{  
    SNOW_Browser_Width = document.body.clientWidth;  
    SNOW_Browser_Height = document.body.clientHeight;  
}  
else if (SNOW_browser_MOZ)  
{  
    SNOW_Browser_Width = self.innerWidth - 20;  
    SNOW_Browser_Height = self.innerHeight;  
}  
else if (SNOW_browser_IE7)  
{  
    SNOW_Browser_Width = document.documentElement.clientWidth;  
    SNOW_Browser_Height = document.documentElement.clientHeight;  
}  
  
SNOW_dx = new Array();  
SNOW_xp = new Array();  
SNOW_yp = new Array();  
SNOW_am = new Array();  
SNOW_stx = new Array();  
SNOW_sty = new Array();  
  
for (i = 0; i < SNOW_no; ++ i)   
{   
    SNOW_dx[i] = 0;   
    SNOW_xp[i] = Math.random()*(SNOW_Browser_Width-50);  
    SNOW_yp[i] = Math.random()*SNOW_Browser_Height;  
    SNOW_am[i] = Math.random()*20;   
    SNOW_stx[i] = 0.02 + Math.random()/10;  
    SNOW_sty[i] = 0.7 + Math.random();  
    if (i == 0) document.write("<\div id=\"SNOW_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><a href=\"http://www.teracube.eu/vote\" target=\"_blank\"><\img src=\""+SNOW_Picture+"\" border=\"0\"></a><\/div>");  
    else document.write("<\div id=\"SNOW_flake"+ i +"\" style=\"position: absolute; z-index: "+ i +"; visibility: visible; top: 15px; left: 15px;\"><\img src=\""+SNOW_Picture+"\" border=\"0\"><\/div>");  
}  
  
function SNOW_Weather()   
{   
  
for (i = 0; i < SNOW_no; ++ i)   
{   
    SNOW_yp[i] += SNOW_sty[i];  
  
    if (SNOW_yp[i] > SNOW_Browser_Height-50)   
    {  
        SNOW_xp[i] = Math.random()*(SNOW_Browser_Width-SNOW_am[i]-30);  
        SNOW_yp[i] = 0;  
        SNOW_stx[i] = 0.02 + Math.random()/10;  
        SNOW_sty[i] = 0.7 + Math.random();  
    }  
  
    SNOW_dx[i] += SNOW_stx[i];  
  
    document.getElementById("SNOW_flake"+i).style.top=SNOW_yp[i]+"px";  
    document.getElementById("SNOW_flake"+i).style.left=SNOW_xp[i] + SNOW_am[i]*Math.sin(SNOW_dx[i])+"px";  
}  
  
SNOW_Time = setTimeout("SNOW_Weather()", 10);  
  
}  
  
SNOW_Weather(); 
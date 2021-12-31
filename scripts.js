// HAMBURGER MENU //
const navMenuIcon1 = $(".menu-icon-1"); //triple bar menu icon
const navMenuIcon2 = $(".menu-icon-2"); //martini glass menu icon
const navBarSlideout = $(".nav-bar"); //menu links (i.e. Menu, Contact, Home)

//function attached to 'click' event listener for mobile menu dropdown (click event applied in html)
function mobileMenuClick1() {
    navMenuIcon2.slideDown(); //appear martini menu menu icon
    navMenuIcon1.css("display", "none");//hide triple line menu icon
    navBarSlideout.removeClass("hidden");
    navBarSlideout.addClass("show");//slide out menu links from navabr
};
function mobileMenuClick2() {
  navMenuIcon2.css("display", "none");//hide martini glass menu icon
  navMenuIcon1.slideDown();//appear triple line menu icon
  navBarSlideout.addClass("hidden");
  navBarSlideout.removeClass("show");//hide menu links slideout
};
//function for mouseover event listener for menu icons
function mobileMenuMouseover() {
$(".menu-icon-1").css("color","#BBA484");
$(".menu-icon-2").css("color","#BBA484");
};

function mobileMenuMouseleave() {
$(".menu-icon-1").css("color","#fff");
$(".menu-icon-2").css("color","#fff");
};

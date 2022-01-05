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

// Scrolling Animations
window.addEventListener("scroll", function() {
  let culinaryTextContent = $(".culinary-text-div");

  var windowPosition = window.scrollY > 300
  //toggling animation classes for scrolling listener

  culinaryTextContent.toggleClass("js-slide", windowPosition);

});

window.addEventListener("scroll", function() {
  var windowPosition = window.scrollY > 1100
  //toggling animation classes for scrolling listener

  $(".slide1").toggleClass("js-slide", windowPosition);
  $(".slide4").toggleClass("js-slide", windowPosition);

  $(".slide2").toggleClass("js-slide2", windowPosition);
  $(".slide3").toggleClass("js-slide2", windowPosition);
});
// Menu-btn hover listener
// $('.menuObjects').mouseover(function (event) {
//   $(".menu-btn-title").css("display", "block");
// });

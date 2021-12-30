// HAMBURGER MENU //
const navMenuIcon1 = $(".menu-icon-1"); //triple bar menu icon
const navMenuIcon2 = $(".menu-icon-2"); //double bar menu icon
const pageLinkMenu = $("#nav-links"); //menu links (i.e. Menu, Contact, Home)

//function attached to 'click' event listener for mobile menu dropdown (click event applied in html)
function mobileMenuClick1() {
    navMenuIcon2.slideDown(); //appear double line menu icon
    navMenuIcon1.css("display", "none");//hide triple line menu icon
    pageLinkMenu.slideDown();//slide down menu links from navabr
};
function mobileMenuClick2() {
  navMenuIcon2.css("display", "none");//hide double line menu icon
  navMenuIcon1.slideDown();//appear triple line menu icon
  pageLinkMenu.slideUp();//hide menu links dropdown
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

// Hover Effect for Menu Images on Desktop
$(".menu-img-container").on("mouseover", function(event){
for (let i=0, i < 5, i++) {

}
});

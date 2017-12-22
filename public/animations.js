// // Hide Header on on scroll down
// let didScroll;
// let lastScrollTop = 0;
// let navbarHeight = $('header').outerHeight();
//
// $(window).scroll(function(event){
//     didScroll = true;
// });
//
// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);
//
// function hasScrolled() {
//     let st = $(this).scrollTop();
//
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop){
//        $('header').removeClass('nav-down').addClass('nav-up');
//     } else {
//       $('header').removeClass('nav-up').addClass('nav-down');
//     }
//     lastScrollTop = st;
// }


let title = document.getElementById('title');
let background = document.getElementById('background');

let changeBackground = function() {
  document.getElementById('background').style.backgroundImage = "url(../Dan-hands.jpg) no-repeat center center fixed";
  document.getElementById('background').style.backgroundSize = "cover";
};

document.getElementById('title').addEventListener("mouseover", changeBackground);

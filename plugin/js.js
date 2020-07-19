function toSection2() {
  document.getElementById("section2").scrollIntoView();
}
function toSection3() {
  document.getElementById("section3").scrollIntoView();
}
function toSection4() {
  document.getElementById("section4").scrollIntoView();
}
function toSection5() {
  document.getElementById("section5").scrollIntoView();
}
function toFooter() {
  document.getElementById("footer").scrollIntoView();
}
function toTop() {
  $(window).scrollTop(0);
}

var navbar = document.getElementById("navbar");
var navbarbrand = document.getElementById("navbar-brand");
window.onscroll = function () {
  if (
    document.body.scrollTop >= 70 ||
    document.documentElement.scrollTop >= 70
    ) {
      navbar.classList.add("nav-transparent");
      navbar.classList.remove("nav-colored");
  } else {
    navbar.classList.add("nav-colored");
    navbar.classList.remove("nav-transparent");
  }
};

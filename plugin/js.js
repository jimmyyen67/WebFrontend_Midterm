function toSection2() {
  document.getElementById("section2").scrollIntoView();
  document.getElementById("navbarSupportedContent").style.height = "0";
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
      navbarbrand.classList.add("brand-transparent");
      brandbarbrand.classList.remove("brand-colored");
  } else {
    navbar.classList.add("nav-colored");
    navbar.classList.remove("nav-transparent");
    navbarbrand.classList.add("brand-colored");
    navbarbrand.classList.remove("brand-transparent");
  }
};

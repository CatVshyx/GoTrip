$(document).ready(function () {
  const menu = document.querySelector(".hamburger-menu");
  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
  });
  $(".sign-open").click(function () {
    document.getElementById("modal").style.display = "block";
    document.getElementById("sign").style.display = "block";
  });
  $("#exit-sign").click(function () {
    document.getElementById("modal").style.display = "none";
    document.getElementById("sign").style.display = "none";
  });
  $(".hamburger").click(function () {
    if (menu.style.display == "none") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  });
  $("#submit").click(function () {
    console.log();
  });
  const form = document.querySelector("#form-submit");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.form["form-submit"]["email"].value;
    console.log("email");
  });
  window.onresize = function (event) {
    let options = $(".owl-carousel").data("owl.carousel").options;
    if (window.innerWidth <= 1200) {
      options.items = 1;
      $(".owl-carousel").trigger("refresh.owl.carousel");
    } else {
      options.items = 3;
      $(".owl-carousel").trigger("refresh.owl.carousel");
    }
  };
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    sign.style.display = "none";
  }
};
// const form = document.querySelector("#form-submit");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
// });

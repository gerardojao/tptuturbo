"use strict";
var _this = void 0,
  d = document,
  w = window,
  navBar = d.querySelector(".navbar"),
  spanlogo = d.getElementById("spanLogo"),
  link = d.querySelectorAll("a"),
  linkMenu = d.querySelectorAll(".a"),
  panelBtn = d.getElementById("panel-btn"),
  navBarContainer = d.querySelector(".navbar__container"),
  menu = d.querySelector(".menu"),
  $scrollBtn = d.querySelector(".scroll-top-btn"),
  inputs = document.querySelectorAll(".main [required]"),
  form = document.querySelector(".main__form"),
  mensaje = document.getElementById("mensaje"),
  button = document.querySelector(".form__button"),
  label = document.getElementById("label"),
  textarea = document.getElementById("textarea"),
  content = d.querySelector(".content"),
  close = d.querySelector(".close-btn"),
  pModal = d.querySelector(".pattern");

  
panelBtn.addEventListener("click", function () {
  menu.classList.toggle("menu--active"),
    panelBtn.classList.toggle("is-active"),
    linkMenu.forEach(function (e) {
      menu.addEventListener("click", function (e) {
        e.target.offsetParent.classList.contains("menu--active") &&
          (e.target.offsetParent.classList.remove("menu--active"),
          panelBtn.classList.toggle("is-active"));
      });
    });
}),
  w.addEventListener("scroll", function () {
    _this.scrollY > 30
      ? (navBar.classList.add("sticky"),
        spanlogo.classList.replace("navbar__logo--span", "navbar__logo--spanW"),
        link.forEach(function (e) {
          return e.classList.replace("navbar__link--a", "navbar__link--white");
        }))
      : (navBar.classList.remove("sticky"),
        spanlogo.classList.replace("navbar__logo--spanW", "navbar__logo--span"),
        link.forEach(function (e) {
          return e.classList.replace("navbar__link--white", "navbar__link--a");
        })),
      _this.scrollY > 500
        ? ($scrollBtn.classList.remove("hidden"),
          $scrollBtn.addEventListener("click", function () {
            w.scrollTo({ behavior: "smooth", top: 0 });
          }))
        : $scrollBtn.classList.add("hidden");
  }),
  mensaje.addEventListener("keyup", function () {
    mensaje.nextElementSibling.classList.contains("mensaje") &&
      mensaje.nextElementSibling.classList.replace("mensaje", "mensaje-js"),
      mensaje.value.length < 1 &&
        mensaje.nextElementSibling.classList.replace("mensaje-js", "mensaje");
  });
for (
  var _loop = function (e) {
      inputs[e].addEventListener("keyup", function () {
        inputs[e].nextElementSibling.classList.contains("form-label") &&
          inputs[e].nextElementSibling.classList.replace(
            "form-label",
            "form-js"
          ),
          inputs[e].value.length < 1 &&
            inputs[e].nextElementSibling.classList.replace(
              "form-js",
              "form-label"
            );
      });
    },
    i = 0;
  i < inputs.length;
  i++
)
  _loop(i);
d.addEventListener("submit", function (e) {
  e.preventDefault();
  for (var t = 0; t < inputs.length; t++)
    inputs[t].value.length < 1 &&
      inputs[t].nextElementSibling.classList.replace("form-js", "form-label");
  textarea.classList.replace("mensaje-js", "mensaje"),
    fetch("https://formsubmit.co/ajax/gerardojao@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then(function (e) {
        return e.ok ? e.json() : Promise.reject(e);
      })
      .then(function (e) {
        console.log(e),
          content.classList.remove("content__hide"),
          (pModal.innerHTML = " ".concat(inputs[0].value));
      })
      .catch(function (e) {
        console.log(e);
      });
}),
  close.addEventListener("click", function () {
    content.classList.add("content__hide"), form.reset();
  });
var typed = new Typed(".typed", {
    stringsElement: "#strings",
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 90,
    smartBackSpace: !0,
    shufle: !1,
    backDelay: 2500,
    loop: !0,
    loopCount: !1,
    contentType: "html",
  }),
  typed2 = new Typed(".typed2", {
    strings: ["Frontend Developer.", "^1000 Public Accountant ."],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 90,
    smartBackSpace: !0,
    shufle: !1,
    backDelay: 2500,
    loop: !0,
    loopCount: !1,
    contentType: "html",
  });

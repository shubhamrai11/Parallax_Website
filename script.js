const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mtb = document.getElementById("mountains_behind");
const text = document.getElementById("text");
const btn = document.getElementById("btn");
const mtf = document.getElementById("mountains_front");
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.25 + "px";
  mtb.style.top = value * 0.5 + "px";
  mtf.style.left = value * 0 + "px";
  text.style.marginRight = value * 3 + "px";
  text.style.marginTop = value * 1.25 + "px";
  btn.style.marginTop = value * 1.25 + "px";
  header.style.top = value * 0.5 + "px";
});

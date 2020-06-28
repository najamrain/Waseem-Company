document.querySelector(".srv").addEventListener("mouseenter", function () {
  document.querySelector(".services").style.display = "block";
  document.querySelector(".services").style.background = "block";
  document.querySelector(".services").style.display = "grid";
  document.querySelector(".services").style.gridTemplateColumns = "1fr 1fr";
  document.querySelector(".services").style.gridTemplateRows = "280px";
  document.querySelector(".services").style.zIndex = "2";

  // document.querySelector(".services").style.zIndex = "5";
});

document.querySelector(".services").addEventListener("mouseenter", function () {
  document.querySelector(".services").style.display = "block";
  // document.querySelector(".services").style.transitionDelay = "0.5s";
});

document.querySelector(".services").addEventListener("mouseout", function () {
  document.querySelector(".services").style.display = "none";
  // document.querySelector(".services").style.transition = "2s";
});

document.querySelector(".srv").addEventListener("mouseout", function () {
  document.querySelector(".services").style.display = "none";
});

/* code by youtuber*/
function openNav() {
  document.getElementById("myNav").style.height = "100vh";
  document.getElementById("myNav").style.position = "absolute";
  document.getElementById("myNav").style.top = "0";
  document.getElementById("myNav").style.left = "0";
  document.getElementById("myNav").style.bottom = "0";
  document.querySelector(".span").style.display = "none";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.querySelector(".span").style.display = "block";
}

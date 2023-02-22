import xSVG from "./x.svg";
import menuSVG from "./menu.svg";

export function mobileMenuHide() {
  const menuBar = document.getElementById("menuBar");
  const menuIcon = document.getElementById("menuIcon");
  
  menuBar.style.position = "static";
  console.log("Changing position");
  menuBar.style.paddingTop = "1rem";
  menuBar.style.width = "";
  menuBar.setAttribute("class", "flexRow hidden");

  menuIcon.src = menuSVG;
  menuIcon.removeEventListener("click", mobileMenuHide);
  menuIcon.addEventListener("click", mobileMenuShow);
}

export function mobileMenuShow() {
  const menuBar = document.getElementById("menuBar");
  const menuIcon = document.getElementById("menuIcon");

  menuBar.setAttribute("class", "flexColumn centered");
  menuBar.style.position = "absolute";
  menuBar.style.paddingTop = "2rem";
  menuBar.style.width = "100vw";

  menuIcon.src = xSVG;
  menuIcon.removeEventListener("click", mobileMenuShow);
  menuIcon.addEventListener("click", mobileMenuHide);
}

import { mobileMenuHide } from "./toggleMenu";

export default function onResize() {
  let screenWidth = window.screen.width;
  const menuBar = document.getElementById("menuBar");
  const menuIcon = document.getElementById("menuIcon");

  if (menuBar.classList.contains("flexColumn")){
    mobileMenuHide(); // If mobile menu is currently open, since it displays in a column
  }
  

  if (screenWidth < 600) {
    // siteLogo.style.height = "30px";
    // siteLogo.style.width = "30px";
    menuBar.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    
  } else {
    // siteLogo.style.height = "50px";
    // siteLogo.style.width = "50px";
    menuBar.classList.remove("hidden");
    menuIcon.classList.add("hidden");
  }
}
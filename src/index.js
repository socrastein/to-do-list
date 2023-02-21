import "./style.css";

// IMPORTING IMAGES:
// import myImage from './my-image.png'



// IMPORTING MODULES:
// import myFunction from './module'
import loadFooter from "./components/footer/footer";
import loadNavBar from "./components/navbar/navBar";
import onResize from "./components/navbar/navBarResize";
import { mobileMenuHide, mobileMenuShow } from "./components/navbar/toggleMenu";

// CONSTANT ELEMENTS

// EVENT LISTENERS
// For displaying mobile menu when screen < 500px wide
window.addEventListener("resize", onResize);

// RUN FUNCTIONS TO LOAD CONTENT:
console.log("Testing");

loadNavBar();
onResize();

loadFooter();

import "./style.css";

// IMPORTING IMAGES:
// import myImage from './my-image.png'



// IMPORTING MODULES:
// import myFunction from './module'
import loadFooter from "./components/footer/footer";
import loadNavBar from "./components/navbar/navBar";
import onResize from "./components/navbar/navBarResize";
import { mobileMenuHide, mobileMenuShow } from "./components/navbar/toggleMenu";
import { loadRecipeEditor, showRecipeEditor } from "./components/mainDisplay/recipeEditor";


// CONSTANT ELEMENTS
const mainContainer = document.getElementById("mainContainer");

// EVENT LISTENERS
// For displaying mobile menu when screen < 500px wide
window.addEventListener("resize", onResize);

// RUN FUNCTIONS TO LOAD CONTENT:
console.log("Testing");

loadNavBar();
onResize();

loadRecipeEditor();

loadFooter();

// CONSTANT ELEMENTS (created by loading functions)


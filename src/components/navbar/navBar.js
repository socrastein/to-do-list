import menuSVG from "./menu.svg";
// import siteLogo from "./logo.svg";

import { mobileMenuHide, mobileMenuShow } from "./toggleMenu";

export default function loadNavBar() {
  let mainContainer = document.getElementById("mainContainer");

  let navContainer = document.createElement("div");
  navContainer.id = "navContainer";
  navContainer.classList.add("flexRow", "spacedApart");
  mainContainer.appendChild(navContainer);

  let siteTitle = document.createElement("div");
  siteTitle.id = "siteTitle";
  navContainer.appendChild(siteTitle);

  // let siteLogo = document.createElement("img");
  // siteLogo.id = "siteLogo";
  // siteLogo.src = siteLogo;
  // siteTitle.appendChild(siteLogo);

  let siteName = document.createElement("p");
  siteName.id = "siteName";
  siteName.textContent = "Recipe Box";
  siteTitle.appendChild(siteName);

  let menuBar = document.createElement("div");
  menuBar.id = "menuBar";
  menuBar.classList.add("flexRow");
  navContainer.appendChild(menuBar);

  let menuItems = [
    { name: "ITEM 1", onClick: "function1()" }, //TODO: FILL THESE IN
    { name: "ITEM 2", onClick: "function2()" },
    { name: "ITEM 3", onClick: "function3()" },
  ];

  menuItems.forEach((item) => {
    let menuItem = document.createElement("p");
    menuItem.textContent = item.name;
    menuItem.onclick = item.onClick;
    menuItem.classList.add("menuItem");
    menuBar.appendChild(menuItem);
  });

  let menuIcon = document.createElement("img");
  menuIcon.src = menuSVG;
  menuIcon.id = "menuIcon";
  menuIcon.onclick = mobileMenuShow;
  navContainer.appendChild(menuIcon);
}

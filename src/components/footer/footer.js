import githubLogo from "./github.svg";

export default function loadFooter() {
  let footerText = document.createElement("p");
  footerText.textContent = "© 2023 Matt Talley (socrastein)";

  let logoContainer = document.createElement("a");
  logoContainer.href = "https://github.com/socrastein";
  logoContainer.target = "_blank";

  let logoImage = document.createElement("img");
  logoImage.id = "gitLogo";
  logoImage.src = githubLogo;

  const indexFooter = document.getElementsByTagName("footer");

  indexFooter[0].appendChild(footerText);
  indexFooter[0].appendChild(logoContainer);
  logoContainer.appendChild(logoImage);
}

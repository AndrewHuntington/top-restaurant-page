import indexPage from "./indexPage";
import menuPage from "./menuPage";
import contactPage from "./contactPage";
import navbar from "./navbar";
import footer from "./footer";

navbar("home");
indexPage();
footer();

const clearContentDiv = () => {
  let contentDiv = document.querySelector("#content");
  if (contentDiv) {
    contentDiv.innerHTML = "";
  }
};

const homeTab = document.querySelector("#home");
homeTab.addEventListener("click", (e) => {
  clearContentDiv();
  navbar("home");
  indexPage();
});

const menuTab = document.querySelector("#menu");
menuTab.addEventListener("click", (e) => {
  clearContentDiv();
  navbar("menu");
  menuPage();
});

const contactTab = document.querySelector("#contact");
contactTab.addEventListener("click", (e) => {
  clearContentDiv();
  navbar("contact");
  contactPage();
});

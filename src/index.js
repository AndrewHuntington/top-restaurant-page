import indexPage from "./indexPage";
import menuPage from "./menuPage";
import contactPage from "./contactPage";
import navbar from "./navbar";
import footer from "./footer";

navbar("home");
indexPage();

const recreateContentDiv = () => {
  let contentDiv = document.querySelector("#content");
  if (contentDiv) {
    contentDiv.remove();
    contentDiv = document.createElement("div");
    contentDiv.id = "content";
    contentDiv.classList.add("content");
    document.body.appendChild(contentDiv);
  }
};

const homeTab = document.querySelector("#home");
homeTab.addEventListener("click", (e) => {
  recreateContentDiv();
  navbar("home");
  indexPage();
});

const menuTab = document.querySelector("#menu");
menuTab.addEventListener("click", (e) => {
  recreateContentDiv();
  navbar("menu");
  menuPage();
});

const contactTab = document.querySelector("#contact");
contactTab.addEventListener("click", (e) => {
  recreateContentDiv();
  navbar("contact");
  contactPage();
});

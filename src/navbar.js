export default function (highlightTab) {
  if (!document.querySelector("header")) {
    // create DOM Elements
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const navElements = {
      lis: [
        document.createElement("li"),
        document.createElement("li"),
        document.createElement("li"),
      ],
      links: ["home", "menu", "contact"],
    }; //TODO: Add hyperlinks

    //attach header to body
    document.body.appendChild(header);

    // activate nav
    nav.classList.add("navbar");
    header.appendChild(nav);

    // activate ul
    nav.appendChild(ul);

    // activate lis
    //TODO: Add hyperlinks
    navElements.lis.forEach((li, index) => {
      if (highlightTab === navElements.links[index]) {
        li.classList.add("tab-highlighted");
      }
      li.classList.add("nav-item");
      li.id = navElements.links[index];
      li.innerHTML = `
      <a href="#" class="nav-link">${navElements.links[index]}</a>
    `;
      ul.appendChild(li);
    });
  } else {
    const oldHighlightTab = document.querySelector(".tab-highlighted");
    const newHighlightTab = document.querySelector(`#${highlightTab}`);

    oldHighlightTab.classList.remove("tab-highlighted");
    newHighlightTab.classList.add("tab-highlighted");
  }
}

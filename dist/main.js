/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  // create DOM elements
  const content = document.querySelector("#content");
  const contactsDiv = document.createElement("div");
  const headline = document.createElement("h1");
  const contactMethods = {
    Address: "<p>123 Fake Street</p><p>Lehighton, PA 18235</p>",
    Telephone: "<p>(610) 555-0000</p>",
    Email: `<a href="mailto:fakepizza@example.com">fakepizza@example.com</a>`,
  };

  contactsDiv.classList.add("contacts");
  content.appendChild(contactsDiv);

  headline.innerHTML = "CONTACT US";
  headline.classList.add("headline");
  contactsDiv.appendChild(headline);

  for (const key in contactMethods) {
    const h3 = document.createElement("h3");
    h3.classList.add("contact-item");
    h3.innerHTML = `~ ${key} ~`;
    contactsDiv.appendChild(h3);
    const div = document.createElement("div");
    div.classList.add(key.toLowerCase());
    contactsDiv.appendChild(div);
    div.innerHTML = contactMethods[key];
  }
}


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.id = "footer";

  document.body.appendChild(footer);
  // Time to be lazy again...
  footer.innerHTML = `
      <div class="footer-content" id="footer-content">
      <!-- Attributes -->
      <div class="photo-attr">
        <p>
          Photo by
          <a
            href="https://unsplash.com/@giorgiotrovato?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >Giorgio Trovato</a
          >
          on
          <a
            href="https://unsplash.com/s/photos/pizza-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >Unsplash</a
          >
        </p>
      </div>
      <div class="bg-attr">
        <p>
          <a href="https://www.freepik.com/vectors/food"
            >Food vector created by rawpixel.com - www.freepik.com</a
          >
        </p>
      </div>
      <div class="copyright">
        <p>
          Copyright 2021
          <a
            href="https://github.com/AndrewHuntington"
            target="_blank"
            rel="noopener noreferrer"
          >
            Andrew Huntington
          </a>
        </p>
      </div>
    </div>
  `;
}


/***/ }),

/***/ "./src/indexPage.js":
/*!**************************!*\
  !*** ./src/indexPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  // create DOM elements
  const content = document.querySelector("#content");
  const headline = document.createElement("h1");
  const mainImg = document.createElement("img");
  const imgSrc = "./marios-pizza-main.jpg";
  const copy = document.createElement("h2");
  const hours = document.createElement("div");

  headline.innerHTML = "Mario's Pizza";
  headline.classList.add("headline");
  content.appendChild(headline);

  mainImg.src = imgSrc;
  mainImg.classList.add("main-img");
  content.appendChild(mainImg);

  copy.innerHTML = "Come eat the best pizza in the Mushroom Kingdom!";
  copy.classList.add("copy");
  content.appendChild(copy);

  // Too lazy to make and append all the children...
  hours.innerHTML = `
    <h3>~Open Hours~</h3>
    <p class="font-med-it">Monday-Friday</p>
    <p>11:00am - 11:30pm</p>
    <p class="font-med-it">Saturday</p>
    <p>11:00am - 1:00am</p>
    <p class="font-med-it">Sunday</p>
    <p>Closed</p>
  `;
  hours.classList.add("hours");
  content.appendChild(hours);
}


/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  // create DOM Elements
  const content = document.querySelector("#content");
  const headline = document.createElement("h1");
  const menu = document.createElement("div");

  headline.innerHTML = "MENU";
  headline.classList.add("headline");
  content.appendChild(headline);

  // Being lazy again...
  menu.innerHTML = `
    <h2 class="menu-cat">PIZZA</h2>
    <div class="menu-item">
      <span class="food-item">Cheese Pizza</span>
      <span class="spacer"></span>
      <span class="price">$10.75</span>
    </div>
    <div class="menu-item">
      <span class="food-item">The Mario</span>
      <span class="spacer"></span>
      <span class="price">$15.25</span>
    </div>
    <div class="menu-item">
      <span class="food-item">Buffalo Chicken Pizza</span>
      <span class="spacer"></span>
      <span class="price">$13.75</span>
    </div>
    <h2 class="menu-cat">BURGERS</h2>
    <div class="menu-item">
      <span class="food-item">Hamburger</span>
      <span class="spacer"></span>
      <span class="price">$2.90</span>
    </div>
    <div class="menu-item">
      <span class="food-item">Cheeseburger</span>
      <span class="spacer"></span>
      <span class="price">$3.25</span>
    </div>
    <div class="menu-item">
      <span class="food-item">Pizza Burger</span>
      <span class="spacer"></span>
      <span class="price">$3.65</span>
    </div>
    <h2 class="menu-cat">SIDE ORDERS</h2>
    <div class="menu-item">
      <span class="food-item">French Fries</span>
      <span class="spacer"></span>
      <span class="price">$3.40</span>
    </div>
    <div class="menu-item">
      <span class="food-item">Hot Wings (12)</span>
      <span class="spacer"></span>
      <span class="price">$8.50</span>
    </div>
    <div class="menu-item">
      <span class="food-item">Garlic Bread</span>
      <span class="spacer"></span>
      <span class="price">$2.25</span>
    </div>
  </div>
`;
  menu.classList.add("menu");
  content.appendChild(menu);
}


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(highlightTab) {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexPage */ "./src/indexPage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./src/footer.js");






(0,_navbar__WEBPACK_IMPORTED_MODULE_3__.default)("home");
(0,_indexPage__WEBPACK_IMPORTED_MODULE_0__.default)();

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
  (0,_navbar__WEBPACK_IMPORTED_MODULE_3__.default)("home");
  (0,_indexPage__WEBPACK_IMPORTED_MODULE_0__.default)();
});

const menuTab = document.querySelector("#menu");
menuTab.addEventListener("click", (e) => {
  recreateContentDiv();
  (0,_navbar__WEBPACK_IMPORTED_MODULE_3__.default)("menu");
  (0,_menuPage__WEBPACK_IMPORTED_MODULE_1__.default)();
});

const contactTab = document.querySelector("#contact");
contactTab.addEventListener("click", (e) => {
  recreateContentDiv();
  (0,_navbar__WEBPACK_IMPORTED_MODULE_3__.default)("contact");
  (0,_contactPage__WEBPACK_IMPORTED_MODULE_2__.default)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXhQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUFlLHNDQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsSUFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBLDZCQUFlLHNDQUFZO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3Q0EsNkJBQWUsc0NBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQSw2QkFBZSxzQ0FBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQSw2QkFBZSxvQ0FBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHlCQUF5QjtBQUM5RDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLHVEQUF1RCxhQUFhOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzdDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDRjtBQUNNO0FBQ1Y7QUFDQTs7QUFFOUIsZ0RBQU07QUFDTixtREFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdEQUFNO0FBQ1IsRUFBRSxtREFBUztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnREFBTTtBQUNSLEVBQUUsa0RBQVE7QUFDVixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0RBQU07QUFDUixFQUFFLHFEQUFXO0FBQ2IsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAvLyBjcmVhdGUgRE9NIGVsZW1lbnRzXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGNvbnRhY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGNvbnRhY3RNZXRob2RzID0ge1xuICAgIEFkZHJlc3M6IFwiPHA+MTIzIEZha2UgU3RyZWV0PC9wPjxwPkxlaGlnaHRvbiwgUEEgMTgyMzU8L3A+XCIsXG4gICAgVGVsZXBob25lOiBcIjxwPig2MTApIDU1NS0wMDAwPC9wPlwiLFxuICAgIEVtYWlsOiBgPGEgaHJlZj1cIm1haWx0bzpmYWtlcGl6emFAZXhhbXBsZS5jb21cIj5mYWtlcGl6emFAZXhhbXBsZS5jb208L2E+YCxcbiAgfTtcblxuICBjb250YWN0c0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdHNcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdHNEaXYpO1xuXG4gIGhlYWRsaW5lLmlubmVySFRNTCA9IFwiQ09OVEFDVCBVU1wiO1xuICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGxpbmVcIik7XG4gIGNvbnRhY3RzRGl2LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcblxuICBmb3IgKGNvbnN0IGtleSBpbiBjb250YWN0TWV0aG9kcykge1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGgzLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWl0ZW1cIik7XG4gICAgaDMuaW5uZXJIVE1MID0gYH4gJHtrZXl9IH5gO1xuICAgIGNvbnRhY3RzRGl2LmFwcGVuZENoaWxkKGgzKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGtleS50b0xvd2VyQ2FzZSgpKTtcbiAgICBjb250YWN0c0Rpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBjb250YWN0TWV0aG9kc1trZXldO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBmb290ZXIuaWQgPSBcImZvb3RlclwiO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgLy8gVGltZSB0byBiZSBsYXp5IGFnYWluLi4uXG4gIGZvb3Rlci5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWNvbnRlbnRcIiBpZD1cImZvb3Rlci1jb250ZW50XCI+XG4gICAgICA8IS0tIEF0dHJpYnV0ZXMgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwicGhvdG8tYXR0clwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBQaG90byBieVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGdpb3JnaW90cm92YXRvP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiXG4gICAgICAgICAgICA+R2lvcmdpbyBUcm92YXRvPC9hXG4gICAgICAgICAgPlxuICAgICAgICAgIG9uXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9zL3Bob3Rvcy9waXp6YS1yZXN0YXVyYW50P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiXG4gICAgICAgICAgICA+VW5zcGxhc2g8L2FcbiAgICAgICAgICA+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJnLWF0dHJcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL3ZlY3RvcnMvZm9vZFwiXG4gICAgICAgICAgICA+Rm9vZCB2ZWN0b3IgY3JlYXRlZCBieSByYXdwaXhlbC5jb20gLSB3d3cuZnJlZXBpay5jb208L2FcbiAgICAgICAgICA+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvcHlyaWdodFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDb3B5cmlnaHQgMjAyMVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FuZHJld0h1bnRpbmd0b25cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFuZHJldyBIdW50aW5ndG9uXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgLy8gY3JlYXRlIERPTSBlbGVtZW50c1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgbWFpbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGltZ1NyYyA9IFwiLi9tYXJpb3MtcGl6emEtbWFpbi5qcGdcIjtcbiAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGhlYWRsaW5lLmlubmVySFRNTCA9IFwiTWFyaW8ncyBQaXp6YVwiO1xuICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGxpbmVcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gIG1haW5JbWcuc3JjID0gaW1nU3JjO1xuICBtYWluSW1nLmNsYXNzTGlzdC5hZGQoXCJtYWluLWltZ1wiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluSW1nKTtcblxuICBjb3B5LmlubmVySFRNTCA9IFwiQ29tZSBlYXQgdGhlIGJlc3QgcGl6emEgaW4gdGhlIE11c2hyb29tIEtpbmdkb20hXCI7XG4gIGNvcHkuY2xhc3NMaXN0LmFkZChcImNvcHlcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29weSk7XG5cbiAgLy8gVG9vIGxhenkgdG8gbWFrZSBhbmQgYXBwZW5kIGFsbCB0aGUgY2hpbGRyZW4uLi5cbiAgaG91cnMuaW5uZXJIVE1MID0gYFxuICAgIDxoMz5+T3BlbiBIb3Vyc348L2gzPlxuICAgIDxwIGNsYXNzPVwiZm9udC1tZWQtaXRcIj5Nb25kYXktRnJpZGF5PC9wPlxuICAgIDxwPjExOjAwYW0gLSAxMTozMHBtPC9wPlxuICAgIDxwIGNsYXNzPVwiZm9udC1tZWQtaXRcIj5TYXR1cmRheTwvcD5cbiAgICA8cD4xMTowMGFtIC0gMTowMGFtPC9wPlxuICAgIDxwIGNsYXNzPVwiZm9udC1tZWQtaXRcIj5TdW5kYXk8L3A+XG4gICAgPHA+Q2xvc2VkPC9wPlxuICBgO1xuICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiaG91cnNcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG91cnMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAvLyBjcmVhdGUgRE9NIEVsZW1lbnRzXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBoZWFkbGluZS5pbm5lckhUTUwgPSBcIk1FTlVcIjtcbiAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcImhlYWRsaW5lXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcblxuICAvLyBCZWluZyBsYXp5IGFnYWluLi4uXG4gIG1lbnUuaW5uZXJIVE1MID0gYFxuICAgIDxoMiBjbGFzcz1cIm1lbnUtY2F0XCI+UElaWkE8L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZm9vZC1pdGVtXCI+Q2hlZXNlIFBpenphPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzcGFjZXJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+JDEwLjc1PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZm9vZC1pdGVtXCI+VGhlIE1hcmlvPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzcGFjZXJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+JDE1LjI1PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZm9vZC1pdGVtXCI+QnVmZmFsbyBDaGlja2VuIFBpenphPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzcGFjZXJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+JDEzLjc1PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxoMiBjbGFzcz1cIm1lbnUtY2F0XCI+QlVSR0VSUzwvaDI+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmb29kLWl0ZW1cIj5IYW1idXJnZXI8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInNwYWNlclwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4kMi45MDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImZvb2QtaXRlbVwiPkNoZWVzZWJ1cmdlcjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3BhY2VyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPiQzLjI1PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZm9vZC1pdGVtXCI+UGl6emEgQnVyZ2VyPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzcGFjZXJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+JDMuNjU8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGgyIGNsYXNzPVwibWVudS1jYXRcIj5TSURFIE9SREVSUzwvaDI+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmb29kLWl0ZW1cIj5GcmVuY2ggRnJpZXM8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInNwYWNlclwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4kMy40MDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImZvb2QtaXRlbVwiPkhvdCBXaW5ncyAoMTIpPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzcGFjZXJcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+JDguNTA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmb29kLWl0ZW1cIj5HYXJsaWMgQnJlYWQ8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInNwYWNlclwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4kMi4yNTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGhpZ2hsaWdodFRhYikge1xuICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikpIHtcbiAgICAvLyBjcmVhdGUgRE9NIEVsZW1lbnRzXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IG5hdkVsZW1lbnRzID0ge1xuICAgICAgbGlzOiBbXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSxcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpLFxuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIiksXG4gICAgICBdLFxuICAgICAgbGlua3M6IFtcImhvbWVcIiwgXCJtZW51XCIsIFwiY29udGFjdFwiXSxcbiAgICB9OyAvL1RPRE86IEFkZCBoeXBlcmxpbmtzXG5cbiAgICAvL2F0dGFjaCBoZWFkZXIgdG8gYm9keVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIC8vIGFjdGl2YXRlIG5hdlxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgLy8gYWN0aXZhdGUgdWxcbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgLy8gYWN0aXZhdGUgbGlzXG4gICAgLy9UT0RPOiBBZGQgaHlwZXJsaW5rc1xuICAgIG5hdkVsZW1lbnRzLmxpcy5mb3JFYWNoKChsaSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChoaWdobGlnaHRUYWIgPT09IG5hdkVsZW1lbnRzLmxpbmtzW2luZGV4XSkge1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwidGFiLWhpZ2hsaWdodGVkXCIpO1xuICAgICAgfVxuICAgICAgbGkuY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpO1xuICAgICAgbGkuaWQgPSBuYXZFbGVtZW50cy5saW5rc1tpbmRleF07XG4gICAgICBsaS5pbm5lckhUTUwgPSBgXG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2LWxpbmtcIj4ke25hdkVsZW1lbnRzLmxpbmtzW2luZGV4XX08L2E+XG4gICAgYDtcbiAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBvbGRIaWdobGlnaHRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYi1oaWdobGlnaHRlZFwiKTtcbiAgICBjb25zdCBuZXdIaWdobGlnaHRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtoaWdobGlnaHRUYWJ9YCk7XG5cbiAgICBvbGRIaWdobGlnaHRUYWIuY2xhc3NMaXN0LnJlbW92ZShcInRhYi1oaWdobGlnaHRlZFwiKTtcbiAgICBuZXdIaWdobGlnaHRUYWIuY2xhc3NMaXN0LmFkZChcInRhYi1oaWdobGlnaHRlZFwiKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5kZXhQYWdlIGZyb20gXCIuL2luZGV4UGFnZVwiO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gXCIuL21lbnVQYWdlXCI7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFBhZ2VcIjtcbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4vbmF2YmFyXCI7XG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuXG5uYXZiYXIoXCJob21lXCIpO1xuaW5kZXhQYWdlKCk7XG5cbmNvbnN0IHJlY3JlYXRlQ29udGVudERpdiA9ICgpID0+IHtcbiAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGlmIChjb250ZW50RGl2KSB7XG4gICAgY29udGVudERpdi5yZW1vdmUoKTtcbiAgICBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50RGl2LmlkID0gXCJjb250ZW50XCI7XG4gICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuICB9XG59O1xuXG5jb25zdCBob21lVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xuaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgcmVjcmVhdGVDb250ZW50RGl2KCk7XG4gIG5hdmJhcihcImhvbWVcIik7XG4gIGluZGV4UGFnZSgpO1xufSk7XG5cbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICByZWNyZWF0ZUNvbnRlbnREaXYoKTtcbiAgbmF2YmFyKFwibWVudVwiKTtcbiAgbWVudVBhZ2UoKTtcbn0pO1xuXG5jb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpO1xuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgcmVjcmVhdGVDb250ZW50RGl2KCk7XG4gIG5hdmJhcihcImNvbnRhY3RcIik7XG4gIGNvbnRhY3RQYWdlKCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
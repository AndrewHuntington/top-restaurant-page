(()=>{"use strict";function n(){const n=document.querySelector("#content"),e=document.createElement("h1"),s=document.createElement("img"),a=document.createElement("h2"),c=document.createElement("div");e.innerHTML="Mario's Pizza",e.classList.add("headline"),n.appendChild(e),s.src="./marios-pizza-main.jpg",s.classList.add("main-img"),n.appendChild(s),a.innerHTML="Come eat the best pizza in the Mushroom Kingdom!",a.classList.add("copy"),n.appendChild(a),c.innerHTML='\n    <h3>~Open Hours~</h3>\n    <p class="font-med-it">Monday-Friday</p>\n    <p>11:00am - 11:30pm</p>\n    <p class="font-med-it">Saturday</p>\n    <p>11:00am - 1:00am</p>\n    <p class="font-med-it">Sunday</p>\n    <p>Closed</p>\n  ',c.classList.add("hours"),n.appendChild(c)}function e(n){if(document.querySelector("header")){const e=document.querySelector(".tab-highlighted"),s=document.querySelector(`#${n}`);e.classList.remove("tab-highlighted"),s.classList.add("tab-highlighted")}else{const e=document.createElement("header"),s=document.createElement("nav"),a=document.createElement("ul"),c={lis:[document.createElement("li"),document.createElement("li"),document.createElement("li")],links:["home","menu","contact"]};document.body.appendChild(e),s.classList.add("navbar"),e.appendChild(s),s.appendChild(a),c.lis.forEach(((e,s)=>{n===c.links[s]&&e.classList.add("tab-highlighted"),e.classList.add("nav-item"),e.id=c.links[s],e.innerHTML=`\n      <a href="#" class="nav-link">${c.links[s]}</a>\n    `,a.appendChild(e)}))}}e("home"),n();const s=()=>{let n=document.querySelector("#content");n&&(n.remove(),n=document.createElement("div"),n.id="content",n.classList.add("content"),document.body.appendChild(n))};document.querySelector("#home").addEventListener("click",(a=>{s(),e("home"),n()})),document.querySelector("#menu").addEventListener("click",(n=>{s(),e("menu"),function(){const n=document.querySelector("#content"),e=document.createElement("h1"),s=document.createElement("div");e.innerHTML="MENU",e.classList.add("headline"),n.appendChild(e),s.innerHTML='\n    <h2 class="menu-cat">PIZZA</h2>\n    <div class="menu-item">\n      <span class="food-item">Cheese Pizza</span>\n      <span class="spacer"></span>\n      <span class="price">$10.75</span>\n    </div>\n    <div class="menu-item">\n      <span class="food-item">The Mario</span>\n      <span class="spacer"></span>\n      <span class="price">$15.25</span>\n    </div>\n    <div class="menu-item">\n      <span class="food-item">Buffalo Chicken Pizza</span>\n      <span class="spacer"></span>\n      <span class="price">$13.75</span>\n    </div>\n    <h2 class="menu-cat">BURGERS</h2>\n    <div class="menu-item">\n      <span class="food-item">Hamburger</span>\n      <span class="spacer"></span>\n      <span class="price">$2.90</span>\n    </div>\n    <div class="menu-item">\n      <span class="food-item">Cheeseburger</span>\n      <span class="spacer"></span>\n      <span class="price">$3.25</span>\n    </div>\n    <div class="menu-item">\n      <span class="food-item">Pizza Burger</span>\n      <span class="spacer"></span>\n      <span class="price">$3.65</span>\n    </div>\n    <h2 class="menu-cat">SIDE ORDERS</h2>\n    <div class="menu-item">\n      <span class="food-item">French Fries</span>\n      <span class="spacer"></span>\n      <span class="price">$3.40</span>\n    </div>\n    <div class="menu-item">\n      <span class="food-item">Hot Wings (12)</span>\n      <span class="spacer"></span>\n      <span class="price">$8.50</span>\n    </div>\n    <div class="menu-item">\n      <span class="food-item">Garlic Bread</span>\n      <span class="spacer"></span>\n      <span class="price">$2.25</span>\n    </div>\n  </div>\n',s.classList.add("menu"),n.appendChild(s)}()})),document.querySelector("#contact").addEventListener("click",(n=>{s(),e("contact"),contactPage()}))})();
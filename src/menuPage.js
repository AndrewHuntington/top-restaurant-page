export default function () {
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

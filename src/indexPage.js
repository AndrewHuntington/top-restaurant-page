export default function () {
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

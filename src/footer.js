export default function () {
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

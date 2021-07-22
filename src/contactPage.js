export default function () {
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

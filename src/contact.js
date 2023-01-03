import { buildElement } from "./dom_helpers";
import coffeeTable from "./images/coffee-table.png";

const entryPoint = document.getElementById("content");

const locationContent = {
  tag: "section",
  attributes: { class: "location-section" },
  children: [
    { tag: "h2", text: "Visit Our Store" },
    { tag: "img", attributes: { src: coffeeTable } },
    { tag: "address", text: "1234 Rocky Mountain Lane, Colorado Springs, CO" },
  ],
}

const hoursContent = {
  tag: "section",
  attributes: { class: "hour-section" },
  children: [
    { tag: "h2", text: "Hours" },
    {
      attributes: { class: "hour-section__container" },
      children: [
        {
          children: [
            { tag: "p", text: "Mon-Fri" },
            { tag: "p", text: "Sat" },
            { tag: "p", text: "Sun" },
          ]
        },
        {
          children: [
            { tag: "p", text: "6am-4pm" },
            { tag: "p", text: "6am-7pm" },
            { tag: "p", text: "CLOSED" }
          ]
        }
      ]
    }
  ]
}

const contactContent = {
  tag: "section",
  attributes: { class: "contact-section" },
  children: [
    { tag: "h2", text: "Contact Us" },
    { tag: "h3", text: "By Phone:" },
    { tag: "p", text: "719-555-4636" },
    { tag: "h3", text: "By Email:" },
    { tag: "p", text: "rockymtncafe@email.com" }
  ]
}

const pageContent = {
  tag: "section",
  children: [
    { tag: "h1", text: "Contact Us", attributes: { class: "contact-heading" } },
    locationContent,
    hoursContent,
    contactContent
  ]
}

// Location & Hours information
export default function renderContact() {
  console.log("happens")
  entryPoint.replaceChildren();

  const fragment = document.createDocumentFragment();
  fragment.appendChild(buildElement(pageContent));

  entryPoint.appendChild(fragment);
}

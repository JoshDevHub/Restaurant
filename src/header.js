import { buildElement } from "./dom_helpers";

const entryPoint = document.getElementById("content");

const navLinkContent = [
  { content: "Home" },
  { content: "Menu" },
  { content: "Location" },
]

const createNavLink = (linkContent, parent) => {
  const fragment = document.createDocumentFragment();
  const anchorTag = fragment
    .appendChild(buildElement("li"))
    .appendChild(buildElement("a"));
  anchorTag.textContent = linkContent;
  parent.appendChild(fragment);
}

export default function renderHeader() {
  const fragment = document.createDocumentFragment();
  const headerUL = fragment
    .appendChild(buildElement("header"))
    .appendChild(buildElement("nav"))
    .appendChild(buildElement("ul"));
  navLinkContent.forEach((link) => {
    createNavLink(link.content, headerUL)
  })

  document.body.insertBefore(fragment, entryPoint);
}

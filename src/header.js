import { buildElement } from "./dom_helpers";

const entryPoint = document.getElementById("content");

const headerProps = {
  tag: "header",
  children: {
    tag: "nav",
    children: {
      tag: "ul",
      children: [],
    }
  }
}

const NAV_LINK_TEXT_CONTENT = [ "Home", "Menu", "Location" ];

const addLinkProps = (text) => {
  let current = headerProps;
  while (current.tag !== "ul") {
    current = current.children;
  }

  current.children.push({
    tag: "li",
    children: {
      tag: "a",
      text,
    }
  })
}

export default function renderHeader() {
  const fragment = document.createDocumentFragment();
  NAV_LINK_TEXT_CONTENT.forEach((link) => addLinkProps(link));
  fragment.appendChild(buildElement(headerProps));

  document.body.insertBefore(fragment, entryPoint)
}

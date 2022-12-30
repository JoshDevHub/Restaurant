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

const NAV_LINK_TEXT_CONTENT = {
  home: "Home",
  menu: "Menu",
  contact: "Contact"
}

const addLinkProps = (text, handler) => {
  let current = headerProps;
  while (current.tag !== "ul") {
    current = current.children;
  }

  current.children.push({
    tag: "li",
    children: {
      tag: "a",
      text,
      events: { type: "click", handler }
    }
  })
}

export default function renderHeader(navFunctions) {
  const fragment = document.createDocumentFragment();
  for (const [component, listener] of Object.entries(navFunctions)) {
    const textContent = NAV_LINK_TEXT_CONTENT[component]
    addLinkProps(textContent, listener);
  }
  fragment.appendChild(buildElement(headerProps));

  document.body.insertBefore(fragment, entryPoint)
}

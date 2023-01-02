import { buildElement } from "./dom_helpers";
import coffeeIcon from "./images/coffee.svg";

const entryPoint = document.getElementById("content");

const headerProps = {
  tag: "header",
  children: {
    attributes: { class: "header__wrapper" },
    children: [
      {
        tag: "svg",
        data: coffeeIcon
      },
      {
        tag: "nav",
        children: {
          tag: "ul",
          children: [],
        }
      }
    ],
  },
}

const NAV_LINK_TEXT_CONTENT = {
  home: "Home",
  menu: "Menu",
  contact: "Contact"
}

const buildNavLink = (component, handler) => {
  return buildElement({
    tag: "li",
    children: {
      tag: "a",
      text: NAV_LINK_TEXT_CONTENT[component],
      events: { type: "click", handler }
    }
  })
}

export default function renderHeader(navFunctions) {
  const fragment = document.createDocumentFragment();
  fragment.appendChild(buildElement(headerProps));
  const navLinkList = fragment.querySelector("ul");

  for (const [component, listener] of Object.entries(navFunctions)) {
    navLinkList.appendChild(buildNavLink(component, listener));
  }

  document.body.insertBefore(fragment, entryPoint)
}

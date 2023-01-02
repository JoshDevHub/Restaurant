import { buildElement } from "./dom_helpers";
import githubIcon from "./icons/github.svg";

const footerProps = {
  tag: "footer",
  children: {
    tag: "a",
    attributes: {
      href: "https://github.com/JoshDevHub/Restaurant",
      target: "_blank"
    },
    children: {
      tag: "svg",
      data: githubIcon,
    }
  }
}

export default function renderHeader() {
  const fragment = document.createDocumentFragment();
  fragment.appendChild(buildElement(footerProps));

  document.body.appendChild(fragment);
}

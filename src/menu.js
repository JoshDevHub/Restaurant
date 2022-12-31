import { buildElement } from "./dom_helpers";

const entryPoint = document.getElementById("content");

const domTreeForItem = ({name, price}) => {
  return {
    attributes: { class: "menu__container__item" },
    children: [
      { tag: "p", text: name },
      { tag: "p", text: price },
    ]
  }
}

const buildMenuSection = (sectionName, ...sectionContent) => {
  const itemTree = sectionContent.map(domTreeForItem);
  console.log(itemTree);
  return {
    tag: "section",
    children: [
      {
        tag: "h2",
        text: sectionName,
      },
      ...itemTree
    ]
  }
}


const menuContent = {
  tag: "section",
  attributes: { class: "menu" },
  children: [
    {
      tag: "h1",
      text: "Menu"
    },
    {
      attributes: { class: "menu__container" },
      children: [
        buildMenuSection(
          "Brewed Coffee",
          { name: "Brewed Dark Roast", price: "2.00" },
          { name: "Brewed Light Roast", price: "2.00" }
        ),
        buildMenuSection(
          "Espresso Drinks",
          { name: "Americano", price: "2.50" },
          { name: "Caffe Mocha", price: "3.25" },
          { name: "Cappuccino", price: "3.25" },
          { name: "Flat White", price: "3.50" },
          { name: "Latte", price: "3.25" },
          { name: "Macchiato", price: "3.00" },
        ),
        buildMenuSection(
          "Cold Coffee",
          { name: "Cold Brew", price: "3.50" },
          { name: "Iced Americano", price: "2.75" },
        )
      ]
    }
  ]
}

export default function renderMenu() {
  entryPoint.replaceChildren();
  const fragment = document.createDocumentFragment();
  fragment.appendChild(buildElement(menuContent));

  entryPoint.appendChild(fragment);
}

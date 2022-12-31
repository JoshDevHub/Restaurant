import { buildElement } from "./dom_helpers";

const entryPoint = document.getElementById("content");

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
    }
  ]
}

const menuItems = [
  { name: "Americano", price: "2.50" },
  { name: "Brewed Dark Roast", price: "2.00" },
  { name: "Brewed Light Roast", price: "2.00" },
  { name: "Caffe Mocha", price: "3.25" },
  { name: "Cappuccino", price: "3.25" },
  { name: "Cold Brew", price: "3.50" },
  { name: "Flat White", price: "3.50" },
  { name: "Iced Americano", price: "2.50" },
  { name: "Latte", price: "3.25" },
  { name: "Macchiato", price: "3.00" },
]

export default function renderMenu() {
  entryPoint.replaceChildren();
  const fragment = document.createDocumentFragment();
  fragment.appendChild(buildElement(menuContent));
  const itemsContainer = fragment.querySelector(".menu__container");
  menuItems.forEach(({name, price}) => {
    const itemDom = buildElement({
      attributes: { class: "menu__container__item" },
      children: [
        { tag: "p", text: name },
        { tag: "p", text: price },
      ]
    })
    itemsContainer.appendChild(itemDom);
  })

  entryPoint.appendChild(fragment);
}

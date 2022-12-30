import { buildElement } from "./dom_helpers";
import latteImage from "./images/latte-coffee-200px.png";
import beanImage from "./images/closeup-shot-roasted-coffee-beans-200px.png";
import mountainImage from "./images/gary-yost-54IXTVq-VvA-unsplash-200px.png";

const entryPoint = document.getElementById("content");

const bannerDom = {
  tag: "div",
  attributes: { class: "banner" },
  children: {
    tag: "section",
    children: [
      { tag: "h2", text: "Rocky Mountain Cafe" },
      {
        tag: "p",
        text: `A cozy, rustic retreat nestled in the heart of the Rocky Mountains./
               With a warm, inviting atmosphere and stunning views, our coffee/
               shop is the perfect place to relax and unwind with a steaming cup/
               of freshly brewed coffee.`
      }
    ]
  }
}

const renderBanner = () => {
  const fragment = document.createDocumentFragment();
  fragment.appendChild(buildElement(bannerDom));

  entryPoint.appendChild(fragment);
}

const galleryImages = [
  { img: latteImage, caption: "Delicious espresso drinks", alt: "" },
  { img: beanImage, caption: "Fresh roasted coffee beans", alt: "" },
  { img: mountainImage, caption: "Gorgeous mountain vistas", alt: "" },
]

const figureDom = ({ img, caption, alt }) => {
  return {
    tag: "figure",
    children: [
      { tag: "img", attributes: { src: img, alt: alt } },
      { tag: "figcaption", text: caption }
    ]
  }
}

const renderGallery = () => {
  const fragment = document.createDocumentFragment();
  const container = fragment.appendChild(buildElement({ attributes: { class: "gallery" } }));
  galleryImages.forEach((galleryImage) => {
    const figureObject = figureDom(galleryImage);
    container.appendChild(buildElement(figureObject));
  })
  entryPoint.appendChild(fragment);
}

export default function renderHomeContent() {
  entryPoint.replaceChildren();

  renderBanner();
  renderGallery();
}

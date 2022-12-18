import { buildElement, addMultipleChildNodes } from "./dom_helpers";
import latteImage from "./latte-coffee-200px.png";
import beanImage from "./closeup-shot-roasted-coffee-beans-200px.png";
import mountainImage from "./gary-yost-54IXTVq-VvA-unsplash-200px.png";

const entryPoint = document.getElementById("content");

const bannerContent = {
  heading: "Rocky Mountain Cafe",
  description: "A cozy, rustic retreat nestled in the heart of the Rocky Mountains. With a warm, inviting atmosphere and stunning views, our coffee shop is the perfect place to relax and unwind with a steaming cup of freshly brewed coffee."
}

const renderBanner = () => {
  const fragment = document.createDocumentFragment();
  const container = fragment.appendChild(buildElement("div", "", ["banner"]));
  const section = container.appendChild(buildElement("section"));
  addMultipleChildNodes(
    section,
    buildElement("h2", bannerContent.heading),
    buildElement("p", bannerContent.description),
  )
  entryPoint.appendChild(fragment);
}

const galleryImages = [
  { img: latteImage, caption: "Delicious espresso drinks" },
  { img: beanImage, caption: "Fresh roasted coffee beans" },
  { img: mountainImage, caption: "Gorgeous mountain vistas" },
]

const renderGallery = () => {
  const fragment = document.createDocumentFragment();
  const container = fragment.appendChild(buildElement("div", "", ["gallery"]));
  galleryImages.forEach((fig) => {
    const figFragment = document.createDocumentFragment().appendChild(buildElement("figure"));
    const imageElement = buildElement("img");
    imageElement.src = fig.img;

    figFragment.appendChild(imageElement);
    figFragment.appendChild(buildElement("figcaption", fig.caption));
    container.appendChild(figFragment);
  })
  entryPoint.appendChild(fragment);
}

const renderHomeContent = () => {
  entryPoint.replaceChildren();

  renderBanner();
  renderGallery();
}

export { renderHomeContent };

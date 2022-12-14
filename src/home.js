import { buildElement, addMultipleChildNodes } from "./dom_helpers";

const entryPoint = document.getElementById("content");

const updatePageContent = (heading, content) => {
  const fragment = document.createDocumentFragment();
  const section = fragment.appendChild(buildElement("section"));
  section.appendChild(buildElement("h2", heading));
  section.appendChild(buildElement("p", content));

  entryPoint.appendChild(fragment);
}

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

const pageContent = [
  {
    heading: "Hours",
    content: "Put a bird on it literally trust fund, bruh gochujang hot chicken kitsch cred vape air plant chambray fit irony. Microdosing tote bag put a bird on it DSA, locavore photo booth retro bodega boys shabby chic yuccie actually prism enamel pin. Raw denim kitsch beard cray shaman copper mug health goth trust fund. Cloud bread tousled distillery, JOMO shabby chic fingerstache scenester twee.",
  },
  {
    heading: "Location",
    content: "Next level woke banjo DSA, salvia bodega boys dreamcatcher skateboard chia big mood humblebrag. Leggings four loko shoreditch quinoa tousled 8-bit stumptown. Ascot twee cold-pressed raclette, thundercats mlkshk keytar quinoa lumbersexual live-edge truffaut pok pok same hella. Cronut shoreditch fixie austin normcore iceland, tbh praxis VHS hashtag bespoke chicharrones etsy. Williamsburg shaman salvia, twee polaroid palo santo fashion axe. Health goth synth seitan, taiyaki single-origin coffee marfa celiac."
  }
]

const renderHomeContent = () => {
  entryPoint.replaceChildren();

  renderBanner();
  pageContent.forEach((section) => {
    updatePageContent(section.heading, section.content);
  })
}

export { renderHomeContent };

import { buildElement } from "./dom_helpers";

const entryPoint = document.getElementById("content");

const updatePageContent = (heading, content) => {
  const fragment = document.createDocumentFragment();
  const section = fragment.appendChild(buildElement("section"));
  section.appendChild(buildElement("h2", heading));
  section.appendChild(buildElement("p", content));

  entryPoint.appendChild(fragment);
}

const pageContent = [
  {
    heading: "Description",
    content: "I'm baby lomo tumblr 90's master cleanse waistcoat vaporware banh mi iPhone cronut kinfolk hot chicken knausgaard cornhole. Trust fund enamel pin bodega boys, bicycle rights meggings freegan celiac hell of chia slow-carb vice hoodie. Tote bag art party taxidermy master cleanse you probably haven't heard of them church-key jianbing copper mug williamsburg tousled squid gluten-free viral poke sartorial. Truffaut kombucha authentic listicle sartorial. Poke next level occupy etsy mlkshk deep v pickled."
  },
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

  pageContent.forEach((section) => {
    updatePageContent(section.heading, section.content);
  })
}

export { renderHomeContent };

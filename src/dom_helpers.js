const toArray = (value) => Array.isArray(value) ? value : [value];

const buildElement = (opts) => {
  const element = document.createElement(opts.tag || "div");
  for (const [prop, value] of Object.entries(opts)) {
    switch (prop) {
      case "tag":
        break;
      case "text":
        element.textContent = value;
        break;
      case "attributes":
        toArray(value).map((attr) => {
          element.setAttribute(Object.keys(attr), Object.values(attr));
        })
        break;
      case "events":
        toArray(value).map(({ type, handler }) => {
          element.addEventListener(type, handler);
        })
        break;
      case "children":
        toArray(value).map((child) => {
          const childEl = buildElement(child);
          element.appendChild(childEl);
        })
        break;
      default:
    }
  }
  return element;
}

export { buildElement };

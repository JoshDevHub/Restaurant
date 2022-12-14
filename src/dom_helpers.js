const buildElement = (tag, content = "", classList = []) => {
  const element = document.createElement(tag);
  element.textContent = content;
  classList.forEach((className) => element.classList.add(className));

  return element;
}

const addMultipleChildNodes = (parent, ...children) => {
  children.forEach((child) => parent.appendChild(child));
}

export { buildElement, addMultipleChildNodes };

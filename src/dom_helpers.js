const buildElement = (tag, content = "", classList = []) => {
  const element = document.createElement(tag);
  element.textContent = content;
  classList.forEach((className) => element.classList.add(className));

  return element;
}

export { buildElement };

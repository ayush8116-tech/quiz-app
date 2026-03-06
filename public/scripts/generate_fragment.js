export const createFragment = ([tag, attributes, ...content]) => {
  const element = document.createElement(tag);

  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  
  if (typeof content[0] === "string") {
    element.innerText = content[0];
    return element;
  }

  const children = content.map(createFragment);
  element.append(...children);

  return element;
};

export const ELEMENT = {
  FORM: "form",
  LEGEND: "legend",
  FIELDSET: "fieldset",
  DIV: "div",
  LABEL: "label",
  INPUT: "input",
};

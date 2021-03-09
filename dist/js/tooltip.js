function tooltip(text, querySelectorParent) {
  let tooltip = document.createElement("div");
  tooltip.setAttribute("class", "tooltip");
  tooltip.setAttribute("value", text);
  let parentElement = document.querySelector(querySelectorParent);
  parentElement.appendChild(tooltip);
}

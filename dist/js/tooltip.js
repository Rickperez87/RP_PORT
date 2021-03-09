window.onload = tooltip("Copied to Clipboard!", ".tooltip-target");

function tooltip(text, querySelectorParent) {
  let parentElement = document.querySelector(querySelectorParent);
  document.addEventListener("click", () => {
    let tooltip = document.createElement("div");
    tooltip.setAttribute("class", "tooltip");
    tooltip.innerHTML = text;
    parentElement.appendChild(tooltip);
    setTimeout(() => {
      parentElement.removeChild(tooltip);
    }, 800);
  });
}

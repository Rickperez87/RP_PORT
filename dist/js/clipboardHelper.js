function clipToBoard() {
  let copyText = document.querySelector(".copy-to-clipboard");
  copyText.getAttribute("data-clipboard-text");
  console.log("copied", copyText);
  console.log("click");
}

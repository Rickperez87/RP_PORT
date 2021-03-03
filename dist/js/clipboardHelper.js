function clipToBoard(copyText, querySelector) {
  let textField = document.createElement("input");
  textField.setAttribute("id", "textfield-copy-text");
  textField.setAttribute("value", copyText);
  let copyElement = document.querySelector(querySelector);
  copyElement.appendChild(textField);

  let textFieldCopyText = document.getElementById("textfield-copy-text");
  textFieldCopyText.select();
  textFieldCopyText.setSelectionRange(0, 99999); /* for mobile devices*/

  document.execCommand("copy");

  copyElement.removeChild(textField);
}

class TypeWriter {
  constructor(htmlElement, words, wait) {
    this.htmlElement = htmlElement;
    this.words = words;
    this.wait = parseInt(wait, 10);
    this.type();
    this.text = "";
    this.isReverse = false;
    this.wordIdx = 0;
  }
  type() {
    let fulltxt = this.words[this.wordIdx];

    if (this.isReverse) {
      //remove typing
      this.text = fulltxt.subString(0, this.text.length - 1);
    } else {
      this.text = fulltxt.subString(0, this.text.length + 1);
    }

    this.htmlElement.innerHTML = `${this.text}`;
    //initial type speed
    let typeSpeed = 150;

    if (this.isReverse) {
      typeSpeed /= 2;
    }

    if (!this.isReverse && this.text.length === fulltxt.length) {
      typeSpeed = this.wait;
      this.isReverse = true;
    } else if (isReverse && this.text === "") {
      this.isReverse = false;
      this.wordIdx++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  const element = document.querySelector(".txt-type");
  const words = JSON.parse(element.getAttribute("data-words"));
  const wait = element.getAttribute("data-wait");

  new TypeWriter(element, words, wait);
}

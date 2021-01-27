class TypeWriter {
  constructor(htmlElement, words, wait) {
    this.htmlElement = htmlElement;
    this.words = words;
    this.text = "";
    this.wordIdx = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isReverse = false;
  }
  type() {
    // Current index of word
    const current = this.wordIdx % this.words.length;
    const fullTxt = this.words[current];
    if (this.isReverse) {
      //remove typing
      this.text = fullTxt.substring(0, this.text.length - 1);
    } else {
      this.text = fullTxt.substring(0, this.text.length + 1);
    }

    this.htmlElement.innerHTML = `<span class="txt">${this.text}<span class="blinking-cursor">|</span></span>`;
    //initial type speed
    let typeSpeed = 150;

    if (this.isReverse) {
      typeSpeed /= 2;
    }

    if (!this.isReverse && this.text === fullTxt) {
      typeSpeed = this.wait;
      this.isReverse = true;
    } else if (this.isReverse && this.text === "") {
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

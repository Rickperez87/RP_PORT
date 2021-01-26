const element = document.querySelector(".txt-type");
// const words = element.dataset.split(",");
const words = element.dataset.words.split(",");
console.log(words);
const { wait } = element.dataset;

//function takes a word.
//adds letter one by one and removes letter one by one according to wait time.

function typeWord(word) {
  let typedWord = [];
  let wordArray = word.trim().split("");
  let count = 0;
  let reverse = false;
  intervalId = setInterval(() => {
    if (count === [word.length]) {
      reverse = true;
    }
    while (!reverse) {
      typedWord = typedWord.concat(wordArray[count]);
      element.innerHTML = typedWord.join("");
      count++;
    }
    while (reverse) {
      count--;
      typedWord.slice(0, count);
      element.innerHTML = typedWord.join("");
      if (count <= 0) {
        clearInterval(intervalId);
      }
    }
    console.log(reverse, count);
  }, wait / word.length);
}

//function takes array and for each word function call to type out word

//append type to span

typeWord(words[0], wait);

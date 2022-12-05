let counterValue = 0;
const btnDecr = document.querySelector("button[data-action='decrement']");
const btnIncr = document.querySelector("button[data-action='increment']");
const myValue = document.querySelector("#value");

const countDecr = function() {
  counterValue -= 1;
  myValue.textContent = counterValue;
};

const countIncr = function() {
  counterValue += 1;
  myValue.textContent = counterValue;
};

btnDecr.addEventListener("click", countDecr);
btnIncr.addEventListener("click", countIncr);
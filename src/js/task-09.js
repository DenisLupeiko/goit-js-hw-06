function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");

const changeColor = document.querySelector(".change-color");

const color = document.querySelector(".color");

changeColor.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  color.textContent = getRandomHexColor();
}
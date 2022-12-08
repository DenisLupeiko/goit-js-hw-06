function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");

const changeColor = document.querySelector(".change-color");

const color = document.querySelector(".color");

changeColor.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const randomColor = getRandomHexColor();
  color.textContent = randomColor;
  body.style.backgroundColor = `${randomColor}`;
}

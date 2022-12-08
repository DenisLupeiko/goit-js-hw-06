function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[ data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

btnCreate.addEventListener('click', (event) => 
  createBoxes(Number(input.value))
);

btnDestroy.addEventListener('click', boxDestroy);

function createBoxes(amount) {
  const divElements = [];
  for (let i = 0; i < amount; i += 1) {
    const divElement = document.createElement("div");
    divElement.style.width = `${30 + i * 10}px`;
    divElement.style.height = `${30 + i * 10}px`;
    divElement.style.backgroundColor = getRandomHexColor();
    divElements.push(divElement);
  }
  divBoxes.append(...divElements);
}

function boxDestroy() {
  divBoxes.innerHTML = "";
}
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

console.log(list);
console.log(ingredients);


const listElements = ingredients.map((ingredient) => {
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;
  listElement.classList.add("item");
  return listElement;
});

list.append(...listElements);
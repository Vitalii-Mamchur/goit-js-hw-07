const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = document.querySelector("#ingredients");

const potato = document.createElement("li");
potato.textContent = ingredients[0];

const fungi = document.createElement("li");
fungi.textContent = ingredients[1];

const garlic = document.createElement("li");
garlic.textContent = ingredients[2];

const tomato = document.createElement("li");
tomato.textContent = ingredients[3];

const greens = document.createElement("li");
greens.textContent = ingredients[4];

const condiments = document.createElement("li");
condiments.textContent = ingredients[5];

ingredientsEl.append(potato, fungi, garlic, tomato, greens, condiments);

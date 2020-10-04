const btnDecEl = document.querySelector('button[data-action="decrement"]');
const btnIncEl = document.querySelector('button[data-action="increment"]');
let outEl = document.querySelector("#value");

const onDecrementBtnClick = () =>
  (outEl.textContent = Number(outEl.textContent) - 1);
const onIncrementBtnClick = () =>
  (outEl.textContent = Number(outEl.textContent) + 1);

btnDecEl.addEventListener("click", onDecrementBtnClick);
btnIncEl.addEventListener("click", onIncrementBtnClick);

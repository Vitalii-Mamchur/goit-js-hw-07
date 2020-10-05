const inputEl = document.querySelector("#name-input");
let nameOutEl = document.querySelector("#name-output");

const onInputChange = (event) => {
  nameOutEl.textContent = event.target.value;
  if (event.target.value === "") {
    nameOutEl.textContent = "незнакомец";
  }
};

inputEl.addEventListener("input", onInputChange);

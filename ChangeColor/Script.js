let button = document.querySelector(".btn");
let para = document.querySelector(".para");

const changeColor = () => {
  let randomNumber = Math.floor(Math.random() * 16777215);
  let randomColor = "#" + randomNumber.toString(16);
  para.innerHTML = randomColor;
  document.body.style.backgroundColor = randomColor;
  para.style.color = randomColor;
  button.style.backgroundColor = randomColor;
};

button.addEventListener("click", changeColor);

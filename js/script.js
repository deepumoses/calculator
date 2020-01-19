let inputBox = document.querySelector(".calculator__output-input");
let outputBox = document.querySelector(".calculator__output-eval");
let buttons = document.querySelectorAll("button");
let inputTextElement = document.getElementById("calcInput");
let inputString = "";

const calc = e => {
  let inputValue =
    e.target.tagName === "BUTTON"
      ? e.target.textContent
      : e.key === "Backspace"
      ? "DEL"
      : e.key === "Enter"
      ? "="
      : e.key;
  try {
    switch (true) {
      case inputValue === "c":
        inputString = "";
        e.target.tagName === "BUTTON" ? (inputBox.value = inputString) : null;
        outputString = "";
        outputBox.textContent = outputString;
        break;
      case inputValue === "=":
        console.log("in =");
        if (eval(inputTextElement.value)) {
          outputBox.textContent = eval(inputTextElement.value);
        } else {
          outputBox.textContent = inputString;
        }
        break;
      case inputValue === "DEL":
        inputString = inputString.slice(0, inputString.length - 1);
        e.target.tagName === "BUTTON" ? (inputBox.value = inputString) : null;
        break;
      case /[\d+-/*%]/g.test(inputValue):
        inputString += inputValue;
        e.target.tagName === "BUTTON" ? (inputBox.value = inputString) : null;
        break;
      default:
        inputString = "";
    }
  } catch (error) {
    outputBox.textContent = "Invalid input";
  }
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", calc);
}
inputTextElement.addEventListener("keydown", calc);

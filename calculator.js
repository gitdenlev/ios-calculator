const calc = document.querySelector(".calculator");

const result = document.querySelector("p");

calc.addEventListener("click", function (event) {
  if (!event.target.classList.contains("js-calc-btn")) return;
  const value = event.target.innerText;
  switch (value) {
    case "=":
      result.innerText = eval(result.innerText);
      break;
    case "AC":
      result.innerText = "";
      break;
    case "%":
      result.innerText = result.innerText * 0.01;
      break;
    case "+/-":
      result.innerText = "-";
          break;
    default:
      result.innerText += value;
  }
});

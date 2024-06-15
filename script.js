document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = button.innerText;
      if (buttonText === "AC") {
        display.value = "";
      } else if (buttonText === "=") {
        const result = evaluateExpression(display.value);
        display.value = result !== null ? result : "Error";
      } else {
        display.value += buttonText;
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (
      (key >= "0" && key <= "9") ||
      key === "." ||
      key === "/" ||
      key === "*" ||
      key === "-" ||
      key === "+"
    ) {
      display.value += key;
    } else if (key === "Enter") {
      const result = evaluateExpression(display.value);
      display.value = result !== null ? result : "Error";
    } else if (key === "Escape") {
      display.value = "";
    } else {
      alert("Only numbers are allowed");
    }
  });

  function evaluateExpression(expression) {
    if (/^[0-9+\-*/.]+$/.test(expression)) {
      return eval(expression);
    }
    return null;
  }
});

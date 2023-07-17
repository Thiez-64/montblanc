document.addEventListener("DOMContentLoaded", function () {
  const increment = document.getElementById("increment");
  const decrement = document.getElementById("decrement");
  const currentValue = document.getElementById("current_value");
  const line = document.getElementById("span");

  increment.addEventListener("click", () => {
    if (parseInt(currentValue.textContent, 10) < 10) {
      currentValue.textContent = parseInt(currentValue.textContent, 10) + 1;
    }
    line.style.transform = `scaleX(${currentValue.textContent * 10}%)`;
  });

  decrement.addEventListener("click", () => {
    if (parseInt(currentValue.textContent, 10) > 0) {
      currentValue.textContent = parseInt(currentValue.textContent, 10) - 1;
    }

    line.style.transform = `scaleX(${currentValue.textContent * 10}%)`;
  });
});

const grid = document.querySelector("#grid");
const userColorPicker = document.querySelector("#color-picker");
const gridRange = document.querySelector("#gridRange");

userColorPicker.addEventListener("change", function () {});

function addColor(square) {
  square.addEventListener("click", () => {
    square.style.cssText = `width: 16px; height: 16px; background-color: ${userColorPicker.value}`;
  });
}

// generate divs inside #grid
function generateGrid(squareNumbers) {
  gridRange.addEventListener("change", () => {});
  for (let i = 0; i < squareNumbers * squareNumbers; i++) {
    square = document.createElement("div");
    square.style.cssText =
      "width: 16px; height: 16px; background-color: black; ";
    grid.appendChild(square);
    addColor(square);
  }
  grid.style.cssText = `border: 5px solid gray;border-radius: 3px; display: grid; grid-template-columns: repeat(${squareNumbers}, 16px);`;
}

generateGrid(gridRange.value);

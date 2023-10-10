const grid = document.querySelector("#grid");
const userColorPicker = document.querySelector("#color-picker");
const gridRange = document.querySelector("#gridRange");
const gridNumberValue = document.querySelector("#gridNumberValue");

gridRange.oninput = function () {
  gridNumberValue.textContent = gridRange.value + "x" + gridRange.value;
};

userColorPicker.addEventListener("change", function () {});

function addColor(square) {
  square.addEventListener("click", () => {
    square.style.cssText = `width: 16px; height: 16px; background-color: ${userColorPicker.value}`;
  });
}

function generateGrid(squareNumbers) {
  gridRange.addEventListener("change", () => {});
  if (gridNumberValue.textContent == "") {
    gridNumberValue.textContent = gridRange.value + "x" + gridRange.value;
  }
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

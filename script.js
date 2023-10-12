const grid = document.querySelector("#grid");
const userColorPicker = document.querySelector("#color-picker");
const gridRange = document.querySelector("#gridRange");
const gridNumberValue = document.querySelector("#gridNumberValue");
const gridResetButton = document.querySelector("#gridResetButton");

//displays slider values
gridRange.oninput = function () {
  gridNumberValue.textContent = gridRange.value + "x" + gridRange.value;
};

// div colouring
function addColor(square) {
  square.addEventListener("click", () => {
    square.style.cssText = `width: 16px; height: 16px; background-color: ${userColorPicker.value}`;
  });
}

// main function
function generateGrid(squareNumbers) {
  //always displays slider value even if there is no input
  if (gridNumberValue.textContent == "") {
    gridNumberValue.textContent = gridRange.value + "x" + gridRange.value;
  }
  //generate divs and append them to grid
  for (let i = 0; i < squareNumbers * squareNumbers; i++) {
    square = document.createElement("div");
    square.style.cssText =
      "width: 16px; height: 16px; background-color: white; ";
    grid.appendChild(square);
    addColor(square);
  }
  grid.style.cssText = `display: grid; grid-template-columns: repeat(${squareNumbers}, 16px);`;
}
//first instance of the grid on page load
generateGrid(gridRange.value);

//removes grid child nodes and recreates the grid
function resetGrid() {
  while (grid.lastChild) {
    grid.removeChild(grid.firstChild);
  }
  generateGrid(gridRange.value);
}

gridResetButton.addEventListener("click", () => {
  resetGrid();
});

const grid = document.querySelector("#grid");

function hoverColor(square) {
  square.addEventListener("mouseover", () => {
    square.style.cssText = "background-color: white";
  });
}

function revertColor(square) {
  square.addEventListener("mouseleave", () => {
    square.style.cssText = "background-color: black";
  });
}

function changeColor(square) {
  square.addEventListener("click", () => {
    square.style.cssText = "background-color: green";
  });
}

function generateGrid(squareNumbers) {
  for (let i = 0; i < squareNumbers; i++) {
    square = document.createElement("div");
    square.style.cssText =
      "width: 16px; height: 16px; background-color: black;";
    grid.appendChild(square);

    changeColor(square);
    //hoverColor(square);
    //revertColor(square);
  }
}

generateGrid(500);

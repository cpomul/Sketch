const grid = document.querySelector("#grid");

let number = 500;
for (let i = 0; i < number; i++) {
  let square = document.createElement("div");
  square.style.cssText = "width: 32px; height: 32px; background-color: black;";
  grid.appendChild(square);
}

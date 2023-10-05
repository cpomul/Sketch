const grid = document.querySelector("#grid");

for (let i = 0; i < 1000; i++) {
  let square = document.createElement("div");
  square.style.cssText = "width: 16px; height: 16px; background-color: black;";
  grid.appendChild(square);

  square.addEventListener("mouseover", function () {
    square.style.backgroundColor = "white";
  });
  square.addEventListener("mouseout", function () {
    square.style.backgroundColor = "black";
  });
}

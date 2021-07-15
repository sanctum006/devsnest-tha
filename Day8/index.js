const board = document.querySelector(".board");
let arr = [
  "130",
  "129",
  "148",
  "149",
  "150",
  "151",
  "167",
  "168",
  "169",
  "170",
  "171",
  "172",
  "186",
  "206",
  "207",
  "187",
  "208",
  "209",
  "189",
  "190",
  "210",
  "192",
  "193",
  "213",
  "212",
  "211",
  "228",
  "231",
  "247",
  "249",
  "250",
  "252",
  "273",
  "271",
  "266",
  "268",
];

for (let i = 0; i < 400; i++) {
  const cell = document.createElement("div");
  cell.classList.add(i);
  cell.classList.add("cell");
  cell.style.backgroundColor = "#e14d3e";
  board.appendChild(cell);

  if (arr.includes(i.toString())) {
    document.querySelectorAll(".cell")[i].style.backgroundColor = "white";
  }
}

for (let i = 0; i < 400; i++) {
  document.querySelectorAll(".cell")[i].addEventListener("click", (event) => {
    let l = event.srcElement.classList[0];

    arr.push(l);

    if (
      document.querySelectorAll(".cell")[l].style.backgroundColor == "white"
    ) {
      document.querySelectorAll(".cell")[l].style.backgroundColor = "#e14d3e";
    } else {
      document.querySelectorAll(".cell")[l].style.backgroundColor = "white";
    }
  });
}

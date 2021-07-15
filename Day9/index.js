let seatsOccupied = 0;
let seatsRemaining = 42;
let arr = [];

for (let i = 0; i < 42; i++) {
  const cellElement = document.createElement("div");
  cellElement.classList.add(i);
  cellElement.classList.add("cell");
  document.querySelector(".main-container").appendChild(cellElement);
}

for (let i = 0; i < 42; i++) {
  arr[i] = false;
  document.querySelectorAll(".cell")[i].addEventListener("click", (event) => {
    if (!arr[i]) {
      if (confirm("Are you sure you want to book the seat?")) {
        document.getElementsByClassName(
          event.srcElement.classList.add("booked")
        );
        arr[i] = true;
        seatsOccupied++;
        seatsRemaining--;

        document.getElementById(
          "header1"
        ).textContent = `Seats Occupied: ${seatsOccupied}`;
        document.getElementById(
          "header2"
        ).textContent = `Seats Remaining: ${seatsRemaining}`;
      }
    } else {
      alert("Seat already booked!!");
    }
  });
}

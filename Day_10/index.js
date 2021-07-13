let arr = ["1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6"];
let checkRes = [];
let counter = 0;
let cardsLeft = 12;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

arr = shuffle(arr);

for (let i = 0; i < 12; i++) {
  document
    .querySelectorAll(".back-img")
    [i].setAttribute("src", `./assets/${arr[i]}.png`);
}

for (let i = 0; i < 12; i++) {
  document.querySelectorAll(".card")[i].addEventListener("click", (event) => {
    let l = i;
    document
      .querySelectorAll(".flip-card-inner")
      [l].classList.add("flip-card-in");
    counter++;
    checkRes.push(l);
  });
}

window.addEventListener("click", (event) => {
  if (counter == 2) {
    if (
      document.querySelectorAll(".back-img")[checkRes[0]].getAttribute("src") ==
      document.querySelectorAll(".back-img")[checkRes[1]].getAttribute("src")
    ) {
      setTimeout(() => {
        document
          .querySelectorAll(".flip-card-inner")
          [checkRes[0]].classList.add("make-invisible");
        document
          .querySelectorAll(".flip-card-inner")
          [checkRes[1]].classList.add("make-invisible");
        counter = 0;
        checkRes = [];
        cardsLeft -= 2;

        setTimeout(() => {
          if (cardsLeft == 0) {
            alert("Congratulations!! You wond the game.");
          }
        }, 1000);
      }, 1000);
    } else {
      console.log("cesd");

      setTimeout(() => {
        document
          .querySelectorAll(".flip-card-inner")
          [checkRes[0]].classList.remove("flip-card-in");
        document
          .querySelectorAll(".flip-card-inner")
          [checkRes[1]].classList.remove("flip-card-in");
        counter = 0;
        checkRes = [];
      }, 2000);
    }
  }
});

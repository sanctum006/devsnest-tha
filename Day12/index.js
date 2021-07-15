let tasksList = ["Web D", "Leetcode"];

const taskUL = document.querySelector("ul");

function renderList() {
  let parent = document.querySelector("ul");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  for (let i = 0; i < tasksList.length; i++) {
    let ele = document.createElement("li");
    ele.classList.add(`li${i}`);
    ele.classList.add("list-item");

    const eleChild1 = document.createElement("h3");
    eleChild1.innerHTML = `<i class='t${i} fas fa-check-circle tick-sign'></i>${tasksList[i]}`;

    eleChild1.addEventListener("click", (event) => {
      event.srcElement.classList.add("green");
    });

    const eleChild2 = document.createElement("i");
    eleChild2.classList.add(`d${i}`);
    eleChild2.classList.add("fas");
    eleChild2.classList.add("fa-trash");
    eleChild2.classList.add("delete-sign");

    eleChild2.addEventListener("click", (event) => {
      tasksList.splice(event.srcElement.classList[0][2], 1);

      const delEle = document.querySelector(
        `.li${event.srcElement.classList[0][1]}`
      );
      delEle.parentNode.removeChild(delEle);
    });

    ele.appendChild(eleChild1);
    ele.appendChild(eleChild2);

    taskUL.appendChild(ele);
  }
}

// document.querySelector("input").addEventListener("change", (event) => document.querySelector("input").val = event.target.value)

document.querySelector(".add-task-btn").addEventListener("click", () => {
  let ele = document.querySelector("input");
  let inputVal = ele.value;
  document.querySelector("input").value = "";
  if (inputVal != "" && inputVal != " ") {
    tasksList.unshift(inputVal);
    renderList();
  }
});

document.querySelector("input").addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    let ele = document.querySelector("input");
    let inputVal = ele.value;
    document.querySelector("input").value = "";
    if (inputVal != "" && inputVal != " ") {
      tasksList.unshift(inputVal);
      renderList();
    }
  }
});

renderList();

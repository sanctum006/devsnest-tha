let quesNo = 0,
  test,
  test_status,
  question,
  choice,
  choices,
  answerA,
  answerB,
  answerC,
  correct = 0;
const ques = [
  [
    "Which is most In-Demand Programming Language in 2021?",
    "Javascript",
    "Python",
    "C++",
    "A",
  ],
  [
    "Which is most In-Demand Backend Framework in 2021?",
    "Spring",
    "Flask",
    "NodeJS",
    "C",
  ],
  [
    "Which is most In-Demand Frontend Framework in 2021?",
    "MoonJS",
    "ReactJS",
    "AngularJS",
    "B",
  ],
  [
    "Which is most In-Demand Database in 2021?",
    "MongoDB",
    "CoackroachDB",
    "PostgreSQL",
    "A",
  ],
];

function renderQuestion() {
  test = document.getElementById("answer-option");
  if (quesNo >= ques.length) {
    test.innerHTML =
      "<h2>You got " +
      correct +
      " of " +
      ques.length +
      " questions correct</h2>";
    document.getElementById("questionStatment").innerHTML = "Test Completed";
    quesNo = 0;
    correct = 0;
    return false;
  }
  document.getElementById("questionStatment").innerHTML =
    "Question " + (quesNo + 1) + " of " + ques.length;
  question = ques[quesNo][0];
  answerA = ques[quesNo][1];
  answerB = ques[quesNo][2];
  answerC = ques[quesNo][3];
  test.innerHTML = "<h3>" + ques[quesNo][0] + "</h3>";
  test.innerHTML +=
    "<input type='radio' name='choices' value='A'> " + answerA + "<br>";
  test.innerHTML +=
    "<input type='radio' name='choices' value='B'> " + answerB + "<br>";
  test.innerHTML +=
    "<input type='radio' name='choices' value='C'> " + answerC + "<br><br>";
  test.innerHTML +=
    "<button onclick='checkCorrectAnswer()'>Submit Answer</button>";
}

function checkCorrectAnswer() {
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  if (choice == ques[quesNo][4]) {
    correct++;
  }
  quesNo++;
  renderQuestion();
}

window.addEventListener("load", renderQuestion);

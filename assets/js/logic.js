var startScreen = document.querySelector("#start-screen");
var startBtn = document.querySelector("#start");
var quastionsDiv = document.querySelector("#questions");
var quastTitle = document.querySelector("#question-title");
var choices = document.querySelector(".choices");
var timerEl = document.querySelector("#time");
var newTime = 60;
var quastionNumber = 0;

// timer function
function timer() {
  var intervalTimer = setInterval(function () {
    newTime--;
    timerEl.textContent = newTime;
    if (newTime === 0) {
      clearInterval(intervalTimer);
    }
  }, 1000);
}
// remove previous quastions
function removeQuestions() {
  choices.innerHTML = "";
}

// function to show quastion
function showQuastioin() {
  quastTitle.innerHTML = quastions[quastionNumber].quastion;

  quastions[quastionNumber].answers.forEach(function (answer) {
    var button = document.createElement("button");
    button.textContent = answer.text;
    choices.appendChild(button);
  });
  choices.addEventListener("click", function (e) {
    var element = e.target;
    console.log(element);
    console.log(document.body);
    for (let i = 0; i < quastions[quastionNumber].answers.length; i++) {
      if (element.textContent === quastions[quastionNumber].answers[i].text) {
        console.log(quastions[quastionNumber].answers[i].correct);
        var answerIs = quastions[quastionNumber].answers[i].correct;
        if (answerIs) {
          // how to remove previous quastion buttons?

          removeQuestions();
          console.log("win");
          quastionNumber = quastionNumber + 1;
          console.log(quastionNumber);
          showQuastioin();
        } else {
          console.log("lost");
          removeQuestions();

          //   time should be substracted by 10
          quastionNumber = quastionNumber + 1;
          console.log(quastionNumber);
          showQuastioin();
        }
      }
    }
  });
}
// event listiner
startBtn.addEventListener("click", function () {
  timer();
  startScreen.setAttribute("class", "hide");
  quastionsDiv.removeAttribute("class");
  showQuastioin();
});

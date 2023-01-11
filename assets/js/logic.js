var startScreen = document.querySelector("#start-screen");
var startBtn = document.querySelector("#start");
var quastionsDiv = document.querySelector("#questions");
var quastTitle = document.querySelector("#question-title");
var choices = document.querySelector(".choices");
var timerEl = document.querySelector("#time");
var newTime = 60;

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

// function to show quastion
function showQuastioin() {
  quastTitle.innerHTML = quastions[0].quastion;

  quastions[0].answers.forEach(function (answer) {
    var button = document.createElement("button");
    button.textContent = answer.text;
    choices.appendChild(button);
  });
  choices.addEventListener("click", function (e) {
    var element = e.target;
    console.log(element);
    console.log(document.body);
    for (let i = 0; i < quastions[0].answers.length; i++) {
      if (element.textContent === quastions[0].answers[i].text) {
        console.log(quastions[0].answers[i].correct);
        var answerIs = quastions[0].answers[i].correct;
        if (answerIs) {
          console.log("win");
        } else {
          console.log("lost");
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

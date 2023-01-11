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
    console.log(button);
    choices.appendChild(button);
  });
}

// event listiner
startBtn.addEventListener("click", function () {
  timer();
  startScreen.setAttribute("class", "hide");
  quastionsDiv.removeAttribute("class");
  showQuastioin();
});

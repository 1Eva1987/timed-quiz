var startScreen = document.querySelector("#start-screen");
var startBtn = document.querySelector("#start");
var quastionsDiv = document.querySelector("#questions");
var quastTitle = document.querySelector("#question-title");
var choices = document.querySelector(".choices");
var timerEl = document.querySelector("#time");
var newTime = 80;
var quastionNumber = 0;
var length = quastions.length;

// timer function
function timer() {
  var intervalTimer = setInterval(function () {
    newTime--;
    timerEl.textContent = newTime;
    if (newTime <= 0) {
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
  if (newTime <= 0) {
    quastTitle.innerHTML = "";
    removeQuestions();
    console.log("STOOOOOP");
    console.log(newTime);
    return;
  }
  quastTitle.innerHTML = quastions[quastionNumber].quastion;
  quastions[quastionNumber].answers.forEach(function (answer) {
    var button = document.createElement("button");
    button.textContent = answer.text;
    choices.appendChild(button);
  });
}
// trying create function GAME
function playGame() {
  choices.addEventListener("click", function (e) {
    var element = e.target;
    if ((element.parentElement = choices)) {
      for (let i = 0; i < quastions[quastionNumber].answers.length; i++) {
        if (element.textContent === quastions[quastionNumber].answers[i].text) {
          var answerIs = quastions[quastionNumber].answers[i].correct;
        }
      }
      if (answerIs === true) {
        removeQuestions();
        console.log("win");
        quastionNumber++;
        length--;
        if (length > 0) {
          console.log(length);
          showQuastioin();
        } else {
          console.log("END");
          quastTitle.innerHTML = "";
          removeQuestions();
          console.log("STOOOOOP");
          console.log(newTime);
          newTime = 0;
        }
      } else if (answerIs === false) {
        removeQuestions();
        console.log("lost");
        newTime = newTime - 10;
        quastionNumber++;
        length--;
        if (length > 0) {
          console.log(length);
          showQuastioin();
        } else {
          console.log("END");
          quastTitle.innerHTML = "";
          removeQuestions();
          console.log("STOOOOOP");
          console.log(newTime);

          newTime = 0;
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
  playGame();
});
// GIVEN I am taking a code quiz (✓)
// WHEN I click the start button (✓)
// THEN a timer starts and I am presented with a question (✓)
// WHEN I answer a question(✓)
// THEN I am presented with another question (✓)
// WHEN I answer a question incorrectly(✓)
// THEN time is subtracted from the clock(✓)
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

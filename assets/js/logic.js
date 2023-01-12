var startScreen = document.querySelector("#start-screen");
var startBtn = document.querySelector("#start");
var quastionsDiv = document.querySelector("#questions");
var quastTitle = document.querySelector("#question-title");
var choices = document.querySelector(".choices");
var timerEl = document.querySelector("#time");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initialsEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var newTime = 80;
var quastionNumber = 0;
var length = quastions.length;
var wrong = 0;
var correct = 0;
var score = 0;

// Timer function
function timer() {
  var intervalTimer = setInterval(function () {
    newTime--;
    timerEl.textContent = newTime;
    if (newTime <= 0) {
      clearInterval(intervalTimer);
    }
  }, 1000);
}

// Remove previous quastions
function removeQuestions() {
  choices.innerHTML = "";
}

// Function to show quastion
function showQuastioin() {
  if (newTime <= 0) {
    endOfGame();
  }
  quastTitle.innerHTML = quastions[quastionNumber].quastion;
  quastions[quastionNumber].answers.forEach(function (answer) {
    var button = document.createElement("button");
    button.textContent = answer.text;
    choices.appendChild(button);
  });
}

// Function to play game
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
        correct++;
        quastionNumber++;
        length--;
        if (length > 0) {
          console.log(length);
          showQuastioin();
        } else {
          endOfGame();
        }
      } else if (answerIs === false) {
        removeQuestions();
        console.log("lost");
        wrong++;
        newTime = newTime - 10;
        quastionNumber++;
        length--;
        if (length > 0) {
          console.log(length);
          showQuastioin();
        } else {
          endOfGame();
        }
      }
    }
  });
}
// function when the game is finished
function endOfGame() {
  quastionsDiv.setAttribute("class", "hide");
  endScreen.removeAttribute("class");
  score = newTime;
  finalScore.textContent = score;
  newTime = 1;
}

// event listiner
startBtn.addEventListener("click", function () {
  timer();
  startScreen.setAttribute("class", "hide");
  quastionsDiv.removeAttribute("class");
  showQuastioin();
  playGame();
});

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
var orderedLiEl = document.querySelector("#highscores");
var cleareBtn = document.querySelector("#clear");
var link = document.querySelector(".scores").firstChild;

var newTime = 80;
var quastionNumber = 0;
var questionsLeft = quastions.length;
var wrong = 0;
var correct = 0;
var score = 0;
var initials = "";

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
        correct++;
        quastionNumber++;
        questionsLeft--;
        if (questionsLeft > 0) {
          showQuastioin();
        } else {
          endOfGame();
        }
      } else if (answerIs === false) {
        removeQuestions();
        wrong++;
        newTime = newTime - 10;
        quastionNumber++;
        questionsLeft--;
        if (questionsLeft > 0) {
          showQuastioin();
        } else {
          endOfGame();
        }
      }
    }
  });
}
// Function to show end screen when the game is finished
function endOfGame() {
  quastionsDiv.setAttribute("class", "hide");
  endScreen.removeAttribute("class");
  finalScore.innerHTML = newTime;
  newTime = 1;
}

// Start button event listiner
startBtn.addEventListener("click", function () {
  timer();
  startScreen.setAttribute("class", "hide");
  quastionsDiv.removeAttribute("class");
  showQuastioin();
  playGame();
});

// Submit button event listiner

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  score = finalScore.innerHTML;
  console.log(score);
  initials = initialsEl.value;
  console.log(initials);

  link.click();
});

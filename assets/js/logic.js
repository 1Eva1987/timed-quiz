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
var link = document.querySelector(".scores").firstChild;
var text = document.createElement("p");
text.setAttribute("class", "feedback");

var newTime = 80;
var quastionNumber = 0;
var questionsLeft = quastions.length;

var arrOfscores = [];
// Timer function
function timer() {
  var intervalTimer = setInterval(function () {
    newTime--;
    timerEl.textContent = newTime;
    if (newTime <= 0) {
      clearInterval(intervalTimer);
      quastionsDiv.setAttribute("class", "hide");
      endScreen.removeAttribute("class");
    } else {
      finalScore.innerHTML = newTime - 1;
    }
  }, 1000);
}

// Start button event listiner
startBtn.addEventListener("click", function () {
  timer();
  startScreen.setAttribute("class", "hide");
  quastionsDiv.removeAttribute("class");
  showQuastioin();
  playGame();
});

// Remove previous buttons with answers
function removeQuestions() {
  choices.innerHTML = "";
}

// functions to play sounds
function playCorrect() {
  var sound = document.createElement("audio");
  sound.setAttribute("src", "./assets/sfx/correct.wav");
  sound.play();
}
function playWrong() {
  var sound = document.createElement("audio");
  sound.setAttribute("src", "./assets/sfx/incorrect.wav");
  sound.play();
}

// Funtions to show text correct/ wrong/ remove text
function textCorrect() {
  text.textContent = "Correct!";
  quastionsDiv.appendChild(text);
}
function textWrong() {
  text.textContent = "Wrong!";
  quastionsDiv.appendChild(text);
}
function removeText() {
  if (quastionsDiv.contains(quastionsDiv.children[2])) {
    var bad = quastionsDiv.children[2];
    console.log(bad);
    quastionsDiv.remove(bad);
  }
}

// Function to show quastion
function showQuastioin() {
  quastTitle.innerHTML = quastions[quastionNumber].quastion;
  quastions[quastionNumber].answers.forEach(function (answer) {
    var button = document.createElement("button");
    button.textContent = answer.text;
    choices.appendChild(button);
  });
}

// Function to play game
function playGame() {
  removeText();
  choices.addEventListener("click", function (e) {
    var element = e.target;
    if ((element.parentElement = choices)) {
      for (let i = 0; i < quastions[quastionNumber].answers.length; i++) {
        if (element.textContent === quastions[quastionNumber].answers[i].text) {
          var answerIs = quastions[quastionNumber].answers[i].correct;
        }
      }
      if (answerIs === true) {
        textCorrect();
        removeQuestions();
        playCorrect();
        quastionNumber++;
        questionsLeft--;
        if (questionsLeft > 0 && newTime > 0) {
          showQuastioin();
        } else {
          endOfGame();
        }
      } else if (answerIs === false) {
        removeQuestions();
        playWrong();
        textWrong();
        newTime = newTime - 10;
        quastionNumber++;
        questionsLeft--;
        if (questionsLeft > 0 && newTime > 0) {
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

// Function to store scores
function storeScores() {
  localStorage.setItem("Scores", JSON.stringify(arrOfscores));
}
// Function to get values from local storage and update existing ones
function getIt() {
  var storedScores = JSON.parse(localStorage.getItem("Scores"));
  if (storedScores) {
    arrOfscores = storedScores;
  }
}

// Submit button event listiner
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  var score = finalScore.innerHTML;
  var initials = initialsEl.value;
  var arrEl = initials + " - " + score;
  if (initials.length > 0 && initials.length < 3) {
    arrOfscores.push(arrEl);
    storeScores();
    link.click();
  } else alert("To save your score ,please enter your initials.\nMaximum 3 simbols!");
});

getIt();

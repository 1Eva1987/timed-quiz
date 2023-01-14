var startScreen = document.querySelector("#start-screen");
var startBtn = document.querySelector("#start");
var questionsDiv = document.querySelector("#questions");
var questTitle = document.querySelector("#question-title");
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
var questionNumber = 0;
var questionsLeft = questions.length;

var arrOfscores = [];

// Timer function
function timer() {
  var intervalTimer = setInterval(function () {
    newTime--;
    timerEl.textContent = newTime;
    if (newTime <= 0) {
      clearInterval(intervalTimer);
      questionsDiv.setAttribute("class", "hide");
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
  questionsDiv.removeAttribute("class");
  showQuestioin();
  playGame();
});

// Remove previous question
function removeQuestions() {
  choices.innerHTML = "";
}

// Functions to play sounds
function playCorrect() {
  var sound = new Audio("./assets/sfx/correct.wav");
  sound.play();
}
function playWrong() {
  var sound = new Audio("./assets/sfx/incorrect.wav");
  sound.play();
}

// Funtions to show text correct/ wrong/ remove text
function textCorrect() {
  text.textContent = "Correct!";
  questionsDiv.appendChild(text);
}
function textWrong() {
  text.textContent = "Wrong!";
  questionsDiv.appendChild(text);
}
function removeText() {
  if (questionsDiv.contains(questionsDiv.children[2])) {
    var bad = questionsDiv.children[2];
    console.log(bad);
    questionsDiv.remove(bad);
  }
}

// Function to show questions
function showQuestioin() {
  questTitle.innerHTML = questions[questionNumber].question;
  questions[questionNumber].answers.forEach(function (answer) {
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
      for (let i = 0; i < questions[questionNumber].answers.length; i++) {
        if (element.textContent === questions[questionNumber].answers[i].text) {
          var answerIs = questions[questionNumber].answers[i].correct;
        }
      }
      if (answerIs === true) {
        textCorrect();
        removeQuestions();
        playCorrect();
        questionNumber++;
        questionsLeft--;
        if (questionsLeft > 0 && newTime > 0) {
          showQuestioin();
        } else {
          endOfGame();
        }
      } else if (answerIs === false) {
        removeQuestions();
        playWrong();
        textWrong();
        newTime = newTime - 10;
        questionNumber++;
        questionsLeft--;
        if (questionsLeft > 0 && newTime > 0) {
          showQuestioin();
        } else {
          endOfGame();
        }
      }
    }
  });
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

// Function to show end screen when the game is finished
function endOfGame() {
  questionsDiv.setAttribute("class", "hide");
  endScreen.removeAttribute("class");
  finalScore.innerHTML = newTime;
  newTime = 1;
}

// Function to store scores in local storage
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

getIt();

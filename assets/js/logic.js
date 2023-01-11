var startScreen = document.querySelector(".strart");
var startBtn = document.querySelector("#start");
var quastionsDiv = document.querySelector("#questions");
var quastTitle = document.querySelector("#question-title");
var choices = document.querySelector(".choices");
var timerEl = document.querySelector("#time");
var newTime = 60;

// set timer function
function timer() {
  var intervalTimer = setInterval(function () {
    newTime--;
    timerEl.textContent = newTime;
    if (newTime === 0) {
      clearInterval(intervalTimer);
    }
  }, 1000);
}
timer();
startBtn.addEventListener("click", function () {
  // new time 60;
  // use timer function to count down newTime--
  // add class hiden to start page
  // remove hide class from quiz
});
// quastionsDiv.removeAttribute("class");
// var attr = quastionsDiv.getAttribute("class");
// quastionsDiv.textContent = "labas";

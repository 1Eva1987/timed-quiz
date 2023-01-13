var orderedLiEl = document.querySelector("#highscores");
var cleareBtn = document.querySelector("#clear");
var initials = localStorage.getItem("Initials");
var score = localStorage.getItem("Score");
var liEl = document.createElement("li");

liEl.textContent = initials + " - " + score;
orderedLiEl.appendChild(liEl);

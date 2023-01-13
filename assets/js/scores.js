var orderedLiEl = document.querySelector("#highscores");
var cleareBtn = document.querySelector("#clear");
var initials = localStorage.getItem("Initials");
var score = localStorage.getItem("Score");
var liEl = document.createElement("li");
var arrOfscores = JSON.parse(localStorage.getItem("Scores"));

console.log(arrOfscores);

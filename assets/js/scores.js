var orderedLiEl = document.querySelector("#highscores");
var cleareBtn = document.querySelector("#clear");
var arrOfscores = JSON.parse(localStorage.getItem("Scores"));

console.log(arrOfscores);

// for every item in the array list elements created and appended to highscores
for (var i = 0; i < arrOfscores.length; i++) {
  var liEl = document.createElement("li");
  liEl.textContent = arrOfscores[i];
  orderedLiEl.appendChild(liEl);
}

var listEl = document.getElementById("score-list");
var clearScore = document.getElementById("clear-score");

var retrieveScore = localStorage.getItem("highscore");

if (!retrieveScore){
}
else {
    var highscore = JSON.parse(retrieveScore);
    for (var i=0; i<highscore.length; i+2){
        var liEl = document.createElement("li");
        liEl.textContent = highscore[i] + " " + highscore[i+1];
        liEl.style = "list-style: none;"
        listEl.appendChild(liEl);
    }
}

function clearHighScores() {
    listEl.innerHTML = "";
}

clearScore.onclick = clearHighScores;
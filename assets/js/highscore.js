var listEl = document.getElementById("score-list");

var name = localStorage.getItem("name");
var time = localStorage.getItem("time");

if (!name || !time){
}
else {
    var liEl = document.createElement("li");
    liEl.textContent = name + " " + time;
    liEl.style = "list-style: none;"
    listEl.appendChild(liEl);
}
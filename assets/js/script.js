//Global Variables
var pageContentEl = document.querySelector("#page-content");



function startQuizHandler() {
    //create div item to hold quiz question and multiple choice answers
    var divItemEl = document.createElement("div");
    divItemEl.className = "quiz-question-container";

    var quizQuestionEl = document.createElement("h1");
    quizQuestionEl.className = "quiz-question";
    quizQuestionEl.textContent = "What is 10 + 2?";

    divItemEl.appendChild(quizQuestionEl);

    var quizAnswersEl = document.createElement("ul");
    quizAnswersEl.className = "quiz-answers";
    quizAnswersEl.innerHTML = "<li>102</li><li>10</li><li>12</li><li>2</li>";

    divItemEl.appendChild(quizAnswersEl);

    pageContentEl.appendChild(divItemEl);
    
}



pageContentEl.addEventListener("click", startQuizHandler);
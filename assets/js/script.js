//Global Variables
var pageContentEl = document.querySelector("#page-content");
var quizObjArr = []; 
var quizObj = {
    question: "What is 10 + 2?",
    optionA: "102",
    optionB: "10",
    optionC: "12",
    optionD: "2"
};

function startQuizHandler() {
    var startScreen = document.getElementById("quiz-start");
    startScreen.hidden = "true";

    //create div item to hold quiz question and multiple choice answers
    var divItemEl = document.createElement("div");
    divItemEl.className = "quiz-question-container";

    var quizQuestionEl = document.createElement("h1");
    quizQuestionEl.className = "quiz-question";
    quizQuestionEl.textContent = "What is 10 + 2?";

    divItemEl.appendChild(quizQuestionEl);

    var quizAnswersEl = document.createElement("ul");
    quizAnswersEl.className = "quiz-answers";
    quizAnswersEl.innerHTML = "<button type='submit'>1. 102</button><button type='submit'>2. 10</button><button type='submit'>3. 12</button><button type='submit'>4. 2</button>";

    divItemEl.appendChild(quizAnswersEl);

    pageContentEl.appendChild(divItemEl);
    
}



pageContentEl.addEventListener("click", startQuizHandler);
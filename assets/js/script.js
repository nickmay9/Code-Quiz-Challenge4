//Global Variables
var pageContentEl = document.querySelector("#page-content");
var startBtn = document.getElementById("btn-start");
var timeEl = document.getElementById("time");
var timeLeft = 75;
timeEl.textContent = "Time: " + timeLeft;
var timeInterval;
var contentToHide;
var quizContentContainerEl;
var id;
var scoreArr = [];
var quizId = 0;
var quizObj = [
{
    question: "How many soccer players are on a field at one time?",
    optionA: "11",
    optionB: "7",
    optionC: "22",
    optionD: "18",
    correct: 3
},
{
    question: "How many players can one team put out on a soccer field?",
    optionA: "11",
    optionB: "7",
    optionC: "22",
    optionD: "18",
    correct: 1
},
{
    question: "How many players can one team dress per soccer game?",
    optionA: "11",
    optionB: "7",
    optionC: "22",
    optionD: "18",
    correct: 4
}
];
//end global variables

// for loop to create all the elements and keep them hidden. 
for (var i=0; i<quizObj.length; i++){
    //create div item to hold quiz question and multiple choice answers
    var divItemEl = document.createElement("div");
    divItemEl.className = "quiz-question-container";
    divItemEl.setAttribute("question-id", quizId)

    //create header element for the quiz question and append to div
    var quizQuestionEl = document.createElement("h1");
    quizQuestionEl.className = "quiz-question";
    quizQuestionEl.textContent = quizObj[i].question;
    divItemEl.appendChild(quizQuestionEl);

    //create ul item to hold all quiz answers and append to div
    var quizAnswersEl = document.createElement("ul");
    quizAnswersEl.className = "quiz-answers";
    quizAnswersEl.setAttribute("quiz-buttons", quizId);
    //create all the answer buttons
    for (var x=1; x<=4; x++)
    {
        var answerButtonEl = document.createElement("button")
        answerButtonEl.type = "submit";
        switch (x){
            case 1:
                answerButtonEl.textContent = quizObj[i].optionA;
                break;
            case 2:
                answerButtonEl.textContent = quizObj[i].optionB;
                break;
            case 3:
                answerButtonEl.textContent = quizObj[i].optionC;
                break;
            case 4:
                answerButtonEl.textContent = quizObj[i].optionD;
                break;
        }
        if(quizObj[i].correct === x){
            answerButtonEl.onclick = correctAns;
        }
        else {

            answerButtonEl.onclick = wrongAns;
        }
        quizAnswersEl.appendChild(answerButtonEl);

    }
    divItemEl.appendChild(quizAnswersEl);

    //create p element to tell user if they get question right or wrong
    var answerResponseEl = document.createElement("p");
    answerResponseEl.className = "answer";
    answerResponseEl.setAttribute("ans-response", quizId);
    answerResponseEl.style = "color: rgba(0,0,0,0.5);"
    divItemEl.appendChild(answerResponseEl);

    //append entire div item to page
    pageContentEl.appendChild(divItemEl);

    //hide elements from the page
    var quizContentContainerEl = document.querySelector(".quiz-question-container");
    var id = quizContentContainerEl.getAttribute("question-id");
    var contentToHide = document.querySelector(".quiz-question-container[question-id='" + quizId + "']");
    contentToHide.hidden = "true";
    quizId++;
}

//create end page view
var divItemEl = document.createElement("div");
divItemEl.className = "quiz-question-container";
divItemEl.setAttribute("result-page", quizId);

var hEl = document.createElement("h1");
hEl.textContent = "All Done!";
divItemEl.appendChild(hEl);

var pEl = document.createElement("p");
pEl.id = "score";
divItemEl.appendChild(pEl);

var formEl = document.createElement("form");
formEl.innerHTML = "Enter Initials:<input type='text' name='initials'/><button id='save-score' type='submit'><a href='./highscore.html'>Submit</a></button>"
divItemEl.appendChild(formEl);

var answerResponseEl = document.createElement("p");
answerResponseEl.className = "answer";
answerResponseEl.setAttribute("ans-response", quizId);
answerResponseEl.style = "color: rgba(0,0,0,0.5);"
divItemEl.appendChild(answerResponseEl);

divItemEl.hidden = "true";
pageContentEl.appendChild(divItemEl);

//reset quizId to zero to call first element
quizId = 0;


//starts timer when quiz start button has been hit
function startQuizHandler() {

    timeInterval = setInterval(function() {
    if (timeLeft>0){
      timeLeft--;
      timeEl.textContent = "Time: " + timeLeft;
    }
    else {
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);

  nextQuizQuestionHandler();

}

//on a button click hides previous content and reveals the next content
function nextQuizQuestionHandler() {
    if(quizId === quizObj.length)
    {
        clearInterval(timeInterval);

        quizId--;
        quizContentContainerEl = document.querySelector(".quiz-question-container");
        id = quizContentContainerEl.getAttribute("question-id");
        contentToHide = document.querySelector(".quiz-question-container[question-id='" + quizId + "']");
        contentToHide.hidden = true;
        quizId++;

        quizContentContainerEl = document.querySelector(".quiz-question-container");
        id = quizContentContainerEl.getAttribute("question-id");
        contentToHide = document.querySelector(".quiz-question-container[result-page='" + quizId + "']");
        contentToHide.hidden = false;
        var pEl = document.getElementById("score");
        pEl.textContent = "Your Score = " + timeLeft;
        
        quizId = 0;
    }
    else if(quizId === 0){
        contentToHide = document.getElementById("quiz-start");
        contentToHide.hidden = true;
  
        quizContentContainerEl = document.querySelector(".quiz-question-container");
        id = quizContentContainerEl.getAttribute("question-id");
        contentToHide = document.querySelector(".quiz-question-container[question-id='" + quizId + "']");
        contentToHide.hidden = false;
        quizId++;
    }
    else {
        quizId--;
        quizContentContainerEl = document.querySelector(".quiz-question-container");
        id = quizContentContainerEl.getAttribute("question-id");
        contentToHide = document.querySelector(".quiz-question-container[question-id='" + quizId + "']");
        contentToHide.hidden = true;
        quizId++;
  
        quizContentContainerEl = document.querySelector(".quiz-question-container");
        id = quizContentContainerEl.getAttribute("question-id");
        contentToHide = document.querySelector(".quiz-question-container[question-id='" + quizId + "']");
        contentToHide.hidden = false;
        quizId++;
    }
}

function correctAns() {
    console.log(quizId);
    var pEl = document.querySelector(".answer");
    id = pEl.getAttribute("ans-respone");
    var display = document.querySelector(".answer[ans-response='" + quizId + "']");
    display.textContent = "Correct Answer!";
}
function wrongAns() {
    var pEl = document.querySelector(".answer");
    id = pEl.getAttribute("ans-respone");
    var display = document.querySelector(".answer[ans-response='" + quizId + "']");
    display.textContent = "Wrong Answer!";
    timeLeft -= 10;
}

function submitResults() {
    var nameInput = document.querySelector("input[name='initials']").value;

    scoreArr.push(nameInput, timeLeft);
    localStorage.setItem("highscore", JSON.stringify(scoreArr));

}

var quizBtn = document.querySelector(".quiz-answers[quiz-buttons='" + 0 + "']");
quizBtn.onclick = nextQuizQuestionHandler;
var quizBtntwo = document.querySelector(".quiz-answers[quiz-buttons='" + 1 + "']");
quizBtntwo.onclick = nextQuizQuestionHandler;
var quizBtnthree = document.querySelector(".quiz-answers[quiz-buttons='" + 2 + "']");
quizBtnthree.onclick = nextQuizQuestionHandler;

startBtn.onclick = startQuizHandler;

var submitScoreBtn = document.getElementById("save-score");
submitScoreBtn.onclick = submitResults;
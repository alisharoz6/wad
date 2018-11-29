var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "None of the above"],
    correctAnswer : 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';

function displayNext() {
    /*Write your code here */
    // var n= document.getElementById("next-btn");
    // n.innerText='Next Question';
    if(currentQuestion<=3)
    {
        var opt=document.querySelector("input[type=radio]:checked");
        if(opt==0)
        {
            var qm=document.getElementById("quiz-message");
            qm.innerText='Please select an answer';
            var Choiceopt=document.getElementById("choice-list");
            Choiceopt.innerHTML='';
        }
        else if (currentQuestion<3){
            if(opt.id==questions[currentQuestion].correctAnswer)
            {
                correctAnswers++;
            }
            var Choiceopt=document.getElementById("choice-list");
            Choiceopt.innerHTML='';
            currentQuestion++;
        }
        if(currentQuestion!=3) {
            displayCurrentQuestion();
        }
        else
        {
            displayScore();
            var qm=document.getElementById("quiz-message");

            currentQuestion++;
            var n= document.getElementById("next-btn");
            n.innerText='Reset';
        }

    }
    else {
        resetQuiz();
    }

}

function displayCurrentQuestion() {

    /*Write your code here */
    var n= document.getElementById("next-btn");
    n.innerText='Next Question';
    var qid=document.getElementById("question");
    qid.innerHTML='<p>'+questions[currentQuestion].question+'<p>';
    var Choiceopt=document.getElementById("choice-list");
    for(var i=0;i<questions[currentQuestion].choices.length;i++)
    {
        Choiceopt.innerHTML += '<li>'+'<input id="'+i+'" type="radio" name="abn">'+ questions[currentQuestion].choices[i] +'</li>';
    }


}

function resetQuiz() {
    var n = document.getElementById("next-btn");
    n.innerText='Reset';
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
    displayCurrentQuestion();
}
function displayScore() {

    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}
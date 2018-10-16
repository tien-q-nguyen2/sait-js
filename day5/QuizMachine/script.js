var questions = [];
var answers = [];

questions.push(
    '<p>How to refer to the value of the email field below?</p>'+
    '<p>&lt;form id="myForm" name="yourForm"&gt;</p>'+
    '<p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="email" id="email" name="myText"&gt;</p>'+
    '<p>&lt;/form&gt;</p>'+
    '<p>document._____ (Fill in the blank)</p>'+
    '<div>'+
    '    <label>myForm.email.value;'+
    '        <input type="radio" id="opt1" name="quiz" value="opt1">'+
    '    </label>'+
    '</div>'+
    '<div>'+
    '    <label>yourForm.email.value;'+
    '        <input type="radio" id="opt2" name="quiz" value="opt2">'+
    '    </label>'+
    '</div>'+
    '<div>'+
    '    <label>yourForm.myText.value;'+
    '        <input type="radio" id="opt3" name="quiz" value="opt3">'+
    '    </label>'+
    '</div>'+
    '<div>'+
    '    <label>myForm.myText.value;'+
    '        <input type="radio" id="opt4" name="quiz" value="opt4">'+
    '    </label>'+
    '</div>'
);
answers.push("opt3");

questions.push(
    '<p>Select all regular expressions that apply to both:</p>'+
    '<p>var str1 = "amazing-website2000.com";</p>'+
    '<p>var str2 = "webite-yourburger.net";</p>'+
    '<div>'+
    '    <label>/.+-.+/'+
    '        <input type="checkbox" id="opt1" name="quiz" value="opt1">'+
    '    </label>'+
    '</div>'+
    '<div>'+
    '    <label>/webs+ite/'+
    '        <input type="checkbox" id="opt2" name="quiz" value="opt2">'+
    '    </label>'+
    '</div>'+
    '<div>'+
    '    <label>/webs?ite/'+
    '        <input type="checkbox" id="opt3" name="quiz" value="opt3">'+
    '    </label>'+
    '</div>'+
    '<div>'+
    '    <label>/webs*ite/'+
    '        <input type="checkbox" id="opt4" name="quiz" value="opt4">'+
    '    </label>'+
    '</div>'
);
answers.push("opt1opt3opt4")

questions.push(
    '<p>Use .substring(n,m) to extract "esome." out of str1:</p>'+
    '<p>var str1 = "Winter is pretty awesome."</p>'+
    '<div>'+
    '<label>str1.'+
    '<input id="quiz" name="quiz" required maxlength="20">'+
    '</label>'+
    '</div>'
);
answers.push("substring(19,25)");

questions.push(
    '<p>myArray has n elements but we only want to iterate through n-2 elements of it.</p>'+
    '<p>Fill in the blank below:</p>'+
    '<div>'+
    '<label>for(var i = 0; i <= '+
    '<input id="quiz" name="quiz" required maxlength="17">'+
    '; i++)'+
    '</label>'+
    '</div>'
);
answers.push("myArray.length-3")

questions.push(
    '<p>Given a div with class .my-div, how do we style it to arrange and center its child elements vertically in the middle of that div?</p>'+
    '<p>.my-div{ display: flex; ...}'+
    '<div>'+
    '    <label>flex-direction: row; justify-content: center;'+
    '        <input type="radio" id="opt1" name="quiz" value="opt1">'+
    '    </label>'+
    '</div>'+
    '<div>'+
    '    <label>flex-direction: column; justify-content: center;'+
    '        <input type="radio" id="opt2" name="quiz" value="opt2">'+
    '    </label>'+
    '</div>'+
    '<div>'+
    '    <label>flex-direction: column; align-items: center;'+
    '        <input type="radio" id="opt3" name="quiz" value="opt3">'+
    '    </label>'+
    '</div>'+
    '<div>'+
    '    <label>flex-direction: row; align-items: center;'+
    '        <input type="radio" id="opt4" name="quiz" value="opt4">'+
    '    </label>'+
    '</div>'
);
answers.push("opt3")

var userAnswers = [];
for (var i = 0; i < answers.length; i++) {
    userAnswers.push(''); //so that this array can be indexed into at any point
}

var userHaveAnswered = [];
for (var i = 0; i < answers.length; i++) {
    userHaveAnswered.push(false); //users haven't answered any question
}

function checkAllQuestionsAnswered(){
    for (var i = 0; i < answers.length; i++) {
        if(userHaveAnswered[i] == false){
            return false;
        }
    }
    return true;
}

var saveAnswerButton = document.getElementById('save');
var submitQuizButton = document.getElementById('submit');
var answerStatus = document.getElementById('answer-status');

saveAnswerButton.addEventListener('click', function(){
    if (saveAnswerButton.className.indexOf('disabled') !== -1){
        return;
    }
    var currQuestionIndex = nextQuestionIndex - 1; //curr stands for current
    if(currQuestionIndex === -1){
        currQuestionIndex = questions.length - 1;
    }
    var answer = '';
    var answerList = document.quizForm.quiz;
    if (answerList.length){
        for (var i = 0; i < answerList.length; i++) {
            if (answerList[i].checked){
                answer += answerList[i].value;
            }
        }
    } else {
        answer = answerList.value;
    }
    userAnswers[currQuestionIndex] = answer.replace(/ /g,'');

    if (answer !== ''){
        userHaveAnswered[currQuestionIndex] = true;
        answerStatus.innerText = 'Saved';
    }
    if (checkAllQuestionsAnswered() === true) {
        submitQuizButton.className = ''; //remove 'disabled' class
    }
})

var quizOver = false;
submitQuizButton.addEventListener('click', function(){
    if (submitQuizButton.className.indexOf('disabled') !== -1){
        return;
    }
    var numOfCorrectAnswers = 0;
    for (var i = 0; i < answers.length; i++){
        if (userAnswers[i] === answers[i]){
            numOfCorrectAnswers++;
        }
    }

    var wellDoneMessage = '';
    if(numOfCorrectAnswers === answers.length){
        wellDoneMessage = '<p>Well Done!</p>';
    }
    questions.push( wellDoneMessage +
        '<p>You got '+ numOfCorrectAnswers + ' out of ' + answers.length  +' questions correct.</p>'+
        '<p>Refresh the browser if you want to try again.</p>'
    );
    quizOver = true;
    backButton.className = 'disabled';
    nextButton.className = 'disabled';
    submitQuizButton.className = 'disabled';
    saveAnswerButton.className = 'disabled';
    displayQuestion(questions.length - 1);
})


var questionContainer = document.getElementsByClassName('question-container')[0];
var questionElement = document.getElementById('question');
var questionIndex = document.getElementById('question-index');

var twitterButton = document.getElementById('twitter-share-button');

function displayQuestion(indexToDisplay){
    var delayBeforeQuestionChange = 500;
    setTimeout(function(){
        var currQuestionNum = nextQuestionIndex;
        if(currQuestionNum === 0){
            currQuestionNum = questions.length;
        }
        questionIndex.innerHTML ='<p>'+ currQuestionNum +' of ' + questions.length +'</p>';
        if(quizOver){
            questionIndex.innerHTML = '<p>Quiz Over!</p>';
        }
        questionElement.innerHTML = '<form name="quizForm">' + questions[indexToDisplay] + '</form>';
        answerStatus.innerText = '';
        if (userHaveAnswered[indexToDisplay] === true){
            answerStatus.innerText = 'Saved';
        }
    }, delayBeforeQuestionChange);
}

function getNextQuestion(){
    if (nextButton.className.indexOf('disabled') !== -1){
        return;
    }
    displayQuestion(nextQuestionIndex);
    questionContainer.className = 'question-container disappear-left';
    //Old question slides out the left side of the screen, then new one comes in
    setTimeout(function(){ 
        questionContainer.className = 'question-container appear-right';
        setTimeout(function(){
            questionContainer.className = 'question-container';
        }, 500);
    }, 500);
    nextQuestionIndex++;
    if(nextQuestionIndex > questions.length - 1) {
        nextQuestionIndex = 0;
    }
}

function getPreviousQuestion(){
    if (backButton.className.indexOf('disabled') !== -1){
        return;
    }
    nextQuestionIndex--;
    if(nextQuestionIndex === -1) {
        nextQuestionIndex = questions.length - 1;
    }
    if(nextQuestionIndex === 0) {
        displayQuestion(questions.length - 1);
    } else {
        displayQuestion(nextQuestionIndex - 1);
    }
    questionContainer.className = 'question-container disappear-right';
    setTimeout(function(){
        questionContainer.className = 'question-container appear-left';
        setTimeout(function(){
            questionContainer.className = 'question-container';
        }, 500);
    }, 500);
}

//Start the question Machine by displaying the first question
var nextQuestionIndex = 0;
displayQuestion(0);
nextQuestionIndex++;

var nextButton = document.getElementById('next-button');
nextButton.addEventListener("click", function(event){
    event.preventDefault();
    getNextQuestion()
});

var backButton = document.getElementById('back-button');
backButton.addEventListener("click", function(event){
    event.preventDefault();
    getPreviousQuestion()
});

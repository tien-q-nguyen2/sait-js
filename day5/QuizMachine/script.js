questions = [];

questions.push(
    '<div> '+
    '<label for="choose">Would you prefer a banana or cherry?</label> '+
    '<input id="choose" name="i_like" required minlength="6" maxlength="6">'+
    '</div>'+
    '<div>'+
    '<label for="number">How many would you like?</label>'+
    '<input type="number" id="number" name="amount" value="1" min=\'1\' max=\'10\'>'+
    '</div>'+
    '<div>'+
    '<button>Submit</button>'+
    '</div>'
);
questions.push(
    'Quiz 2'
);
questions.push(
    'Quiz 3'
);
questions.push(
    'Quiz 4'
);
questions.push(
    'Quiz 5'
);
questions.push(
    'Quiz 6'
);

var questionContainer = document.getElementsByClassName('question-container')[0];
var questionElement = document.getElementById('question');
var questionIndex = document.getElementById('question-index');

var twitterButton = document.getElementById('twitter-share-button');

function displayQuestion(indexToDisplay){
    var delayBeforeQuestionChange = 500;
    setTimeout(function(){
        var currQuestionNum = nextQuestionIndex; //curr stands for current
        if(currQuestionNum === 0){
            currQuestionNum = questions.length;
        }
        questionIndex.innerHTML ='<p>'+ currQuestionNum +' of ' + questions.length +'</p>';
        questionElement.innerHTML = '<p>' + questions[indexToDisplay] + '</p>';

        //Every time a new question is displayed, update the Twitter message to send
        twitterButton.href = "https://twitter.com/intent/tweet?text=" +
            'Check out this great coding quiz website I found: "' +
            questions[indexToDisplay].replace(/;/g, ',') + '"';

    }, delayBeforeQuestionChange);
}

function getNextQuestion(){
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
nextButton.addEventListener("click", getNextQuestion);

var backButton = document.getElementById('back-button');
backButton.addEventListener("click", getPreviousQuestion);

var twitterButton = document.getElementById('twitter-share-button');
questionContainer.addEventListener("mouseover", function() {
    twitterButton.style.transitionDuration = '0.3s';
    twitterButton.style.opacity = 0.90;
});

questionContainer.addEventListener("mouseout", function() {
    twitterButton.style.opacity = 0;
});
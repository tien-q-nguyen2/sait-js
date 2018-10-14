quotes = [];
authors = [];

quotes.push("Repetition is the mother of learning, the father of action, which makes it the architect of accomplishment.");
authors.push("Zig Ziglar");

quotes.push("To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.");
authors.push("Ralph Waldo Emerson");

quotes.push("Everything you can imagine is real.");
authors.push("Pablo Picasso");

quotes.push("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.");
authors.push("Albert Einstein");

quotes.push("He who has a why to live can bear almost any how.");
authors.push("Friedrich Nietzsche");

quotes.push("It is better to be hated for what you are than to be loved for what you are not.");
authors.push("Andre Gide, in Autumn Leaves");

quotes.push("The fool doth think he is wise, but the wise man knows himself to be a fool.");
authors.push("William Shakespeare, in As You Like It");

var quoteContainer = document.getElementsByClassName('quote-container')[0];
var quoteElement = document.getElementById('quote');
var authorElement = document.getElementById('author');
var quoteIndex = document.getElementById('quote-index');

// Animate in the next quote every 30 seconds
var intervalTimerId = setInterval(getNextQuote, 30000);

var twitterButton = document.getElementById('twitter-share-button');

function displayQuote(indexToDisplay){
    clearInterval(intervalTimerId);
    intervalTimerId = setInterval(getNextQuote, 30000);
    var delayBeforeQuoteChange = 760;
    if(!quoteContainer.animate){ //.animate() is not supported (Edge, IE, Safari?)
        delayBeforeQuoteChange = 400;
    }
    setTimeout(function(){
        var currQuoteNum = nextQuoteIndex;
        if(currQuoteNum === 0){
            currQuoteNum = quotes.length;
        }
        quoteIndex.innerHTML ='<p>'+ currQuoteNum +' of ' + quotes.length +'</p>';
        quoteElement.innerHTML = '<p>' + quotes[indexToDisplay] + '</p>';
        authorElement.innerHTML = '<p>~ ' + authors[indexToDisplay]+ '</p>';

        //Every time a new quote is displayed, update the Twitter message to send
        twitterButton.href = "https://twitter.com/intent/tweet?text=" +
            'I got this great quote from the Quote Machine! Check it out: "' +
            quotes[indexToDisplay].split(' ').join('+') + '" ~ by ' + 
            authors[indexToDisplay];

    }, delayBeforeQuoteChange);
}

function getNextQuote(){
    displayQuote(nextQuoteIndex);
    if(!quoteContainer.animate){ //if .animate() is not supported
        quoteContainer.className = 'quote-container disappear-left';
        //Old quote slides out the left side of the screen, then new one comes in
        setTimeout(function(){ 
            quoteContainer.className = 'quote-container appear-right';
            setTimeout(function(){
                quoteContainer.className = 'quote-container';
            }, 400);
        }, 400);
    } else {
        quoteContainer.animate(
            [{ transform: 'rotate3d(0, 1, 0, 0deg)' }, 
            { transform: 'rotate3d(0.1, 1, 0.1, 360deg)' }
            ], {duration: 1000});
    }
    nextQuoteIndex++;
    if(nextQuoteIndex > quotes.length - 1) {
        nextQuoteIndex = 0;
    }
}

function getPreviousQuote(){
    nextQuoteIndex--;
    if(nextQuoteIndex === -1) {
        nextQuoteIndex = quotes.length - 1;
    }
    if(nextQuoteIndex === 0) {
        displayQuote(quotes.length - 1);
    } else {
        displayQuote(nextQuoteIndex - 1);
    }
    if(!quoteContainer.animate){
        quoteContainer.className = 'quote-container disappear-right';
        setTimeout(function(){
            quoteContainer.className = 'quote-container appear-left';
            setTimeout(function(){
                quoteContainer.className = 'quote-container';
            }, 400);
        }, 400);
    } else {
        quoteContainer.animate(
            [{ transform: 'rotate3d(0, 1, 0, 0deg)' }, 
            { transform: 'rotate3d(0.1, -1, 0.1, -360deg)' }
            ], {duration: 1000});
    }
}

//Start the Quote Machine by displaying the first quote
var nextQuoteIndex = 0;
displayQuote(0);
nextQuoteIndex++;

var nextButton = document.getElementById('next-button');
nextButton.addEventListener("click", getNextQuote);

var backButton = document.getElementById('back-button');
backButton.addEventListener("click", getPreviousQuote);

var twitterButton = document.getElementById('twitter-share-button');
quoteContainer.addEventListener("mouseover", function() {
    twitterButton.style.transitionDuration = '0.3s';
    twitterButton.style.opacity = 0.65;
});

quoteContainer.addEventListener("mouseout", function() {
    twitterButton.style.opacity = 0;
});
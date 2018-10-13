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

quotes.push("In three words I can sum up everything I've learned about life: it goes on.");
authors.push("Robert Frost");

quotes.push("It is better to be hated for what you are than to be loved for what you are not.");
authors.push("Andre Gide, in Autumn Leaves");

quotes.push("The fool doth think he is wise, but the wise man knows himself to be a fool.");
authors.push("William Shakespeare, in As You Like It");

var quoteElement = document.getElementById('quote');
var authorElement = document.getElementById('author');

var intervalTimerId = setInterval(getNextQuote, 30000);

function displayQuote(index){
    clearInterval(intervalTimerId);
    intervalTimerId = setInterval(getNextQuote, 30000);
    quoteElement.innerHTML = '<p>' + quotes[index] + '</p>';
    authorElement.innerHTML = '<p>~ ' + authors[index]+ '</p>';
}

function getNextQuote(){
    displayQuote(nextQuoteIndex);
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
}

//At the start of the Quote Machine
var nextQuoteIndex = 0;
displayQuote(0);
nextQuoteIndex++;

var nextButton = document.getElementById('next-button');
nextButton.addEventListener("click", getNextQuote);

var backButton = document.getElementById('back-button');
backButton.addEventListener("click", getPreviousQuote);
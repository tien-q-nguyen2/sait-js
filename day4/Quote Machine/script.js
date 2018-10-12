quotes = [];
authors = [];

quotes.push("I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.");
authors.push("Maya Angelou");

quotes.push("To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.");
authors.push("Ralph Waldo Emerson");

quotes.push("Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.");
authors.push("Bernard M. Baruch");

quotes.push("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.");
authors.push("Albert Einstein");

quotes.push("In three words I can sum up everything I've learned about life: it goes on.");
authors.push("Robert Frost");

// quotes.push("I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.");
// authors.push("Marilyn Monroe");

quotes.push("It is better to be hated for what you are than to be loved for what you are not.");
authors.push("Andre Gide, in Autumn Leaves");

quotes.push("The fool doth think he is wise, but the wise man knows himself to be a fool.");
authors.push("William Shakespeare, in As You Like It");

var quoteElement = document.getElementById('quote');
var authorElement = document.getElementById('author');

function displayQuote(index){
    quoteElement.innerText = quotes[index];
    authorElement.innerText = '~ ' + authors[index] + ' ~';
}

var nextQuoteIndex = 0;

function getNextQuote(){
    displayQuote(nextQuoteIndex);
    nextQuoteIndex++;
    if(nextQuoteIndex > quotes.length - 1) {
        nextQuoteIndex = 0;
    }
}

displayQuote(0);
nextQuoteIndex++;

setInterval(getNextQuote, 2000);

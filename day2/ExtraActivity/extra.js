//----for loops

//The even/odd reporter
for (var i = 0; i < 21; i++){
    if (i % 2 == 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}

//Multiplication Tables
for (var i = 0; i < 11; i++) {
    console.log(i + ' * 9 = ' + i*9);
}

for (var i = 0; i < 11; i++) {
    for (var j = 0; j < 11; j++){
        console.log(i + ' * ' + j + ' = ' + i*j);
    }
}

//The Grade Assigner
function assignGrade(score){
    if(score >= 90){
        return "A";
    } else if (score >= 80){
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 65) {
        return 'D';
    } else {
        return 'F';
    }
}
for(var i = 60; i <= 100; i++){
    console.log("For " + i + ', you got a ' + assignGrade(i));
}


//----Arrays
//Your top choices
colors = ['yellow', 'blue', 'green', 'purple', 'violet', 'orange', 'red'];
for (var i = 1; i < colors.length; i++){
    console.log("My #" + i + " choice is " + colors[i-1]);
}

for (var i = 1; i < colors.length; i++){
    var suffix;
    if (i % 10 === 1) {
        suffix = 'st';
    } else if (i % 10 === 2) {
        suffix = 'nd';
    } else if (i % 10 === 3) {
        suffix = 'rd';
    } else {
        suffix = 'th'
    }
    console.log("My " + i + suffix + " choice is " + colors[i-1]);
}


//----Strings
//DrEvil
function DrEvil(num){
    var output = num + ' dollars';
    if (num === 1000000) {
        output += ' (pinky)';
    }
    console.log(output)
    return output;
}
DrEvil(100);
DrEvil(1000000);


//MixUp
function mixUp(str1, str2) {
    var slice1 = str1.slice(0,2);
    var slice2 = str2.substring(0,2);
    str1 = slice2 + str1.slice(2, str1.length);
    str2 = slice1 + str2.slice(2, str2.length);
    return str1 + ' ' + str2;
}
console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));


//FixStart
function fixStart(aString) {
    var firstChar = aString[0];
    var retString = '';
    var indicesToReplace = [];
    for (var i = 1; i < aString.length; i++) {
        if (aString[i] === firstChar) {
            indicesToReplace.push(i);
        }
    }
    var j = 0;
    for (var i = 0; i < aString.length; i++) {
        if (i === indicesToReplace[j]){
            j++;
            retString += '*';
            continue;
        }
        retString += aString[i];
    }
    return retString;
}

console.log(fixStart('babble'));
console.log(fixStart('heather'));


//Verbing
function verbing(aString) {
    var retString;
    if (aString.substr(aString.length - 3, 3) === 'ing'){
        retString = aString + 'ly';  
    }
    else if (aString.length >= 3) {
        retString = aString + 'ing';
    } else {
        retString = aString;
    }
    return retString;
}

console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));


//Not Bad
function notBad(aString) {
    var retString;
    var indexOfNot = aString.indexOf('not');
    var indexOfBad = aString.indexOf('bad');
    if (indexOfNot === -1 || indexOfBad === -1){
        retString = aString;
    }
    else if (indexOfNot < indexOfBad) {
        retString = aString.substring(0, indexOfNot) + 'good' 
            + aString.substring(indexOfBad + 3, aString.length);
    }
    return retString;
}
console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));


//The Word Guesser
var wordLetters = ['S', 'A', 'N', 'G'];
var currentLetters = ['_','_','_','_'];
var guesses = [];
var hangmanCount = 0;

console.log('You are now participating in a game of Hangman.');
console.log('Use guessLetter(<a guess letter>) to play.');
console.log('Hint: The word has ' + wordLetters.length + ' letters.');
console.log('You have 6 attempts.');
function guessLetter(guessedLetter) {
    guessedLetter = guessedLetter.toUpperCase();
    console.log('You guessed:', guessedLetter);

    for (var i = 0; i < wordLetters.length; i++){
        if (guesses.includes(guessedLetter)){
            break;
        }
        if (guessedLetter === wordLetters[i]){
            hangmanCount--; //to counteract the hangmanCount++ below
            currentLetters[i] = guessedLetter;
            console.log('Nice one! ' + guessedLetter + ' is in there.');
            console.log('Current Progress: ' + currentLetters.join(''));
            if(!currentLetters.includes('_')){
                console.log('Congrats! You won.');
            }
            break;
        }
    }
    guesses.push(guessedLetter);
    hangmanCount++;
    if(hangmanCount === 6){
        console.log('GAME OVER');
        console.log('You killed him!')
        console.log('  ================')
        console.log('  |             []');
        console.log('  |             []');
        console.log(' ( )            []');
        console.log('/ | \\           []');
        console.log('  |             []');
        console.log('  |             []');
        console.log(' / \\            []');
        console.log('/   \\           []');
        console.log('                []');
        console.log('               //\\\\');
        console.log('              //  \\\\');
        console.log('             //    \\\\');
    }
}


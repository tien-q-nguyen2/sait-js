var birthYear = 1993;
var futureYear = 2018;

birthYear = prompt('What is your year of birth?')
futureYear = prompt('Give me a year in the future:')

var firstPossibleAge = futureYear - birthYear;
var secondPossibleAge = firstPossibleAge - 1;

console.log('I will be either ' + firstPossibleAge 
    + ' or ' + secondPossibleAge + ' in ' + futureYear);

alert('You will be either ' + firstPossibleAge 
+ ' or ' + secondPossibleAge + ' in ' + futureYear);
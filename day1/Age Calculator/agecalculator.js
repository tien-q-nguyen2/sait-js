var birthYear = 1993;
var futureYear = 2022;

// birthYear = prompt('What is your year of birth?')
// futureYear = prompt('Give me a year in the future:')

var firstPossibleAge = futureYear - birthYear;
var secondPossibleAge = firstPossibleAge - 1;

console.log('I will be either ' + firstPossibleAge 
    + ' or ' + secondPossibleAge + ' in ' + futureYear);

// alert('You will be either ' + firstPossibleAge 
// + ' or ' + secondPossibleAge + ' in ' + futureYear);

//Extra activity
function calculateDogAge(dogAge, convRate) {
    console.log("Your doggie is", dogAge * convRate, "years old in dog years!");
}

calculateDogAge(1.5, 7);
calculateDogAge(10, 7);
calculateDogAge(6, 10);
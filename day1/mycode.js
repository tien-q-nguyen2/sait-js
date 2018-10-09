alert('Hello World!');
console.log('Secret message');

// This is a comment
/* This is also a comment but it takes
up 2 lines */
alert('This is an alert');
console.log('This is a message to the console');
document.write("This document belongs to Tien.");

//Create a variable
var POTUS = 'Donald Trump';
console.log(POTUS);

//Arithmetic
var numberOfTanks = 10000;
var numberOfWarships = 500;
var militaryPowerRating = numberOfTanks * 10 + numberOfWarships * 100;
console.log('Military Power Rating:', militaryPowerRating);

var myHunger = 100;
var theBurger = -60;
var theFries = -30;
var theSoda = -5;
var myHunger = myHunger + theBurger + theFries + theSoda;
console.log('My Remaining Hunger:', myHunger + '%');

//What's Your Name?
firstName = 'Tien ';
lastName = 'Nguyen';
console.log(firstName + lastName);

//Write a Function
function excitedlySurprised(){
    console.log('Wow, this is awesome!');
}
excitedlySurprised()

//Write a Simple Program
function nameFunction(){
    var firstName = 'Tien';
    var lastName = 'Nguyen';
    var personName = firstName + ' ' + lastName;
    console.log('From nameFunction:', personName);
}
nameFunction();

function updatedNameFunction(firstName, lastName){
    var personName = firstName + ' ' + lastName;
    console.log('From updatedNameFunction:', personName);
}
updatedNameFunction('Tien', 'Nguyen');

//Return Statements
function combineFirstNameLastName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
var myName = combineFirstNameLastName('Tien', 'Nguyen');
console.log('My name is still', myName);

//Activity: Temperature
var temperature = -3;
if (temperature < 10){
    console.log("Put on a coat! It's " + temperature + " degrees right now.")
}

//Modify Temperature Code
var temp = -25;
console.log("It's " + temp + " degrees right now.")
if (temp < -20){
    console.log("Stay inside!")
} else if (temp < 0) {
    console.log("Put a coat and a hat on!")
} else if (temp < 10) {
    console.log("Put on a coat!")
} else {
    console.log("It's " + temp + " degrees right now. "
                + "Feel free to wear anything today.")
}

//Logical Operators
var temp = -15;
var hasAHat = false;
console.log("It's " + temp + " degrees right now and you having a hat is " + hasAHat);
if (temp < -20){
    console.log("Stay inside!")
} else if (temp < 0 && hasAHat) {
    console.log("Put a coat and a hat on!")
} else if (temp < 0 && !hasAHat) {
    console.log("Stay inside and buy a hat next time!")
} else if (temp < 10) {
    console.log("Put on a coat!")
} else {
    console.log("Feel free to wear anything today.")
}

var celcius = 30;
// celcius = prompt("Give me a degree in Celcius")
var fahrenheit = (celcius * 9 / 5) + 32;
console.log(celcius + ' C is ' + fahrenheit + ' F');
// document.write(celcius + ' &#176;C is ' + fahrenheit + '&#176;F' + '<br/>');

fahrenheit = 66.5;
// fahrenheit = prompt("Give me a degree in Fahrenheit")
celcius = (fahrenheit - 32) * 5 / 9;
console.log(fahrenheit + ' F is ' + celcius + ' C');
// document.write(fahrenheit + ' &#176;F is ' + celcius + '&#176;C');

function celciusToFahrenheit(celcius) {
    var fahrenheit = (celcius * 9 / 5) + 32;
    console.log(celcius + ' C is ' + fahrenheit + ' F');
}

function fahrenheitToCelcius(fahrenheit) {
    var celcius = (fahrenheit - 32) * 5 / 9;
    console.log(fahrenheit + ' F is ' + celcius + ' C');
}

celciusToFahrenheit(32.5);
fahrenheitToCelcius(73);
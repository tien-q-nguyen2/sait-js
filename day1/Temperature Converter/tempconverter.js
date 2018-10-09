var celcius = 30;
celcius = prompt("Give me a degree in Celcius")
var fahrenheit = (celcius * 9 / 5) + 32;
console.log(celcius + ' &#176;C is ' + fahrenheit + '&#176;F');
document.write(celcius + ' &#176;C is ' + fahrenheit + '&#176;F' + '<br/>');

fahrenheit = prompt("Give me a degree in Fahrenheit")
celcius = (fahrenheit - 32) * 5 / 9
console.log(fahrenheit + ' &#176;F is ' + celcius + '&#176;C');
document.write(fahrenheit + ' &#176;F is ' + celcius + '&#176;C');

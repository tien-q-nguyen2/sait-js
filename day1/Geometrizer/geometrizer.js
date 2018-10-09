var radius = 5;
// radius = prompt('Give me a radius:')
var circumference = Math.PI * radius * 2;
var area = Math.PI * radius * radius;

console.log("For the radius of " + radius);
// document.write("For the radius of " + radius + '<br/>');

console.log("The circumference is " + circumference);
// document.write("The circumference is " + circumference + '<br/>');

console.log("The area is " + area);
// document.write("The area is " + area);

function calcCircumference(radius) {
    console.log("Radius is " + radius + ', the circumference is ' + Math.PI * radius * 2);
}

function calcArea(radius) {
    console.log("Radius is " + radius + ', the area is ' + Math.PI * radius * radius);
}

calcCircumference(5.5)
calcCircumference(25)
calcArea(5.5)
calcArea(100.6)
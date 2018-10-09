function squareNumber(num) {
    var result = num * num;
    console.log('The result of squaring the number', num, 'is', result);
    return result;
}

function halfNumber(num) {
    var result = num / 2;
    console.log('Half of', num, 'is', result);
    return result;
}

function percentOf(num1, num2){
    var percentage = (num1 / num2 * 100).toFixed(2);
    console.log(num1, 'is', percentage + '%', 'of', num2);
    return percentage;
}

function areaOfCircle(radius) {
    var area = (radius * radius * Math.PI).toFixed(2);
    console.log("The area for a circle with radius", radius, "is", area);
    return area;
}

function calculate(num){
    var halved = halfNumber(num);
    var squared = squareNumber(halved);
    var area = areaOfCircle(squared)
    percentOf(area, squared);
}
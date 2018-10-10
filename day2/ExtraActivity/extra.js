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
    var temp1 = str1, temp2 = str2;
    temp1 = str1.substr(1,2);
    temp2 = str2.substr(1,2);
    str1 = str1[0] + temp2;
    str2 = str2[0] + temp1;
    return str2 + ' ' + str1;
}
console.log(mixUp('mad', 'dog'));
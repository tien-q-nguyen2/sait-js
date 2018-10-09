function greaterNum(num1, num2) {
    if (num1 > num2) {
        console.log("The greater number of",num1,"and",num2,'is',num1);
        return num1;
    } else {
        console.log("The greater number of",num1,"and",num2,'is',num2);
        return num2;
    }
}

greaterNum(25, 67);
greaterNum(5.55, 3.56);

//The World Translator
function helloWorld(langCode){
    if(langCode === "es"){
        console.log("Hola Mundo");
    } else if (langCode === "de") {
        console.log("Hallo Welt");
    } else if (langCode === "en") {
        console.log("Hello, World")
    } else {
        console.log("Hello, World")
    }
}

helloWorld("es");
helloWorld('de');
helloWorld('en');
helloWorld("wut?");

//The Grade Assigner
function assignGrade(score){
    if(score > 87){
        return "A";
    } else if (score > 75){
        return 'B';
    } else if (score > 60) {
        return 'C';
    } else if (score > 50) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(86, ':', assignGrade(88));
console.log(53, ':', assignGrade(53));
console.log(94, ':', assignGrade(94));
console.log(47, ':', assignGrade(47));

//The Pluralizer
function pluralize(noun, number){
    var newNoun = noun;
    if(number > 1){
        newNoun += 's';
        if(noun === 'sheep'){
            newNoun = 'sheep';
        } else if (noun === 'goose') {
            newNoun = 'geese';
        }
    }
    return number + ' ' + newNoun;
}

console.log(pluralize('goose', 4));
console.log(pluralize('dog', 1));
console.log(pluralize('dog', 12));
console.log(pluralize('sheep', 4));
console.log(pluralize('cat', 5));

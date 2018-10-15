// var myForm = document.getElementById('userForm');

// var formsList = document.forms;
// var myForm = document.forms[0];

var myForm = document.userForm;

// console.log(myForm);

// var firstName = myForm.firstName;
// console.log(firstName);

// var submitButton = myForm['submitButton'];
// console.log(myForm['submitButton']);

// console.log(document.userForm.email.type);
// console.log(myForm.email.type);

myForm.email.focus();
myForm['lastName'].focus();

var checkboxList = document.userForm2.equipment;

function printOutCheckedBoxes() {
    for (var i = 0; i < checkboxList.length; i++) {
        if (checkboxList[i].checked) {
            console.log(checkboxList[i].value);
        }
    }
}

// printOutCheckedBoxes()

//-----Activity: Collect A Value
var submitButton = document.userForm.submitButton;

submitButton.addEventListener("click", function(event){
    event.preventDefault();

    var name = document.userForm["firstName"].value;
    console.log(name);
})

// document.myForm.submit.addEventListener('click',
// function(event){
// 	myForm.checkValidity();
// 	myForm.reportValidity();
// 	event.preventDefault();
// })

var submitButton = document.getElementById('submit');
var errorButton = document.getElementById('errorName');
var errorAge = document.getElementById('errorAge');
var errorTooYoung = document.getElementById('errorTooYoung');

submitButton.addEventListener('click', function(event) {
    errorName.style.display = "none";
    errorAge.style.display = "none";

    var name = document.userForm8.txtName.value;
    var age = document.userForm8.txtAge.value;

    if (!name) {
        event.preventDefault();
        errorName.style.display = 'block';
    }

    var ageNum = parseInt(age);
    if (!age) {
        event.preventDefault();
        errorAge.style.display = 'block';
    } else if (ageNum < 18) {
        event.preventDefault();
        errorTooYoung.style.display = 'block';
    }

});

//Regex
console.log("/abc/.test('abcde'):", /abc/.test('abcde'));
console.log("/abc/.test('abxde'):", /abc/.test('abxde'));
console.log("/ass/.test('sass'):", /ass/.test('sass'));
console.log("/css/.test('sass'):", /css/.test('sass'));
console.log("/1r/.test('1rea;l'):", /1r/.test('1rea;l'));

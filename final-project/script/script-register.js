/* Author: Tien Quang Nguyen
Date: Oct 19, 2018
Course: CPNT 262 - Web Client & Server Programming
Assignment: Day 9 Workshop - Final Project */

let errorMessage = '';
let submitButton = document.getElementById('submit');
let errorDisplay = document.getElementById('error-display');

//Every time the user click submit, go through every form element and populate
// the errorMessage variable
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    errorMessage = '';

    let userName = document.getElementById('user-name');
    let userAddress = document.getElementById('user-address');
    let userCity = document.getElementById('user-city');
    let userProvince = document.getElementById('user-province');
    let userPostal = document.getElementById('user-postal');
    let userEmail = document.getElementById('user-email');
    let userPhone = document.getElementById('user-phone');

    if (userName.value.trim() === '') {
        errorMessage += '<p>Please enter your name</p>';
    }
    if (userAddress.value.trim() === '') {
        errorMessage += '<p>Please enter an address</p>';
    }
    if (userCity.value.trim() === '') {
        errorMessage += '<p>Please enter a city</p>';
    }
    if (userProvince.value.trim() === '') {
        errorMessage += '<p>Please enter a province</p>';
    }

    if (userPostal.value.trim() === '') {
        errorMessage += '<p>Please enter a postal code</p>';
    } else {
        //Work for cases where user entered A1B 0C2 or A1 B0 C2
        let testString = userPostal.value.trim().split(' ').join('');
        if(/([a-zA-z][0-9]){3}/.test(testString) === false){
            errorMessage += '<p>Please enter a valid postal code, '+
                    'such as A1B0C3 or A1B 0C3</p>';
        }
    }

    if (userEmail.value.trim() === '') {
        errorMessage += '<p>Please enter an email address</p>';
    } else {
        var testString = userEmail.value.trim();
        if(/.+@.+\..+/.test(testString) === false){
            errorMessage += '<p>Please enter a valid email address</p>'
        }
    }

    if (userPhone.value.trim() === '') {
        errorMessage += '<p>Please enter a phone number</p>';
    } else {
        let testString = userPhone.value.trim();
        //Work for (222)333-4444, 222-3334444, 2223334444 etc.
        if((/\d{3}[),-]{0,1}\d{3}[),-]{0,1}\d{4}/).test(testString) === false){
            errorMessage += '<p>Please enter a valid 10-digit phone number</p>';
        }
    }
    //Show the accumulated error message (if any) on the error display element
    errorDisplay.innerHTML = errorMessage;
})


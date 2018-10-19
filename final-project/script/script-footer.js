/* Author: Tien Quang Nguyen
Date: Oct 19, 2018
Course: CPNT 262 - Web Client & Server Programming
Assignment: Day 9 Workshop - Final Project */

//Update footer with the current date
let footerInfo = document.getElementById('footer-info');
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

let date = new Date();
let monthName = monthNames[date.getMonth()];
let dateNum = date.getDate();
let fullYear = date.getFullYear();
footerInfo.textContent = 'Today is: ' + monthName + ' ' + 
                        dateNum + ', ' + fullYear + '. ';

//Update the copyright year in the footer
let copyrightYear = document.getElementById('copyright-year');
copyrightYear.textContent = fullYear;

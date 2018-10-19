/* Author: Tien Quang Nguyen
Date: Oct 19, 2018
Course: CPNT 262 - Web Client & Server Programming
Assignment: Day 9 Workshop - Final Project */

// Get the mobile menu's elements
var openButton = document.querySelector('#open-button')
var closeButton = document.querySelector('#close-button')
var mobileMenu = document.querySelector('#mobile-menu')

// Define actions
function open() {
    mobileMenu.className = 'mobile-menu'
}
function close() {
    mobileMenu.className = 'mobile-menu closed'
}

// Add events
openButton.addEventListener('click', open)
closeButton.addEventListener('click', close)
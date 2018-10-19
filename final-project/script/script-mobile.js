// Get elements
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
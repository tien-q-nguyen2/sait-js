// document.write('<div></div>')
// var myDiv = document.getElementsByTagName('div')[0];

// myDiv.style.height = '100px';
// myDiv.style.width = '100px';
// myDiv.style.backgroundColor = 'gold';

// var square = myDiv;
// square.style.position = 'absolute';
// square.style.left = '100px';
// square.style.top = '100px';

// var spamMessage = '';
// var spamInterval = 500;
// function spam() {
//     setInterval(spam, spamInterval);
//     spamMessage += 'Ha! ';
//     document.write('<div><p>' + spamMessage + '</p></div>');
// }

// function doThisLater(){
//     alert("Time's up!");
//     // setInterval(spam, spamInterval);
// }

// var timerId = setTimeout(doThisLater, 2000);
// clearTimeout(timerId);

//----Activity: Make A Clock
// // document.write('<h1>Kitty Clock</h1>')
// document.write('<div></div>')
// var myDiv = document.getElementsByTagName('div')[0];
// document.write('<br/>')
// // document.write('<img></img>')
// // var myImg = document.getElementsByTagName('img')[0];
// var myWidth, myHeight;

// function displayCurrDateAndTime() {
//     myDiv.innerHTML = new Date();
//     // myWidth = Math.round(Math.random() * 200) + 200;
//     // myHeight = Math.round(Math.random() * 200) + 200;
//     // myImg.src = 'http://placekitten.com/' + myWidth + '/' + myHeight;
// }

// displayCurrDateAndTime();
// var repeatId = setInterval(displayCurrDateAndTime, 1000);

// document.body.style.display = 'flex';
// document.body.style.flexDirection = 'column';
// document.body.style.alignItems = 'center';

//----Activity: Cat Walk
// var walkForwards = true;
// var walkForwards2 = true;

// document.write('<img id="walker"></img>')
// var myImg = document.getElementsByTagName('img')[0];
// myImg.src = 'gif/mario2.gif';
// myImg.style.position = 'absolute';
// myImg.style.left = '0';

// function animateWalk() {
//     var img = document.getElementById('walker');
//     var currentLeft = parseInt(img.style.left);
//     // console.log(img);
//     // console.log(currentLeft);
//     if (walkForwards && (currentLeft >(window.innerWidth - img.width))) {
//         img.style.transform = 'scaleX(-1)';
//         walkForwards = false;
//     }

//     if (!walkForwards && (currentLeft <= 0)) {
//         img.style.transform = 'scaleX(1)';
//         walkForwards = true;
//     }

//     if (walkForwards) {
//         console.log('here1');
//         img.style.left = (currentLeft + 20) + 'px';
//     } else {
//         console.log('here2');
//         img.style.left = (currentLeft - 20) + 'px';
//     }
// }
// setInterval(animateWalk, 50);


// document.write('<br><br><br><br><br><br><br><br><br><br>')
// document.write('<img id="walker2"></img>')
// var myImg2 = document.getElementsByTagName('img')[1];
// myImg2.src = 'gif/sonic1.gif';
// myImg2.style.position = 'absolute';
// myImg2.style.left = '0';

// function animateWalk2() {
//     var img2 = document.getElementById('walker2');
//     var currentLeft = parseInt(img2.style.left);
//     // console.log(img);
//     // console.log(currentLeft);
//     if (walkForwards2 && (currentLeft >(window.innerWidth - img2.width))) {
//         img2.style.transform = 'scaleX(-1)';
//         walkForwards2 = false;
//     }

//     if (!walkForwards2 && (currentLeft <= 0)) {
//         img2.style.transform = 'scaleX(1)';
//         walkForwards2 = true;
//     }

//     if (walkForwards2) {
//         img2.style.left = (currentLeft + 100) + 'px';
//     } else {
//         img2.style.left = (currentLeft - 100) + 'px';
//     }
// }
// setInterval(animateWalk2, 50);


//---Bonus
// function createMario(){
//     document.write('<img id="walker"></img>')
//     var myImg = document.getElementsByTagName('img')[0];
//     myImg.src = 'gif/mario2.gif';
//     myImg.style.position = 'absolute';
//     myImg.style.left = '0';
//     myImg.style.top = '0';
// }

// function animateWalk() {
//     var img = document.getElementById('walker');
//     var currentLeft = parseInt(img.style.left);

//     img.style.left = (currentLeft + direction) + 'px'

//     if (currentLeft > (window.innerWidth - img.width)) {
//         img.style.transform = 'scaleX(-1)';
//         direction = -direction + Math.round(Math.random() * 5 - 2.5);
//         img.style.left = (currentLeft + direction) + 'px'
//     }

//     else if (currentLeft < 0){
//         img.style.transform = 'scaleX(1)';
//         direction = -direction + Math.round(Math.random() * 5 - 2.5);
//         img.style.left = (currentLeft + direction) + 'px'
//     }

//     var currentTop = parseInt(img.style.top);
//     img.style.top = (currentTop + verDirection) + 'px'

//     if (currentTop > (window.innerWidth - img.width)) {
//         verDirection = -verDirection + Math.round(Math.random() * 5 - 2.5);
//         img.style.top = (currentTop + verDirection) + 'px'
//     }

//     else if (currentTop < 0){
//         verDirection = -verDirection + Math.round(Math.random() * 5 - 2.5);
//         img.style.top = (currentTop + verDirection) + 'px'
//     }
// }

// var direction = 20;
// var verDirection = 20;
// createMario();
// setInterval(animateWalk, 50);

function Mario(marioIndex){
    var mDirection = 20;
    var mVerDirection = 20;
    document.write('<img id="mario' + marioIndex +'"></img>')
    var myImg = document.getElementById('mario' + marioIndex);
    myImg.src = 'gif/mario2.gif';
    myImg.style.position = 'absolute';
    myImg.style.left = marioIndex * 50;
    myImg.style.top = marioIndex * 50;

    setInterval(marioWalk, 50);

    function marioWalk(){
        var img = document.getElementById('mario' + marioIndex);

        var currentLeft = parseInt(img.style.left);

        img.style.left = (currentLeft + mDirection) + 'px';
    
        var rightBound = window.innerWidth - img.width;
        // var rightBound = 1000;
        var bottomBound = window.innerHeight - img.height;
        // var bottomBound = 1000;
        if (currentLeft > rightBound) {
            img.style.transform = 'scaleX(-1)';
            mDirection = -mVerDirection + Math.round(Math.random() * 5 - 2.5);
            img.style.left = (currentLeft + mDirection) + 'px';
        }
    
        else if (currentLeft < 0){
            img.style.transform = 'scaleX(1)';
            mDirection = -mDirection + Math.round(Math.random() * 5 - 2.5);
            img.style.left = (currentLeft + mDirection) + 'px';
        }
    
        var currentTop = parseInt(img.style.top);
        img.style.top = (currentTop + mVerDirection) + 'px';
    
        if (currentTop > bottomBound) {
            mVerDirection = -mVerDirection + Math.round(Math.random() * 5 - 2.5);
            img.style.top = (currentTop + mVerDirection) + 'px';
        }
    
        else if (currentTop < 0){
            mVerDirection = -mVerDirection + Math.round(Math.random() * 5 - 2.5);
            img.style.top = (currentTop + mVerDirection) + 'px';
        }
    }
}


//---- Event Activity
document.write('<button id="myBtn" onclick="sayHi()">Click Or Hover Over Me!</button>');

function sayHi(event) {
    // alert('Hi!');
};

//Mouseover
var button = document.getElementById('myBtn');

button.addEventListener("mouseover", function(event){
    document.body.style.backgroundColor = 'orange';
});

button.addEventListener("mouseout", function(event){
    document.body.style.backgroundColor = 'gold';
});

//currentTarget
document.write('<br><br>');
document.write('<a id="myLink" href="https://www.sait.ca/">SAIT</a>');

var link = document.getElementById("myLink");

link.addEventListener("click", function(event) {
    event.preventDefault();
})

button.addEventListener("click", function(event) {
    btn = event.currentTarget;
    btn.style.backgroundColor = 'red';
    btn.style.color = 'white';
    btn.style.fontWeight = 'bold';
    btn.style.padding = '10px 40px';
    btn.innerHTML = 'Ouch! That hurts!'
});

//----Activity: Link Error
document.write('<br><br>');
document.write('<a href="https://www.sait.ca/" id="saitlink">SAIT</a>');
var saitLink = document.getElementById('saitlink');
saitLink.addEventListener('click', function(event){
    event.preventDefault();
    alert('Hide your wife, hide your kids, because this link is broken!')
});

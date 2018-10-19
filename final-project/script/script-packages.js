/* Author: Tien Quang Nguyen
Date: Oct 19, 2018
Course: CPNT 262 - Web Client & Server Programming
Assignment: Day 9 Workshop - Final Project */

// Grab handles to all the default images and vacation packages
let defaultImgs = document.getElementsByClassName('default-img');
let packages = document.getElementsByClassName('package');

for (let i = 0; i < packages.length; i++ ){
    let package = packages[i];
    package.addEventListener('mouseover', function(){
        let defaultImg = package.getElementsByClassName('default-img')[0];
        defaultImg.style.opacity = 0;
    });
    package.addEventListener('mouseout', function(){
        let defaultImg = package.getElementsByClassName('default-img')[0];
        defaultImg.style.opacity = 1;
    });
}

// Grab the airplane image element and define initial position
const img = document.getElementById('airplane');
img.style.left = 0;
img.style.top = 0;
//Define the leftmost and topmost limits the plane will go
const leftBound = 0;
const topBound = 0;

// Animate the airplane to fly up and down across the page
function animateAirplane(){
    var speed_X = 20;
    var speed_Y = 20;
    img.style.transform = 'scaleX(-1) scaleY(-1)';
    setInterval(moveAirplane, 50);
    function moveAirplane(){
        let rightBound = document.body.offsetWidth - img.width - 20;
        let bottomBound = document.body.offsetHeight - img.height;

        var currentLeft = parseInt(img.style.left);
        img.style.left = (currentLeft + speed_X) + 'px';

        if (currentLeft > rightBound) {
            img.style.transform = 
                img.style.transform.replace('scaleX(-1)','scaleX(1)');
            speed_X = -Math.abs(speed_X);
            img.style.left = (currentLeft + speed_X) + 'px';
        }
        else if (currentLeft < leftBound){
            img.style.transform = 
                img.style.transform.replace('scaleX(1)','scaleX(-1)');
            speed_X = Math.abs(speed_X);
            img.style.left = (currentLeft + speed_X) + 'px';
        }
    
        var currentTop = parseInt(img.style.top);
        img.style.top = (currentTop + speed_Y) + 'px';
    
        if (currentTop > bottomBound) {
            img.style.transform = 
                img.style.transform.replace('scaleY(-1)','scaleY(1)');
            speed_Y = -Math.abs(speed_Y);
            img.style.top = (currentTop + speed_Y) + 'px';
        }
    
        else if (currentTop < topBound){
            img.style.transform = 
                img.style.transform.replace('scaleY(1)','scaleY(-1)');
            speed_Y = Math.abs(speed_Y);
            img.style.top = (currentTop + speed_Y) + 'px';
        }
    }
}

animateAirplane();
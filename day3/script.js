
//----Acitivty: Browser Info
// console.log(navigator.userAgent);
// console.log(navigator.vendor);
// console.log(navigator.platform);


//----Acitivty: Geolocation
// function success(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     // var altitude = position.coords.altitude;
//     // var speed = position.coords.speed;
//     console.log('SUCCESS! (geolocation request accepted)')
//     console.log('Latitude: ' + latitude);
//     console.log('Longitude: ' + longitude);
// }

// function geoError(position) {
//     console.log('FAILURE! (geolocation request rejected)')
// }

//----Acitivty: Feature Detection
// // if (typeof navigator.geolocation != "undefined") { }
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(success, geoError);
// } else {
//     console.log('Your browser sucks and has no geolocation feature.');
// }


//----Acitivty: Screen Information
// console.log('screen.height:', screen.height);
// console.log('screen.width:', screen.width);
// console.log('screen.colorDepth:', screen.colorDepth);
// console.log('screen.orientation:', screen.orientation);


//----Acitivty: Background Color
// document.bgColor = 'coral';


//----Acitivty: HTML (I did it by script instead of manually)
// document.write('\
//       <div id="wrapper">\
//         <div id="header">\
//           <h1>JavaScript Test Site</h1>\
//           <nav>\
//             <ul>\
//               <li class="nav-item">About</li>\
//               <li class="nav-item">Services</li>\
//               <li class="nav-item">Contact</li>\
//             </ul>\
//           </nav>\
//         </div>\
//         <div id="main">\
//           <p>I learned about JavaScript in a SAIT class.</p>\
//           <img src="https://picsum.photos/500/300?random\
//             " alt="Placeholder image">\
//         </div>           \
//         <div id="footer">\
//           <p>This is my awesome footer.</p>\
//         </div>\
//       </div>\
// ');

// //----Activity: Get Element By ID
// var header = document.getElementById("header");
// console.log(header);

// //----Activity: Get Element By Tag Name
// var listItems = document.getElementsByTagName('li');

// //----Activity: Get Elements
// var listItems = document.getElementsByClassName('nav-item');
// listItems = document.querySelectorAll('.nav-item');
// var firstItem = document.querySelector('.nav-item');

// console.log(listItems[0].classList);

// //----Activity: Get The Right Element
// console.log(document.getElementsByTagName('p')[1]);


// //----Activity: Getting and Setting Attributes
// var imgKitten = document.getElementsByTagName('img')[0];
// imgKitten.setAttribute('src', 'http://placekitten.com/g/600/500');

//----Activity: Change an Attribute
document.write('\
        <div id="wrapper">\
            <div id="header">\
                <h1>JavaScript Test Site</h1>\
            </div>\
            <div id="main">\
                <p>I learned about JavaScript in a SAIT class.</p>\
            </div>\
            <div id="footer">\
                <p>This is my awesome footer.</p>\
            </div>\
        </div>\
');

var header = document.getElementById('header');
header.style.backgroundColor = 'violet';

var wrapper = document.getElementById('wrapper');
wrapper.style.maxWidth = '1200px';
wrapper.style.margin = '0 auto;'
wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.alignItems = 'center';

var pageHeader = document.getElementById('header');
pageHeader.innerHTML = '<h1>Oh Nose!</h1><p>I hijacked this site!</p>';

var pageFooter = document.getElementById('footer');
pageFooter.innerHTML += '<p>Give me all your money</p>';

//----Activity: Create a Paragraph
var paragraphElement = document.createElement('p');
var paragraphText = document.createTextNode('Save the world, donate today');
paragraphElement.appendChild(paragraphText);

var divElement = document.getElementById('header');
divElement.appendChild(paragraphElement);
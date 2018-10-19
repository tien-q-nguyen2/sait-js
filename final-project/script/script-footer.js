let footerInfo = document.getElementById('footer-info');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

let date = new Date();
let monthName = monthNames[date.getMonth()];
let dateNum = date.getDate();
let fullYear = date.getFullYear();
footerInfo.textContent = 'Today is: ' + monthName + ' ' + 
                        dateNum + ', ' + fullYear + '. ';

let copyrightYear = document.getElementById('copyright-year');
copyrightYear.textContent = fullYear;

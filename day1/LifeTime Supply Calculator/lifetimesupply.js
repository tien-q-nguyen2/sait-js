var currentAge = 24;
var maxAge = 80;
var amountPerDay = 2;

var totalAmount = (maxAge - currentAge) * 365 * amountPerDay;
console.log('You will need ' + totalAmount + 
    ' to last you until the ripe old age of ' + maxAge);
// document.write('You will need ' + totalAmount + 
//     ' to last you until the ripe old age of ' + maxAge);

function calculateSupply(age, amountPerDay) {
    var maxAge = 99;
    var totalAmount = (maxAge - currentAge) * 365 * amountPerDay;
    console.log('You will need ' + Math.round(totalAmount) + 
    ' to last you until the ripe old age of ' + maxAge);
    console.log(maxAge)
}

calculateSupply(18, 6.5);
calculateSupply(44, 10);
calculateSupply(65, 4.4);
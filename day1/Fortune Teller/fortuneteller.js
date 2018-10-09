
var numberOfChildren = 4;
var geoLocation = 'Calgary';
var jobTitle = 'stay-at-home web developer';
var partnerName = 'Okanada';

console.log('You will be a ' + jobTitle + ' in ' + geoLocation + 
            ', and married to ' + partnerName + ' with ' + 
            numberOfChildren + ' kids.')

//Extra activity
function tellFortune(numberOfChildren, partnerName, geoLocation, jobTitle){
    console.log('You will be a ' + jobTitle + ' in ' + geoLocation + 
    ', and married to ' + partnerName + ' with ' + 
    numberOfChildren + ' kids.')    
}

tellFortune(5, 'Elisa', 'Yukon', 'gold digger');
tellFortune(2, 'Juliana', 'Houston', 'human computer');
tellFortune(1, 'Young', 'Moon', 'astro-physicist')
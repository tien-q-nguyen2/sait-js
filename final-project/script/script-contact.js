/* Author: Tien Quang Nguyen
Date: Oct 19, 2018
Course: CPNT 262 - Web Client & Server Programming
Assignment: Day 9 Workshop - Final Project */

//Arrays of agents' names and phone numbers
let names = ['Jerome Rodriguez','Nellie Young','Clayton Adams',
            'Soham Snyder','Amanda Mcdonalid','Nellie Watson'];
let phones = ['(863)-285-4280','(611)-116-2864','(596)-906-7318',
            '(314)-191-5355','(424)-806-6482','(208)-610-8986'];
let imageUrls = ['jerome.jpg','nellie.jpg','clayton.jpg','soham.jpg',
                'amanda.jpg','nellie2.jpg'];

//Populate the agents' info display with the given information
let agentList = document.getElementById('agent-list');
let agentsDisplay = '';
for (var i = 0; i < names.length; i++){
    agentsDisplay += '<div class="agent">';
    agentsDisplay += '<img class="agent-img" src="img/'+imageUrls[i]+'">';
    agentsDisplay += '<div class="agent-info">';
    agentsDisplay += '<h3>' + names[i] + '</h3>';
    agentsDisplay += '<h4>' + phones[i] + '</h4>';
    agentsDisplay += '</div>';
    agentsDisplay += '</div>';
}
agentList.innerHTML = agentsDisplay;


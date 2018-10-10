//----Activity: While Loop----//
var i = 1;
while (i<13){
    console.log(9,'x',i,'=',9*i);
    i += 1;
}

var i = 1;
var j;
while (i < 13){
    j = 1;
    while(j < 13) {
        console.log(i,'x',j,'=',i*j);
        j += 1;
    }
    i += 1;
}

//Sol
var number = 1;
while(number < 13) {
    console.log("9 x " + number + " = " + 9*number);
    number = number + 1;
}

var number = 1;
while(number < 13) {
    var counter = 1;
    while(counter < 13) {
        console.log(counter + " x " + number + " = " + counter*number);
        counter++;
    }
    number = number + 1;
}


//----Activity: For Loop----//
console.log("With For Loop");
for(var i = 1; i < 13; i++){
    console.log(9+' x '+i+' = '+9*i);
}

for(var i = 1; i < 13; i++){
    for(var j = 1; j < 13; j++){
        console.log(i+' x '+j+' = '+i*j);
    }
}

//Sol
for (var num = 1; num <= 12; num++) {
    console.log("9 x " + num + " = " + 9*num);
}

for (var num = 1; num <= 12; num++) {
    for (var counter = 1; counter <= 12; counter++){
        console.log(counter + " x " + num + " = " + counter*num);
    }
}


//----Activity: Logic In Loops----//
for(var i = 0; i <= 20; i++) {
    if(i % 2 === 0){
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}

//Sol
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even.");
    } else {
        console.log(i + " is odd.");
    }
}

//----Activity: Breaking Loops----//
for(var i = 1; i < 13; i++){
    if(i === 6) {
        console.log("I hate the number 6!");
        break;
    }
    console.log(9+' x '+i+' = '+9*i);
}

for(var i = 1; i < 13; i++){
    if(i === 6) {
        console.log("I hate the number 6!");
        break;
    }
    for(var j = 1; j < 13; j++){
        if(j === 6) {
            console.log("I hate the number 6!");
            break;
        }
        console.log(i+' x '+j+' = '+i*j);
    }
}

//Sol
for(var i = 1; i <= 12; i++) {
    if(i === 6) {
        console.log("I hate the number 6.");
        break;
    }
    console.log(9*i);
}


//----Activity: Create An Array----//
var myFavoriteFoods = ['Pizza', 'Macaroni & Cheese', 'Gummy Bears', 'Sharwama', 'Onion Soup'];
console.log(myFavoriteFoods);

console.log(myFavoriteFoods.length);


//----Activity: Using Arrays----//
console.log(myFavoriteFoods[2]);


//----Activity: Changing Arrays----//
myFavoriteFoods[2] = 'Asparagus';
console.log(myFavoriteFoods);


//----Activity: Expanding Arrays----//
myFavoriteFoods.push('Caesar Salad');
console.log(myFavoriteFoods);


//----Activity: For Loop----//
for (var i = 0; i < myFavoriteFoods.length; i++) {
    console.log(myFavoriteFoods[i]);
}


//----Activity: Create An Object----//
var recipe = {
    recipeTitle : 'Hawaiian Pizza',
    recipeDescription : 'An outrageous pizza with pineapple slices on it',
    ingredients : ['Sauce', 'Cheese','Ham', 'Pineapples Slices', 'Flour', 'Yeast'],
    directions: 'Make dough with flour and yeast. Bake, then add sauce, cheese, ham, pineapple.',
    rating: 4.5,
    'cook time': 30
}

//----Activity: Accessing Objects----//
console.log(recipe['recipeTitle']);
console.log(recipe.recipeDescription);
console.log(recipe['ingredients']);
console.log(recipe.directions);
console.log(recipe['rating'] + ' stars');
console.log(recipe['cook time'] + ' minutes');


//----Activity: Change Your Recipe----//
recipe.servings = 6;
recipe['rating'] = 4.8;
delete recipe['cook time'];


//----Activity: Arrays Of Objects----//
var movies = [{name: 'Downsizing', rating: 3}, 
            {name:"Guardians of The Galaxy", rating: 4}];
for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    console.log("I give", movie.name, movie.rating, "stars.");
}


//----Activity: Objects In Functions----//
function logRecipe(recipe) {
    console.log('Recipe Title: ' + recipe.recipeTitle);
    console.log('Servings: ' + recipe.servings);
}
logRecipe(recipe);


//----Activity: Add a Function----//
var recipe2 = {
    recipeTitle : 'Hawaiian Pizza',
    recipeDescription : 'An outrageous pizza with pineapple slices on it',
    ingredients : ['Sauce', 'Cheese','Ham', 'Pineapples Slices', 'Flour', 'Yeast'],
    directions: 'Make dough with flour and yeast. Bake, then add sauce, cheese, ham, pineapple.',
    rating: 4.5,
    'cook time': 30,
    letsCook: function(yourRecipeTitle) {
        console.log("I'm hungry! Let's cook " + yourRecipeTitle + '.');
    },
    letsCookThis: function() {
        console.log("I'm hungry! Let's cook " + this.recipeTitle + '.');
    },
}
recipe2.letsCook("Banana Pie");
recipe2.letsCookThis();


//----Activity: Array Object Methods----//
var favoriteMovies = ["Office Space", "The Naked Gun", "Boy A"];
var favoriteBooks = ["The Genie Within", "Clean Architecture"];
console.log("favoriteMovies.length:", favoriteMovies.length);
console.log("favoriteBooks.length:", favoriteBooks.length);
var moviesAndBooks = favoriteMovies.concat(favoriteBooks);
function isTitleLong(title) {
    return title.length > 6;
}
var moviesWithLongTitles = favoriteMovies.filter(isTitleLong);
console.log(moviesWithLongTitles);


//----Activity: Fixed Numbers----//
var pi = 3.14159;
console.log(pi.toFixed(2));


//----Activity: Dates----//
var today = new Date("10 October 2018");
console.log(today.getDate());
function dayOfWeek(dayNum){
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayNames[dayNum];
}
console.log(dayOfWeek(3));


//----Activity: Math----//
function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

var randomPi = randomNumber() * Math.PI;
console.log(Math.ceil(randomPi));


//----Activity: Strings----//
var myName = 'Tien Nguyen';
var myNameLength = myName.length;
console.log(myName.toLowerCase());
console.log(myName.substr(5,6));
console.log(myName.substring(5,11));


//----Activity: Recipe Page----//
var recipe3 = {
    recipeTitle : 'Hawaiian Pizza',
    recipeDescription : 'An outrageous pizza with pineapple slices on it',
    ingredients : ['Sauce', 'Cheese','Ham', 'Pineapples Slices', 'Flour', 'Yeast'],
    directions: 'Make dough with flour and yeast. Bake, then add sauce, cheese, ham, pineapple.',
    rating: 4.5,
    'cook time': 30,
    letsCook: function(yourRecipeTitle) {
        console.log("I'm hungry! Let's cook " + yourRecipeTitle + '.');
    },
    letsCookThis: function() {
        console.log("I'm hungry! Let's cook " + this.recipeTitle + '.');
    },
    displayRecipe: function(yourRecipe) {
        var pubDate = new Date("10 October 2018");
        console.log(yourRecipe.recipeTitle);
        console.log(pubDate.toDateString());
        console.log(yourRecipe.directions.substr(0,50) + '...');
    }
}
recipe3.displayRecipe(recipe2);

//15.1. generating random numbers

var r = Math.random();
console.log(r*10);


var c = Math.floor(5.1);
console.log(c);

var c = Math.floor(7.9);
console.log(c);

var randomNumber = Math.random()*100;
console.log(Math.floor(randomNumber)+1);


//15.2.Let's create a Game
var prompt = require('prompt-sync')();

function guess(guessedNumber)
{
    var randomNumber = Math.floor(Math.random()*5);
    if (randomNumber == guessedNumber)
    {
        console.log("You guessed it right, the number was "+randomNumber);
    }
    else{
        console.log("You guessed it wrong, the number was "+randomNumber);
    }
}

var guessedNumber = prompt();
guess(guessedNumber);


var name = prompt();
var age = prompt();
console.log("Your name is "+name);
console.log("Your age is "+age);
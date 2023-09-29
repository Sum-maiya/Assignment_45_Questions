"use strict";
//Alien Colors Imagine an alien was just shot down in a game. 
//Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. 
//If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. 
//(The version that fails will have no output.)
// Alien Colors
const alienColorPass = 'green'; // Change to 'yellow' or 'red' for the failing version
const alienColorFail = 'blue'; // Change to 'yellow' or 'red' for the passing version
// Passing Version
if (alienColorPass === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else {
    console.log("Sorry, no points earned.");
}
// Failing Version
if (alienColorFail === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else {
    console.log("Sorry, no points earned.");
}

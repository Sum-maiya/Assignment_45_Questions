"use strict";
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.
function makeSandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Sandwich complete!\n");
}
// Call the function with different numbers of arguments
makeSandwich("Lettuce", "Tomato", "Turkey");
makeSandwich("Cheese", "Ham");
makeSandwich("Peanut Butter", "Jelly", "Bread");

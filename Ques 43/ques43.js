"use strict";
//Unchanged Magicians: Start with your work from Exercise 40. 
//Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names 
//and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(`the Great ${magicians[i]}`);
    }
    return greatMagicians;
}
// Create an array of magician's names
const magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call make_great() with a copy of the magician's names array
const greatMagicians = make_great([...magicianNames]);
// Call show_magicians() to display the original names
console.log("Original Magicians:");
show_magicians(magicianNames);
// Call show_magicians() to display the modified names
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

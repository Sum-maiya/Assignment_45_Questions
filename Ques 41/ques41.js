"use strict";
//Magicians: Make a array of magician’s names. 
//Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Create an array of magician's names
const magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the function to show the magician's names
show_magicians(magicianNames);

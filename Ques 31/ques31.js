"use strict";
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
// Create an array of usernames
// Create an array of usernames
let usernames = ['admin', 'Eric', 'Alice', 'John', 'Sarah'];
// Check if the list of users is not empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the array and print greetings
    for (const username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
// Remove all usernames from the array
usernames = [];
// Check if the list of users is empty after removal
if (usernames.length === 0) {
    console.log("We need to find some users!");
}

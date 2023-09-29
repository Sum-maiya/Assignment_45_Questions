//Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, but each message should be personalized with the person’s name.

// Store the names of friends in an array called 'names'
const names = ["Sam", "Adnan", "Laiba", "Sadia", "Haroon"];

// Print personalized greetings to each person
for (const name of names) {
    console.log(`Hello, ${name}! Have a great day.`);
}

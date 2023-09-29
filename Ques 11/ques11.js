//Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, but each message should be personalized with the person’s name.
// Store the names of friends in an array called 'names'
var names = ["Sam", "Adnan", "Laiba", "Sadia", "Haroon"];
// Print personalized greetings to each person
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello, ".concat(name_1, "! Have a great day."));
}

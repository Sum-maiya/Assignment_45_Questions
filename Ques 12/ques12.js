//Greetings: Start with the array you used in Exercise 11, but instead of just printing
//each person’s name, print a message to them. The text of each message should be
//the same, but each message should be personalized with the person’s name.
var people = ["Sam", "Adnan", "Laiba", "Sadia", "Haroon"];
function createPersonalizedMessage(name) {
    return "Hello, ".concat(name, "! Hope you're doing well.");
}
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var person = people_1[_i];
    var message = createPersonalizedMessage(person);
    console.log(message);
}

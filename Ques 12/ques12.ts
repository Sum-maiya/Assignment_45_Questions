//Greetings: Start with the array you used in Exercise 11, but instead of just printing
//each person’s name, print a message to them. The text of each message should be
//the same, but each message should be personalized with the person’s name.
const people: string[] = ["Sam", "Adnan", "Laiba", "Sadia", "Haroon"];

function createPersonalizedMessage(name: string): string {
    return `Hello, ${name}! Hope you're doing well.`;
}

for (const person of people) {
    const message = createPersonalizedMessage(person);
    console.log(message);
}

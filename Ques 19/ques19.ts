//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner

// Here I'm using example of exercise 16 given below:

const invitationList = ["Laiba", "Adnan", "Sadia", "Riaz", "Haroon"];

console.log("Mr. " + invitationList[0] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[1] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[2] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[3] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[4] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[3] + " can't make it"); // Adnan can't come to dinner

invitationList.splice(3, 1, "Naveed"); // We are replacing Adnan by NAveed

console.log("Mr. " + invitationList[0] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[1] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[2] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[3] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[4] + ", you are invited to today's dinner at my home");

console.log("My Dear friends We have found a bigger dinner Table");

// Adding an element at the startin point
invitationList.unshift("Umair Khan");

// Adding an element at the middle point
invitationList.splice(2,0, "Umar Khan");

// Adding an element at the end point
invitationList.push("Usman Khan");

// Updated Invitation List
console.log(invitationList);

console.log("Mr. " + invitationList[0] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[1] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[2] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[3] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[4] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[5] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[6] + ", you are invited to today's dinner at my home");

console.log("Mr. " + invitationList[7] + ", you are invited to today's dinner at my home");

// print a message indicating the number of people you are inviting to dinner
console.log("So Finally the total number of people that I invited is : " + invitationList.length);

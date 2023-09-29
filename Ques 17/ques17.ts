//Shrinking Guest List: You just found out that your new dinner table won’t arrive intime for the dinner, 
//and you have space for only two guests.
//• Start with your program from Exercise 16. 
//Add a new line that prints a message sayingthat you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list.
//Each time you pop a name from your list, 
//print a message to that person letting themknow you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’restill invited.
//• Remove the last two names from your list, so you have an empty list. 
//Print your list tomake sure you actually have an empty list at the end of your program.
const dinnerGuests: string[] = ["Sam", "Adnan", "Laiba"];
const unableToAttend: string = "Sam";
const replacementGuest: string = "Haroon";

function sendDinnerInvitation(guest: string): string {
    return `Dear ${guest}, you are cordially invited to a dinner event. Your presence would be an honor.`;
}

console.log("Important Announcement: We found a bigger dinner table!");

// Add new guests
const newGuestBeginning: string = "Musa";
const newGuestMiddle: string = "Malik";
const newGuestEnd: string = "Mahir";

dinnerGuests.unshift(newGuestBeginning); // Add to beginning
dinnerGuests.splice(Math.floor(dinnerGuests.length / 2), 0, newGuestMiddle); // Add to middle
dinnerGuests.push(newGuestEnd); // Append to end

// Print new invitation messages
for (const guest of dinnerGuests) {
    const invitationMessage = sendDinnerInvitation(guest);
    console.log(invitationMessage);
}


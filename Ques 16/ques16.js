//Start with your program from Exercise 15. Add a print statement to the end of yourprogram informing 
//people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. 
//• Use append() to add one new guestto the end of your list. 
//• Print a new set of invitation messages, one for each person inyour list.
var dinnerGuests = ["Sam", "Adnan", "Laiba"];
var unableToAttend = "Sam";
var replacementGuest = "Haroon";
function sendDinnerInvitation(guest) {
    return "Dear ".concat(guest, ", you are cordially invited to a dinner event. Your presence would be an honor.");
}
for (var i = 0; i < dinnerGuests.length; i++) {
    if (dinnerGuests[i] === unableToAttend) {
        dinnerGuests[i] = replacementGuest;
    }
    var invitationMessage = sendDinnerInvitation(dinnerGuests[i]);
    console.log(invitationMessage);
}

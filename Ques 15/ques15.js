//Changing Guest List: You just heard that one of your guests can’t make the dinner,
//so you need to send out a new set of invitations. You’ll have to think of someone
///else to invite.
var dinnerGuests = ["Sam", "Adnan", "Laiba"];
var unableToAttend = "Sam";
var replacementGuest = "Haroom";
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

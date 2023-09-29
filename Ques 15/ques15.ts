//Changing Guest List: You just heard that one of your guests can’t make the dinner,
//so you need to send out a new set of invitations. You’ll have to think of someone
///else to invite.
const dinnerGuests: string[] = ["Sam", "Adnan", "Laiba"];
const unableToAttend: string = "Sam";
const replacementGuest: string = "Haroom";

function sendDinnerInvitation(guest: string): string {
    return `Dear ${guest}, you are cordially invited to a dinner event. Your presence would be an honor.`;
}

for (let i = 0; i < dinnerGuests.length; i++) {
    if (dinnerGuests[i] === unableToAttend) {
        dinnerGuests[i] = replacementGuest;
    }
    const invitationMessage = sendDinnerInvitation(dinnerGuests[i]);
    console.log(invitationMessage);
}

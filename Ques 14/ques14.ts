//Guest List: If you could invite anyone, living or deceased, to dinner, who would you
//invite? Make a list that includes at least three people you’d like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner.

const dinnerGuests: string[] = ["Sam", "Adnan", "Laiba"];

function sendDinnerInvitation(guest: string): string {
    return `Dear ${guest}, you are cordially invited to a dinner event. Your presence would be an honor.`;
}

for (const guest of dinnerGuests) {
    const invitationMessage = sendDinnerInvitation(guest);
    console.log(invitationMessage);
}

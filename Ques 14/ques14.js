//Guest List: If you could invite anyone, living or deceased, to dinner, who would you
//invite? Make a list that includes at least three people you’d like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner.
var dinnerGuests = ["Sam", "Adnan", "Laiba"];
function sendDinnerInvitation(guest) {
    return "Dear ".concat(guest, ", you are cordially invited to a dinner event. Your presence would be an honor.");
}
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var guest = dinnerGuests_1[_i];
    var invitationMessage = sendDinnerInvitation(guest);
    console.log(invitationMessage);
}

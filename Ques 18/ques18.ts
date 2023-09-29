//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of theoriginal list.
//Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that itsorder has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list toshow that its order has changed.
// Store the locations in a array. Make sure the array is not in alphabetical order
const favPlaces = ["Germany", "Najaf", "Makkah", "Madina", "Disneyland"];

// Print your array in its original order
console.log(favPlaces);

// Print your array in alphabetical order without modifying the actual list
let sortedArry = [...favPlaces].sort();
console.log(sortedArry);


// Show that your array is still in its original order by printing it
console.log(favPlaces);

// Print your array in reverse alphabetical order without changing the order of the
// original list
let revrseOrder = [...favPlaces].reverse();
console.log(revrseOrder);

// Show that your array is still in its original order by printing it again
console.log(favPlaces);

// Reverse the order of your list. Print the array to show that its order has changed.
console.log("The order of array has changed : "+revrseOrder);

// Reverse the order of your list again. Print the list to show it’s back to its original order
console.log("The array is back to it's original order : " + [...revrseOrder.reverse()]);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its
// order has been changed.
console.log("The order of array has been changed to alphabaticl : " + [...favPlaces.sort()]);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to
// show that its order has changed
console.log("The order of array has been changed to Reverse alphabatical order : " + [...favPlaces.reverse()]);


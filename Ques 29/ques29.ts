//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
//if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Create an array of favorite fruits
const favoriteFruits: string[] = ['bananas', 'strawberries', 'mangoes'];

// Check for specific fruits in the array
if (favoriteFruits.includes('bananas')) {
  console.log("You really like bananas!");
}

if (favoriteFruits.includes('strawberries')) {
  console.log("You really like strawberries!");
}

if (favoriteFruits.includes('mangoes')) {
  console.log("You really like mangoes!");
}

if (favoriteFruits.includes('apples')) {
  console.log("You really like apples!");
} else {
  console.log("Apples are not one of your favorite fruits.");
}

if (favoriteFruits.includes('grapes')) {
  console.log("You really like grapes!");
} else {
  console.log("Grapes are not one of your favorite fruits.");
}

// Intentional Error: If you haven’t received an array index error in one of your
// programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the
// program

// Here I'm using an example of exercise No 11

const names = ["Umair", "Laiba", "Mahnoor", "Umar", "Usman", "Javeriya"];

console.log(names);
console.log("The lenth of my array is " + names.length);

console.log("It will cause an Erroe :" + names[8]); // It will not be executed because the length of array is 6.

console.log("It will show a value of index 5 because it is presented in this array : " +names[5]); 
// It will show an index of 5 because the length of array is 6 and it is presented in this array.
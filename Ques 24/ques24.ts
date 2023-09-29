// Tests for equality and inequality with strings
const string1: string = "Hello";
const string2: string = "World";
const isEqualStrings: boolean = string1 === string2;
const isNotEqualStrings: boolean = string1 !== string2;

console.log("Equality test with strings:", isEqualStrings); // Should be false
console.log("Inequality test with strings:", isNotEqualStrings); // Should be true

// Tests using the lower case function
const text: string = "This is Some Text";
const lowerCaseText: string = text.toLowerCase();

console.log("Lowercase test:", lowerCaseText === text.toLowerCase()); // Should be true

// Numerical tests
const num1: number = 10;
const num2: number = 5;

console.log("Equality test with numbers:", num1 === num2); // Should be false
console.log("Inequality test with numbers:", num1 !== num2); // Should be true
console.log("Greater than test:", num1 > num2); // Should be true
console.log("Less than test:", num1 < num2); // Should be false
console.log("Greater than or equal to test:", num1 >= num2); // Should be true
console.log("Less than or equal to test:", num1 <= num2); // Should be false

// Tests using "and" and "or" operators
const isTrue: boolean = true;
const isFalse: boolean = false;

console.log("AND operator test:", isTrue && isFalse); // Should be false
console.log("OR operator test:", isTrue || isFalse); // Should be true

// Test whether an item is in an array
const array: number[] = [1, 2, 3, 4, 5];
const itemToFind: number = 3;
const isInArray: boolean = array.includes(itemToFind);

console.log("Item is in the array:", isInArray); // Should be true

// Test whether an item is not in an array
const itemToFind2: number = 6;
const isNotInArray: boolean = !array.includes(itemToFind2);

console.log("Item is not in the array:", isNotInArray); // Should be true

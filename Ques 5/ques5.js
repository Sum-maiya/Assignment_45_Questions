//Stripping Names: Store a person’s name, and include some whitespace 
//charactersat the beginning and end of the name. Make sure you use each charactercombination, 
//"\t" and "\n", at least once. Print the name once, so the whitespacearound the name is displayed. 
//Then print the name after striping the white spaces.
var personNameWithWhitespace = "\t Summaiya  Riaz \n"; // Adding whitespace characters
console.log("Name with whitespace:");
console.log(personNameWithWhitespace);
var strippedName = personNameWithWhitespace.trim(); // Removing leading and trailing whitespace
console.log("\nName after stripping whitespace:");
console.log(strippedName);

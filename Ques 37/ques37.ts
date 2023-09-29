//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
//I love TypeScript//
//. Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.
function makeShirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
  }
  
  // Create large shirt with default message
  makeShirt();
  
  // Create medium shirt with default message
  makeShirt('Medium');
  
  // Create a custom-sized shirt with a different message
  makeShirt('Small', 'JavaScript is fun');
  
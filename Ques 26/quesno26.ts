//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
// Choose a color for the alien
const alienColorPass: string = 'green'; // Change to a color other than 'green' for the else block
const alienColorFail: string = 'red'; // Change to 'green' for the if block

// Program version that runs the if block (green alien)
let alein_color = 'Green';

if(alein_color=='Green')
{
    console.log("The player just earned 5 points for shooting the alien.");
}

//Another Version
else{
    console.log("The player just earned 10 points");
    
}
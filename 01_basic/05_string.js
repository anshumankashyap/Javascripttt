const name = "Anshuman"
const repoCount = 15

console.log(name + repoCount); // Avoid using this syntax to print a string

console.log(`Hello my name is ${name} & my repocount is ${repoCount}`); /* This is the better way to print a string
this is also called as string interpolation */

const gameName =  new String("Valo")

console.log(gameName[2]); //Access the keys

console.log(gameName.charAt(1)); //Print the characters present in thaat position

console.log(gameName.indexOf('V')); //Print the position of the character present

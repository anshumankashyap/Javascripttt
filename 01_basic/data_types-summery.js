//premitive
// 7 types -> sstring, NUmber, Boolean, Null, Undefined, Symbol, BigInt

let score = 100
let scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail; // let userEmail = undefined //undefined can be declared using both format  

const id = Symbol('12345')
const anotherId = Symbol('12345')

console.log(id == anotherId);

const bigNumber = 54565486466853265154631n //use n to declare the nummber as BigInt data type
console.log(typeof bigNumber);


// Reference (Non Premitive)
// Array, Objects, Functions

const heros = ["shaktiman", "Super V", "Nagraj"]; // Arrays

let myObj = {
    name : "Shaktiman",
    age : 18
} // Objest

const myFuncction = function() {
    console.log("Hello World");
}//Function

// Javascript is a dynamic type language


/***********************************Memory*******************/

let userOne = {
    email : "anshumandotcom",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "usertwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


//All the premitive values goes to stack memory
// Whereas all the non-primitive values goes to heap memory
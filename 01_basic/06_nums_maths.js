//----------------------------NUMBER-----------------------
const score = 100
console.log(score);

const Balance = new Number (444)
console.log(Balance);

console.log(Balance.toString().length);
console.log(Balance.toFixed(2));

const anotherNumber = 23.556
console.log(anotherNumber.toPrecision(3));

const someNumbers = 100000000
console.log(someNumbers.toLocaleString('en-IN'));


//----------------------------------MATHS-----------------------
console.log(Math);
console.log(Math.abs(-7));
console.log(Math.round(4.5)); //It round off the value
console.log(Math.ceil(4.2));//It round off to the upper value like 4.2 to 5
console.log(Math.floor(4.9));//It round off to the lower value like 4.9 to 4

console.log(Math.random());
console.log(Math.random()*10);

const min = 0
const max = 6
console.log(Math.round(Math.random() * (max - min + 1) + min)); // Generic formula to use random math function

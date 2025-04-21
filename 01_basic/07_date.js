let myDate = new Date()
console.log(myDate);

console.log(myDate.toDateString())
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2025, 2, 25)// This define a specific date
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

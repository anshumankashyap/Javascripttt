const mySymbol = Symbol("Key1")

const jsUser = {
    name: "Anshuman",
    "Full name": "Anshuman Panda",/*This value  can not be accessed using . for eg- {console.log(jsUser.Full name);} & we have to use {console.log(jsUser["full name"]);} */    
    age: 22,
    location: "Bhawanipatna",
    email: "anshuman@giet.edu",
    [mySymbol]: "MyKey1"//Symbol key has to be defineed within [brackets]
}

console.log(jsUser.email);
console.log(jsUser["name"]);
console.log(jsUser["Full name"]);

console.log(jsUser[mySymbol]);

jsUser.email = "anshuman@google.com"

Object.freeze(jsUser)//This will freeze the defined object
jsUser,email = "anshuman@microsoft.com"

console.log(jsUser);

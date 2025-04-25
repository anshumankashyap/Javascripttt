const mySymbol = Symbol("Key1")

const JsUser = {
    name: "Anshuman",
    "Full name": "Anshuman Panda",/*This value  can not be accessed using . for eg- {console.log(jsUser.Full name);} & we have to use {console.log(jsUser["full name"]);} */    
    age: 22,
    location: "Bhawanipatna",
    email: "anshuman@giet.edu",
    [mySymbol]: "MyKey1"//Symbol key has to be defineed within [brackets]
}

//console.log(JsUser.email);
//console.log(JsUser["name"]);
//console.log(JsUser["Full name"]);

//console.log(JsUser[mySymbol]);

JsUser.email = "anshuman@google.com"

//Object.freeze(JsUser)//This will freeze the defined object
JsUser,email = "anshuman@microsoft.com"

//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(JsUser.greeting());

//In The below wehave used backtags (`String interpulation`) to call the key value (For eg name, location)
JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}
console.log(JsUser.greetingTwo());

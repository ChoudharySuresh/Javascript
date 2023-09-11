// singleton
// Object.create

// Interview Question create symbol and reference that symbol in key value pair and console it

const mySymbol = Symbol("key1");

const obj = {
    name:"Suresh",
    "fullName" :"Suresh Choudhary",
    [mySymbol]:"myKey1",
    age:22,
    email:"suresh@gmail.com",
    isLoggedIn:false,
    lastloggedInDays:["monday","sunday"]
}

// console.log(obj.email);
// console.log(obj["age"]);
// console.log(obj["fullName"]);

// console.log(obj[mySymbol]);


obj.email = "suresh@gpt.com";
// Object.freeze(obj); //cannot change properties
obj.email = "suresh@google.com";

// console.log(obj.email);


obj.greeting = function(){
    console.log("Hello JS User");
}

obj.greetingTwo = function(){
    console.log(`Hello JS User ${this.fullName}`);
}

console.log(obj.greeting());
console.log(obj.greetingTwo());
// 1️⃣ Primitive 

// 7 Types : String , Number , Boolean , null , undefined , symbol , BigInt

const value = 100;
const isLoggedIn = true;
const strValue = "Suresh";
const outsideTemp = null;
const bigNumber = 12323232312312n;
let userEmail;

// console.log(typeof value);
// console.log(typeof isLoggedIn);
// console.log(typeof strValue);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(bigNumber);

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId); => false even if we pass same value
// console.log(typeof id);



// 2️⃣ Reference (Non-Primitive)
// Array , Object , Functions

const heros = ["spiderman" , "Thor" , "Hulk"]

const myObj = {
    name:"Suresh",
    age:22,
}

const func = function(){
    console.log("Hello World");
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof func);
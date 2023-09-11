// There are two types of memory
// 1. Stack 2. heap

// stack example //copy

let myYTName = "sureshYTdotcom"

let anotherName = myYTName;

anotherName = "UpdateYTName"; // here copy of myYTName is changed not the actual value


console.log(myYTName);
console.log(anotherName);

//Heap Example //Refernce 

let userOne = {
    email:"Suresh@gamil.com",
    upi :"suresh@ybl"
}

let userTwo = userOne;

userTwo.email = "Choudhary@gmail.com"; // here it reference to userOne's email and changed

console.log(userOne.email);
console.log(userTwo.email);
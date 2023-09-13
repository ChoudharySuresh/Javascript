const isUserLoggedIn = true;
const temperature = 41;


//++++++++++++++ if else block ++++++++
// if(temperature === 40){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");

// < , > , <= , >= , == , === , != , !==

// ++++++++++++++++ Scope +++++++

const score = 200;

// if(score > 100){
//     let power = "fly";
//     console.log(`User Power : ${power}`);
// }

// console.log(`User Power ${power}`);


// ++++++++++ Implicit Scope +++++++

const balance = 1000;

// if(balance > 500) console.log("Test");
// if(balance > 500) console.log("Test") , console.log("Test2");

//++++++++++++++++++ if else if Block ++++++++++++++++

// if(balance < 500){
//     console.log("Less than 500");
// } else if(balance < 750){
//     console.log("Less than 750");
// } else if(balance < 900){
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }


// +++++++++++++++++++++ Logical Operators +++++++++

const isLoggedIn = true;
const debitcard = true;
const isLoggedFromGoogle = true;
const isLoggedFromEmail = false;


if(isLoggedIn && debitcard){
    console.log("Allow to buy course");
}

if(isLoggedFromEmail || isLoggedFromGoogle){
    console.log("User Logged In ");
}




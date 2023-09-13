// Truthy => we assume that value should be true

// const userEmail = "suresh@gmil.com";
const userEmail = [];
// const userEmail = function () {};

if(userEmail){
    console.log("Got User Email");
}
else{
    console.log("Don't have User Email");
}


// +++++++++++++++ Truthy Value +++++++++++++++
// "0" , " ", 'false' , [] , {} , function(){}

// +++++++++++++++ Falsy Value ++++++++++++++++
// false , 0 , -0 , BigInt ->0n , "" , null , undefined ,NaN 



// ++++++++++++++++ check array is empty or not ++++++++++++

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }



// ++++++++++++++++ check object is empty or not +++++++++++


// const emptyObj = {};
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }






// ++++++++++++ Nullish Coalescing Operator (??) +++++
// null undefined

let val1;
// val1 = 10 ?? 20;
// val1 = null ?? 10;
// val1 = undefined ?? 20;
// val1 = null ?? 10 ?? 20; // => first value is returned

val1 = null ?? undefined 
val1 = undefined ?? null 

// console.log(val1);




// +++++++++++++++++++ Ternary Operator +++++++++
const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");


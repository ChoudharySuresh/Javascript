
let a = 300;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;

    // console.log("Inner :" , a);
}
// console.log(a);
// console.log(b);
// console.log(c);


function one () {
    const userName  = "Suresh";

    function two () {
        const website = "Youtube";
        // console.log(userName); // => children function can access parent function's variable
    }

    // console.log(website); => parent function cannot access childrens variable
    two();
}

one();


if(true){
    const userName = "Suresh";

    if(userName === "Suresh"){
        const website = "Youtube";
        // console.log(`Username is ${userName} and website is ${website}`);
    }

    // console.log(website);
}

// console.log(userName);

console.log(addOne(5));
function addOne (num){
    return num+1;
}

addTwo(6);
const addTwo = function (num2){
    return num2+1;
}
// ++++++++++++++ This Keyword  +++++++++

// this keyword refers to current context

const user ={
    userName : "suresh",
    price:999,
    welcomeMessage : function () {
        console.log(`${this.userName} , Welcome to website` );
        console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "akshay";
// user.welcomeMessage();
// console.log(this);

function func(){
    let username = "suresh"
    console.log(this.username);  // this give undefined
}
// func();

const func2 = function (){
    let username = "suresh"
    console.log(this.username);
}
// func2();

const arrowFunction = () => {
    console.log(this);  // empty object
}
// arrowFunction();

//+++++++++++ Arrow Function +++++++++++

// const addTwo = (num1 , num2) => {
//     return num1+num2  // explicit return 
// }


// const addTwo = (num1 , num2) => num1+num2 // you will use this in react alot of times

// const addTwo = (num1 , num2) => (num1+num2)


const addTwo = (num1 , num2) => ({userName:"Suresh"})

console.log(addTwo(3,4));


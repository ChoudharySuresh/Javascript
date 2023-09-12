
// funcion declaration

function sayMyName(){
    console.log("S");
    console.log("u");
    console.log("r");
    console.log("e");
    console.log("S");
    console.log("h");
}

// sayMyName()


// function addTwoNumber(number1 , number2){
//     console.log(number1+number2);
// }

// const result = addTwoNumber(3,4);
// console.log("Result :" , result); // it will give undefined because function cannot return anything its just console it 


function addTwoNumber(number1 , number2){
    // let result = number1 + number2;
    // return result;

    return number1+number2;
}

const result = addTwoNumber(3,5);
// console.log(result);


function loginUserMessage (username = "sam"){ // defalut value
    if(!username){  // => username === undefined
        console.log("Please enter valid username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("suresh"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage()); // this case gives undefined
// console.log(loginUserMessage("suresh")); // if we pass arguments then default value will be over-ride



// ***************** Function with array and object

function calculateCartPrice (val1 , val2 , ...num1){
    return num1;
}

// console.log(calculateCartPrice(200,300,500,1000,2000));

const user = {
    userName : "suresh",
    price:190
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    userName:"Sammy",
    price:200
})

const newArray = [100, 200, 400 , 600 ,800];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([500,900,300]));
const promiseOne = new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log("Async Task is Completed");
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise Comsumed");
})

// Promise Two

new Promise(function (resolve,reject){
    setTimeout(() => {
        console.log("Async 2 Task");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async Completed");
})

// We can pass data through resolve method
const promiseThree = new Promise(function(resolve , reject){
    setTimeout(() => {
        resolve({userName:"Suresh" , email:"Suresh@gmail"});
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})

// Reject Example
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;

        if(!error){
            resolve({username:"suresh" , password:"12345"});
        }else{
            reject("Error : Something Went Wrong");
        }
    } , 1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(userName){
    console.log(userName);
}).catch(function(error){
    console.log(error);
})
.finally(() => console.log("The Promise is Either resolved or Rejected"))


// Async await

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;

        if(!error){
            resolve({username:"JS" , password:"12345"});
        }else{
            reject("Error : JS Went Wrong");
        }
    } , 1000)
})

async function comsumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);       
    } catch (error) {
        console.log(error);
    }
}

comsumePromiseFive();



// async function getAllUsers (){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E : ", error);
//     }
// }
// getAllUsers();

fetch('https://api.github.com/users/choudharysuresh')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
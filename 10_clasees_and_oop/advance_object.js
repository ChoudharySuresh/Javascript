// We cannot change value of PI 
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// console.log(Object.getOwnPropertyDescriptor(Math , "PI"));


const obj = {
    name:"suresh",
    laptop:"DELL",
    isAvailable:false,

    order : function(){
        console.log("Order Cancelled");
    }

}

console.log(Object.getOwnPropertyDescriptor(obj , "laptop"));


// We can define property and apply restriction on it
Object.defineProperty(obj , "name" , {
    // writable: true, 
    enumerable: false, 

})

for (const [key , value] of Object.entries(obj)) {

    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

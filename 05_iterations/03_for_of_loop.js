// for Of 

let arr = [1,2,3,4,5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!";

for (const greet of greetings) {
    // console.log(greet);
}

// Maps

// The Map object holds key-value pairs and remembers the original insertion order of the keys.
//A key in the Map may only occur once; it is unique in the Map's collection.
const map = new Map();
map.set("IN" , "India")
map.set("USA" , "United States of AMerica")
map.set("FR" , "France")
map.set("IN" , "India")

for (const [key , value ]of map) {
    console.log(key , " : " , value);
}



// ++++++++++++++++  For of loop is not work in Object ++++
// object is not iterable in this case
// const myObject = {
//     'game1' : "NFS",
//     'game2' : "GTAV"
// }

// for (const [key , value] of myObject) {
//     console.log(`${key} : ${value}`);
// }
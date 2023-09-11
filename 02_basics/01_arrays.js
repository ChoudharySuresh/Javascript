const arr = [0,1,2,3,4,5]

const heros = ["Hulk" , "spiderman" , "Captain America"]

// console.log(arr[1]);

const arr2 = new Array(1,2,3,4);
// console.log(arr2[3]);

//***************Array Method */
// arr.push(9);
// arr.push(10);
// arr.pop();

// arr.unshift(9); // adding elements to the first of array
//arr.shift(); // removing elements to first of array


// console.log(arr.includes(3)); // return true / false based on parameter
// console.log(arr.indexOf(9)); // return index of given parameter if not then return -1

const joinArr = arr.join(); //add all elements of an array into string and return type is string
// console.log(arr);
// console.log(joinArr);

console.log("A" , arr);

const sliceArr = arr.slice(1,3); // slice method return p[ortion of array and cannot change original array
console.log(sliceArr);
console.log("B" , arr);


const spliceArr = arr.splice(1,3); // splice method is used to add or remove elements and change the original array
console.log("C" , arr);
console.log(spliceArr);
const score = 200;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // Adding Number of digits after decimal

const otherNumber = 112.865545234;
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));



// ******** Maths **********************

// console.log(Math);
// console.log(Math.abs(-4)); // converting to positive number
// console.log(Math.round(113.8)); //round of the nearest
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.max(2,5,7,4));
// console.log(Math.min(0,1,7,8,99));



console.log(Math.random());
console.log(Math.floor((Math.random()*10) + 1));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min); // max-min+1 means to get value in this range and to avoid 0 we do plus 1 and last we add min to get minimum value 10 not so 1,2,3
// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// ******** If you want to create date
// let createdDate = new Date(2023 , 0 , 13); {Here Month start from 0 0-Jan , 1-Feb}
// let createdDate = new Date(2023 , 0 , 13 , 5 , 3);
// let createdDate = new Date("2023-01-14");
let createdDate = new Date("01-23-2020");

// console.log(createdDate.toLocaleDateString());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(createdDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// We can change the format of tolocalestring method
newDate.toLocaleString('default' , {
    weekday:"long",
})
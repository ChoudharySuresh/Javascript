// concatenates 
const name = "suresh";

const repoCount = 29;

console.log(`My name is ${name} and repo count is ${repoCount} value`);


const myName = new String("suresh-sc-com");
// console.log(myName[2]);
// console.log(myName.__proto__);

// console.log(myName.length);
// console.log(myName.charAt(3));
// console.log(myName.indexOf("h"));
// console.log(myName.toUpperCase());

const newString = myName.substring(0 , 3); // => end will be excluded
console.log(newString);

const anotherString = myName.slice(-6 , -1);
console.log(anotherString);



const trimStr = "       hello     ";
console.log(trimStr);
console.log(trimStr.trim());

const url = "https://sureshchoudhary.com/suresh%20choudhary";

console.log(url.replace("%20" , "-"));
console.log(url.includes("cho")); // => gives true even the whole word is not found

console.log(myName.split("-")); // => gives an array 

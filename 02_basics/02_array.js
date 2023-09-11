const marevelHeros = ["Thor" , "Spiderman" , "Ironman"]
const dcHeros = ["Superman" , "Flash" , "Batman"]

// marevelHeros.push(dcHeros);

// console.log(marevelHeros);

const mergeHeros = marevelHeros.concat(dcHeros)
// console.log(mergeHeros);

const allHeros = [...marevelHeros , ...dcHeros];
// console.log(allHeros);

const arr = [1,2,3,4,[5,6,7],8,9,[5,6,[7,8,9]]];
const flatArr = arr.flat(Infinity);
// console.log(flatArr);

console.log(Array.isArray("Suresh"));
console.log(Array.from("Suresh Choudhary"));
console.log(Array.from({name:"Suresh"})); //Interview Question

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));
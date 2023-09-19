// Scenaroio if you want to trim a string 
let myName = "Suresh     ";
let myName2 = "Choudhary    ";

// +++ Instead of this i want a method that is accessible to all string
// console.log(myName.trim().length);


let myHeros = ["thor" , "spiderman"];

let heroPower ={
    thor:"hammer",
    spiderman : "sling",

    getSpidermanPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

// Object.suresh();

// +++ If we Enject any method / property in object then it will accessible to array , string , function 
Object.prototype.suresh = function(){
    console.log("Suresh is Present in all objects");
}

Array.prototype.heySuresh = function (){
    console.log(`Suresh says hello`);
}

// heroPower.suresh();
// myHeros.suresh();
// myHeros.heySuresh();
// heroPower.heySuresh();

// +++ Inheritance ++++

const user = {
    name : "Suresh",
    email : "Suresh@gmail.com"
}

const Teacher = {
    makeVideo : true,
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__ : TeachingSupport,
}

// console.log(TASupport.isAvailable); // we can access properties of another object using inheritance

Teacher.__proto__ = user;
// console.log(Teacher.email);

// ++++++ Modern Syntax of Proto +++++
// console.log(Object.setPrototypeOf(TeachingSupport , Teacher).makeVideo);


// First Scenaroio 
let anotherString = "SureshChoudhary        ";

String.prototype.trueLength = function () {
    console.log(this);
    console.log(`True Length is : ${this.trim().length}`);
}

anotherString.trueLength();
"suresh  ".trueLength();


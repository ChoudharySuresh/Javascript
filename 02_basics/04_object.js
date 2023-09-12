
// const tinderUser = new Object() // singleton object

const tinderUser = {};

// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = 'JOE';
tinderUser.email = "joe@gmail.com";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userFullName:{
            firstName : "Suresh",
            lastName : "Choudhary"
        }
    }
}


// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1:"a" , 2:"b"};
const obj2 = {3:"c" , 4:"d"};
const obj3 = {1:"e" , 6:"f"};

// const obj4 = {obj1 , obj2, obj3}
// const obj4=Object.assign({} , obj1,obj2,obj3);

const obj4 = {...obj1 , ...obj2 ,...obj3}
// console.log(obj4);

const users = [
    {
        id:1,
        name:"Suresh",
    },
    {
        id:1,
        name:"Suresh",
    },
    {
        id:1,
        name:"Suresh",
    }

]

// console.log(users[1].name);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // returns array of keys
// console.log(Object.values(tinderUser)); //returns array of values
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));



//****************Object Destructring */

const course = {
    courseName :"JS in Hindi",
    price : 999,
    courseInstructor : "Suresh",
}

const {courseInstructor} = course

const {courseInstructor : instructor} = course // we can give custom name to key 
console.log(instructor);


//*******************JSON Format */

// {
//     "name":"suresh",
//     "courseName":"JS",
//     "Price":"Free" 
// }

// [
//     {},
//     {},        => we can also get this kind of data array of object
//     {}
// ]
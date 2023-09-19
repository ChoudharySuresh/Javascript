const user = {
    userName :"suresh",
    loginCount : 5,
    loggedIn :true,

    getUserDetails : function (){
        // console.log("Got user details from database");
        // console.log(`welcome ${this.userName}`);
        console.log(this);
    }

}

// console.log(user);
// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

function User(username , logincount , isLoggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function (){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// new keyword creates empty object known as Instance , constructor function is called beacuse of new keyword , enject arguments to this keyword and return

const userOne = new User("suresh" , 5 , true);
const userTwo = new User("choudhary" , 15 , false);
console.log(userOne);
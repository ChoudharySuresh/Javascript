function Setuser (username){
    // Complex DB Calls;
    this.username = username;
}

function createUser (username , email , password){
    Setuser.call(this , username);
    this.email = email;
    this.password = password;
}

const chai = new createUser("Suresh" , "suresh@fb.com" , "12345");
console.log(chai);
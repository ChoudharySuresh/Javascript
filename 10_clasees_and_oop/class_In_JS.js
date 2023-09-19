class User{
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        console.log(`${this.password}abc`);
    }

    changeUsername(){
        console.log(`${this.username.toUpperCase()}`);
    }
}

const obj = new User("Suresh" , "Suresh@gmail.com" , "123");
obj.encryptPassword();
obj.changeUsername();


// Behind the Scene

function User(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    console.log(`${this.password}abc`);
}

User.prototype.changeUsername = function (){
    console.log(`${this.username.toUpperCase()}`);
}

const obj2 = new User("Choudhary" , "chopdhary@gmail.com" , "234");

obj2.encryptPassword();
obj2.changeUsername();
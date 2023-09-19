// We will get Maximized Call Stack constructor's email , password and getter , setter's property are in run condition
class user {
    constructor(email , password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
    get password(){
        return `${this._password}suresh`;
    }
    set password(value){
        this._password = value;
    }
}

const obj = new user("Suresh@gmail.com" , "2345");
console.log(obj.email);


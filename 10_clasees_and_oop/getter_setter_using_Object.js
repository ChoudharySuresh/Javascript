const user = {
    _email:"S@gamil.com",
    _password:"abc",

    get email (){
        return this._email.toUpperCase();
    }, 

    set email (value){
        this._email = value
    }
}

const obj = Object.create(user);
console.log(obj.email); // here we can access _email using email because behind the scene _email is Overriden by email
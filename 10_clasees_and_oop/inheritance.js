class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username , email , password){
        super(username) // => behind the scene it uses call (this , username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A New course was added by ${this.username}`);
    }
}


const iphone = new Teacher("iphone" , "i@phone.com" , "456");

iphone.logMe();
iphone.addCourse();

const samsung = new user("Galaxy");
// samsung.addCourse(); => addcourse is not acccessible 
// samsung.logMe()



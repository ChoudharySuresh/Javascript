class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username : ${this.username}`);
    }

    // Sometime i want to creteid method is not accessible for some reason then i'll use static property
    static createId(){
        return `123`;
    }
}

const suresh = new user("suresh");
// console.log(suresh.createId());


class Teacher extends user{
    constructor(username , email){
        super(username);
        this.email = email;
    }

}


const choudhary = new Teacher("choudhary" , "choudhary@gmail.com");
console.log(choudhary.createId());

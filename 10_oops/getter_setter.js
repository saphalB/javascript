// getter and setter using class

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}me`
    }

    set password(value){
        this._password = value
    }
}

const userOne = new User("h@userOne.ai", "abc")
console.log(userOne.email);
console.log(userOne.password);
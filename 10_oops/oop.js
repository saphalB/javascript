// object literal //

const user = {
    username: "Saphal",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database"); 
       // console.log(`Username: ${username}`)               // throws error 
      // console.log(`Username: ${this.username}`)            // prints username
       console.log(this);                                  // prints all the details of current context
       
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());




// construction functions //


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

     this.greeting = function(){
         console.log(`Welcome ${this.username}`);

    

    return this;                                      // no need to write 
}
}


const userOne = new User("Saphal", 12, true)
const userTwo = new User("Bhattarai", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

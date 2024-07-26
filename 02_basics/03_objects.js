//  objects can be declared using two methods : literal and constructor

//constructor : singleton => can be created using syntax  (Object.create)

/************************************************** OBJECT LITERALS **************************************************/
const mySym = Symbol("key1")


 const JsUser = {
    name : "Jack",                         // Here name is a key (and is defined as a string by JS) and Jack is its value.
    age : 18,
    "full name" : "jack lewis",
    [mySym] : "mykey1",                    // the key should be inserted in square bracket for a symbol which is the syntax.      
    email : "jackandjill@google.com",
    location : "London",
    isLoggedIn : false,
    lastLogInDays: ["Monday", "Saturday"]
 }
    // console.log(JsUser.email);
    // console.log(JsUser["email"]);


    // console.log(JsUser["full name"]);


    // console.log(JsUser[mySym]);
    // console.log(typeof mySym);


    JsUser.email = "jack@us.com"              // syntax to override(change) the value.

    //Object.freeze(JsUser)                     // syntax to freeze the values so that it can't  be changed.
    JsUser.email = "jill@us.com"
    // console.log(JsUser);


    JsUser.greeting = function(){
        console.log("Hello User");
    }

    
    JsUser.greetingTwo = function(){
        console.log(`Hello  ${this.name}`);
    }

    

    console.log(JsUser.greeting());
    console.log(JsUser.greetingTwo());


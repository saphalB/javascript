const user = {

    username : "Jack",
    Price : 900,

    welcomeMessage : function(){

        console.log(`${this.username}, Welcome to the website`);      //this keyword refers to the current context
        console.log(this);                                             
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// function one(){
//     let username ="Jack"                                              //this runs only inside object not inside function 
//       console.log(this.username);
// }
// one()


 const chai = () => {                                 // arrow function
      let username ="Jack"                       
      console.log(this);
}
// chai()


// const addTwo = (num1, num2) => {                   //  explicit arrow function
//     return num1 + num2

 //}

// console.log(addTwo(2, 3))


const addTwo = (num1, num2) => num1 + num2          // implicit arrow function // when used curly braces{}, return keyword is used
// console.log(addTwo(2, 4));                         //but when () is used return is  not needed
                                                      
 

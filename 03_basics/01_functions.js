function sayMyName(){
   console.log("J");
   console.log("A");
   console.log("C");
   console.log("K");
}

//  sayMyName()

function addTwoNumbers(number1, number2){         //parameters
    // let result = number1 + number2
    // return result 


    return number1 + number2

}

const result = addTwoNumbers(3, 4)                            //arguments
// console.log("Result: ", result);





// function loginUserMessage(username){
//     //if(username === undefined)
//       if (!username)                                //line 24 and line 25 yields same output
//     {
//         console.log("Please enter a username");
//         return;
        
//     }
//         return `${username} just logged in`
// }

// // console.log(loginUserMessage("I"));
//  console.log(loginUserMessage());               // output is : undefined just logged in




 function loginUserMessage(username="Jack"){
    
      if (!username)                                
    {
        console.log("Please enter a username");
        return;
        
    }
        return `${username} just logged in`
}

//  console.log(loginUserMessage("I"));
//  console.log(loginUserMessage());               


function calculateCartPrice(...num1){    ///...num1 is a rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 600, 546))



 /****************************************** function and object ***********************/

const user = {
     username:"Saphal",
     age: 20
}

function handleObjects(anyObject){
    console.log(`The username is ${anyObject.username} and the age is ${anyObject.age}`);

}

// handleObjects(user)


// handleObjects({
   
//     username: "Sam",
//     age: 19

// })



/**************************************** function and array ***************************************/

const myNewArray = [100, 400, 500, 298]

function getSecondValue(getArray){
    return getArray[1]
}

console.log(getSecondValue(myNewArray));

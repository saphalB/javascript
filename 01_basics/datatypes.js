// Primitive datatypes : Call by value //
// 7 primitive datatypes are : String, Number, Null, Boolean, Undefined, Symbol & BigInt

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2) 


// Non-Primitive datatypes : call by reference or reference type datatypes.
// types : arrays,objects & functions.

const heroes = ["Spiderman", "Superman","Hulk"]
{
    name: "Jack"  
    age = 20
}

console.log(typeof age)

/* JavaScript is a dynamic language and not static, 
which means that variables can hold values of different types during runtime. 
Unlike languages such as Typescript or Java, you don't need to declare the data type of a 
variable explicitly. */ 


//************************************** Memory *************************************//

// Types : Stack(Primitive) & Heap(Non-primitive) //

// example of stack memory
let myName = "Jack"
let anotherName = myName
myName = "Jill"

console.log(myName);
console.log(anotherName);

// example of heap

let userOne = {
    email : "abc@gmail.com"
    
}

let userTwo = userOne
userTwo.email = "abc@hotmail.com"

console.log(userOne.email);
console.log(userTwo.email);


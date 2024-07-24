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

// console.log(typeof age)

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

// console.log(myName);
// console.log(anotherName);

// example of heap

let userOne = {
    email : "abc@gmail.com"
    
}

let userTwo = userOne
userTwo.email = "abc@hotmail.com"

// console.log(userOne.email);
// console.log(userTwo.email);


// One more Example//

let box1 = {
    width: 100,
    height: 50
};

let box2 = box1;

box2.width = 200;

console.log('Box 1 width: ', box1.width);
console.log('Box 2 width: ', box2.width);


/*You can see that changing the width property of the box2 object will also change 
the width property of the box1 object. 
This happens because while assigning the value of box1 into box2, we are actually copying
 the reference and not the actual object. Therefore, both box1 and box2 point to the same 
 object.As both point to the same object, changing one changes the other.*/


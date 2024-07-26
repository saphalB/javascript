// singleton or constructor

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {             
    email: "some@gail.com",
    
    fullname: {                                      //nested object
        userfullname: {
            firstname: "Jack",
            lastname: "Lewis"
        }
    }

}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)    // merge two or more objects using assign opeartor


const obj4 = {...obj1 , ...obj2, ...obj3}   // mostly used merge method. Use braces{} instead of [] which is used to merge arrays

// console.log(obj4);

const users = [
    {
        id : 1,
        email : "s@gmail.com"
    },

    {
        id : 1,
        email : "s@gmail.com"
    },

    {
        id : 1,
        email : "s@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));




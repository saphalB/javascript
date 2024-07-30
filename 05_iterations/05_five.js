
// for each loop

const coding =[ "js", "ruby" , "python", "cpp"]

// coding.forEach( function (val){             //for each loop is mainly used for array
// console.log(val);
// })




// can also be written as arrow function as in:

// coding.forEach( (item) => {
// console.log(item);
// })


// also

// function printMe(item){
//     console.log(item);
// }
// coding.forEach( printMe)



coding.forEach( (item, index, array) => {
// console.log(item, index, array);
})











const myCoding = [ 
    {
        languagename : "Javascript",
        extension : ".js"
    },

    {
        languagename : "Python",
        extension : ".py"
    },

    {
        languagename : "Java",
        extension : ".java"
    }
    
]

myCoding.forEach(  (item) => {
    console.log(item.languagename)
})


/// map ///


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map ( (num) => num + 10)     // myNums.filter doesn't work

// console.log(newNums);




// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums=[]
//  myNums.forEach( (num) => {
// newNums.push(num + 10)
    
// });

// console.log(newNums);                       // same program as above using for loop







const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums
                    .map( (num) => num *10)   
                    .map( (num) => num + 1)
                    .filter( (num) => num >=40)                   // chaining


    console.log(newNums);               



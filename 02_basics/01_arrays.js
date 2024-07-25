// arrays //

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Spiderman", "Hanuman", "Thor"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);


/*************************** Array Methods **************************/

//  myArr.push(6)                  // adds an extra element (6) in the array
//  myArr.push(7)                 // adds an extra element (7) in the array
//  myArr.pop()                  // removes the last element of the array
//  myArr.unshift(4)            // adds an element at the start of array
//  myArr.shift()              // removes the element of the 0th index ( or 1st element)

// console.log(myArr.includes(9))    // provides boolean value 
// console.log(myArr.indexOf(3)) 

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);  
// console.log(typeof newArr) ;          // converts into string value. Hence the output is not shown in array.




// splice and slice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)            // only two elements are printed as output from index1 and index2
console.log(myn1);
console.log("B", myArr);

 const myn2 = myArr.splice(1, 4)      // splice(from first index elements are deleted, 3 elements are deleted in total)
 
 console.log(myn2)
 console.log("C", myArr);


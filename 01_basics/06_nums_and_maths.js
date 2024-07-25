/*************************************************** NUMBERS *****************************************/


const score = 400
// console.log(score);


const balance = new Number(400)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(3));


const otherNumber = 123.8568
// console.log(otherNumber.toPrecision(4));


const number = 1000000
// console.log(number.toLocaleString('en-IN')); // puts comma according to number systems


/************************* MATHS *********************************/

// console.log(Math.abs(-4));
// console.log(Math.round(4.5));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // must remember this as a formula


 //   reduce 


//  const myNums = [ 1, 2 , 3]

//  const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`accumulator: ${acc} and current value: ${currval}`);
//     return acc + currval

// }, 0)
//  console.log(myTotal);

           //  OR
           
           
           
// const myNums = [ 1, 2 , 3]
// const myTotal = myNums.reduce ( (acc, currval) => acc + currval, 0)

// console.log(myTotal);


const shoppingCart = [
{
    courseName : "JS",
    price : 2999
},
{
    courseName : "PYTHON",
    price : 1999
},
{
    courseName : "AI",
    price : 5999
}]

const priceToPay = shoppingCart.reduce( (acc , item) => acc + item.price , 0)
console.log(`You have to pay Rs.${priceToPay}`)
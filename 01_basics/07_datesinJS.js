let myDate = new Date()
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate); //object

let myCreatedDate = new Date(2024, 6 , 25) // month is represted as: 0 for Jan, 1 for Feb and so on. Here, 6 is for July.
// console.log(myCreatedDate.toDateString());



let dateToday = new Date(2024, 6, 25, 17, 20, 34) // yy/mm/dd/hr/min/sec
//console.log(dateToday.toLocaleString());


let myTimeStamp =  Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now());                      // date in millisecond
// console.log(Math.floor(Date.now()/1000));     // millisecond into second


let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMinutes());











/***********************************************  FOR OF LOOP      ***************************************/
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
// console.log(num);
}



const greetings = "Hello world"

for (const greet of greetings) {
// console.log(`Each character is ${greet}`);
}


/**************************************    MAPS      *********************************************/

const map = new Map()

map.set('IN', "India") 
map.set('FR', "France")
map.set('NEP', "Nepal")
map.set('FR', "France")

// console.log(map);


for (const [key , value] of map) {
    // console.log(key, ":-", value);
}



const myObj = {
       game1 : 'PUBG',
       game2 : 'e-football'
       
}

for (const games of myObj) {     // here myObj is not iterble
// console.log(games);    
}








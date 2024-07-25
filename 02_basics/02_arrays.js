const marvel_heroes = [ "Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);



// const allHeroes = marvel_heroes.concat(dc_heroes)    // concat merges two arrays into a single one properly
// console.log(allHeroes);

const allNewHeroes = [...marvel_heroes, ...dc_heroes]  //spread operator
// console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray =  anotherArray.flat(Infinity)

// console.log(realAnotherArray);



// console.log(Array.isArray("Jack"));                         //returns boolean
// console.log(Array.from("Saphal"));                          // creates an array in the output
// console.log(Array.from({name: "Saphal"}));                  // interesting case (provides null array)     



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

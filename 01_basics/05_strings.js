const name = "Jack "
const repoCount = 50
//console.log(name + repoCount + " value");  // outdated syntax 
// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`); //modern syntax


const gameName = new String("hitesh-hc-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,5)
//consoole.log(newString);

const anotherString = gameName.slice(-8,4)
//console.log(anotherString);

const newestString = "    longetivity     "
// console.log(newestString);
// console.log(newestString.trim());

const url = "https://messi.com/messi%20leo"
// console.log(url.replace( '%20', '-'));

// console.log(url.includes('leo'))

console.log(gameName.split('-')); // string into array
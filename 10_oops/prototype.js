// let myName = "johnCena    "
// let mychannel = "edge     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.cena = function(){
    console.log(`cena is present in all objects`);
}

Array.prototype.heyEdge = function(){
    console.log(`Edge says hello`);
}

// heroPower.cena()
// myHeros.cena()
// myHeros.heyEdge()
// heroPower.heyEdge()

// inheritance

const User = {
    name: "mbappe",
    email: "mbappe@rma.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Lewangolski     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Yamal".trueLength()
"Raphina".trueLength()
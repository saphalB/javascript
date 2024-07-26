
 let a =300
if(true){
     let a = 10
    
    // console.log("Inner:", a);

}
    //  console.log(a);


/******************************************** Nested scope *****************************************/

function one(){
    const username = "Jack"

    function two(){
        const website = "youtube"
         console.log(username);
    }
    // console.log(website);         //  error 
    //   two()
}
    //  one()





if(true){
    const username = "Jack"
    if(username === "Jack"){
        const website = " youtube"
        // console.log(username +  website);
    }
    // console.log(website);                      //error
}

// console.log(username);                            //error


/********************************************* Interesting Example / Concept  ****************************/

console.log(addOne(5))     // if placed over function or below function no error occurs
function addOne(num){
    return num + 1
} 


// console.log(addTwo(5))      // hoisting case  // causes error  // if placed outside and below [scope{}]  no error occurs
const addTwo = function(num){
    return num + 2
}

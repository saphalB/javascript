/***************************************** FOR LOOP *******************************/

for (let i = 0; i < 10; i++) {
    const element = i;

    if (element == 5) {
        // console.log("I have got 5");
    }
        
    
    // console.log(element);
    
}



for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop ${j} and other ${i}`);
        // console.log( i + "*" + j + "=" + i*j);
        
    }
    
}


let myArray =[ "flash" , "batman" , "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //   console.log(element);
}




//  some keywords : break and continue


// for (let index = 0; index <= 20; index++) {
//     if (index == 5){
//         console.log(`${index} is detected`);
//         break
//     }
     
//     console.log(`the value of i is ${index}`);
  
// }




for (let index = 0; index <= 20; index++) {
    if (index == 5){
        console.log(`${index} is detected`);
        continue
    }
     
    console.log(`the value of i is ${index}`);
  
}

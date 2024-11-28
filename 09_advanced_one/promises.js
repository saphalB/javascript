
// promise creation ---> promise 1

const promiseOne = new Promise(function(resolve, reject){

    // do an async tasks like --> network calls, cryptography, Database calls


        setTimeout(function(){
        console.log('Async tasks completed');
         resolve()                       // resolve is called to connect it with .then in line 18
        }, 1000)

})

// promise consumption

promiseOne.then(function(){
     console.log('Promise consumed');
     
})





  // promise 2
new Promise(function(resolve, reject){
   setTimeout(function(){   
    console.log('Async task 2 completed');
    resolve() 
   },1000)                     

}).then(function(){
    console.log('async 2 consumed');
    
})

 // promise 3

 const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Saphal", email: "saphal.abc.com"})
    }, 1000)
 })

 promiseThree.then(function(user){
     console.log(user);
     
 })



 // promise 4

const promiseFour = new Promise(function(resolve, reject){
   setTimeout(function(){
     let error = true;
     if(!error){
        resolve({ username : "saphal", password : "12345"})
     } else{
        reject('ERROR : Something went wrong')
     }
   }, 1000)
})

promiseFour.then(function(user){
  console.log(user);
  return user.username
  }).then(function(username){
    console.log(username)
  }).catch(function(error){
    console.log(error);
  }).finally(function(){
    console.log("The promise is either resolved or rejected.");
    
  })






  // promsie 5   ---- using async/await ---

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
      let error = true;
      if(!error){
         resolve({ username : "bhattarai", password : "12345"})
      } else{
         reject('ERROR : Something went wrong again')
      }
    }, 1000)
 })


//  async function consumepromiseFive(){
//     const response =  await promiseFive;
//     console.log(response);                     // causes error  so we need to use the code starting from line 106
    
//  }
//   consumepromiseFive()


async function consumepromiseFive(){

    try {
        const response =  await promiseFive;
    console.log(response);  
        
    } catch (error) {
        console.log(error);
        
    }
}
consumepromiseFive()

    
                       //---------------  using try catch ----------------//
// async function getAllUsers(){
//     try {                                               
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

               // ------------- using then and catch ------------------- //

               fetch('https://jsonplaceholder.typicode.com/users')
               .then(function(response){
                  return response.json()
               })
               .then(function(data){
                    console.log(data);
                    
               })
               .catch(function(error){
                console.log(error);
                
               })
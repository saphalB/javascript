/************************************  IMMEDIATELY INVOKED FUNCTION EXPRESSIONS ***************************************/

// to remove the pollution of global scope, iife is required. 


(function two(){
     console.log(`DB Connected`);                    //  ()() (function definition)(function call)

})
();                      // must use a semicolon to end this code. And for another function to work



((name) => {
    console.log(`DB Connected Again ${name}`);
})
("Jack")




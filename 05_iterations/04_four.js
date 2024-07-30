// for in loop



const myObj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift"
}


for (const key in myObj) {
    
        //   console.log(`${key} shortcut is for ${myObj[key]}`);  
        
}






const programming = ["js", "py", "cpp", "rb"]

for (const key in programming) {
    // console.log(programming[key]);
        
    
}











const map = new Map()

map.set('IN', "India") 
map.set('FR', "France")
map.set('NEP', "Nepal")
map.set('FR', "France")

for (const key in map) {
    
       // console.log(key);             // no result (empty, not an error)
    
}







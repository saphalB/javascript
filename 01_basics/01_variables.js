const accountId = 234
let accountEmail = "saphal@gmail.com"
var accountPassword = "p123"
accountCity = "Ktm"
let accountState

//accountId =123 // not allowed
accountEmail = "saphal.bhattarai@gmail.com"
accountPassword = "p234"
accountCity = "Dharan"

/* Prefer not to use var because of issue in block scope and functional scope */
/* ctrl+L clears the terminal */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const output = new createUser("saphal", "saphal@np.com", "abc123")
console.log(output);

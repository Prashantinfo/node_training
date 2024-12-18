

const crypto = require("crypto-js")
const data = "This is the data that need to be encrypted"
const key = "password@111"


const encrypted = crypto.AES.encrypt(data, key).toString();
console.log("Encrypted data")


console.log(encrypted)
console.log("Decrypted data")


const decrypted = crypto.AES.decrypt(encrypted, key)
    .toString(crypto.enc.Utf8)
console.log(decrypted)
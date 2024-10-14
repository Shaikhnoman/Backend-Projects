import bcrypt from "bcrypt"
import { CLIENT_RENEG_LIMIT } from "tls"
const mypass="12345"
const salt=10
bcrypt.hash(mypass,salt,(err,hash)=>{
    try {
        console.log(hash);
    } catch (err) {
        console.log(err);
    }
})
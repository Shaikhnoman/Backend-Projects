import jwt from "jsonwebtoken"
let secretkey="code"
// let token=jwt.sign({email:'Noman1234@gmail.com'},secretkey)
// console.log(token);
let t1='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik5vbWFuMTIzNEBnbWFpbC5jb20iLCJpYXQiOjE3Mjc0MzQ1MDl9.jaraXrG3mQHtSneuHxZBvgxkGjc8GvAsGmlFl3UR9tI'
let decoded=jwt.verify(t1,secretkey)
console.log(decoded);

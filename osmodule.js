//os mmodule to interact with operating system
const ss=require('os')
//info about current user
e=ss.userInfo()
console.log(e)
//time system is running
time=ss.uptime()
console.log(time/3600)
const s=require('http')
//Getting more info using os

const info={
    name:ss.type(),
    release:ss.release(),
    totalmem:ss.totalmem(),
    freemem:ss.freemem()
}

console.log(info)
//There are many more methods of os which we can explore and use
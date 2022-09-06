const nm=require('./name.js')
const add=require('./add.js')
console.log(add)
const sa=require('./sayhi.js')
const jo=nm.jo
sayhi=sa.sayhi
const dt=require('./data.js')
const a=12,b=16
const sumbyclass=add.addclass
const sumbyfunc=add.addfunction
sumbyclass(a,b)
sumbyfunc(6,3)

//if we have a function inside a module that function will run despite of whether you store the variable or not like in add.js we are calling add() so if we import this module in any of js page it will run automatically without being called
 

const f=dt.list
const d=dt.person.name
console.log(d+" "+f[0]+" "+f[1])
sayhello=sa.sayhello
sayhi('sui')
sayhello(jo)
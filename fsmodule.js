
const {readFileSync,writeFileSync}=require('fs')//Reading files in js This is similar to importing few methods like in pyton from decimal import Decimal
const fir=readFileSync('first.txt','utf8')
console.log(fir)

const fs=require('fs')//Here we are importing whole fs module and above we are importing just two methods
const re=fs.readFileSync('first.txt','utf8')
console.log(re)
//To create anew text file or write in existing text file Two arguements one is source file and other is text to be written
const wr=writeFileSync('second.txt',`This i derived from first .txt in which "${fir}" is written`,{flag:'a'})
//If second.txt will not be there system will create a file named second.txt
//Third arguement is flag which enables the compiler to write in new line every time the code runs else without flag only file will contain the text which is written
//Above code is for synchronous programs
const {readFile,writeFile}=require('fs')//Reading files in js This is similar to importing few methods like in pyton from decimal import Decimal
readFile('first.txt',(err,res)=>{
if(err)
{console.log(err)
    return
}
console.log(res)  //OUTPUT:<Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 0d 0a>
//This buffer output shows that text is not converted to readable languageso we need to use utf8
})//Using callback function ()=>{}
readFile('first.txt','utf8',(err,res)=>{
    if(err)
    {console.log(err)
        return
    }//OUTPUT:Hello this is first text file

    console.log(res) })
    
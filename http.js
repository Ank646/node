const http=require('http')
/*const ser=http.createServer((req,res)=>
    {
        res.write("<h1> Hello, this is our homepage</h1>")
    res.end()
}) */
const ser=http.createServer((req,res)=>
    {
      if(req.url==='/')
      {
        res.end("Welcome to our homepage");
      }
      else if(req.url==='/about')
      {
        res.end("These are our details"); //while doind from youtube it is shown to do as if statements only that will give an error we need to wrap by if else
      }
      else{
      res.end("<h1>OOPS!!!!</h1>");
    }
});
ser.listen(5000)

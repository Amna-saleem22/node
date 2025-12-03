const fs = require ('fs')
const http = require('http')

 const server = http.Server((req,res)=>{
      const stream = fs.createReadStream("input.txt")
    ReadStream.pipe(res);
 });
 server.listen(3000,()=>
{
    console.log(`server is run ${3000}`)
});
const fs = require ('fs');// file system pe kam karna ka liye
const http = require('http');//server ka liye

 const server = http.Server((req,res)=>{
      const stream = fs.createReadStream("input.html");
    stream.pipe(res);
 });



//  server create kai hai 
 server.listen(3000,()=>
{
    console.log(`server is run ${3000}`)
});
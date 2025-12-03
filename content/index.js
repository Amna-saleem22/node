const fs = require("fs");
const http = require("http")

const server = http.Server((req,res)=>{
       
    if(req.url === './' || req.url === '/home'){
        res.writeHead(200,{"content-Type":"home/html"});
      return  fs.createReadStream(__dirname + '/home.html').pipe(res);
    }
    else if(req.url === '/about'){
        res.writeHead(200,{"content-Type":"about/html"});
         fs.createReadStream(__dirname + '/about.html').pipe(res);
    }
    else if(req.url === '/contact' )
    {
        res.writeHead(200,{"content-Type":"contact/html"});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }

     else if(req.url === '/gallery'){
            res.writeHead(200,{"content-Type":"gallery/html"});
            fs.createReadStream(__dirname + '/gallery.html').pipe(res);
        
     }
      else if(req.url === "/services"){
        res.writeHead(200,{"content-Type":"services/html"});
        fs.createReadStream(__dirname + '/services.html').pipe(res);
      }
      else{
    res.writeHead(404,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
}
});

server.listen(3000, ()=>{
    console.log(` server is running ${3000}`)
});
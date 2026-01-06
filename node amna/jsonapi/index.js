const http = require('http');
const fs = require('fs');


const server = http.Server((req,res)=>{
    if(req.url === '/'){
        res.setHeader('content-type', "text/html");
        res.write("<h1>hello world</h1><P>London is the capital city of England</P><h2>London is the capital city of England</h2>");
    res.end();
    }
    else if(req.url === '/about'){
      
        res.write("<h1>About us</h1> <p>An About Us page is a section on a website that introduces a company's identity, story, and values to its audience. It's used to build trust and a connection with potential customers by explaining who the company is, why it exists, and what it stands for. Key elements often include the company's mission, history, team members, and accomplishments. </p>   <button>Click me</button>")
        res.end();
    }
    else if( req.url === '/userapi'){
        fs.readFile(`${__dirname}/helloData/toDo.json`, 'utf-8' ,(err, data) =>{
       if(err){
        res.writeHead(500 ,('content-Type','text/plain'));
        res.end("server error");
          
       }
        else{
            res.writeHead(200,('content-Type','application/html'));
            res.end(data)
           }
        });
    }

    // else if(req.url === '/update'){
    //     fs.appendFile(`${__dirname}/helloData/toDo.json` , (err)=>{
    //         if(err) {
    //             res.writeHead(500,("content-Type", "text/plain"))
    //             res.end("error");

    //         }
    //         else{
    //             res.writeHead(200,("content-Type","update/html"))
    //             res.end(data);

    //         }
    //     } )
    // }

    

  
});
  server.listen(3000, 'localhost', () => {
        console.log(`server is running http://localhost:${3000}/`)
    });
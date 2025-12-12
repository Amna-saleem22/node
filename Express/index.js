const { error } = require('console');
const express = require('express');
const app = express();
const Port = 3000;
const fs = require("fs");

app.get('/hello',(req,res)=>{
   res.send("hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
});
app.get('/about',(req,res)=>{
   res.send("hello about!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
});




app.use((req,res,next)=>
{
    console.log(`${req.method} ${req.path}`);
    next();
})


function Login (req, res , next){
    console.log("Hello from New Customer");
    next();
}

app.get("/Profile", Login,(req,res)=>{
    res.send('Hello World!!!!!!');
})

function validateProductId(req, res, next) {
      const username = parseInt(req.params.username);
  console.log(username)
  next();
}

// Route uses route-level middleware validateProductId
app.get('/product/:id', validateProductId, (req, res, next) => {
  const productId = parseInt(req.params.username);

 

  res.json({  name: productId });
});
app.use(express.json());







const adminRouter = express.Router();

adminRouter.use((req,res,next)=>{
    console.log('admin router');
    next();
});


 adminRouter.get('/dashboard',(req,res)=>{
       console.log("hello dashboard");
            res.writeHead(200,{"content-Type":"text/html "});
                   fs.createReadStream(__dirname + '/setting.html').pipe(res);
 });

//  adminRouter.get('/article' , (req,res) =>{
//      res.writeHead(200,{"content-type":"text/html"});
//      fs.createReadStream(__dirname+'/article').pipe(res);
//  });

 
//  adminRouter.get('/report' , (req,res) =>{
//      res.writeHead(200,{"content-type":"text/html"});
//      fs.createReadStream(__dirname+'/report.html').pipe(res);
//  });

 
 adminRouter.get('/profile' , (req,res) =>{
     res.writeHead(200,{"content-type":"text/html"});
     fs.createReadStream(__dirname+'/profile.html').pipe(res);
 });


 adminRouter.get("/setting",(req,res)=>{
  
    console.log("hello setting");
    res.writeHead(200, {"content-type": "text/html"});
    fs.createReadStream(__dirname + "/dash.html").pipe(res);
 });

 app.use('/admin', adminRouter);


const userRouter = express.Router();

userRouter.use((req,res,next)=>{
    console.log('user router');
    next();
});
userRouter.get('/',(req,res)=>{
    res.writeHead(200,{"content-type": "text/html"});
    fs.createReadStream(__dirname + "/home.html").pipe(res);
});

app.use("/" , userRouter);
  
  



  app.use((err,req,res,next)=>{
console.log(err.message);
res.status(err.status || 500).json(
    success.false,
    error.err.message
);
next();
  });
  app.get('/error',(req,res)=>{
    res.send("<h1>  ERROR MIDDLEWARE</h1> <P>Error Handling refers to how Express catches and processes errors that occur both synchronously and asynchronously. Express comes with a default error handler so you don’t need to write your own to get started.</P>  <button href='https://expressjs.com/en/guide/error-handling.html'>Learn</button>")
  });



app.listen(Port,()=>{
    console.log(`server in running ${Port}`)
});
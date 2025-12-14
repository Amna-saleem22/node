const express = require("express");
const app = express();
const Port = 3000;
const path = require("path"); 

//Building Modules
app.use(express.json());
app.use(express.urlencoded({extended:  true}));
app.use(express.static(path.join(__dirname , 'public')));
app.set('view engine' , 'ejs');

app.get('/',  (req,res) =>{
    res.render('home')
});

app.listen(Port , ()=>{
     console.log(`server running http://localhost:${3000}/`)
});






// const express = require('express');
// const app = express();
// const path = require("path");
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,'public')));
// app.set('view engine','ejs');
// app.get('/', function (req, res) {
//   res.render('index');
// });
// app.get('/profile/:username', function (req, res) { 
//     res.send(`Welcome ${ req.params.username}`);
//   });

// app.listen(3000);
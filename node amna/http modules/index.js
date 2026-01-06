const http = require('http');
const server = http.Server((req, res) => { 
    if(req.url === "/"){
    res.writeHead(200, (
        // 'content-type', " text/plain"


        'Content-Type', 'text/html'
   ))
    res.end("<h1>Hello amna!!!!!!!!!!!!!!!!!!!!!!!!!!</h1> \n")}


    else if(req.url === "/about"){
        res.write("about kase ho");
        res.end();
    }


if (req.url === "/contact") {
    res.setHeader("Content-Type","text/plain");
    res.write("kase ho !!!!!!!!");
    res.end();
}
});
server.listen(3000, "localhost", () => {
    console.log(`server running http://localhost:${3000}/`)
})


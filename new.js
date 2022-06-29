const http = require('http');
const fs = require('fs')
const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    const file = fs.readFile('./views/index.html',(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.write(data);
            res.end();
        }
    
    })

});

server.listen(8800, ()=>{
    console.log('server running at port 8800dfgfgfg')
})
var http = require('http');


var app = http.createServer(function(request, response){
    console.log(request.url);

    if (request.url === "/"){
        response.write("This is HOME!!!!!!");
        response.end();
    } 
}).listen(process.env.PORT || 3030);

console.log("First Node Server is running at localhost");

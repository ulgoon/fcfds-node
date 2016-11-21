var http = require('http');

var router = require('./router');


var app = http.createServer(function(request, response){
    console.log(request.url);
    
    router.home(request, response);
    router.about(request, response);
    router.facamp(request, response);

}).listen(process.env.PORT || 3030);

console.log("First Node Server is running at localhost");

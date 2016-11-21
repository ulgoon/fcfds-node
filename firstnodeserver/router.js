var fs = require('fs');


function home(request, response){
    if(request.url === "/"){
        fs.readFile("./layout/home.html", function(err, data){
            response.write(data);
            response.end();
        });
    }    
}

function about(request, response){
    if(request.url === "/about"){
        fs.readFile("./layout/about.html", function(err, data){
            response.write(data);
            response.end();
        });
    }
}

function facamp(request, response){
    if(request.url === "/facamp"){
        fs.readFile("./layout/facamp.html", function(err, data){
            response.write(data);
            response.end();
        });
    }
}

module.exports.home = home;
module.exports.about = about;
module.exports.facamp = facamp;

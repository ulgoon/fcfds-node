var fs = require('fs');
var renderer = require("./renderer");


function home(request, response){
    if(request.url === "/"){
        return renderer(request, response, "home");
    }    
}

function about(request, response){
    if(request.url === "/about"){
            
        return renderer(request, response, "about");
    }
}

function facamp(request, response){
    if(request.url === "/facamp"){
        return renderer(request, response, "facamp");
    }
}

module.exports.home = home;
module.exports.about = about;
module.exports.facamp = facamp;

var express = require('express');
var app = express();


app.set("port", process.env.PORT || 8080);

app.get('/', function(req, res){
    res.type("text/plain");
    res.send("Hello Express!!");
});

app.use(function(req, res){
    res.type("text/plain");
    res.status("404");
    res.send("404 - Not Found");
});

app.use(function(req, res){
    res.type("text/plain");
    res.status("500");
    res.send("500 - Server Error");
});

app.listen(app.get("port"), function(){
    console.log("First express Server is running at localhost:" + app.get("port"));
});

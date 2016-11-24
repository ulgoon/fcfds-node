var express = require('express');
var app = express();


app.set("port", process.env.PORT || 3030);

app.get('/', function(req, res){
    res.send("Hello tomato");
});

app.listen(app.get("port"), function(){
    console.log("Tomato Express server is running at localhost:" + app.get("port"));
});

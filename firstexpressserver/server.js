var express = require('express');
var app = express();

var indexRouter = require("./routes/index")(app);

app.set("port", process.env.PORT || 8080);
app.set("views", __dirname + "/views");
app.set("view engines", "ejs");
app.engine("html", require("ejs").renderFile);


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

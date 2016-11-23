module.exports = function(app){
    var http = require('http').Server(app);
    var io = require('socket.io')(http);


    
    app.get('/chat', function(req, res){
        res.render("chat.ejs");
    });
    io.on("connection", function(socket){
            console.log("new user is connected!!");
    });
    http.listen(3000, function(){
        console.log("Chat server is listen on 3000");
    });
//    app.get('/chat', function(req, res){
//        res.send("chat server start");
//    });
}

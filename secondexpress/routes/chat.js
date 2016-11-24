module.exports = function(app){
    var http = require('http').Server(app);
    var io = require('socket.io')(http);

    app.get('/chat', function(req, res){
        res.render("chat.ejs");
    
    });
    io.on("connection", function(socket){
        console.log("New user connected!");
        socket.on("chat message", function(msg){
            console.log("message: " + msg);
            io.emit("chat message", msg);
        });
        socket.on("disconnect", function(){
            console.log("User disconnected");
        });
    });
    
    http.listen(8080, function(){
        console.log("Chat Server is running...");
    });
}

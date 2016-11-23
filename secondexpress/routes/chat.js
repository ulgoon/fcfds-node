module.exports = function(app){
    app.get('/chat', function(req, res){
        res.send("chat server start");
    });
}

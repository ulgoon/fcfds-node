module.exports = function(app){
    app.get('/about', function(req, res){
        res.send("This is about");
    });
}

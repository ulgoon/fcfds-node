module.exports = function(app){
    var users = [
        {id:'1', name:'John Doe', email:'john@gmail.com'},  
        {id:'2', name:'Kim', email:'kim@gmail.com'},  
        {id:'3', name:'Lee', email:'lee@gmail.com'},  
        {id:'4', name:'Park', email:'park@gmail.com'},  
        {id:'5', name:'Choi', email:'choi@gmail.com'},  
        {id:'6', name:'Jang', email:'jang@gmail.com'},  
        {id:'7', name:'Kwon', email:'kwon@gmail.com'},  
        {id:'8', name:'Ho', email:'ho@gmail.com'},  
        {id:'9', name:'Ahn', email:'ahn@gmail.com'},  
        {id:'10', name:'Jane', email:'jane@gmail.com'}  
    ];

    app.get('/users', function(req, res){
        res.json(users);
    });

    app.get('/users/random', function(req, res){
        var n = Math.floor(Math.random() * users.length);
        var u = users[n];
        res.json(u);
    });
}

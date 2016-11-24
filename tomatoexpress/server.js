var express = require('express');
var app = express();

var request = require('request');
var cheerio = require('cheerio');

var boxOffice = [];

app.set("port", process.env.PORT || 3030);

app.get('/', function(req, res){
    request({
        method:'GET', 
        uri:'https://www.rottentomatoes.com/'
}, function(err, res, body){
        if (err) throw err;
        var $ = cheerio.load(body);
    
        var movieInfo = $('table#Top-Box-Office.movie_list');
        //console.log(movieInfo);
        movieInfo.each(function(){
            var movieName = $(this).find("td.middle_col").text();
            var meterScore = $(this).find("td.left_col").text();
        
            console.log(movieName);
            console.log(meterScore);
            boxOffice.push({movieName:movieName, meterScore:meterScore});
        });
    });
    res.send(JSON.stringify(boxOffice, null, 4));
});

app.listen(app.get("port"), function(){
    console.log("Tomato Express server is running at localhost:" + app.get("port"));
});

var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = requied('crypto');
var app = express();
app.use(morgan('combined'));

var counter=0;
app.get('/counter',function (req, res)
{
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artivle.html'));
});


function hash (input,salt){
    var hashed =crypto.pbkdf2Sync(input,salt,512,'shas12');
     return hashed.toString('hex');
}

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('hash/:input', function(req,res){
    var hashString = hash(req.params.input,'random string');
    res.send(hashedString);
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

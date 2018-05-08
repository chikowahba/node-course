// libery imports
var express = require('express');
var bodyParser = require ('body-parser');

// local imports

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res)=>{
    console.log(req.body);
    var todo = new Todo ({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });

});

app.listen(3001, () => {
    console.log('start port 3001');
});

module.exports = {app};
var express = require('express');
var userRoutes =  express.Router();

userRoutes.get('/list', function(req, res){
res.send("Shows user list");
});


userRoutes.get('/:id', function(req, res){
res.send("Shows user id = "+req.params.id+"'s details");
});


userRoutes.post('/', function(req, res){
res.send("Save user");
});

module.exports = userRoutes;
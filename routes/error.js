var express = require('express');
var erorrRoutes = express.Router();


erorrRoutes.get('*', function(req, res){
res.send('Sorry, this is an invalid URL.');
});

module.exports = erorrRoutes;
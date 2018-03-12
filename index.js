var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

var userRoutes = require('./routes/user.js');
app.use('/user', userRoutes);

app.get('/index', function(req, res){
   res.render('index');
});


// this must always come as last step  
var errorRoutes = require('./routes/error.js');
app.use('*', errorRoutes);

app.listen(3000);
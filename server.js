var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//// Create Routes for the admin section

// Get an instance of the router

var adminRouter = express.Router();

// Admin main page which is a dashboard (http://localhost:1337/admin)
adminRouter.get('/', function(req, res) {
  res.send('I am the dashboard!');
});

// Users Page (http://localhost:1337/admin/users)
adminRouter.get('/users', function(req, res) {
  res.send('I show all the users!');
});

// Posts Page (http://localhost:1337/admin/posts)
adminRouter.get('/posts', function(req,res) {
  res.send('I show all the posts!');
});

// Apply the routes to our application
app.use('/admin', adminRouter);

app.listen(1337);
console.log('You can find your web page at http://localhost:1337');
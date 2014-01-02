var path = require('path'),
    express = require('express'),
    http = require('http'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var app = express();

var errorHandler = require('express-error-handler'),
  handler = errorHandler({
    static: {
      '404': 'uploads/404.html',
	  '500': 'uploads/500.html'
    }
  });
// Configuration
app.configure(function(){
    app.set('views', __dirname + '/views');
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    app.use(express.cookieParser('dsadadsa'));
    app.use(express.session());

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/public', express.static(__dirname + '/public'));

});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// Configure passport

// Connect mongoose
mongoose.connect('mongodb://localhost/myapp');

// Setup routes

http.createServer(app).listen(3002, '127.0.0.1', function() {
    console.log("Express server listening on %s:%d in %s mode", '127.0.0.1', 3002, app.settings.env);
});

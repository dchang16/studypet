var Router = Backbone.Router.extend({
        routes: {
                '': 'home',
                'about': 'about',
                'home' : 'home',
                'pet1' : 'pet1',
                'pet2' : 'pet2',
                'pet3' : 'pet3'
        }
})

var app_router = new Router();

app_router.on('route:home', function() {
	console.log('Page is taking you to your home page');
	home.render();
});

app_router.on('route:about', function() {
	console.log('Page is taking you to your about page');
	about.render();
});


app_router.on('route:pet1', function() {
	console.log('Page is taking you to your first pet');
	pet1.render();
});

app_router.on('route:pet2', function() {
	console.log('Page is taking you to your second pet');
	pet2.render();
});

app_router.on('route:pet3', function() {
	console.log('Page is taking you to your third pet');
	pet3.render();
});
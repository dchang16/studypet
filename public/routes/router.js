var Router = Backbone.Router.extend({
        routes: {
                '/': 'home'
        }
})

var app_router = new Router();

app_router.on('route:home', function() {
	
});
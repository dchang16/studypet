var Router = Backbone.Router.extend({
        routes: {
                'mypets': 'mypets',
                'store' : 'store',
                'home' : 'home',
                'pet1' : 'pet1',
                'pet2' : 'pet2',
                'pet3' : 'pet3',
                'pet4' : 'pet4',
                'pet5' : 'pet5',
                'pet6' : 'pet6',
                'pet7' : 'pet7',
                'pet8' : 'pet8',
                'pet9' : 'pet9',
                'pet10' : 'pet10',
                'pet11' : 'pet11',
                'pet12' : 'pet12',
                'pet13' : 'pet13',
                'pet14' : 'pet14',
                'pet15' : 'pet15'
        }
})

var app_router = new Router();

app_router.on('route:home', function() {
	console.log('Page is taking you to your home page');
	home.render();
});

app_router.on('route:mypets', function() {
	console.log('Page is taking you to your pets page');
	mypets.render();
});

app_router.on('route:store', function() {
	console.log('Page is taking you to your store page');
	store.render();
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

app_router.on('route:pet4', function() {
	console.log('Page is taking you to your third pet');
	pet4.render();
});

app_router.on('route:pet5', function() {
	console.log('Page is taking you to your third pet');
	pet5.render();
});

app_router.on('route:pet6', function() {
	console.log('Page is taking you to your third pet');
	pet6.render();
});

app_router.on('route:pet7', function() {
	console.log('Page is taking you to your third pet');
	pet7.render();
});

app_router.on('route:pet8', function() {
	console.log('Page is taking you to your third pet');
	pet8.render();
});

app_router.on('route:pet9', function() {
	console.log('Page is taking you to your third pet');
	pet9.render();
});

app_router.on('route:pet10', function() {
	console.log('Page is taking you to your third pet');
	pet10.render();
});

app_router.on('route:pet11', function() {
	console.log('Page is taking you to your third pet');
	pet11.render();
});

app_router.on('route:pet12', function() {
	console.log('Page is taking you to your third pet');
	pet12.render();
});

app_router.on('route:pet13', function() {
	console.log('Page is taking you to your third pet');
	pet13.render();
});

app_router.on('route:pet14', function() {
	console.log('Page is taking you to your third pet');
	pet14.render();
});

app_router.on('route:pet15', function() {
	console.log('Page is taking you to your third pet');
	pet15.render();
});
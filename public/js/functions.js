var pet = null;
var networkState = null;

var app = {
	initialize: function() {
		this.bindEvents();
		this.menuNav();
		this.checkConnection();
		alert('This is your studypet. You can love and care for your studypet by not procasinating by turning off your wifi, data and study! Your pet will grow the more you love it.');
	},

	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
		// document.addEventListener('online', app.checkConnection(), false);
		// document.addEventListener('offline', app.checkConnection(), false);
	},

	onDeviceReady: function() {
		app.checkConnection()
	},

	menuNav: function() {
		$('#nav a').on('click', function(event){
			event.preventDefault();
			window.location = this.href;	
		})
	},

	checkConnection: function() {
		document.addEventListener('online', function() {
			console.log('online');
			networkState = 'online';
		}, false);
		document.addEventListener('offline', function() {
			console.log('offline');
			networkState = 'none';
		}, false);

	},

	grow: function() {
		app.checkConnection();
		console.log(networkState);
		if(networkState == 'none') {
			pet.style.width = parseInt(pet.style.width)+1+'px';
			setTimeout(app.grow, 100000);
			localStorage.setItem(pet.id + 'size', parseInt(pet.style.width));
		}
		else {
			console.log('You are connected to internet!');
		}
	}
	
}

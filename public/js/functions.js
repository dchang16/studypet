var pet = null;
var networkState = null;

var app = {
	initialize: function() {
		this.bindEvents();
		this.menuNav();
		this.checkConnection();
	},

	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
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
		if(networkState == 'none') {
			pet.style.width = parseInt(pet.style.width)+1+'px';
			setTimeout(app.grow, 200000);
			localStorage.setItem(pet.id + 'size', parseInt(pet.style.width));
		}
		else {
			console.log('You are connected to internet!');
		}
	}
	
}

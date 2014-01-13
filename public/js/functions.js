var pet = null;
var networkState = null;

var app = {
	initialize: function() {
		this.bindEvents();
		this.menuNav();
		this.checkConnection();
		this.money();
		this.petcollection();
	},

	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	onDeviceReady: function() {
		app.checkConnection()
	},

	menuNav: function() {
		$('a').on('click', function(event){
			event.preventDefault();
			window.location = this.href;	
		})
	},

	checkConnection: function() {
		document.addEventListener('online', function() {
			var status = document.getElementById('status');
			networkState = 'online';
			status.innerHTML = 'Status: Online!';
		}, false);
		document.addEventListener('offline', function() {
			var status = document.getElementById('status');
			networkState = 'none';
			status.innerHTML = 'Status: Offline!';
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
	},

	money: function() {
		app.checkConnection()
		if(localStorage.getItem('money') == null) {
			localStorage.setItem('money', 1000);
		}
		var money = localStorage.getItem('money');
		if(networkState == 'none') {
			money = money + 1;
			setTimeout(app.grow, 20000);
			localStorage.setItem(money, money);
		}
		else {
			console.log('You are online');
		}
	},

	petcollection: function() {
		if(localStorage['bought1'] == null) {
			localStorage['bought1'] = false;
		}
		if(localStorage['bought2'] == null) {
			localStorage['bought2'] = false;
		}
		if(localStorage['bought3'] == null) {
			localStorage['bought3'] = false;
		}
		if(localStorage['bought4'] == null) {
			localStorage['bought4'] = false;
		}
		if(localStorage['bought5'] == null) {
			localStorage['bought5'] = false;
		}
		if(localStorage['bought6'] == null) {
			localStorage['bought6'] = false;
		}
		if(localStorage['bought7'] == null) {
			localStorage['bought7'] = false;
		}
		if(localStorage['bought8'] == null) {
			localStorage['bought8'] = false;
		}
		if(localStorage['bought9'] == null) {
			localStorage['bought9'] = false;
		}
		if(localStorage['bought10'] == null) {
			localStorage['bought10'] = false;
		}
		if(localStorage['bought11'] == null) {
			localStorage['bought11'] = false;
		}
		if(localStorage['bought12'] == null) {
			localStorage['bought12'] = false;
		}
		if(localStorage['bought13'] == null) {
			localStorage['bought13'] = false;
		}
		if(localStorage['bought14'] == null) {
			localStorage['bought14'] = false;
		}
		if(localStorage['bought15'] == null) {
			localStorage['bought15'] = false;
		}
		if(localStorage.getItem('petcollection') == null) {
			var petcollection = [];
			localStorage['petcollection'] = JSON.stringify(petcollection);
		}

	}
	
}

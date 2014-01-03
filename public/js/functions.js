var pet = null;

var app = {
	initialize: function() {
		this.bindEvents();
		this.menuNav();
		alert('This is your studypet. You can love and care for your studypet by not procasinating by turning off your wifi, data and study! Your pet will grow the more you love it.');
	},

	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},

	menuNav: function() {
		$('#nav a').on('click', function(event){
			event.preventDefault();
			window.location = this.href;	
		})
	},

	grow: function() {
		pet.style.width = parseInt(pet.style.width)+1+'px';
		setTimeout(app.grow, 100000);
		localStorage.setItem(pet.id + 'size', parseInt(pet.style.width));
	}
	
}

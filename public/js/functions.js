var app = {
	initialize: function() {
		this.bindEvents();
		this.menuNav();
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
	}
	
}


	// var pet = null;

	// 	function grow() {
	// 		pet.style.width = parseInt(pet.style.width)+1+'px';
	// 		setTimeout(grow, 1000);
	// 		localStorage.setItem('size', parseInt(pet.style.width));
	// 	}

	// 	function init() {
	// 		alert('This is your studypet. You can love and care for your studypet by not procasinating by turning off your wifi, data and study! Your pet will grow the more you love it.');
	// 		pet = document.getElementById('studypet');
	// 		if(localStorage.getItem('size') == null || !(localStorage.getItem('size') > 0)) {
	// 			pet.style.width='50px';
	// 		}
	// 		else {
	// 			console.log(localStorage.getItem('size'))
	// 			pet.style.width = localStorage.getItem('size')+'px';
	// 		}
	// 		grow();
	// 	}

	// 	window.onload = init;

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

var HomeView = Backbone.View.extend({
    render: function() {
        $.get('templates/home.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            $('a').on('click', function(event){
                event.preventDefault();
                window.location = this.href;    
            })
        })
        return this;
    }
});

var MyPetsView = Backbone.View.extend({
    render: function() {
        $.get('templates/mypets.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            var petcollection = JSON.parse(localStorage['petcollection']);
            var html = '';
            $('#page_container').html(template).trigger('create');
            for (var i = petcollection.length - 1; i >= 0; i--) {
                html += petcollection[i];
            };
            $('#petcollection').html(html);
            $('a').on('click', function(event){
                event.preventDefault();
                window.location = this.href;    
            })
        })
        return this;
    }
});

var StoreView = Backbone.View.extend({
    el: 'body',
    events:{
        'click #buypet1' : 'buypet1',
        'click #buypet2' : 'buypet2',
        'click #buypet3' : 'buypet3',
        'click #buypet4' : 'buypet4',
        'click #buypet5' : 'buypet5',
        'click #buypet6' : 'buypet6',
        'click #buypet7' : 'buypet7',
        'click #buypet8' : 'buypet8',
        'click #buypet9' : 'buypet9',
        'click #buypet10' : 'buypet10',
        'click #buypet11' : 'buypet11',
        'click #buypet12' : 'buypet12',
        'click #buypet13' : 'buypet13',
        'click #buypet14' : 'buypet14',
        'click #buypet15' : 'buypet15'
    },
    render: function() {
        $.get('templates/store.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            if(localStorage['bought1'] == 'true') {
                document.getElementById('buypet1').setAttribute('disabled', 'disabled');
            }
            if(localStorage['bought2'] == 'true') {
                document.getElementById('buypet2').setAttribute('disabled', 'disabled');
            }
            if(localStorage['bought3'] == 'true') {
                document.getElementById('buypet3').setAttribute('disabled', 'disabled');
            }
            if(localStorage['bought4'] == 'true') {
                document.getElementById('buypet4').setAttribute('disabled', 'disabled');
            }
            if(localStorage['bought5'] == 'true') {
                document.getElementById('buypet5').setAttribute('disabled', 'disabled');
            }
            if(localStorage['bought6'] == 'true') {
                document.getElementById('buypet6').setAttribute('disabled', 'disabled');
            }
            if(localStorage['bought7'] == 'true') {
                document.getElementById('buypet7').setAttribute('disabled', 'disabled');
            }
            if(localStorage['bought8'] == 'true') {
                document.getElementById('buypet8').setAttribute('disabled', 'disabled');
            }
            if(localStorage['bought9'] == 'true') {
                document.getElementById('buypet9').setAttribute('disabled', 'disabled');
            }
            if(localStorage['bought10'] == 'true') {
                document.getElementById('buypet10').setAttribute('disabled', 'disabled');
            }
            if(localStorage['bought11'] == 'true') {
                document.getElementById('buypet11').setAttribute('disabled', 'disabled');
            }
            if(localStorage['bought12'] == 'true') {
                document.getElementById('buypet12').setAttribute('disabled', 'disabled');
            }
            if(localStorage['bought13'] == 'true') {
                document.getElementById('buypet13').setAttribute('disabled', 'disabled');
            }
            if(localStorage['bought14'] == 'true') {
                document.getElementById('buypet14').setAttribute('disabled', 'disabled');
            }
            if(localStorage['bought15'] == 'true') {
                document.getElementById('buypet15').setAttribute('disabled', 'disabled');
            }
        })
        return this;
    },
    buypet1: function() {
        var petcollection = JSON.parse(localStorage['petcollection']);
        var money = localStorage.getItem('money');
        var purchase = confirm('Are you sure you want to buy this pet? Your current balance is '+ money);
        if(purchase) {
            if (money >= 1000) {
                money = money - 1000;
                localStorage.setItem('money', money);
                petcollection.push("<a href='#pet1'><img src='img/pet1.gif' style='width:75px;'></a>");
                localStorage['petcollection'] = JSON.stringify(petcollection);
                localStorage['bought1'] = 'true';
                alert('Successfully Purchased! Your balance is now: ' + money);
                location.reload();
            }
            else {
                alert('Insufficient Study Points!');
            }
        }
        else {
        }
    },
    buypet2: function() {
        var petcollection = JSON.parse(localStorage['petcollection']);
        var money = localStorage.getItem('money');
        var purchase = confirm('Are you sure you want to buy this pet? Your current balance is '+ money);
        if(purchase) {
            if (money >= 1000) {
                money = money - 1000;
                localStorage.setItem('money', money);
                petcollection.push("<a href='#pet2'><img src='img/pet2.gif' style='width:75px;'></a>");
                localStorage['petcollection'] = JSON.stringify(petcollection);
                localStorage['bought2'] = 'true';
                alert('Successfully Purchased! Your balance is now: ' + money);
                location.reload();
            }
            else {
                alert('Insufficient Study Points!');
            }
        }
        else {
        }
    },
    buypet3: function() {
        var petcollection = JSON.parse(localStorage['petcollection']);
        var money = localStorage.getItem('money');
        var purchase = confirm('Are you sure you want to buy this pet? Your current balance is '+ money);
        if(purchase) {
            if (money >= 1000) {
                money = money - 1000;
                localStorage.setItem('money', money);
                petcollection.push("<a href='#pet3'><img src='img/pet3.gif' style='width:75px;'></a>");
                localStorage['petcollection'] = JSON.stringify(petcollection);
                localStorage['bought3'] = 'true';
                alert('Successfully Purchased! Your balance is now: ' + money);
                location.reload();
            }
            else {
                alert('Insufficient Study Points!');
            }
        }
        else {
        }
    },
    buypet4: function() {
        var petcollection = JSON.parse(localStorage['petcollection']);
        var money = localStorage.getItem('money');
        var purchase = confirm('Are you sure you want to buy this pet? Your current balance is '+ money);
        if(purchase) {
            if (money >= 1000) {
                money = money - 1000;
                localStorage.setItem('money', money);
                petcollection.push("<a href='#pet4'><img src='img/pet4.gif' style='width:75px;'></a>");
                localStorage['petcollection'] = JSON.stringify(petcollection);
                localStorage['bought4'] = 'true';
                alert('Successfully Purchased! Your balance is now: ' + money);
                location.reload();
            }
            else {
                alert('Insufficient Study Points!');
            }
        }
        else {
        }
    },
    buypet5: function() {
        var petcollection = JSON.parse(localStorage['petcollection']);
        var money = localStorage.getItem('money');
        var purchase = confirm('Are you sure you want to buy this pet? Your current balance is '+ money);
        if(purchase) {
            if (money >= 1000) {
                money = money - 1000;
                localStorage.setItem('money', money);
                petcollection.push("<a href='#pet5'><img src='img/pet5.gif' style='width:75px;'></a>");
                localStorage['petcollection'] = JSON.stringify(petcollection);
                localStorage['bought5'] = 'true';
                alert('Successfully Purchased! Your balance is now: ' + money);
                location.reload();
            }
            else {
                alert('Insufficient Study Points!');
            }
        }
        else {
        }
    },
    buypet6: function() {
        var petcollection = JSON.parse(localStorage['petcollection']);
        var money = localStorage.getItem('money');
        var purchase = confirm('Are you sure you want to buy this pet? Your current balance is '+ money);
        if(purchase) {
            if (money >= 1000) {
                money = money - 1000;
                localStorage.setItem('money', money);
                petcollection.push("<a href='#pet6'><img src='img/pet6.gif' style='width:75px;'></a>");
                localStorage['petcollection'] = JSON.stringify(petcollection);
                localStorage['bought6'] = 'true';
                alert('Successfully Purchased! Your balance is now: ' + money);
                location.reload();
            }
            else {
                alert('Insufficient Study Points!');
            }
        }
        else {
        }
    },
    buypet7: function() {
        var petcollection = JSON.parse(localStorage['petcollection']);
        var money = localStorage.getItem('money');
        var purchase = confirm('Are you sure you want to buy this pet? Your current balance is '+ money);
        if(purchase) {
            if (money >= 1000) {
                money = money - 1000;
                localStorage.setItem('money', money);
                petcollection.push("<a href='#pet7'><img src='img/pet7.gif' style='width:75px;'></a>");
                localStorage['petcollection'] = JSON.stringify(petcollection);
                localStorage['bought7'] = 'true';
                alert('Successfully Purchased! Your balance is now: ' + money);
                location.reload();
            }
            else {
                alert('Insufficient Study Points!');
            }
        }
        else {
        }
    },
    buypet8: function() {
        var petcollection = JSON.parse(localStorage['petcollection']);
        var money = localStorage.getItem('money');
        var purchase = confirm('Are you sure you want to buy this pet? Your current balance is '+ money);
        if(purchase) {
            if (money >= 1000) {
                money = money - 1000;
                localStorage.setItem('money', money);
                petcollection.push("<a href='#pet8'><img src='img/pet8.gif' style='width:75px;'></a>");
                localStorage['petcollection'] = JSON.stringify(petcollection);
                localStorage['bought8'] = 'true';
                alert('Successfully Purchased! Your balance is now: ' + money);
                location.reload();
            }
            else {
                alert('Insufficient Study Points!');
            }
        }
        else {
        }
    },
    buypet9: function() {
        var petcollection = JSON.parse(localStorage['petcollection']);
        var money = localStorage.getItem('money');
        var purchase = confirm('Are you sure you want to buy this pet? Your current balance is '+ money);
        if(purchase) {
            if (money >= 1000) {
                money = money - 1000;
                localStorage.setItem('money', money);
                petcollection.push("<a href='#pet9'><img src='img/pet9.gif' style='width:75px;'></a>");
                localStorage['petcollection'] = JSON.stringify(petcollection);
                localStorage['bought9'] = 'true';
                alert('Successfully Purchased! Your balance is now: ' + money);
                location.reload();
            }
            else {
                alert('Insufficient Study Points!');
            }
        }
        else {
        }
    },
    buypet10: function() {
        var petcollection = JSON.parse(localStorage['petcollection']);
        var money = localStorage.getItem('money');
        var purchase = confirm('Are you sure you want to buy this pet? Your current balance is '+ money);
        if(purchase) {
            if (money >= 1000) {
                money = money - 1000;
                localStorage.setItem('money', money);
                petcollection.push("<a href='#pet10'><img src='img/pet10.gif' style='width:75px;'></a>");
                localStorage['petcollection'] = JSON.stringify(petcollection);
                localStorage['bought10'] = 'true';
                alert('Successfully Purchased! Your balance is now: ' + money);
                location.reload();
            }
            else {
                alert('Insufficient Study Points!');
            }
        }
        else {
        }
    },
    buypet11: function() {
        var petcollection = JSON.parse(localStorage['petcollection']);
        var money = localStorage.getItem('money');
        var purchase = confirm('Are you sure you want to buy this pet? Your current balance is '+ money);
        if(purchase) {
            if (money >= 1000) {
                money = money - 1000;
                localStorage.setItem('money', money);
                petcollection.push("<a href='#pet11'><img src='img/pet11.gif' style='width:75px;'></a>");
                localStorage['petcollection'] = JSON.stringify(petcollection);
                localStorage['bought11'] = 'true';
                alert('Successfully Purchased! Your balance is now: ' + money);
                location.reload();
            }
            else {
                alert('Insufficient Study Points!');
            }
        }
        else {
        }
    },
    buypet12: function() {
        var petcollection = JSON.parse(localStorage['petcollection']);
        var money = localStorage.getItem('money');
        var purchase = confirm('Are you sure you want to buy this pet? Your current balance is '+ money);
        if(purchase) {
            if (money >= 1000) {
                money = money - 1000;
                localStorage.setItem('money', money);
                petcollection.push("<a href='#pet12'><img src='img/pet12.gif' style='width:75px;'></a>");
                localStorage['petcollection'] = JSON.stringify(petcollection);
                localStorage['bought12'] = 'true';
                alert('Successfully Purchased! Your balance is now: ' + money);
                location.reload();
            }
            else {
                alert('Insufficient Study Points!');
            }
        }
        else {
        }
    },
    buypet13: function() {
        var petcollection = JSON.parse(localStorage['petcollection']);
        var money = localStorage.getItem('money');
        var purchase = confirm('Are you sure you want to buy this pet? Your current balance is '+ money);
        if(purchase) {
            if (money >= 1000) {
                money = money - 1000;
                localStorage.setItem('money', money);
                petcollection.push("<a href='#pet13'><img src='img/pet13.gif' style='width:75px;'></a>");
                localStorage['petcollection'] = JSON.stringify(petcollection);
                localStorage['bought13'] = 'true';
                alert('Successfully Purchased! Your balance is now: ' + money);
                location.reload();
            }
            else {
                alert('Insufficient Study Points!');
            }
        }
        else {
        }
    },
    buypet14: function() {
        var petcollection = JSON.parse(localStorage['petcollection']);
        var money = localStorage.getItem('money');
        var purchase = confirm('Are you sure you want to buy this pet? Your current balance is '+ money);
        if(purchase) {
            if (money >= 1000) {
                money = money - 1000;
                localStorage.setItem('money', money);
                petcollection.push("<a href='#pet14'><img src='img/pet14.gif' style='width:75px;'></a>");
                localStorage['petcollection'] = JSON.stringify(petcollection);
                localStorage['bought14'] = 'true';
                alert('Successfully Purchased! Your balance is now: ' + money);
                location.reload();
            }
            else {
                alert('Insufficient Study Points!');
            }
        }
        else {
        }
    },
    buypet15: function() {
        var petcollection = JSON.parse(localStorage['petcollection']);
        var money = localStorage.getItem('money');
        var purchase = confirm('Are you sure you want to buy this pet? Your current balance is '+ money);
        if(purchase) {
            if (money >= 1000) {
                money = money - 1000;
                localStorage.setItem('money', money);
                petcollection.push("<a href='#pet15'><img src='img/pet15.gif' style='width:75px;'></a>");
                localStorage['petcollection'] = JSON.stringify(petcollection);
                localStorage['bought15'] = 'true';
                alert('Successfully Purchased! Your balance is now: ' + money);
                location.reload();
            }
            else {
                alert('Insufficient Study Points!');
            }
        }
        else {
        }
    },

});

var Pet1View = Backbone.View.extend({
    render: function() {
        $.get('templates/pet1.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            pet = document.getElementById('pet1');
            if(localStorage.getItem('pet1size') == null || !(localStorage.getItem('pet1size') > 0)) {
                pet.style.width='50px';
            }
            else {
                if(localStorage.getItem('pet1size') > 100) {
                    pet.src = 'img/pet1.gif';
                }
                if(localStorage.getItem('pet1size') > 300) {
                    pet.style.width = '300px';
                }
                else {
                    pet.style.width = localStorage.getItem('pet1size')+'px';
                }
            }
            app.grow();
        })
        return this;
    },
});

var Pet2View = Backbone.View.extend({
    render: function() {
        $.get('templates/pet2.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            pet = document.getElementById('pet2');
            if(localStorage.getItem('pet2size') == null || !(localStorage.getItem('pet2size') > 0)) {
                pet.style.width='50px';
            }
            else {
                if(localStorage.getItem('pet2size') > 100) {
                    pet.src = 'img/pet2.gif'
                }
                if(localStorage.getItem('pet2size') > 300) {
                    pet.style.width = '300px'
                }
                else {
                    pet.style.width = localStorage.getItem('pet2size')+'px';
                }
            }
            app.grow();
        })
        return this;
    }
});

var Pet3View = Backbone.View.extend({
    render: function() {
        $.get('templates/pet3.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            pet = document.getElementById('pet3');
            if(localStorage.getItem('pet3size') == null || !(localStorage.getItem('pet3size') > 0)) {
                pet.style.width='50px';
            }
            else {
                if(localStorage.getItem('pet3size') > 100) {
                    pet.src = 'img/pet3.gif'
                }
                if(localStorage.getItem('pet3size') > 300) {
                    pet.style.width = '300px'
                }
                else {
                    pet.style.width = localStorage.getItem('pet3size')+'px';
                }
            }
            app.grow();
        })
        return this;
    }
});

var Pet4View = Backbone.View.extend({
    render: function() {
        $.get('templates/pet4.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            pet = document.getElementById('pet4');
            if(localStorage.getItem('pet4size') == null || !(localStorage.getItem('pet4size') > 0)) {
                pet.style.width='50px';
            }
            else {
                if(localStorage.getItem('pet4size') > 100) {
                    pet.src = 'img/pet4.gif'
                }
                if(localStorage.getItem('pet4size') > 300) {
                    pet.style.width = '300px'
                }
                else {
                    pet.style.width = localStorage.getItem('pet4size')+'px';
                }
            }
            app.grow();
        })
        return this;
    }
});

var Pet5View = Backbone.View.extend({
    render: function() {
        $.get('templates/pet5.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            pet = document.getElementById('pet5');
            if(localStorage.getItem('pet5size') == null || !(localStorage.getItem('pet5size') > 0)) {
                pet.style.width='50px';
            }
            else {
                if(localStorage.getItem('pet5size') > 100) {
                    pet.src = 'img/pet5.gif'
                }
                if(localStorage.getItem('pet5size') > 300) {
                    pet.style.width = '300px'
                }
                else {
                    pet.style.width = localStorage.getItem('pet5size')+'px';
                }
            }
            app.grow();
        })
        return this;
    }
});

var Pet6View = Backbone.View.extend({
    render: function() {
        $.get('templates/pet6.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            pet = document.getElementById('pet6');
            if(localStorage.getItem('pet6size') == null || !(localStorage.getItem('pet6size') > 0)) {
                pet.style.width='50px';
            }
            else {
                if(localStorage.getItem('pet6size') > 100) {
                    pet.src = 'img/pet6.gif'
                }
                if(localStorage.getItem('pet6size') > 300) {
                    pet.style.width = '300px'
                }
                else {
                    pet.style.width = localStorage.getItem('pet6size')+'px';
                }
            }
            app.grow();
        })
        return this;
    }
});

var Pet7View = Backbone.View.extend({
    render: function() {
        $.get('templates/pet7.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            pet = document.getElementById('pet7');
            if(localStorage.getItem('pet7size') == null || !(localStorage.getItem('pet7size') > 0)) {
                pet.style.width='50px';
            }
            else {
                if(localStorage.getItem('pet7size') > 100) {
                    pet.src = 'img/pet7.gif'
                }
                if(localStorage.getItem('pet7size') > 300) {
                    pet.style.width = '300px'
                }
                else {
                    pet.style.width = localStorage.getItem('pet7size')+'px';
                }
            }
            app.grow();
        })
        return this;
    }
});

var Pet8View = Backbone.View.extend({
    render: function() {
        $.get('templates/pet8.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            pet = document.getElementById('pet8');
            if(localStorage.getItem('pet8size') == null || !(localStorage.getItem('pet8size') > 0)) {
                pet.style.width='50px';
            }
            else {
                if(localStorage.getItem('pet8size') > 100) {
                    pet.src = 'img/pet8.gif'
                }
                if(localStorage.getItem('pet8size') > 300) {
                    pet.style.width = '300px'
                }
                else {
                    pet.style.width = localStorage.getItem('pet8size')+'px';
                }
            }
            app.grow();
        })
        return this;
    }
});

var Pet9View = Backbone.View.extend({
    render: function() {
        $.get('templates/pet9.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            pet = document.getElementById('pet9');
            if(localStorage.getItem('pet9size') == null || !(localStorage.getItem('pet9size') > 0)) {
                pet.style.width='50px';
            }
            else {
                if(localStorage.getItem('pet9size') > 100) {
                    pet.src = 'img/pet9.gif'
                }
                if(localStorage.getItem('pet9size') > 300) {
                    pet.style.width = '300px'
                }
                else {
                    pet.style.width = localStorage.getItem('pet9size')+'px';
                }
            }
            app.grow();
        })
        return this;
    }
});

var Pet10View = Backbone.View.extend({
    render: function() {
        $.get('templates/pet10.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            pet = document.getElementById('pet10');
            if(localStorage.getItem('pet10size') == null || !(localStorage.getItem('pet10size') > 0)) {
                pet.style.width='50px';
            }
            else {
                if(localStorage.getItem('pet10size') > 100) {
                    pet.src = 'img/pet10.gif'
                }
                if(localStorage.getItem('pet10size') > 300) {
                    pet.style.width = '300px'
                }
                else {
                    pet.style.width = localStorage.getItem('pet10size')+'px';
                }
            }
            app.grow();
        })
        return this;
    }
});

var Pet11View = Backbone.View.extend({
    render: function() {
        $.get('templates/pet11.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            pet = document.getElementById('pet11');
            if(localStorage.getItem('pet11size') == null || !(localStorage.getItem('pet11size') > 0)) {
                pet.style.width='50px';
            }
            else {
                if(localStorage.getItem('pet11size') > 100) {
                    pet.src = 'img/pet11.gif'
                }
                if(localStorage.getItem('pet11size') > 300) {
                    pet.style.width = '300px'
                }
                else {
                    pet.style.width = localStorage.getItem('pet11size')+'px';
                }
            }
            app.grow();
        })
        return this;
    }
});

var Pet12View = Backbone.View.extend({
    render: function() {
        $.get('templates/pet12.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            pet = document.getElementById('pet12');
            if(localStorage.getItem('pet12size') == null || !(localStorage.getItem('pet12size') > 0)) {
                pet.style.width='50px';
            }
            else {
                if(localStorage.getItem('pet12size') > 100) {
                    pet.src = 'img/pet12.gif'
                }
                if(localStorage.getItem('pet12size') > 300) {
                    pet.style.width = '300px'
                }
                else {
                    pet.style.width = localStorage.getItem('pet12size')+'px';
                }
            }
            app.grow();
        })
        return this;
    }
});

var Pet13View = Backbone.View.extend({
    render: function() {
        $.get('templates/pet13.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            pet = document.getElementById('pet13');
            if(localStorage.getItem('pet13size') == null || !(localStorage.getItem('pet13size') > 0)) {
                pet.style.width='50px';
            }
            else {
                if(localStorage.getItem('pet13size') > 100) {
                    pet.src = 'img/pet13.gif'
                }
                if(localStorage.getItem('pet13size') > 300) {
                    pet.style.width = '300px'
                }
                else {
                    pet.style.width = localStorage.getItem('pet13size')+'px';
                }
            }
            app.grow();
        })
        return this;
    }
});

var Pet14View = Backbone.View.extend({
    render: function() {
        $.get('templates/pet14.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            pet = document.getElementById('pet14');
            if(localStorage.getItem('pet14size') == null || !(localStorage.getItem('pet14size') > 0)) {
                pet.style.width='50px';
            }
            else {
                if(localStorage.getItem('pet14size') > 100) {
                    pet.src = 'img/pet14.gif'
                }
                if(localStorage.getItem('pet14size') > 300) {
                    pet.style.width = '300px'
                }
                else {
                    pet.style.width = localStorage.getItem('pet14size')+'px';
                }
            }
            app.grow();
        })
        return this;
    }
});

var Pet15View = Backbone.View.extend({
    render: function() {
        $.get('templates/pet15.html', function(incomingTemplate){
            var template = Handlebars.compile(incomingTemplate);
            $('#page_container').html(template).trigger('create');
            pet = document.getElementById('pet15');
            if(localStorage.getItem('pet15size') == null || !(localStorage.getItem('pet15size') > 0)) {
                pet.style.width='50px';
            }
            else {
                if(localStorage.getItem('pet15size') > 100) {
                    pet.src = 'img/pet15.gif'
                }
                if(localStorage.getItem('pet15size') > 300) {
                    pet.style.width = '300px'
                }
                else {
                    pet.style.width = localStorage.getItem('pet15size')+'px';
                }
            }
            app.grow();
        })
        return this;
    }
});
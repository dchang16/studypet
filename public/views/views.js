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
                })
                return this;
        }
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
                                        pet.src = 'img/pet1.gif'
                                }
                                pet.style.width = localStorage.getItem('pet1size')+'px';
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
                                pet.style.width = localStorage.getItem('pet2size')+'px';
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
                                pet.style.width = localStorage.getItem('pet3size')+'px';
                        }
                        app.grow();
                })
                return this;
        }
});
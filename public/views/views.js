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
                        $('#pets a').on('click', function(event){
                                event.preventDefault();
                                window.location = this.href;    
                        })
                })
                return this;
        }
});

var AboutView = Backbone.View.extend({
        render: function() {
                $.get('templates/about.html', function(incomingTemplate){
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
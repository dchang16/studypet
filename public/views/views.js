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
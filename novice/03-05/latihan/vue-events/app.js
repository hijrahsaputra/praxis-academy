new Vue({
    el: '#vue-app',
    data: {
        name: 'HJ',
        age: 37,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc) {
            this.age += inc;
        },
        subtract: function(dec) {
            this.age -= dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('You click me!!!');
        },
        greet: function() {
            alert('Hello ' + this.name + '!');
            if (alert) {
                alert(event.target.tagName);
            }
        }
    }
});
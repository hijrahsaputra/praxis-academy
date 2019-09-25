new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        a: 0,
        b: 0
    },
    methods: {
        // addToA: function() {
        //     return this.a + this.age;
        // },
        // addToB: function() {
        //     return this.b + this.age;
        // }
    },
    computed: {
        addToA: function() {
            console.log('AddToA');
            return this.a + this.age;
        },
        addToB: function() {
            console.log('AddToB');
            return this.b + this.age;
        }
    }
});
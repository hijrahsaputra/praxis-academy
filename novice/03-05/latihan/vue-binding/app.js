new Vue({
    el: '#vue-app',
    data: {
        name: 'HJ',
        job: 'Front End Developer',
        website: 'https://hj.bengkuluprov.go.id',
        websiteTag: '<a href="https://hj.bengkuluprov.go.id">Website Link</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name
        }
    }
});
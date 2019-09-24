new Vue({
    el: '#vue-app',
    data: {
        name: '',
        age: '',
        message: '',
        checked: '',
        checkedNames: [],
        selected: '',
        multiple: [],
        vfor: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ],
        toggle = 'yes',
        pick = ''
    },
    methods: {
        logName: function() {
            console.log('You entered your name');
        },
        logAge: function() {
            console.log('You entered your age');
        }
    }
});
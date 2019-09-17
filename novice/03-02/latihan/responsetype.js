const fetch = require('node-fetch');
fetch('https://facebook.com/cors-enabled/some.json', { mode: 'cors' })
    .then(function(response) {
        return response.text();
    })
    .then(function(text) {
        console.log('Request successful', text);
    })
    .catch(function(error) {
        log('Request failed', error)
    });
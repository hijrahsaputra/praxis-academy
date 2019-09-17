const fetch = require('node-fetch');
fetch('https://api.github.com/users/KrunalLathiya')
    .then(res => res.json())
    .then(json => console.log(json));
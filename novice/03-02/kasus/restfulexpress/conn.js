let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@Janti24th#",
    database: "testRESTFUL"
});

con.connect(function(err) {
    if (err) throw err;
});

module.exports = con;
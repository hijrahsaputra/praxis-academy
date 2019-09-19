let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "@Janti24th#",
    database: "testRESTFUL",
    socketPath: "/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock"
});

con.connect(function(err) {
    if (err) throw err;
});
module.exports = con;
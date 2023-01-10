const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "clinicdb"
});

con.connect(function(err) {
    if (err) throw error;
    console.log("success!");
});

module.exports = con;
const mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    database: "app_react",
    user: "root",
    password: "1234"
});

con.connect((err) =>{
    if (err) throw err;
    console.log("DB connected!");
});

module.exports = con
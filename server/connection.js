const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "",
    database: "hari_collection_bills",
    multipleStatements: true
})

mysqlConnection.connect(function(err){
    if(err){
        console.log("Error while establishing connection to the database", err)
    }
    else{
        console.log("Database connected successfully!!!");
    }
})
module.exports = mysqlConnection;
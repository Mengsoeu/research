var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'info_db'
});

con.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log('Database connected!!');
    }
})

module.exports = con;
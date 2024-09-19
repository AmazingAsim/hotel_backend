let mysql = require('mysql2')

let connection = mysql.createConnection({
    host:'mysql-da5fef-asmsheikh123-e6a3.a.aivencloud.com',
    user:'avnadmin',
    password:'AVNS_X427sdqUhMP-_uqQhz-',
    database: 'hotel',
    port:'14165'
});

connection.connect(
    function(err){
        if(err) throw err;
        connection.query('select * from rooms',function(err,result){
                console.log(result)
        })
    }
);
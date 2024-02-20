let mysql = require('mysql2')

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'Asim@123',
    database:"school"
});

connection.connect(
    function(err){
        if(err) throw err;
        connection.query('select * from teachers',function(err,result){
                console.log(result)
        })
    }
);
const mysql = require('mysql2');
require('dotenv').config();
// Create a connection pool
const pool = mysql.createPool({
  host:'mysql-da5fef-asmsheikh123-e6a3.a.aivencloud.com',
  user:'avnadmin',
  password:'AVNS_X427sdqUhMP-_uqQhz-',
  database: 'hotel',
  port:'14165'
});

console.log(process.env.DB_HOST);

// Export a function to query the database
module.exports.query = function (sql, values) {
  
  return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err);
          return;
        }
        // Execute the query
        connection.query(sql, values, function (error, results) {
          // Release the connection
          connection.release();
          if (error) {
            reject(error);
            return;
          }
          // Resolve with the results
          resolve(results);
        });

      });
  });
};

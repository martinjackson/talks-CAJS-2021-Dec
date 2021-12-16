// convert-mysql-to-mongo.js

// https://stackoverflow.com/questions/6251548/converting-database-from-mysql-to-mongodb/6267534
const path = require('path')

const mysql = require('mysql');
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv')


const dotEnvPath = path.resolve(__dirname, '.env')
const result = dotenv.config({ path: dotEnvPath })
if (result.error) {
      console.log('dotenv error:', result.error);
      throw result.error
}


function getMysqlTables(mysqlConnection, callback) {
    var tables = [];

    /*
    mysqlConnection.changeUser({database : 'movies'}, function(err) {
        if (err) {
            console.log("MySQL Error switching to 'movies' database");
            throw err
        } else {
            console.log('now using movies DB');
        }
    });
    */

    mysqlConnection.query("show full tables where Table_Type = 'BASE TABLE';", function(error, results, fields) {

        if (error) {
            console.log('MySQL Error getting list of tables:', error);
            console.log(error.stack)
            console.log('-----------------------------------------------');
            callback(error, tables);
        } else {
            results.forEach(function (row) {                
                for (var key in row) {
                    if (row.hasOwnProperty(key)) {
                        if(key.startsWith('Tables_in')) {
                            tables.push(row[key]);
                        }
                    }
                }
            });
            callback(null, tables);
        }
    });

}

// ---------------------------------------------------------------------------------------------------
function tableToCollection(mysqlConnection, tableName, mongoCollection, callback) {
    var sql = 'SELECT * FROM ' + tableName + ';';
    mysqlConnection.query(sql, function (error, results, fields) {
        if (error) {
            callback(error);
        } else {
            if (results.length > 0) {
                mongoCollection.insertMany(results, {}, function (error) {
                    if (error) {
                        callback(error);
                    } else {
                        callback(null);
                    }
                });
            } else {
                callback(null);
            }
        }
    });
}

// CURRENTLY no username/pass needed for MongoDB
//    2021-12-10T21:18:42.052-06:00: 
//         Access control is not enabled for the database. 
//         Read and write access to data and configuration is unrestricted

MongoClient.connect("mongodb://localhost:27017", function (error, client) {      // Mongo 3.0 change, now client not db
    if (error) {
        console.log('MongoDB connect err:', error);
        throw error;
    }

    var db = client.db('movies');         

    // ER_NOT_SUPPORTED_AUTH_MODE means the user was created with
    //    CREATE USER 'mjackson'@'localhost' IDENTIFIED BY '******';
    //    the npm mysql package does the old encryption method of password authenticating,
    //    mySQL 8.0 and later defaults to the newer one.
    // Solution:
    //    DROP USER 'mjackson'@'localhost'
    //    CREATE USER 'mjackson'@'localhost' IDENTIFIED WITH mysql_native_password BY '*****';
    //    GRANT ALL PRIVILEGES ON *.* TO 'mjackson'@'localhost' WITH GRANT OPTION;
 
    var MysqlCon = mysql.createConnection({
        host: 'localhost',
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        port: process.env.MYSQL_PORT,
        database: 'movies'
    });

    try {
        MysqlCon.connect();
    } catch (err) {
        console.log('MySQL connect err:', err);
        process.exit(-1)
    }

    var jobs = 0;

    getMysqlTables(MysqlCon, function(error, tables) {
        console.log('tables:', tables);

        tables.forEach(function(table) {
            var collection = db.collection(table);
            ++jobs;
            tableToCollection(MysqlCon, table, collection, function(error) {
                if (error) throw error;
                --jobs;
            });
        })
    });

    // Waiting for all jobs to complete before closing databases connections.
    var interval = setInterval(function() {
        if(jobs<=0) {
            clearInterval(interval);
            console.log('done!');
            client.close();
            MysqlCon.end();
        }
    }, 300);
});

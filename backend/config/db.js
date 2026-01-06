
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Create a compatibility wrapper for callback-style queries
const db = {
    query: (sql, params, callback) => {
        if (typeof params === 'function') {
            callback = params;
            params = [];
        }
        
        pool.query(sql, params)
            .then(([results]) => {
                if (callback) callback(null, results);
            })
            .catch((err) => {
                if (callback) callback(err, null);
            });
    },
    // Promise-style execute used throughout controllers
    execute: (sql, params = []) => pool.execute(sql, params)
};

module.exports = db;
module.exports.pool = pool;
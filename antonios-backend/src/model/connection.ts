import mysql from "mysql2/promise";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'antonios',
    database: 'antonios'
})

export default connection;

import {Order} from "../types/Order";
const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'antonios',
    database: 'antonios'
})

export const saveOrder = async (order: Order) => {
    return new Promise<number>(async (resolve, reject) => {
        connection.then(async (conn: any) => {
            const query = 'INSERT INTO orders (firstname, lastname, streetNumber, city, zip, phone) VALUES (?, ?, ?, ?, ?, ?)';
            const [data] = await conn.query(query, [order.orderInfos.firstname, order.orderInfos.lastname, order.orderInfos.streetNumber, order.orderInfos.city, order.orderInfos.zip, order.orderInfos.phone]);
            console.log(data.insertId);
            resolve(data.insertId);
        });
    });
}

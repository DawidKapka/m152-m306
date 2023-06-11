import {Order, OrderInfos, OrderItem} from "../types/Order";
import connection from "./connection";
import {getAllItems} from "./menuModel";
import {MenuItem} from "../types/Menu";


export const saveOrder = async (order: Order) => {
    return new Promise<number>(async (resolve, reject) => {
        connection.then(async (conn: any) => {
            const query = 'INSERT INTO orders (firstname, lastname, streetNumber, city, zip, phone) VALUES (?, ?, ?, ?, ?, ?)';
            const [data] = await conn.query(query, [order.orderInfos.firstname, order.orderInfos.lastname, order.orderInfos.streetNumber, order.orderInfos.city, order.orderInfos.zip, order.orderInfos.phone]);
            resolve(data.insertId);
        }).catch((err: any) => reject(err));
    });
}

export const saveOrderItems = async (orderId: number, orderItems: any[]) => {
    return new Promise<void>(async (resolve, reject) => {
        connection.then(async (conn: any) => {
            const query = 'INSERT INTO orderItems (orderId, itemId, size) VALUES (?, ?, ?)';
            for (const item of orderItems) {
                const [name, size] = item.name.split(' - ');
                const itemId = await getItemId(name);
                conn.query(query, [orderId, itemId, size]);
            }
            resolve();
        }).catch((err: any) => reject(err));
    });
}
 const getItemId = async (itemName: string) => {
    return new Promise<number>((resolve, reject) => {
        connection.then(async (conn: any) => {
           const query = 'SELECT itemId FROM items WHERE itemName = ?';
           const [data] = await conn.query(query, [itemName]);
           resolve(data[0].itemId);
        }).catch((err: any) => reject(err));
    })
}

export const findOrder = async (orderId: number): Promise<OrderInfos> => {
    return new Promise<OrderInfos>(async (resolve, reject) => {
        connection.then(async (conn: any) => {
            const query = 'SELECT * FROM orders WHERE orderId = ?';
            const [data] = await conn.query(query, [orderId]);
            resolve(data[0]);
        }).catch((err: any) => reject(err));
    });
}

export const findOrderItems = async (orderId: number): Promise<OrderItem[]> => {
    return new Promise<OrderItem[]>(async (resolve, reject) => {
        connection.then(async (conn: any) => {
            const query = 'SELECT * FROM orderItems WHERE orderId = ?';
            const [data] = await conn.query(query, [orderId]);
            const menuItems: MenuItem[] = await findItems(data.map(item => item.itemId));
            resolve(mapToOrderItems(data, menuItems));
        }).catch((err: any) => reject(err));
    });
}

const findItems = async (itemIds: number[]): Promise<MenuItem[]> => {
    return new Promise<MenuItem[]>(async (resolve, _reject) => {
        const items = await getAllItems();
        const itemsInOrder = itemIds.map(itemId => items.find(item => item.itemId === itemId));
        resolve(itemsInOrder)
    });
}

const mapToOrderItems = (orderItems: any[], menuItems: MenuItem[]): OrderItem[] => {
    const orderItemsMapped: OrderItem[] = [];
    orderItems.forEach(orderItem => {
        const menuItem = menuItems.find(menuItem => menuItem.itemId === orderItem.itemId);
        const item: OrderItem = {
            name: `${menuItem?.itemName} - ${orderItem.size}`,
            price: orderItem.size === '32cm' ? menuItem?.smallPrice : menuItem?.largePrice
        }
        orderItemsMapped.push(item)
    })
    return orderItemsMapped
}

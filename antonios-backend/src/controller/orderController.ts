import {Request, Response} from "express";
import {Order} from "../types/Order";
import {findOrder, findOrderItems, saveOrder, saveOrderItems} from "../model/orderModel";

export const createOrder = (req: Request, res: Response): void => {
       const order: Order = req.body;
    saveOrder(order).then((orderId: number) => {
           saveOrderItems(orderId, order.orderItems).then(() => {
               res.status(200);
               res.send({orderId});
           });
       }).catch((err: Error) => {
           res.status(401)
           res.send(err);
     });
}

export const getOrder = (req: Request, res: Response): void => {
    findOrder(+req.params.id).then(orderInfos => {
        findOrderItems(+req.params.id).then(orderItems => {
            res.status(200);
            res.send({orderInfos, orderItems});
        }).catch(err => {
            res.status(500);
            res.send(err);
        });
    }).catch(err => {
        res.status(401);
        res.send(err);
    })
}

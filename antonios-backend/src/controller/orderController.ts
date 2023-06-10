import {Request, Response} from "express";
import {Order} from "../types/Order";
import {saveOrder} from "../model/orderModel";

export const createOrder = (req: Request, res: Response): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
       const order: Order = req.body;
       saveOrder(order).then((orderId: number) => {
           resolve(orderId);
       }).catch((err: Error) => {
           reject(err);
       });
    });
}

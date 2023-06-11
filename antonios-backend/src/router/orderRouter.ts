import {Request, Response, Router} from "express";
import {createOrder, getOrder} from "../controller/orderController";

const orderRouter = Router();

orderRouter.post('/', createOrder)
orderRouter.get('/:id', getOrder)

export { orderRouter }

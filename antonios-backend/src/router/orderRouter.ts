import {Request, Response, Router} from "express";
import {createOrder} from "../controller/orderController";

const orderRouter = Router();

orderRouter.post('/', createOrder)

export { orderRouter }

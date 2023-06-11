import {Injectable} from "@angular/core";
import {Order, OrderInfos, OrderItem} from "../types/order.types";
import {Subject} from "rxjs";
import {HttpService} from "./http.service";

@Injectable()
export class OrderService {

  private API_URL = 'http://localhost:3000';

  private orderItems: OrderItem[] = []
  private orderInfos: OrderInfos | undefined = undefined

  public orderItemsChange: Subject<OrderItem[]> = new Subject<OrderItem[]>();

  constructor(private httpService: HttpService) {
    this.orderItemsChange.subscribe(value => {
      this.orderItems = value;
    })
  }

  public addToOrder(orderItem: OrderItem): void {
    this.orderItems.push(orderItem)
    this.orderItemsChange.next(this.orderItems)
  }

  public getOrderItems(): OrderItem[] {
    return this.orderItems;
  }

  public getOrderItemsAmount(): number {
    return this.orderItems.length;
  }

  public getOrderInfos(): OrderInfos | undefined {
    return this.orderInfos;
  }

  public setOrderInfos(infos: OrderInfos) {
    this.orderInfos = infos;
  }

  public placeOrder(): Promise<string> {
    const order = this.createOrder();
    return new Promise((resolve, reject) => {
      this.httpService.post(`${this.API_URL}/order`, JSON.stringify(order))
        .then(response => {
          resolve(response.orderId)
        })
        .catch(error => {
          reject(error)
        })
    });
  }

  private createOrder(): Order {
    return {
      orderItems: this.orderItems,
      orderInfos: this.orderInfos!
    }
  }

  public fetchOrder(orderId: number): Promise<Order> {
    return new Promise<Order>((resolve, reject) => {
      this.httpService.get(`${this.API_URL}/order/${orderId}`)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

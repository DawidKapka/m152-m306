import {Injectable} from "@angular/core";
import {OrderInfos, OrderItem} from "../types/order.types";
import {Subject} from "rxjs";

@Injectable()
export class OrderService {

  private orderItems: OrderItem[] = []
  private orderInfos: OrderInfos | undefined = undefined

  public orderItemsChange: Subject<OrderItem[]> = new Subject<OrderItem[]>();

  constructor() {
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
}

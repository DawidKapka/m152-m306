import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Order, OrderItem, OrderState} from "../../types/order.types";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {
  public orderId: number = 0;
  public order: Order | undefined = undefined;
  public state: string = OrderState.UNKNOWN;
  private socket: WebSocket | undefined = undefined;

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderId = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.orderService.fetchOrder(this.orderId).then(order => {
      this.order = order;
      this.state = order.orderInfos.orderState;
    })
    this.initializeWebSocketConnection();
  }

  public getTotalPrice() {
    let price = 0;
    this.order?.orderItems.forEach(item => {
      price += item.price
    })
    return price.toFixed(2)
  }

  public summarizeItems() {
    let orderItemsSummarized: (OrderItem & {amount: number})[] = []
    this.order?.orderItems.forEach(item => {
      let existingItem = orderItemsSummarized.find(i => i.price === item.price && i.name === item.name);
      if (existingItem) {
        existingItem.amount++;
        existingItem.price = existingItem.price * existingItem.amount
      } else {
        orderItemsSummarized.push({
          name: item.name,
          price: item.price,
          amount: 1
        })
      }
    })
    return orderItemsSummarized;
  }

  public getOrderState() {
    switch (this.state) {
      case OrderState.PENDING:
        return 'Pending'
      case OrderState.IN_PROGRESS:
        return 'In Progress'
      case OrderState.ON_THE_WAY:
        return 'On the way'
      case OrderState.DELIVERED:
        return 'Delivered'
      default:
        return 'Unknown'
    }
  }

  private initializeWebSocketConnection() {
    this.socket =  new WebSocket(`ws://localhost:3000/${this.orderId}`);
    this.socket.onmessage = (event) => {
      this.setState(event.data)
    }
  }

  private setState(state: string) {
    this.state = state;
  }

  ngOnDestroy(): void {
    this.socket?.close();
  }
}

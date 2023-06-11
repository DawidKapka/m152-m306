import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Order, OrderItem} from "../../types/order.types";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public orderId: number = 0;
  public order: Order | undefined = undefined;
  public status: string = 'Pending'

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderId = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.orderService.fetchOrder(this.orderId).then(order => {
      this.order = order;
    })
  }

  getTotalPrice() {
    let price = 0;
    this.order?.orderItems.forEach(item => {
      price += item.price
    })
    return price.toFixed(2)
  }

  summarizeItems() {
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

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderService} from "../../../services/order.service";
import {OrderItem} from "../../../types/order.types";

@Component({
  selector: 'app-order-step1',
  templateUrl: './order-step1.component.html',
  styleUrls: ['./order-step1.component.scss']
})
export class OrderStep1Component implements OnInit {

  @Output('next') next = new EventEmitter<void>();

  @Input('compact') compact: boolean = false

  constructor(public orderService: OrderService) {
  }

  ngOnInit(): void {
  }

  getTotalPrice() {
    let price = 0;
    this.orderService.getOrderItems().forEach(item => {
      price += item.price
    })
    return price.toFixed(2)
  }

  summarize(orderItems: OrderItem[]) {
    let orderItemsSummarized: (OrderItem & {amount: number})[] = []
    orderItems.forEach(item => {
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

  nextStep() {
    this.next.emit();
  }
}

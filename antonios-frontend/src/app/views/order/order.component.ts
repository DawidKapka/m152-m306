import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public step: number = 1;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
  }

  public isOrderEmpty(): boolean {
    return this.orderService.getOrderItemsAmount() === 0
  }

  public nextStep() {
    this.step++;
  }

  public order() {
    this.orderService.placeOrder();
  }
}

import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-order-step3',
  templateUrl: './order-step3.component.html',
  styleUrls: ['./order-step3.component.scss']
})
export class OrderStep3Component implements OnInit {

  constructor(private orderService: OrderService) { }

  public get orderInfos() {
    return this.orderService.getOrderInfos()
  }

  ngOnInit(): void {
  }

}

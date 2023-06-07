import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../services/order.service";
import {OrderItem} from "../../types/order.types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private orderItems: OrderItem[] = []

  constructor(private orderService: OrderService, private router: Router) {
    this.orderService.orderItemsChange.subscribe(value => {
      this.orderItems = value;
    })
  }

  ngOnInit(): void {
  }

  hasItemsInOrder() {
    return this.orderItems.length > 0;
  }

  getOrderItemAmount() {
    return this.orderItems.length
  }

  navigateToOrder() {
    this.router.navigate(['order'])
  }
}

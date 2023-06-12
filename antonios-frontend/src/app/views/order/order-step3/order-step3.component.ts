import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-order-step3',
  templateUrl: './order-step3.component.html',
  styleUrls: ['./order-step3.component.scss']
})
export class OrderStep3Component implements OnInit {

  @Output('order') orderEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output('back') back = new EventEmitter<void>();

  constructor(private orderService: OrderService) { }

  public get orderInfos() {
    return this.orderService.getOrderInfos()
  }

  ngOnInit(): void {
  }

  public order() {
    this.orderEvent.emit();
  }

  public goBack() {
    this.back.emit();
  }
}

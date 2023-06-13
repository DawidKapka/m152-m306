import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../types/menu.types";
import {OrderService} from "../../services/order.service";
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem | undefined;

  public selectedSize: 'large' | 'small' = 'small';

  constructor(private orderService: OrderService, private popupService: PopupService) { }

  ngOnInit(): void {
  }

  public setSelectedSize(size: 'large' | 'small') {
    this.selectedSize = size;
  }

  public formatPrice(price: number) {
    return price.toFixed(2);
  }


  public addToOrder() {
    this.orderService.addToOrder(
      { name: this.createName(), price: this.getItemPrice()}
    )
    this.popupService.showPopup(`Added to order: ${this.createName()}`, 'info');
  }

  private createName() {
    return `${this.menuItem!.name} - ${this.selectedSize === 'large' ? '40cm' : '32cm'}`
  }

  private getItemPrice() {
    return this.selectedSize === 'large'
      ? this.menuItem!.price.large
      : this.menuItem!.price.small
  }
}

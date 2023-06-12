import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../types/menu.types";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem | undefined;

  public selectedSize: 'large' | 'small' = 'small';

  constructor(private orderService: OrderService) { }

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

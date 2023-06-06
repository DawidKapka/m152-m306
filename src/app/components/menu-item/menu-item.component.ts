import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  public pizza = {
    name: 'Test Pizza',
    image: '',
    prize: {
      small: '20.00',
      big: '32.00'
    }
  }

  public selectedSize: 'big' | 'small' = 'small';

  constructor() { }

  ngOnInit(): void {
  }

  public setSelectedSize(size: 'big' | 'small') {
    this.selectedSize = size;
  }

}

import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {MenuItem} from "../../types/menu.types";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = []
  public mostPopular: MenuItem[] = []

  constructor(private menuService: MenuService) {
    menuService.fetchMenuItems().then(menuItems => {
      this.menuItems = menuItems;
    });
    menuService.getMostPopular().then(mostPopular => {
      this.mostPopular = mostPopular;
    });
  }

  ngOnInit(): void {
  }

}

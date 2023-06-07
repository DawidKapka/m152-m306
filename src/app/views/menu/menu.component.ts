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
    this.menuItems = menuService.fetchMenuItems();
    this.mostPopular = menuService.getMostPopular();
  }

  ngOnInit(): void {
  }

}

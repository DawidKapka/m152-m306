import {Injectable} from "@angular/core";
import {MenuItem} from "../types/menu.types";

@Injectable()
export class MenuService {

  public fetchMenuItems(): MenuItem[] {
    return [
      {name: 'Pizza Margherita', image: 'test', price: { small: 20.00, large: 26.00}},
      {name: 'Pizza Prosciutto', image: 'test', price: { small: 22.00, large: 30.00}},
      {name: 'Pizza Salami', image: 'test', price: { small: 24.00, large: 32.00}}
    ]
  }

  public getMostPopular(): MenuItem[] {
    return [
      {name: 'Pizza Margherita', image: 'test', price: { small: 20.00, large: 26.00}},
      {name: 'Pizza Prosciutto', image: 'test', price: { small: 22.00, large: 30.00}},
      {name: 'Pizza Salami', image: 'test', price: { small: 24.00, large: 32.00}}
    ]
  }
}

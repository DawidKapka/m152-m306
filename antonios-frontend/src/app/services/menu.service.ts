import {Injectable} from "@angular/core";
import {MenuItem} from "../types/menu.types";
import {HttpService} from "./http.service";

@Injectable()
export class MenuService {
  private API_URL = 'http://localhost:3000';

  constructor(private httpService: HttpService) {
  }

  public async fetchMenuItems(): Promise<MenuItem[]> {
    return new Promise<MenuItem[]>((resolve, reject) => {
      this.httpService.get(`${this.API_URL}/menu`)
        .then(response => resolve(this.mapToMenuItems(response)))
        .catch(error => reject(error))
    })
  }

  private mapToMenuItems(data: any): MenuItem[] {
    const menuItems: MenuItem[] = data
      .map((item: any) => ({
        name: item.itemName,
        price: {
          small: item.smallPrice,
          large: item.largePrice
        },
        ingredients: item.ingredients.map((ingredient: any) => ingredient.ingredientName).join(', '),
      }))
    return menuItems;
  }

  public getMostPopular(): Promise<MenuItem[]> {
    return new Promise<MenuItem[]>((resolve, reject) => {
      this.httpService.get(`${this.API_URL}/menu/bestsellers`)
        .then(response => resolve(this.mapToMenuItems(response)))
        .catch(error => reject(error))
    })
  }
}

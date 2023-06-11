import {Ingredient, Item, MenuItem} from "../types/Menu";
import connection from "./connection";

export const getAllItems = async () => {
    return new Promise<MenuItem[]>(async (resolve, reject) => {
       connection.then(async (conn: any) => {
          const query = 'SELECT * FROM items';
          const [data] = await conn.query(query);
          const items: Item[] = data;
          const ingredients: Ingredient[] = await getIngredients();
          const itemIngredients: {itemId: number, ingredientId: number}[] = await getItemIngredients()
          const menuItems: MenuItem[] = combineItemsAndIngredients(items, ingredients, itemIngredients);
          resolve(menuItems);
       }).catch((err: any) => reject(err));
    });
}

const getItemIngredients = async () => {
    return new Promise<{itemId: number, ingredientId: number}[]>(async (resolve, reject) => {
        connection.then(async (conn: any) => {
            const query = 'SELECT * FROM itemIngredients';
            const [data] = await conn.query(query);
            resolve(data);
        }).catch((err: any) => reject(err));
    });
}

const getIngredients = async () => {
    return new Promise<Ingredient[]>(async (resolve, reject) => {
        connection.then(async (conn: any) => {
            const query = 'SELECT * FROM ingredients';
            const [data] = await conn.query(query);
            resolve(data);
        }).catch((err: any) => reject(err));
    });
}

const combineItemsAndIngredients = (items: Item[], ingredients: Ingredient[], itemIngredients: {itemId: number, ingredientId: number}[]): MenuItem[] => {
    return items
        .map((item: Item) => createMenuItem(item, ingredients, itemIngredients))
}

const createMenuItem = (item: Item, ingredients: Ingredient[], itemIngredients: { itemId: number; ingredientId: number }[]): MenuItem => {
    const menuItem: MenuItem = {
        itemId: item.itemId,
        itemName: item.itemName,
        smallPrice: item.smallPrice,
        largePrice: item.largePrice,
        ingredients: []
    }
    const menuItemIngredients: any = itemIngredients
        .filter(itemIngredient => itemIngredient.itemId === menuItem.itemId)
        .map(itemIngredient => ingredients.find(ingredient => ingredient.ingredientId === itemIngredient.ingredientId))
    menuItem.ingredients = menuItemIngredients;
    return menuItem;
}

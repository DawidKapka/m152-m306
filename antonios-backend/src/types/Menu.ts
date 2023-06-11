export interface Ingredient {
    ingredientId: number;
    name: string,
}

export interface Item {
    itemId: number,
    itemName: string,
    smallPrice: number,
    largePrice: number,
}

export interface MenuItem {
    itemId: number
    itemName: string,
    smallPrice: number,
    largePrice: number
    ingredients: Ingredient[]
}

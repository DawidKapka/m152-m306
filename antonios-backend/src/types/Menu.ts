export interface Ingredient {
    ingredientId: number;
    name: string,
}

export interface Item {
    itemId: number,
    itemName: string,
    smallPrice: number,
    largePrice: number,
    imageUrl: string
}

export interface MenuItem {
    itemId: number
    itemName: string,
    smallPrice: number,
    largePrice: number
    ingredients: Ingredient[],
    imageUrl: string,
}

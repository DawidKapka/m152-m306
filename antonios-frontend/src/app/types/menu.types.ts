export interface Price {
  small: number,
  large: number
}

export interface MenuItem {
  name: string,
  price: Price,
  ingredients: string[]
  image: string
}

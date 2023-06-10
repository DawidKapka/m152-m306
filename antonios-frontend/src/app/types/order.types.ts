export interface OrderItem {
  name: string,
  price: number,
}

export interface OrderInfos {
  firstname: string,
  lastname: string,
  streetNumber: string,
  zip: number,
  city: string,
  phone: string
}

export interface Order {
  orderItems: OrderItem[],
  orderInfos: OrderInfos
}

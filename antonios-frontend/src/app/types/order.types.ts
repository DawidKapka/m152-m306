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
  phone: string,
  orderState: string
}

export interface Order {
  orderItems: OrderItem[],
  orderInfos: OrderInfos
}

export enum OrderState {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  ON_THE_WAY = "ON_THE_WAY",
  DELIVERED = "DELIVERED",
  UNKNOWN = "UNKNOWN"
}


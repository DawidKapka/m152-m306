export interface OrderItem {
    name: string,
    price: number
}

export interface OrderInfos {
    firstname: string,
    lastname: string,
    streetNumber: string,
    city: string,
    zip: number,
    phone: string
}

export interface Order {
    orderItems: OrderItem[]
    orderInfos: OrderInfos
}

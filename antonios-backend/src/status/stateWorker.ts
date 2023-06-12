import {OrderStatus} from "../types/OrderStatus";
import {getAllItems} from "../model/menuModel";

export const startStatusWorker = () => {
    setInterval(() => {
        updateOrderStatus();
    }, 6000);
}

export const updateOrderStatus = () => {
    const orders;
}

const mapNextStatus = (currentStatus: OrderStatus): OrderStatus => {
    switch (currentStatus) {
        case OrderStatus.PENDING:
            return OrderStatus.IN_PROGRESS;
        case OrderStatus.IN_PROGRESS:
            return OrderStatus.ON_THE_WAY;
        case OrderStatus.ON_THE_WAY:
            return OrderStatus.DELIVERED;
        case OrderStatus.DELIVERED:
            return OrderStatus.DELIVERED;
    }
}

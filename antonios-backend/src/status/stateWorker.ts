import {OrderState} from "../types/OrderState";
import {getAllOrderStates, saveOrderState} from "../model/orderModel";
import {connections} from "../wbesocket/websocket";

export const startStateWorker = () => {
    setInterval(() => {
        updateOrderState();
    }, 60000);
}

export const updateOrderState = () => {
    getAllOrderStates().then((orderStates: { orderId: number, orderState: string }[]) => {
        orderStates.forEach((orderState: { orderId: number, orderState: string}) => {
            const oldState = OrderState[orderState.orderState];
            if (oldState != OrderState.DELIVERED) {
                const newState = mapNextState(oldState);
                saveOrderState(orderState.orderId, newState)
                const connection = connections.find(c => c.orderId === orderState.orderId);
                if (connection) {
                    connection.connection.send(newState)
                }
            }
        });
    });
}

const mapNextState = (currentState: OrderState): OrderState => {
    switch (currentState) {
        case OrderState.PENDING:
            return OrderState.IN_PROGRESS;
        case OrderState.IN_PROGRESS:
            return OrderState.ON_THE_WAY;
        case OrderState.ON_THE_WAY:
            return OrderState.DELIVERED;
        case OrderState.DELIVERED:
            return OrderState.DELIVERED;
    }
}

const ws = require('ws')

export let connections: {orderId: number, connection: WebSocket}[] = []

export const initializeWebSocketServer = (app: any) => {
    const wsServer = new ws.Server({ noServer: true})

    wsServer.on('connection', handleConnection);

    app.on('upgrade', (request, socket, head) => {
        wsServer.handleUpgrade(request, socket, head, socket => {
            wsServer.emit('connection', socket, request);
        });
    });
};

const handleConnection = (socket: WebSocket, request: any) => {
    const orderId = request.url.replace('/', '')
    socket.onclose = () => deleteConnection(orderId);
    connections.push({orderId: +orderId, connection: socket})
}

const deleteConnection = (orderId: string) => {
    connections = connections.filter(c => c.orderId !== +orderId)
}

import { Socket } from "socket.io"

export const AppointmentSocket = (socket: Socket) => {

    //implements all funtions from service apirest
    socket.on('message', (message: any) => {
        //const packet = JSON.parse(message);
        console.log(message)
        //socket.broadcast.emit('messageBroadcast from server using sockets', message)
        socket.emit('message', 'messageBroadcast from server using sockets')
    })
}

export default AppointmentSocket
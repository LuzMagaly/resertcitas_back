import { Express } from 'express'
import { Socket } from "socket.io"

import Auth from './services/auth'

export const Server = (app: Express, socket: Socket) => {

    Auth(app)

    socket.on('message', (message: any) => {
        console.log(message)
        socket.broadcast.emit('messageBroadcast', message)
    })

}

export default Server
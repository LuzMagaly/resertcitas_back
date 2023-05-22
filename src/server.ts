import { Express } from 'express'
import { Socket } from "socket.io"
import { Appointment, Auth, Doctor, Office, Patient, Payment, Schedule, Specialty, Timetable, User } from './services'

export const Server = (app: Express, socket: Socket) => {
    Auth(app)
    Appointment(app)
    Doctor(app)
    Office(app)
    Patient(app)
    Payment(app)
    Schedule(app)
    Specialty(app)
    Timetable(app)
    User(app)

    socket.on('message', (message: any) => {
        console.log(message)
        socket.broadcast.emit('messageBroadcast', message)
    })
}

export default Server
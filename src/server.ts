import { Express } from 'express'
import { Socket } from "socket.io"
import { Appointment, Auth, Doctor, Office, Patient, Schedule, Specialty, Timetable, User } from './services'
import { AppointmentSocket } from './sockets'

export const Server = (app: Express, socket: Socket) => {
    Auth(app)
    Appointment(app)
    Doctor(app)
    Office(app)
    Patient(app)
    Schedule(app)
    Specialty(app)
    Timetable(app)
    User(app)

    AppointmentSocket(socket)
}

export default Server
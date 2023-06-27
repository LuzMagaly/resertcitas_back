import express, { Request, Response } from "express" 
import http from "http" 
import socketio from "socket.io" 
import cors from 'cors'
import morgan from 'morgan'
import Server from "./server"
//crea,ejecuta ex,puert ,resijson/noReinderi(proInRes)
const app = express()

app.set('PORT', process.env.PORT || 4500)
app.use(express.json())//
app.use(cors({ origin: 'http://localhost:3000' }));
//app.use(morgan('dev'))

app.get("/", (req: Request, res: Response) => {
  res.send({ uptime: process.uptime() })
});

//cra ht,pasando ex
const httpServer = http.createServer(app)
const io = new socketio.Server(httpServer, { cors: { origin: 'http://localhost:3000' } })

io.on("connection", (socket: socketio.Socket) => {
  console.log('Client connected: ' + socket.id)
  Server(app, socket)
})

//fuc
httpServer.listen(app.get('PORT'), () => {
  console.log("Running at http://localhost:" + app.get('PORT'))
})
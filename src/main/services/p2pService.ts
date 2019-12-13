import express from 'express'
import socketIO from 'socket.io'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

const server = app.listen(3000)
const io = socketIO(server, { serveClient: false })

io.on('connection', (socket) => {
  console.log('new user connected')
  socket.on('message', (message: string) => {
    io.emit('message', {
      message, host: socket.handshake.address
    })
    
  })
})
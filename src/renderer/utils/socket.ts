import { Dispatch } from 'redux'
import io, { connect } from 'socket.io-client'
import { receiveMessage } from '../actions/connection/connectionActions'

const TIMEOUT = 5000

type ReceivedMessage = {
  host: string
  content: string
}

export const initSocket = (dispatch: Dispatch) => {
  connect(`http://127.0.0.1:3000`)
    .on('message', (msg: ReceivedMessage) => receiveMessage(dispatch, msg.host, msg.content))
}

export const isHostUp = (ip: string) => new Promise((resolve, reject) => {
  const socket = io.connect(`http://${ip}:3000`)
  setTimeout(() => {
    resolve(socket.connected)
    socket.close()
  }, TIMEOUT)
})
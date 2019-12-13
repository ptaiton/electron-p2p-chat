import { Dispatch } from 'redux'
import { connect } from 'socket.io-client'
import { receiveMessage } from '../actions/connection/connectionActions'

type ReceivedMessage = {
  host: string
  content: string
}

export const initSocket = (dispatch: Dispatch) => {
  connect(`http://127.0.0.1:3000`)
    .on('message', (msg: ReceivedMessage) => receiveMessage(dispatch, msg.host, msg.content))
}
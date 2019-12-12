import { SET_SOCKET } from '../actions/socket/socketActions'
import { SocketActionTypes } from '../actions/socket/SocketActionTypes'
import { Socket } from '../types/Socket'
import { connect } from 'socket.io-client'

const initialState: Socket = connect({ reconnection: false, autoConnect: false, timeout: 0 })

export default (state = initialState, action: SocketActionTypes) => {
  switch (action.type) {
    case SET_SOCKET:
      return action.socket
    default:
      return state
  }
}
import { Action } from 'redux'
import { UPDATE_SOCKET, SET_SOCKET } from './socketActions'
import { Socket } from '../../types/Socket'

export type UpdateSocketAction = Action<typeof UPDATE_SOCKET> & {
  host: string
}
export type SetSocketAction = Action<typeof SET_SOCKET> & {
  socket: Socket
}

export type SocketActionTypes = 
  UpdateSocketAction 
  | SetSocketAction

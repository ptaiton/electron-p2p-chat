import { Dispatch } from 'redux'
import { SocketActionTypes } from './SocketActionTypes'

export const UPDATE_SOCKET = 'UPDATE_SOCKET'
export const SET_SOCKET = 'SET_SOCKET'

export const updateSocket = (host: string) => (dispatch: Dispatch<SocketActionTypes>) => {
  dispatch({ type: UPDATE_SOCKET, host })
}
import {  RESPONSE_CONNECTIONS, ADD_CONNECTION } from '../actions/connection/connectionActions'
import { ConnectionActionTypes } from '../actions/connection/connectionActionTypes'
import { Connection } from '../types/Connection'

const initialState: Connection[] = []

export default (state = initialState, action: ConnectionActionTypes) => {
  switch (action.type) {
    case RESPONSE_CONNECTIONS:
      return action.connections
    case ADD_CONNECTION:
      return [...state, action.connection]
    default:
      return state
  }
}
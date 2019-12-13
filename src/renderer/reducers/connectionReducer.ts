import {  RESPONSE_CONNECTIONS, ADD_CONNECTION, ADD_MESSAGE } from '../actions/connection/connectionActions'
import { ConnectionActionTypes } from '../actions/connection/connectionActionTypes'
import { Connection } from '../types/Connection'

type ConnectionState = {[key: string]: Connection}

const initialState: ConnectionState = {} 

export default (state = initialState, action: ConnectionActionTypes) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      console.log(action)
      const connection = {...state[action.host]}
      connection.messages = [...connection.messages, action.message]
      return {
        ...state,
        [action.host]: connection
      }
    }
    case ADD_CONNECTION:
      return {...state, [action.connection.host]: action.connection }
    default:
      return state
  }
}
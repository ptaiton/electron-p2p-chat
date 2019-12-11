import { 
  REQUEST_CONNECTIONS, 
  RESPONSE_CONNECTIONS, 
  REQUEST_MESSAGES, 
  RESPONSE_MESSAGES
} from '../actions/connection/connectionActions'
import { ConnectionActionTypes } from '../actions/connection/connectionActionTypes'
import { Connection } from '../types/Connection'

const initialState: Connection[] = []

export default (state = initialState, action: ConnectionActionTypes) => {
  switch (action.type) {
    case RESPONSE_CONNECTIONS:
      return action.connections
    default:
      return state
  }
}
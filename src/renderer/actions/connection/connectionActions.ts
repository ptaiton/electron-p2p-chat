import { Dispatch } from 'redux'
import { 
  RequestConnectionsAction, 
  ResponseConnectionsAction,
  RequestMessagesAction,
  ResponseMessagesAction
} from './connectionActionTypes'
import { Connection } from '../../types/Connection'
import { Message } from '../../types/Message'

export const REQUEST_CONNECTIONS = 'REQUEST_CONNECTIONS'
export const RESPONSE_CONNECTIONS = 'RESPONSE_CONNECTIONS'
export const ADD_CONNECTION = 'ADD_CONNECTION'
export const REQUEST_MESSAGES = 'REQUEST_MESSAGES'
export const RESPONSE_MESSAGES = 'RESPONSE_MESSAGES'

export const fetchConnections = () => (dispatch: Dispatch<RequestConnectionsAction>) => {
  dispatch({
    type: REQUEST_CONNECTIONS,
  })
}

export const updateConnections = () => (dispatch: Dispatch<ResponseConnectionsAction>, connections: Connection[]) => {
  dispatch({
    type: RESPONSE_CONNECTIONS,
    connections,
  })
}

export const fetchMessages = () => (dispatch: Dispatch<RequestMessagesAction>) => {
  dispatch({
    type: REQUEST_MESSAGES,
  })
}

export const updateMessages = () => (dispatch: Dispatch<ResponseMessagesAction>, messages: Message[]) => {
  dispatch({
    type: RESPONSE_MESSAGES,
    messages,
  })
}

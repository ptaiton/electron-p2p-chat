import { Dispatch } from 'redux'
import { 
  RequestConnectionsAction, 
  ResponseConnectionsAction,
  RequestMessagesAction,
  ResponseMessagesAction,
  SendMessageAction
} from './connectionActionTypes'
import { Connection } from '../../types/Connection'
import { Message } from '../../types/Message'

export const REQUEST_CONNECTIONS = 'REQUEST_CONNECTIONS'
export const RESPONSE_CONNECTIONS = 'RESPONSE_CONNECTIONS'
export const ADD_CONNECTION = 'ADD_CONNECTION'
export const REQUEST_MESSAGES = 'REQUEST_MESSAGES'
export const RESPONSE_MESSAGES = 'RESPONSE_MESSAGES'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const ADD_MESSAGE = 'ADD_MESSAGE'

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

export const sendMessage = () => (dispatch: Dispatch<SendMessageAction>, content: string) => {
  dispatch({ type: SEND_MESSAGE, content })
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

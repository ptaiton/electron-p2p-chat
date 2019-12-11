import { Action } from 'redux'
import { 
  REQUEST_CONNECTIONS, 
  RESPONSE_CONNECTIONS, 
  ADD_CONNECTION,
  REQUEST_MESSAGES, 
  RESPONSE_MESSAGES,
} from './connectionActions'
import { Connection } from '../../types/Connection'
import { Message } from '../../types/Message'

export type RequestConnectionsAction = Action<typeof REQUEST_CONNECTIONS>
export type AddConnectionAction = Action<typeof ADD_CONNECTION>
export type ResponseConnectionsAction = Action<typeof RESPONSE_CONNECTIONS> & {
  connections: Connection[]
}

export type RequestMessagesAction = Action<typeof REQUEST_MESSAGES>
export type ResponseMessagesAction = Action<typeof RESPONSE_MESSAGES> & {
  messages: Message[]
}


export type ConnectionActionTypes = 
  RequestConnectionsAction 
  | ResponseConnectionsAction
  | RequestMessagesAction
  | ResponseMessagesAction

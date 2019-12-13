import { Action } from 'redux'
import { 
  REQUEST_CONNECTIONS, 
  RESPONSE_CONNECTIONS, 
  ADD_CONNECTION,
  REQUEST_MESSAGES, 
  RESPONSE_MESSAGES,
  ADD_MESSAGE,
  SEND_MESSAGE,
  RECEIVE_MESSAGE
} from './connectionActions'
import { Connection } from '../../types/Connection'
import { Message } from '../../types/Message'

export type RequestConnectionsAction = Action<typeof REQUEST_CONNECTIONS>
export type AddConnectionAction = Action<typeof ADD_CONNECTION> & {
  connection: Connection
}
export type ResponseConnectionsAction = Action<typeof RESPONSE_CONNECTIONS> & {
  connections: Connection[]
}

export type RequestMessagesAction = Action<typeof REQUEST_MESSAGES>
export type SendMessageAction = Action<typeof SEND_MESSAGE> & {
  content: string
}
export type AddMessageAction = Action<typeof ADD_MESSAGE> & {
  host: string,
  message: Message
}
export type ResponseMessagesAction = Action<typeof RESPONSE_MESSAGES> & {
  messages: Message[]
}
export type ReceiveMessageAction = Action<typeof RECEIVE_MESSAGE> & {
  content: string
}

export type ConnectionActionTypes = 
  RequestConnectionsAction 
  | ResponseConnectionsAction
  | AddConnectionAction
  | RequestMessagesAction
  | SendMessageAction
  | AddMessageAction
  | ResponseMessagesAction
  | ReceiveMessageAction

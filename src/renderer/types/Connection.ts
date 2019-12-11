import { Message } from './Message'

export interface Connection {
  host: string
  name: string
  lastViewed: string
  messages: Message[]
}
import { User } from './User'

export interface Message {
  author: User
  content: string
  creationDate: string
}
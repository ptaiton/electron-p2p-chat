import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Compose from '../Compose/Compose'
import BaseMessage from '../Message/Message'
import {Message} from '../../types/Message'
import { ADD_MESSAGE } from '../../actions/connection/connectionActions'
import './MessageList.css'
import { User } from '../../types/User'

export default ({ sendMessage, messages, author }: Props) => {
  const [ content, setContent ] = useState('')
  const [ user, setUser ] = useState('apple')

  const addNewMessage = (messageContent: string) => {
    sendMessage(messageContent)
  }
  
  return(
    <div className="message-list">
      <div className="message-list-container">
        {messages.map((message:Message) => (
          <BaseMessage
            key={message.creationDate}
            message={message}
            isMine={message.author.id === author.id}
          />
        ))}
      </div>        
      <Compose addNewMessage={addNewMessage}/>
    </div>
  )
}

interface Props {
  author: User
  sendMessage: Function
  messages: Message[]
}
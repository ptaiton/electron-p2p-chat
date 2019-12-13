import React, { useRef } from 'react'
import Compose from '../Compose/Compose'
import BaseMessage from '../Message/Message'
import {Message} from '../../types/Message'
import { User } from '../../types/User'
import './MessageList.css'

export default ({ sendMessage, messages, author }: Props) => {
  const dummyRef = useRef<HTMLDivElement>(null)

  const addNewMessage = (messageContent: string) => {
    sendMessage(messageContent)
  }
  
  setTimeout(() => {
    if(dummyRef.current !== null) {
      dummyRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, 10)
  
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
        <div ref={dummyRef} />
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
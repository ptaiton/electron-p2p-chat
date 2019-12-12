import React, {useEffect, useState,useRef} from 'react';
import Compose from '../Compose/Compose';
import BaseMessage from '../Message/Message';
import './MessageList.css';
import { number } from 'prop-types';
import {Message} from '../../types/Message'

export default ({ sendMessage, messages }: Props) => {
  const [ content, setContent ] = useState('')
  const [ user, setUser ] = useState('apple')

  const addNewMessage = (messageContent: string) =>{
    const msgToAdd: Message= {
      author:{
        ip:'toto',
        name:'apple'
      },
      content: messageContent,
      creationDate: new Date().getTime().toString()
    }
    sendMessage(content)
  }

    return(
      <div className="message-list">
        <div className="message-list-container">
          {messages.map((message:Message) => (
            <BaseMessage
              key={message.creationDate}
              message={message}
              isMine={message.author.name === user}
            />
          ))}
        </div>        
        <Compose addNewMessage={addNewMessage}/>
      </div>
    );
}

interface Props {
  sendMessage: Function
  messages: Message[]
}
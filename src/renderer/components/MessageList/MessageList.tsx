import React, {useEffect, useState,useRef} from 'react';
import Compose from '../Compose/Compose';
import BaseMessage from '../Message/Message';
import './MessageList.css';
import { number } from 'prop-types';
import {Message} from '../../types/Message'

export default function MessageList(props: any) {
  const [messages, setMessages] = useState<Message[]>([])
  const [user,setUser] = useState('apple')
  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  
  const addNewMessage = (messageContent: string) =>{
    let message: Message={
      author:{
        ip:'toto',
        name:'apple'
      },
      content: messageContent,
      creationDate: new Date().getTime().toString()
    }
    setMessages(messages => [...messages,message])
  }

  useEffect(() => {
    //addNewMessage('toto')
    scrollToBottom
  },[])


  const renderMessages = () => {
    console.log(messages)
    return messages.map((message:Message) =>(
      <BaseMessage
        ref={messagesEndRef}
        key={message.creationDate}
        isMine={message.author.name === user}
        startsSequence={false}
        endsSequence={false}
        showTimestamp={false}
        data={message}
      />
    ))
    }
    

    return(
      <div className="message-list">
        <div className="message-list-container">{renderMessages()}</div>        
        <Compose addNewMessage={addNewMessage}/>
      </div>
    );
}
import React from 'react'
import { Message } from '../../types/Message'
import './Message.css'

export default ({ message, isMine }: Props) => (
  <div className={[ 'message', `${isMine ? 'mine' : ''}`].join(' ')}>
    <div className="bubble-container">
      <div className="bubble">
        {message.content}
      </div>
    </div>
  </div>
)

interface Props {
  message: Message
  isMine: boolean
}
import React, { useState, useEffect } from 'react'
import MessageList from '../../components/MessageList/MessageList'
import { deserializeConnection } from '../../utils/connectionSerializer'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { getMessages } from '../../selectors/messageSelectors'
import io, { Socket } from 'socket.io-client'


export default () => {
  const [socket, setSocket] = useState<typeof Socket>()

  const messages = useSelector(getMessages)
  const history = useHistory()

  useEffect(() => {
    const host = deserializeConnection(history.location.pathname.split('/').slice(-1)[0])
    const sock = io.connect(`http://${host}:3000`)
    handleSocketChange(sock)
  }, [])

  const handleSocketChange = (newSocket: typeof Socket) => {
    if(socket) {
      socket.close()
    }
    setSocket(newSocket)
  }

  const handleSendMessage = (message: string) => {
    if(socket) {
      socket.emit('message', message)
    }
  }

  return (
    <div className="scrollable content, autoscroll">
      <MessageList sendMessage={handleSendMessage} messages={messages} />
    </div>
  )
}
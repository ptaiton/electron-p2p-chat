import React, { useEffect } from 'react'
import { useSelector, useDispatch, useStore, connect } from 'react-redux'
import { useHistory } from 'react-router'
import MessageList from '../../components/MessageList/MessageList'
import { getMessages } from '../../selectors/messageSelectors'
import { deserializeConnection } from '../../utils/connectionSerializer'
import { sendMessage, SEND_MESSAGE } from '../../actions/connection/connectionActions'
import { State } from '../../store/createStore'
import { getHost } from '../../selectors/routeSelector'
import { getUser } from '../../selectors/userSelector'


export default () => {
  const messages = useSelector(getMessages)
  const user = useSelector(getUser)
  const dispatch = useDispatch()

  const handleSendMessage = (message: string) => {
    dispatch({type: SEND_MESSAGE, content: message })
  }

  return (
    <div className="scrollable content, autoscroll">
      <MessageList sendMessage={handleSendMessage} messages={messages} author={user} />
    </div>
  )
}
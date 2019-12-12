import React, { useState } from 'react'
import MessageList from '../../components/MessageList/MessageList'

export default () => {

  return (
    <div className="scrollable content, autoscroll">
      <MessageList />
    </div>
  )
}
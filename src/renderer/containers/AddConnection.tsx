import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Input from '@material-ui/core/Input'
import { InputChangeEventHandler } from '../types/events'
import { ADD_CONNECTION } from '../actions/connection/connectionActions'
import { Button } from '@material-ui/core'

export default () => {
  const [ host, setHost ] = useState('')
  const [ name, setName ] = useState('')
  const dispatch = useDispatch()

  const handleIpInputChange: InputChangeEventHandler = (event) => {
    setHost(event.target.value)
  }

  const handleNameInputChange: InputChangeEventHandler = (event) => {
    setName(event.target.value)
  }

  const handleAddConnectionClick = () => {
    dispatch({type: ADD_CONNECTION, connection: { host, name, messages: [] }})
  }

  return (
    <div>
      <Input
        onChange={handleIpInputChange}
        value={host}
        placeholder="Enter IP of the host" />
      <Input
        onChange={handleNameInputChange}
        value={name}
        placeholder="Enter name of the connection" />
      <Button onClick={handleAddConnectionClick}>Add connection</Button>
    </div>
  )
}
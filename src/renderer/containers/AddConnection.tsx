import React, { useState } from 'react'
import Input from '@material-ui/core/Input'
import { InputChangeEventHandler } from '../types/events'

export default () => {
  const [ ip, setIp ] = useState('')

  const handleIpInputChange: InputChangeEventHandler = (event) => {
    setIp(event.target.value)
  }

  return (
    <div>
      <Input
        onChange={handleIpInputChange}
        value={ip}
        placeholder="Enter IP of the host" />
    </div>
  )
}
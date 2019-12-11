import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import './index.css'

const mainElement = document.createElement('div')
document.body.appendChild(mainElement)

render(<AppContainer><App /></AppContainer>, mainElement)
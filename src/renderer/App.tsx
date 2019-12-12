import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from '@material-ui/core/styles'
import { hot } from 'react-hot-loader/root'
import io from 'socket.io-client'
import Container from './containers/Container'
import Home from './containers/Home'
import AddConnection from './containers/AddConnection'
import Message from './containers/Message/Message'
import store, { history } from './store/createStore'
import theme from './utils/createMuiTheme'
import { ROUTES } from './types/route'

export default hot(() => {
  const [message, setMessage] = useState('')

  const emit = (evt: any) => {
    const socket = io.connect('http://localhost:3000')
    socket.emit('message', message)
    setMessage('')
  }

  const onMessageChange = (evt: any) => {
    setMessage(evt.target.value)
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Container>
              <Switch>
                <Route exact path={ROUTES.HOME.path} component={Home} />
                <Route exact path={ROUTES.ADD_CONNECTION.path} component={AddConnection} />
                <Route exact path={ROUTES.MESSAGES.path} component={Message}/>
              </Switch>
          </Container>
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  )
})
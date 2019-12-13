import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from '@material-ui/core/styles'
import { hot } from 'react-hot-loader/root'
import Container from './containers/Container/Container'
import AddConnection from './containers/AddConnection/AddConnection'
import Message from './containers/Messenger/Messenger'
import store, { history } from './store/createStore'
import theme from './utils/createMuiTheme'
import { ROUTES } from './types/route'

export default hot(() => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Container>
          <Switch>
            <Route exact path={ROUTES.ADD_CONNECTION.path} component={AddConnection} />
            <Route path={ROUTES.MESSAGES.path} component={Message}/>
            <Redirect exact from="/" to={ROUTES.ADD_CONNECTION.path} />
          </Switch>
        </Container>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
))

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import socketReducer from './socketReducer'
import connectionReducer from './connectionReducer'
import userReducer from './userReducer'

export default (history: History) => combineReducers({
  router: connectRouter(history),
  socket: socketReducer,
  connections: connectionReducer,
  user: userReducer,
})
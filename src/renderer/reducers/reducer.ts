import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import connectionReducer from './connectionReducer'
 
export default (history: History) => combineReducers({
  router: connectRouter(history),
  connections: connectionReducer
})
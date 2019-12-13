import { createHashHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import createRootReducer from '../reducers/reducer'
import { saveState } from '../utils/localstorage'
import saga from '../sagas/saga'
import throttle from '../utils/throttle'

export const history = createHashHistory()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
    ),
  ),
)

store.subscribe(throttle(() => {
  saveState({
    user: store.getState().user,
    connections: store.getState().connections
  })
}, 1000))


sagaMiddleware.run(saga)

export type State = ReturnType<typeof store.getState>
export default store


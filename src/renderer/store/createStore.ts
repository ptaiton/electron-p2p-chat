import { createHashHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import createRootReducer from '../reducers/reducer'
import saga from '../sagas/saga'

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


sagaMiddleware.run(saga)

export type State = ReturnType<typeof store.getState>
export default store


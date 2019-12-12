import { fork, all } from 'redux-saga/effects'
import routeSaga from './routeSaga'
import socketSaga from './socketSaga'
import connectionSaga from './connectionSaga'

export default function* rootSaga() {
  yield all([
    fork(routeSaga),
    fork(socketSaga),
    fork(connectionSaga),
  ])
}
import { put, takeLatest, select } from 'redux-saga/effects'
import { LocationChangeAction } from 'connected-react-router'
import { connect } from 'socket.io-client'
import { SocketActionTypes } from '../actions/socket/SocketActionTypes'
import { UPDATE_SOCKET, SET_SOCKET } from '../actions/socket/socketActions'
import { getSocket } from '../selectors/socketSelector'
import { getHost } from '../selectors/routeSelector'

function* updateSocket() {
  try {
    const host = yield select(getHost)
    const socket = yield select(getSocket)
    socket.close()

    const newSocket = connect(`http://${host}:3000`)
    yield put({ type: SET_SOCKET, socket: newSocket })
  } catch (e) {
    console.log(e)
  }
}

function* socketSaga() {
  yield takeLatest(UPDATE_SOCKET, updateSocket)
}

export default socketSaga
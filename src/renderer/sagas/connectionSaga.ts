import { put, takeLatest, select } from 'redux-saga/effects'
import { SEND_MESSAGE, ADD_MESSAGE } from '../actions/connection/connectionActions'
import { SendMessageAction} from '../actions/connection/connectionActionTypes'
import { Message } from '../types/Message'
import { getUser } from '../selectors/userSelector'
import { getSocket } from '../selectors/socketSelector'
import { Socket } from '../types/Socket'
import { getHost } from '../selectors/routeSelector'

function* sendMessage(action: SendMessageAction) {
  try {
    const socket: Socket = yield select(getSocket)
    const host = yield select(getHost)
    const author = yield select(getUser)
    const message: Message = {
      author,
      content: action.content,
      creationDate: new Date().toISOString()
    }
    
    socket.emit('message', message.content)
    yield put({ type: ADD_MESSAGE, host, message })
  } catch (e) {
    console.log(e)
  }
}

function* connectionSaga() {
  yield takeLatest(SEND_MESSAGE, sendMessage)
}

export default connectionSaga
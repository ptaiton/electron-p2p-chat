import { put, takeLatest, select } from 'redux-saga/effects'
import { SEND_MESSAGE, ADD_MESSAGE, RECEIVE_MESSAGE, ADD_CONNECTION } from '../actions/connection/connectionActions'
import { SendMessageAction,ReceiveMessageAction} from '../actions/connection/connectionActionTypes'
import { Message } from '../types/Message'
import { getUser } from '../selectors/userSelector'
import { getSocket } from '../selectors/socketSelector'
import { Socket } from '../types/Socket'
import { getHost } from '../selectors/routeSelector'
import { getConnections } from '../selectors/connectionSelectors'
import { Connection } from '../types/Connection'

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

function* receiveMessage(action: ReceiveMessageAction) {
  try {
    console.log('saga', action)
    const host = yield select(getHost)
    const connections: Connection[] = yield select(getConnections)
    const isConnectionPresent = connections
      .find(connection => connection.host === action.host)
    const now = new Date().toISOString()

    const message: Message = {
      author: { id: action.host },
      content: action.content,
      creationDate: now
    }

    if(!isConnectionPresent) {
      yield put({ type: ADD_CONNECTION, connection: {
        host: action.host,
        name: action.host,
        messages: [message],
        lastViewed: now
      }})
    } else {
      yield put({ type: ADD_MESSAGE, host, message })
    }
  } catch (e) {
    console.log(e)
  }
}


function* connectionSaga() {
  yield takeLatest(SEND_MESSAGE, sendMessage)
  yield takeLatest(RECEIVE_MESSAGE, receiveMessage)
}

export default connectionSaga
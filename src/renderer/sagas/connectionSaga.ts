import { put, takeLatest } from 'redux-saga/effects'
import { LocationChangeAction, LOCATION_CHANGE } from 'connected-react-router'
import { REQUEST_MESSAGES, REQUEST_CONNECTIONS, ADD_CONNECTION } from '../actions/connection/connectionActions'
import { ROUTES } from '../types/route'

function* addConnection(action: LocationChangeAction) {
  try {
    switch (action.payload.location.pathname) {
      case ROUTES.HOME.path: {
        yield put({type: REQUEST_CONNECTIONS })
      }
      case ROUTES.MESSAGES.path: {
        yield put({type: REQUEST_MESSAGES })
      }
    }
  } catch (e) {
    console.log(e)
  }
}

function* connectionSaga(action: LocationChangeAction) {
  yield takeLatest(ADD_CONNECTION, addConnection)
}

export default connectionSaga
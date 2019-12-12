import { put, takeLatest } from 'redux-saga/effects'
import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router'
import { REQUEST_CONNECTIONS } from '../actions/connection/connectionActions'
import { ROUTES } from '../types/route'
import { UPDATE_SOCKET } from '../actions/socket/socketActions'

function* locationChange(action: LocationChangeAction) {
  try {
    if(action.payload.isFirstRendering) {
      yield put({type: REQUEST_CONNECTIONS})
    } else {
      switch (`/${action.payload.location.pathname.split('/')[1]}`) {
        case ROUTES.MESSAGES.path: {
          yield put({type: UPDATE_SOCKET })
        }
      }
    }
  } catch (e) {
    console.log(e)
  }
}

function* routeSaga() {
  yield takeLatest(LOCATION_CHANGE, locationChange)
}

export default routeSaga
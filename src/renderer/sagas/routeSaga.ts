import { put, takeLatest } from 'redux-saga/effects'
import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router'
import { REQUEST_MESSAGES, REQUEST_CONNECTIONS } from '../actions/connection/connectionActions'
import { ROUTES } from '../types/route'

function* locationChange(action: LocationChangeAction) {
  try {
    if(action.payload.isFirstRendering) {
      yield put({type: REQUEST_CONNECTIONS})
    } else {
      switch (action.payload.location.pathname) {
        case ROUTES.MESSAGES.path: {
          yield put({type: REQUEST_MESSAGES })
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
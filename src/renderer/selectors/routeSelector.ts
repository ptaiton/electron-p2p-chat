import { createSelector } from 'reselect'
import { State } from '../store/createStore'
import { deserializeConnection } from '../utils/connectionSerializer'

export const getHost = createSelector(
  (state: State) => deserializeConnection(state.router.location.pathname.split('/').slice(-1)[0]),
  host => host,
)

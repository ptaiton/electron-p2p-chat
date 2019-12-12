import { createSelector } from 'reselect'
import { State } from '../store/createStore'

export const getSocket = createSelector(
  (state: State) => state.socket,
  (socket) => socket
)
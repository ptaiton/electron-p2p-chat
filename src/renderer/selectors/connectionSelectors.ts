import { createSelector } from 'reselect'
import { State } from '../store/createStore'

export const getConnections = createSelector(
  (state: State) => state.connections,
  connectons => connectons 
)
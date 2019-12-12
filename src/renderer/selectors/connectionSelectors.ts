import { createSelector } from 'reselect'
import { State } from '../store/createStore'
import {deserializeConnection } from '../utils/connectionSerializer'

export const getConnections = createSelector(
  (state: State) => state.connections,
  connectons => Object.values(connectons)
)

export const getConnection = createSelector(
  (state: State) => state.connections,
  (state: State) => deserializeConnection(state.router.location.pathname.split('/').slice(-1)[0]),
  (connectons, host) => connectons[host]
)

export const getMessages = createSelector(
  getConnection,
  (connecton) => connecton.messages
)
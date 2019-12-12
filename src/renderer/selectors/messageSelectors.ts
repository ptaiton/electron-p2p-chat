import { createSelector } from 'reselect'
import { getConnection } from './connectionSelectors'

export const getMessages = createSelector(
  getConnection,
  (connection) => connection && connection.messages || []
)
import { createSelector } from 'reselect'
import { State } from '../store/createStore'

export const getUser = createSelector(
  (state: State) => state.user,
  (user) => user
)
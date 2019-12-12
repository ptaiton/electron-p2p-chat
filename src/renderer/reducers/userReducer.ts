import { User } from '../types/User'
import { v4 as generateUuid } from 'uuid'

const initialState: User = {
  id: generateUuid()
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}
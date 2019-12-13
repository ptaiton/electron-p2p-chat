import { User } from '../types/User'

const initialState: User = {
  id: '127.0.0.1'
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}